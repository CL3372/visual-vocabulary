// Supabase Edge Function: stripe-webhook
//
// Authoritative, server-side source of truth for Pro status on the WEB
// build. Previously there was no webhook at all — the app trusted a
// `?pro_success=true` redirect param and pushed is_pro=true straight into
// the database from the browser, using the signed-in user's own
// credentials. That meant any signed-in user could grant themselves Pro
// for free by visiting that URL directly; the database has since been
// locked down (see migrations lock_down_is_pro_column_v2 and
// add_stripe_customer_id_to_user_sync) so clients can no longer write
// is_pro/pro_token/stripe_customer_id at all — only this function,
// running as service_role, can.
//
// SETUP (manual, can't be done from this session):
//   1. Already deployed (see this file's presence). If redeploying by
//      hand: `supabase functions deploy stripe-webhook --no-verify-jwt`.
//   2. In the Stripe Dashboard (or already done via the API from this
//      session, if you were shown a confirmation link) — Developers >
//      Webhooks > add endpoint:
//        URL: https://<project-ref>.supabase.co/functions/v1/stripe-webhook
//        Events: checkout.session.completed, customer.subscription.updated,
//                customer.subscription.deleted
//      Copy the signing secret Stripe shows you (starts with "whsec_").
//   3. Supabase Dashboard > Edge Functions > stripe-webhook > Secrets, set
//      STRIPE_WEBHOOK_SECRET to that value. Until this is set, the
//      function fails closed (503) and does nothing.
//
// This does its OWN auth via Stripe's signature scheme (not a Supabase
// JWT — Stripe can't send one), so it's deployed with --no-verify-jwt.

import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
const SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
const WEBHOOK_SECRET = Deno.env.get("STRIPE_WEBHOOK_SECRET");

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const SIG_TOLERANCE_SECONDS = 300;

function timingSafeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let result = 0;
  for (let i = 0; i < a.length; i++) result |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return result === 0;
}

// Verifies a Stripe webhook signature by hand (Web Crypto HMAC-SHA256),
// per https://docs.stripe.com/webhooks#verify-manually — avoids pulling in
// the full stripe-node SDK for one HMAC check.
async function verifyStripeSignature(rawBody: string, sigHeader: string, secret: string): Promise<boolean> {
  const parts = sigHeader.split(",").map((p) => p.split("="));
  const timestamp = parts.find(([k]) => k === "t")?.[1];
  const v1Sigs = parts.filter(([k]) => k === "v1").map(([, v]) => v);
  if (!timestamp || v1Sigs.length === 0) return false;

  const now = Math.floor(Date.now() / 1000);
  const ts = parseInt(timestamp, 10);
  if (Number.isNaN(ts) || Math.abs(now - ts) > SIG_TOLERANCE_SECONDS) return false;

  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const sigBuffer = await crypto.subtle.sign(
    "HMAC",
    key,
    new TextEncoder().encode(`${timestamp}.${rawBody}`)
  );
  const expected = Array.from(new Uint8Array(sigBuffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");

  return v1Sigs.some((v) => timingSafeEqual(v, expected));
}

async function upsertUserSync(id: string, fields: Record<string, unknown>) {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/user_sync`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: SERVICE_ROLE_KEY,
      Authorization: `Bearer ${SERVICE_ROLE_KEY}`,
      Prefer: "resolution=merge-duplicates,return=minimal",
    },
    body: JSON.stringify([{ id, updated_at: new Date().toISOString(), ...fields }]),
  });
  if (!res.ok) {
    console.error(`[stripe-webhook] user_sync upsert failed for ${id}: ${res.status} ${await res.text()}`);
  }
  return res.ok;
}

async function findUserIdByCustomerId(customerId: string): Promise<string | null> {
  const res = await fetch(
    `${SUPABASE_URL}/rest/v1/user_sync?stripe_customer_id=eq.${encodeURIComponent(customerId)}&select=id&limit=1`,
    {
      headers: {
        apikey: SERVICE_ROLE_KEY,
        Authorization: `Bearer ${SERVICE_ROLE_KEY}`,
      },
    }
  );
  if (!res.ok) return null;
  const rows = (await res.json()) as Array<{ id: string }>;
  return rows[0]?.id ?? null;
}

Deno.serve(async (req: Request) => {
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }
  if (!WEBHOOK_SECRET) {
    console.error("[stripe-webhook] STRIPE_WEBHOOK_SECRET is not set — rejecting all requests.");
    return new Response("Not configured", { status: 503 });
  }

  const sigHeader = req.headers.get("stripe-signature");
  const rawBody = await req.text();
  if (!sigHeader || !(await verifyStripeSignature(rawBody, sigHeader, WEBHOOK_SECRET))) {
    return new Response("Invalid signature", { status: 401 });
  }

  // deno-lint-ignore no-explicit-any
  let event: any;
  try {
    event = JSON.parse(rawBody);
  } catch {
    return new Response("Invalid JSON", { status: 400 });
  }

  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object;
      if (session.mode !== "subscription") {
        return new Response("Ignored: not a subscription checkout", { status: 200 });
      }
      const userId = session.client_reference_id as string | null;
      if (!userId || !UUID_RE.test(userId)) {
        // Purchased while signed out, or client_reference_id wasn't set —
        // can't attribute this to an account server-side. The buyer keeps
        // local access on that browser (see UpgradeModal's optimistic
        // activatePro call); they'll need to be signed in for a future
        // purchase (or a manual reconciliation) to sync it to an account.
        console.log(`[stripe-webhook] Skipping checkout.session.completed with no linkable user: ${userId}`);
        return new Response("Ignored: no linkable client_reference_id", { status: 200 });
      }
      const ok = await upsertUserSync(userId, {
        is_pro: true,
        pro_token: "stripe:checkout",
        stripe_customer_id: session.customer,
      });
      return new Response(ok ? "OK" : "DB error", { status: ok ? 200 : 502 });
    }

    case "customer.subscription.updated":
    case "customer.subscription.deleted": {
      const sub = event.data.object;
      const revokeStatuses = ["canceled", "unpaid", "incomplete_expired"];
      const grantStatuses = ["active", "trialing"];

      let nextIsPro: boolean | null = null;
      if (event.type === "customer.subscription.deleted" || revokeStatuses.includes(sub.status)) {
        nextIsPro = false;
      } else if (grantStatuses.includes(sub.status)) {
        nextIsPro = true;
      } else {
        // e.g. "past_due" during Stripe's own retry/grace period — leave as-is.
        return new Response(`Ignored subscription status: ${sub.status}`, { status: 200 });
      }

      const userId = await findUserIdByCustomerId(sub.customer);
      if (!userId) {
        console.log(`[stripe-webhook] No user_sync row for Stripe customer ${sub.customer}`);
        return new Response("Ignored: unknown customer", { status: 200 });
      }
      const ok = await upsertUserSync(userId, {
        is_pro: nextIsPro,
        pro_token: `stripe:${sub.status}`,
      });
      return new Response(ok ? "OK" : "DB error", { status: ok ? 200 : 502 });
    }

    default:
      return new Response(`Ignored event type: ${event.type}`, { status: 200 });
  }
});PATCHEOF
