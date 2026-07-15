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
                entreprise de peinture basee a Paule, 22340, France.
              </p>
              <p>
                Adresse professionnelle : <strong>4 Keroullaire, 22340 Paule, France</strong>
              </p>
              <p>
                SIREN : <strong>839 592 094</strong>
              </p>
              <p>
                SIRET du siege : <strong>839 592 094 00016</strong>
              </p>
              <p>
                Forme juridique : <strong>entrepreneur individuel</strong>
              </p>
              <p>
                Numero de TVA intracommunautaire : <strong>FR89839592094</strong>
              </p>
              <p>
                Inscription au RCS : <strong>non inscrit</strong>
              </p>
              <p>
                Inscription au RNE : <strong>inscrit le 18/05/2018</strong>
              </p>
              <p>
                Contact :{" "}
                <a href="mailto:n.hendricx@laposte.net">
                  n.hendricx@laposte.net
                </a>
              </p>
            </article>

            <article className={styles.legalBlock}>
              <h2>Directeur de la publication</h2>
              <p>Nicolas Hendricx.</p>
            </article>

            <article className={styles.legalBlock}>
              <h2>Hebergement</h2>
              <p>
                Hebergeur du site : <strong>Vercel Inc.</strong>
              </p>
              <p>
                Adresse de l&apos;hebergeur :{" "}
                <strong>
                  440 N Barranca Avenue #4133, Covina, CA 91723, United States
                </strong>
              </p>
              <p>
                Contact hebergeur :{" "}
                <a href="https://vercel.com/help">https://vercel.com/help</a>
              </p>
              <p>
                E-mail hebergeur :{" "}
                <a href="mailto:privacy@vercel.com">privacy@vercel.com</a>
              </p>
              <p>
                Telephone de l&apos;hebergeur :{" "}
                <strong>non communique publiquement par Vercel</strong>
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
