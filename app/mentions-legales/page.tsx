import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { createMetadata } from "../seo";
import styles from "../site.module.css";

export const metadata: Metadata = createMetadata({
  title: "Mentions legales",
  description:
    "Mentions legales de Hendricx Peinture : editeur du site, hebergement, contact et informations professionnelles.",
  path: "/mentions-legales",
});

export default function MentionsLegalesPage() {
  return (
    <PageShell>
      <main>
        <section className={styles.subHero}>
          <div className={styles.subHeroInner}>
            <span className={`${styles.eyebrow} reveal`}>Informations legales</span>
            <h1 className={`${styles.subHeroTitle} reveal delay100`}>Mentions legales</h1>
            <p className={`${styles.bodyLg} reveal delay200`}>
              Cette page rassemble les informations d&apos;identification de
              Hendricx Peinture et les coordonnees utiles relatives au site.
            </p>
          </div>
        </section>

        <section className={`${styles.section} ${styles.legalSection}`}>
          <div className={styles.legalContent}>
            <article className={styles.legalBlock}>
              <h2>Editeur du site</h2>
              <p>
                Hendricx Peinture, entreprise individuelle de Nicolas Hendricx,
                artisan peintre base a Paule, 22340, France.
              </p>
              <p>
                Adresse professionnelle complete : <strong>a completer</strong>
              </p>
              <p>
                SIRET / SIREN / immatriculation : <strong>a completer</strong>
              </p>
              <p>
                TVA intracommunautaire, si applicable : <strong>a completer</strong>
              </p>
              <p>
                Contact :{" "}
                <a href="mailto:contact@hendricx-peinture.fr">
                  contact@hendricx-peinture.fr
                </a>
              </p>
              <p>Telephone : <strong>a completer</strong></p>
            </article>

            <article className={styles.legalBlock}>
              <h2>Directeur de la publication</h2>
              <p>Nicolas Hendricx.</p>
            </article>

            <article className={styles.legalBlock}>
              <h2>Hebergement</h2>
              <p>
                Hebergeur du site : <strong>a completer</strong>
              </p>
              <p>
                Adresse de l&apos;hebergeur : <strong>a completer</strong>
              </p>
              <p>
                Telephone de l&apos;hebergeur : <strong>a completer</strong>
              </p>
            </article>

            <article className={styles.legalBlock}>
              <h2>Propriete intellectuelle</h2>
              <p>
                Les textes, visuels, photographies, logos et elements graphiques
                presents sur ce site sont proteges par le droit d&apos;auteur.
                Toute reproduction ou reutilisation sans autorisation prealable
                est interdite.
              </p>
            </article>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
