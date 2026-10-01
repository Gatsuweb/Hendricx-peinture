export type TrackingEvent =
  | { event: "generate_lead"; lead_type: "contact_form" }
  | { event: "phone_click" }
  | { event: "email_click" };

type DataLayerItem = TrackingEvent | Record<string, unknown> | unknown[] | IArguments;

declare global {
  interface Window {
    dataLayer?: DataLayerItem[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function getDataLayer() {
  window.dataLayer ??= [];
  return window.dataLayer;
}

function track(event: TrackingEvent) {
  if (typeof window === "undefined") return;
  getDataLayer().push(event);
}

export function trackAcceptedLead() {
  track({ event: "generate_lead", lead_type: "contact_form" });
}

export function trackPhoneClick() {
  track({ event: "phone_click" });
}

export function trackEmailClick() {
  track({ event: "email_click" });
}

// Do not replay events recorded before GTM was loaded after consent.
export function discardUnsentTrackingEvents() {
  if (typeof window === "undefined" || !window.dataLayer) return;
  window.dataLayer = window.dataLayer.filter((item) => {
    if (!item || typeof item !== "object" || !("event" in item)) return true;
    return !["generate_lead", "phone_click", "email_click"].includes(
      String(item.event),
    );
  });
}
