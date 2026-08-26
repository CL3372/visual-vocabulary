// Supabase Edge Function: revenuecat-webhook
//
// Receives server-to-server webhook events from RevenueCat and keeps
// public.user_sync.is_pro in sync, so a Pro purchase made on the iOS app
// (via StoreKit/RevenueCat) shows up for that same account on the web app
// too, without the web client having to trust anything on its own.
//
// This only works for a purchase made AFTER the user is signed in and
// src/hooks/useIAP.ts has called Purchases.logIn(supabaseUserId) — until
// then RevenueCat's app_user_id is its own anonymous id, not a Supabase
// uuid, and we can't safely map the event to a row, so we skip it.
//
// SETUP (manual, can't be done from this session):
//   1. Deploy this function (already done if you're reading this from the
//      LexPix project's file bundle — otherwise: `supabase functions deploy
//      revenuecat-webhook`).
//   2. Set a secret: `supabase secrets set REVENUECAT_WEBHOOK_SECRET=<a long random string>`
//   3. In the RevenueCat dashboard: Project Settings > Integrations > Webhooks
//      - URL: https://<project-ref>.supabase.co/functions/v1/revenuecat-webhook
//      - Authorization header value: the same string from step 2
//
// This function does its OWN auth via that shared secret (RevenueCat can't
// send a Supabase user JWT), so it must be deployed with --no-verify-jwt.

import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
const SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
const WEBHOOK_SECRET = Deno.env.get("REVENUECAT_WEBHOOK_SECRET");

const ENTITLEMENT_ID = "pro";

// Event types that mean the user's entitlement should be ON.
const GRANT_EVENTS = new Set([
  "INITIAL_PURCHASE",
  "RENEWAL",
  "UNCANCELLATION",
  "NON_RENEWING_PURCHASE",
  "PRODUCT_CHANGE",
]);

// Event types that mean the user's entitlement should be turned OFF.
// Note: CANCELLATION and BILLING_ISSUE are deliberately NOT here — a
// cancellation just turns off auto-renew (access continues until period
// end) and a billing issue starts a grace period. Only a confirmed
// EXPIRATION should revoke access.
const REVOKE_EVENTS = new Set(["EXPIRATION"]);

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

Deno.serve(async (req: Request) => {
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  // --- Auth: RevenueCat sends back whatever we configured as the
  // "Authorization header value" in its dashboard, verbatim. Fail closed
  // if the secret isn't configured yet.
  if (!WEBHOOK_SECRET) {
    console.error("[revenuecat-webhook] REVENUECAT_WEBHOOK_SECRET is not set — rejecting all requests.");
    return new Response("Not configured", { status: 503 });
  }
  const authHeader = req.headers.get("Authorization") ?? "";
  if (authHeader !== WEBHOOK_SECRET) {
    return new Response("Unauthorized", { status: 401 });
  }

  let body: {
    event?: {
      type?: string;
      app_user_id?: string;
      entitlement_ids?: string[];
    };
  };
  try {
    body = await req.json();
  } catch {
    return new Response("Invalid JSON", { status: 400 });
  }

  const event = body.event;
  if (!event?.type || !event.app_user_id) {
    return new Response("Missing event.type or event.app_user_id", { status: 400 });
  }

  // Only care about the "pro" entitlement.
  if (!event.entitlement_ids?.includes(ENTITLEMENT_ID)) {
    return new Response("Ignored: not the pro entitlement", { status: 200 });
  }

  // app_user_id must be the Supabase auth user id (see useIAP's linkIdentity).
  // If the purchase happened before sign-in, RevenueCat's app_user_id is its
  // own anonymous id — we can't map it to a row, so skip rather than guess.
  if (!UUID_RE.test(event.app_user_id)) {
    console.log(`[revenuecat-webhook] Skipping non-uuid app_user_id: ${event.app_user_id}`);
    return new Response("Ignored: app_user_id is not a linked Supabase user", { status: 200 });
  }

  let nextIsPro: boolean | null = null;
  if (GRANT_EVENTS.has(event.type)) nextIsPro = true;
  else if (REVOKE_EVENTS.has(event.type)) nextIsPro = false;
  else {
    // Other event types (BILLING_ISSUE, CANCELLATION, TRANSFER, etc.) are
    // acknowledged but intentionally don't change is_pro — see comments above.
    return new Response(`Ignored event type: ${event.type}`, { status: 200 });
  }

  // Upsert into public.user_sync via PostgREST, using the service role key
  // so this bypasses RLS (this function is the only thing that should ever
  // write is_pro from the server side).
  const res = await fetch(`${SUPABASE_URL}/rest/v1/user_sync`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: SERVICE_ROLE_KEY,
      Authorization: `Bearer ${SERVICE_ROLE_KEY}`,
      Prefer: "resolution=merge-duplicates,return=minimal",
    },
    body: JSON.stringify([
      {
        id: event.app_user_id,
        is_pro: nextIsPro,
        pro_token: `revenuecat:${event.type.toLowerCase()}`,
        updated_at: new Date().toISOString(),
      },
    ]),
  });

  if (!res.ok) {
    const text = await res.text();
    console.error(`[revenuecat-webhook] user_sync upsert failed: ${res.status} ${text}`);
    return new Response("Database update failed", { status: 502 });
  }

  console.log(`[revenuecat-webhook] Set is_pro=${nextIsPro} for user ${event.app_user_id} (${event.type})`);
  return new Response("OK", { status: 200 });
});
