import Link from "next/link";
import styles from "./ButtonLink.module.css";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  tone?: "dark" | "light" | "line";
  className?: string;
};

export function ButtonLink({
  href,
  children,
  tone = "dark",
  className = "",
}: ButtonLinkProps) {
  return (
    <Link className={`${styles.button} ${styles[tone]} ${className}`} href={href}>
      <span className={styles.fill} />
      <span className={styles.label}>
        {children}
        <span className="material-symbols-outlined">arrow_forward</span>
      </span>
    </Link>
  );
}
