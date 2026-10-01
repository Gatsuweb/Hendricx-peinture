export const CONTACT_EMAIL = "n.hendricx@laposte.net";

// Placeholder only. Replace NEXT_PUBLIC_CONTACT_PHONE with the real number.
// PhoneLink stays hidden until a valid number is configured.
export const CONTACT_PHONE_PLACEHOLDER = "NUMERO_A_RENSEIGNER";

const configuredPhone = process.env.NEXT_PUBLIC_CONTACT_PHONE?.trim();
const phoneDigits = configuredPhone?.replace(/\D/g, "") ?? "";

export const CONTACT_PHONE =
  configuredPhone && configuredPhone !== CONTACT_PHONE_PLACEHOLDER && phoneDigits.length >= 9 && phoneDigits.length <= 15
    ? {
        label: configuredPhone,
        href: `tel:${configuredPhone.replace(/[^+\d]/g, "")}`,
      }
    : null;
