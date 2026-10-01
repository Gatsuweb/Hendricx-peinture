"use client";

import { CONTACT_PHONE } from "@/lib/contact";
import { trackPhoneClick } from "@/lib/tracking";
import buttonStyles from "./ButtonLink.module.css";

type PhoneLinkProps = Omit<React.ComponentProps<"a">, "href" | "onClick"> & {
  variant?: "plain" | "button";
  tone?: "dark" | "light" | "line";
};

export function PhoneLink({
  children,
  className = "",
  variant = "plain",
  tone = "dark",
  ...props
}: PhoneLinkProps) {
  const content = children ?? CONTACT_PHONE.label;

  if (variant === "button") {
    return (
      <a
        {...props}
        className={`${buttonStyles.button} ${buttonStyles[tone]} ${className}`}
        href={CONTACT_PHONE.href}
        onClick={trackPhoneClick}
      >
        <span className={buttonStyles.fill} aria-hidden="true" />
        <span className={buttonStyles.label}>
          {content}
          <span className="material-symbols-outlined" aria-hidden="true">
            call
          </span>
        </span>
      </a>
    );
  }

  return (
    <a
      {...props}
      className={className || undefined}
      href={CONTACT_PHONE.href}
      onClick={trackPhoneClick}
    >
      {content}
    </a>
  );
}
