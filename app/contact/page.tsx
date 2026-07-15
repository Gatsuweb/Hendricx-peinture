import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { PageShell } from "@/components/PageShell";
import { createMetadata } from "../seo";
import styles from "../site.module.css";

export const metadata: Metadata = createMetadata({
  title: "Contact et demande de devis peinture",
  description:
    "Contactez Hendricx Peinture pour un devis peinture, renovation ou fresque murale a Paule, Carhaix-Plouguer, Rostrenen, Gourin, Huelgoat et alentours.",
  path: "/contact",
  keywords: ["devis peinture carhaix", "contact peintre centre bretagne", "artisan peintre paule"],
});

export default function ContactPage() {
  return (
    <PageShell>
      <main>
        <section className={styles.subHero}>
          <div className={styles.subHeroInner}>
            <span className={`${styles.eyebrow} reveal`}>Contact</span>
            <h1 className={`${styles.subHeroTitle} reveal delay100`}>
              Demander un devis peinture
            </h1>
            <p className={`${styles.bodyLg} reveal delay200`}>
              Decrivez votre projet a Paule, Carhaix-Plouguer, Rostrenen, Gourin,
              Huelgoat ou dans une commune proche du Centre Bretagne.
            </p>
          </div>
        </section>
        <section className={`${styles.section} ${styles.contactGrid}`}>
          <div className={styles.serviceText}>
            <span className={`${styles.eyebrow} reveal`}>Premier echange</span>
            <h2 className={`${styles.headlineLg} reveal delay100`}>
              Parlez-nous de votre espace
            </h2>
            <p className={`${styles.bodyMd} reveal delay200`}>
              Indiquez le type de projet, la commune, les surfaces approximatives,
              l&apos;etat des supports et le niveau de finition attendu.
            </p>
            <div className={`${styles.tags} reveal delay300`}>
              <span className={styles.tag}>Paule</span>
              <span className={styles.tag}>Carhaix</span>
              <span className={styles.tag}>Rostrenen</span>
              <span className={styles.tag}>Centre Bretagne</span>
            </div>
          </div>
          <ContactForm />
        </section>
      </main>
    </PageShell>
  );
}
