import { useEffect, useState, useCallback } from 'react';
import { Capacitor } from '@capacitor/core';

/**
 * Native In-App Purchase support for the iOS build, via RevenueCat.
 *
 * Why this exists: Apple Guideline 3.1.1 requires that any digital
 * subscription consumed inside the app be sold through Apple's own
 * In-App Purchase system, not an external payment processor. The web
 * app (lexpix.io) keeps using Stripe Payment Links — that's fine, it's
 * a browser. The iOS app must use StoreKit. RevenueCat wraps StoreKit
 * (and, later, Google Play Billing for Android) behind one API and
 * handles receipt validation server-side, so we don't have to build
 * that ourselves.
 *
 * Setup required before this works (see docs handed back with this file):
 *  1. `npm install @revenuecat/purchases-capacitor` (run locally — this
 *     sandbox has no npm registry access, so the exact version wasn't
 *     pinned here; install latest and `npx cap sync ios`).
 *  2. Create the "pro" entitlement + subscription products in App Store
 *     Connect, mirror them in the RevenueCat dashboard, and set
 *     VITE_REVENUECAT_IOS_API_KEY in Vercel/GitHub Actions secrets.
 *  3. Match PACKAGE_IDS below to whatever identifiers you give the
 *     monthly/annual packages in the RevenueCat dashboard.
 */

// Lazy-typed handle to the plugin — imported dynamically so this file
// has zero cost and doesn't crash on web, where the native plugin isn't
// installed/available.
type PurchasesModule = typeof import('@revenuecat/purchases-capacitor');
let PurchasesRef: PurchasesModule['Purchases'] | null = null;

export const IS_NATIVE_IOS =
  Capacitor.getPlatform() === 'ios' && Capacitor.isNativePlatform();

const REVENUECAT_IOS_KEY = import.meta.env.VITE_REVENUECAT_IOS_API_KEY as
  | string
  | undefined;

// Must match the entitlement identifier configured in the RevenueCat dashboard.
const ENTITLEMENT_ID = 'pro';

// Must match the package identifiers configured for the "default" offering
// in the RevenueCat dashboard (Products > Offerings).
export const PACKAGE_IDS = {
  monthly: 'lexpix_pro_monthly',
  annual: 'lexpix_pro_annual',
} as const;

export interface IAPPackage {
  identifier: string;
  priceString: string;
  title: string;
}

interface PurchaseResult {
  success: boolean;
  userCancelled: boolean;
}

export function useIAP() {
  const [ready, setReady] = useState(false);
  const [packages, setPackages] = useState<IAPPackage[]>([]);
  const [isProFromIAP, setIsProFromIAP] = useState(false);
  const [purchasing, setPurchasing] = useState(false);

  useEffect(() => {
    if (!IS_NATIVE_IOS) return;
    if (!REVENUECAT_IOS_KEY) {
      console.warn('[IAP] VITE_REVENUECAT_IOS_API_KEY is not set — native purchases disabled.');
      return;
    }

    let cancelled = false;

    (async () => {
      const mod = await import('@revenuecat/purchases-capacitor');
      PurchasesRef = mod.Purchases;

      await PurchasesRef.configure({ apiKey: REVENUECAT_IOS_KEY });

      const { customerInfo } = await PurchasesRef.getCustomerInfo();
      if (!cancelled) {
        setIsProFromIAP(!!customerInfo.entitlements.active[ENTITLEMENT_ID]);
      }

      PurchasesRef.addCustomerInfoUpdateListener((info) => {
        setIsProFromIAP(!!info.entitlements.active[ENTITLEMENT_ID]);
      });

      const offerings = await PurchasesRef.getOfferings();
      const current = offerings.current;
      if (current && !cancelled) {
        setPackages(
          current.availablePackages.map((p) => ({
            identifier: p.identifier,
            priceString: p.product.priceString,
            title: p.product.title,
          }))
        );
      }

      if (!cancelled) setReady(true);
    })().catch((err) => console.error('[IAP] init failed', err));

    return () => {
      cancelled = true;
    };
  }, []);

  /** Link the RevenueCat anonymous user to our real Supabase user id, so
   *  Pro status can eventually be cross-referenced server-side (see the
   *  revenuecat-webhook Supabase function). Call this after Supabase
   *  sign-in on native iOS. */
  const linkIdentity = useCallback(async (supabaseUserId: string) => {
    if (!PurchasesRef) return;
    try {
      await PurchasesRef.logIn({ appUserID: supabaseUserId });
    } catch (err) {
      console.error('[IAP] logIn failed', err);
    }
  }, []);

  const purchase = useCallback(async (packageIdentifier: string): Promise<PurchaseResult> => {
    if (!PurchasesRef) return { success: false, userCancelled: false };
    setPurchasing(true);
    try {
      const offerings = await PurchasesRef.getOfferings();
      const pkg = offerings.current?.availablePackages.find(
        (p) => p.identifier === packageIdentifier
      );
      if (!pkg) throw new Error(`Package "${packageIdentifier}" not found in current offering`);

      const { customerInfo } = await PurchasesRef.purchasePackage({ aPackage: pkg });
      const active = !!customerInfo.entitlements.active[ENTITLEMENT_ID];
      setIsProFromIAP(active);
      return { success: active, userCancelled: false };
    } catch (err: unknown) {
      const userCancelled = (err as { userCancelled?: boolean } | undefined)?.userCancelled === true;
      if (!userCancelled) console.error('[IAP] purchase failed', err);
      return { success: false, userCancelled };
    } finally {
      setPurchasing(false);
    }
  }, []);

  const restore = useCallback(async (): Promise<boolean> => {
    if (!PurchasesRef) return false;
    const { customerInfo } = await PurchasesRef.restorePurchases();
    const active = !!customerInfo.entitlements.active[ENTITLEMENT_ID];
    setIsProFromIAP(active);
    return active;
  }, []);

  return {
    ready,
    packages,
    isProFromIAP,
    purchasing,
    purchase,
    restore,
    linkIdentity,
    isNativeIOS: IS_NATIVE_IOS,
  };
}
