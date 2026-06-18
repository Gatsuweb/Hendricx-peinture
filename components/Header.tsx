"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ButtonLink } from "./ButtonLink";
import styles from "./Header.module.css";
import Image from "next/image";

const navItems = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos", label: "À Propos" },
  {
    href: "/services",
    label: "Services",
    children: [
      { href: "/services/fresque", label: "Fresques" },
      { href: "/services/renovation", label: "Renovations" },
    ],
  },
  { href: "/realisations", label: "Réalisations" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <Link className={styles.brand} href="/" onClick={() => setIsOpen(false)}>
        <Image
          src="/logo-hendricx.png"
          alt="Hendricx Peinture"
          width={180}
          height={25}
        />
      </Link>

      <nav
        className={`${styles.nav} ${isOpen ? styles.open : ""}`}
        aria-label="Navigation principale"
      >
        {navItems.map((item) => {
          const active =
            item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
          const children = item.children;

          if (children) {
            const childActive = children.some((child) =>
              pathname.startsWith(child.href),
            );

            return (
              <div
                key={item.href}
                className={`${styles.navGroup} ${childActive ? styles.groupActive : ""}`}
              >
                <div className={styles.navGroupHeader}>
                  <Link
                    className={`${styles.navLink} ${active ? styles.active : ""}`}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                  <span
                    className={`material-symbols-outlined ${styles.navCaret}`}
                    aria-hidden="true"
                  >
                    expand_more
                  </span>
                </div>

                <div className={styles.subNav}>
                  {children.map((child) => {
                    const childIsActive = pathname.startsWith(child.href);

                    return (
                      <Link
                        key={child.href}
                        className={`${styles.subNavLink} ${
                          childIsActive ? styles.active : ""
                        }`}
                        href={child.href}
                        onClick={() => setIsOpen(false)}
                      >
                        {child.label}
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          }

          return (
            <Link
              key={item.href}
              className={`${styles.navLink} ${active ? styles.active : ""}`}
              href={item.href}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          );
        })}
        <div className={styles.mobileCta}>
          <ButtonLink href="/contact" className={styles.mobileCtaButton}>
            Demander un devis
          </ButtonLink>
        </div>
      </nav>

      <div className={styles.cta}>
        <ButtonLink href="/contact">Demander un devis</ButtonLink>
      </div>

      <button
        className={`${styles.menuButton} ${isOpen ? styles.menuButtonOpen : ""}`}
        type="button"
        aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((value) => !value)}
      >
        <span />
        <span />
        <span />
      </button>
    </header>
  );
}
