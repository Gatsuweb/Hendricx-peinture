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
            <span className={`${styles.eyebrow} reveal`}>Coordonnées</span>
            <h2 className={`${styles.headlineLg} reveal delay100`}>
              Me contacter
            </h2>
            <p className={`${styles.bodyMd} reveal delay200`}>
              Pour une demande de devis ou pour échanger autour de votre projet,
              contactez-moi par e-mail ou retrouvez mes réalisations sur les réseaux sociaux.
            </p>
            <div className={`${styles.contactDetails} reveal delay300`}>
              <a href="mailto:n.hendricx@laposte.net">
                <span>E-mail</span>
                <strong>n.hendricx@laposte.net</strong>
              </a>
              <a
                href="https://www.facebook.com/HendricxPeinture"
                target="_blank"
                rel="noreferrer"
              >
                <span>Facebook</span>
                <strong>Hendricx Peinture</strong>
              </a>
              <a
                href="https://www.instagram.com/nhendricx/"
                target="_blank"
                rel="noreferrer"
              >
                <span>Instagram</span>
                <strong>@nhendricx</strong>
              </a>
            </div>
          </div>
          <ContactForm />
        </section>
      </main>
    </PageShell>
  );
}
