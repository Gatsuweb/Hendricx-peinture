export const CONTACT_EMAIL = "n.hendricx@laposte.net";

const defaultPhone = "07 81 25 10 85";
const configuredPhone = process.env.NEXT_PUBLIC_CONTACT_PHONE?.trim();
const configuredDigits = configuredPhone?.replace(/\D/g, "") ?? "";
const phoneLabel =
  configuredPhone && configuredDigits.length >= 9 && configuredDigits.length <= 15
    ? configuredPhone
    : defaultPhone;
const compactPhone = phoneLabel.replace(/[^\d+]/g, "");
const internationalPhone = compactPhone.startsWith("0")
  ? "+33" + compactPhone.slice(1)
  : compactPhone;

export const CONTACT_PHONE = {
  label: phoneLabel,
  href: "tel:" + internationalPhone,
  schemaValue: internationalPhone,
};
