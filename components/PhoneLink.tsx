"use client";

import { CONTACT_PHONE } from "@/lib/contact";
import { trackPhoneClick } from "@/lib/tracking";

type PhoneLinkProps = Omit<React.ComponentProps<"a">, "href" | "onClick" | "children">;

export function PhoneLink(props: PhoneLinkProps) {
  if (!CONTACT_PHONE) return null;
  return (
    <a {...props} href={CONTACT_PHONE.href} onClick={trackPhoneClick}>
      {CONTACT_PHONE.label}
    </a>
  );
}
