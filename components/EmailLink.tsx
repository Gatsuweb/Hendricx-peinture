"use client";

import { CONTACT_EMAIL } from "@/lib/contact";
import { trackEmailClick } from "@/lib/tracking";

type EmailLinkProps = Omit<React.ComponentProps<"a">, "href" | "onClick">;

export function EmailLink({ children, ...props }: EmailLinkProps) {
  return (
    <a {...props} href={`mailto:${CONTACT_EMAIL}`} onClick={trackEmailClick}>
      {children ?? CONTACT_EMAIL}
    </a>
  );
}
