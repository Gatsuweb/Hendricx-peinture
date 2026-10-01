import { discardUnsentTrackingEvents, getDataLayer } from "./tracking";

export type ConsentValue = "granted" | "denied";
export type ConsentState = {
  analytics_storage: ConsentValue;
  ad_storage: ConsentValue;
  ad_user_data: ConsentValue;
  ad_personalization: ConsentValue;
};

export const CONSENT_STORAGE_KEY = "hendricx-consent-v1";
export const DENIED_CONSENT: ConsentState = {
  analytics_storage: "denied",
  ad_storage: "denied",
  ad_user_data: "denied",
  ad_personalization: "denied",
};
export const GRANTED_CONSENT: ConsentState = {
  analytics_storage: "granted",
  ad_storage: "granted",
  ad_user_data: "granted",
  ad_personalization: "granted",
};

export const GTM_ID = /^GTM-[A-Z0-9]+$/.test(
  process.env.NEXT_PUBLIC_GTM_ID ?? "",
)
  ? process.env.NEXT_PUBLIC_GTM_ID
  : undefined;

export function readStoredConsent(): ConsentState | null {
  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed: unknown = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object") return null;
    const value = parsed as Record<keyof ConsentState, unknown>;
    const keys: (keyof ConsentState)[] = [
      "analytics_storage",
      "ad_storage",
      "ad_user_data",
      "ad_personalization",
    ];
    if (keys.some((key) => value[key] !== "granted" && value[key] !== "denied")) {
      return null;
    }
    return {
      analytics_storage: value.analytics_storage as ConsentValue,
      ad_storage: value.ad_storage as ConsentValue,
      ad_user_data: value.ad_user_data as ConsentValue,
      ad_personalization: value.ad_personalization as ConsentValue,
    };
  } catch {
    return null;
  }
}

export function storeConsent(value: ConsentState) {
  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(value));
  } catch {
    // The decision still applies to the current page if storage is unavailable.
  }
}

export function applyConsent(value: ConsentState) {
  if (typeof window === "undefined") return;
  window.gtag ??= function (...args: unknown[]) {
    getDataLayer().push(args);
  };
  window.gtag("consent", "update", value);
}

export function hasGrantedConsent(value: ConsentState) {
  return Object.values(value).some((status) => status === "granted");
}

export function loadGtmOnce() {
  if (!GTM_ID || document.getElementById("hendricx-gtm")) return;
  discardUnsentTrackingEvents();
  getDataLayer().push({ "gtm.start": Date.now(), event: "gtm.js" });
  const script = document.createElement("script");
  script.id = "hendricx-gtm";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
  document.head.appendChild(script);
}
