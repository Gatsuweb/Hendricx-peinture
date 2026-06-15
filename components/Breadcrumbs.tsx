import Link from "next/link";
import styles from "./Breadcrumbs.module.css";

type BreadcrumbsProps = {
  items: Array<{ name: string; href: string }>;
};

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className={styles.breadcrumbs} aria-label="Fil d'Ariane">
      <ol>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={item.href}>
              {isLast ? <span>{item.name}</span> : <Link href={item.href}>{item.name}</Link>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
