import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { PageShell } from "@/components/PageShell";
import { localPages } from "../local-pages";
import { createMetadata, publishedLocalSlugs } from "../seo";
import styles from "../site.module.css";

export const metadata: Metadata = createMetadata({
  title: "Services peinture, renovation et fresques murales",
  description:
    "Peinture interieure, peinture exterieure, renovation et fresques murales par Hendricx Peinture a Paule, Carhaix-Plouguer, Rostrenen, Gourin et Huelgoat.",
  path: "/services",
  keywords: [
    "peinture interieure carhaix",
    "peinture exterieure carhaix",
    "renovation centre bretagne",
  ],
});

export default function ServicesPage() {
  const publishedLocalPages = publishedLocalSlugs.map((slug) => localPages[slug]);

  return (
    <PageShell>
      <main>
        <section className={styles.subHero}>
          <div className={styles.subHeroInner}>
            <span className={`${styles.eyebrow} reveal`}>Services</span>
            <h1 className={`${styles.subHeroTitle} reveal delay100`}>
              Peinture traditionnelle et fresques murales
            </h1>
            <p className={`${styles.bodyLg} reveal delay200`}>
              Deux approches complémentaires pour préparer les supports, soigner les
              finitions et créer des interventions murales sur mesure.
            </p>
          </div>
        </section>

        <section className={`${styles.section} ${styles.sectionTight}`}>
          <div className={styles.serviceGrid}>
            <div className={`${styles.imageMask} ${styles.imageLeft} maskReveal`}>
              <img
                src="/photos/fresque-japonaise-cote.jpg"
                alt="Fresque japonaise rouge et noire peinte sur un mur interieur"
              />
            </div>
            <div className={`${styles.serviceText} ${styles.textRight}`}>
              <span className={`${styles.eyebrow} reveal`}>01 - Expression</span>
              <h2 className={`${styles.headlineLg} reveal delay100`}>
                Fresques artistiques
              </h2>
              <p className={`${styles.bodyMd} reveal delay200`}>
                Des créations uniques pour donner vie à vos murs. Nous réalisons des
                fresques sur mesure qui transforment un mur vide en une œuvre
                originale.
              </p>
              <ButtonLink href="/services/fresque" tone="line">
                Explorer la galerie créative
              </ButtonLink>
            </div>
          </div>
          <div className={styles.serviceGrid}>
            <div className={`${styles.serviceText} ${styles.textLeft}`}>
              <span className={`${styles.eyebrow} reveal`}>02 - Précision</span>
              <h2 className={`${styles.headlineLg} reveal delay100`}>
                Rénovation d&apos;intérieur
              </h2>
              <p className={`${styles.bodyMd} reveal delay200`}>
                Des finitions soignées pour sublimer vos espaces. Nous réalisons des
                travaux de peinture et de finition avec des matériaux de qualité.
              </p>
              <ButtonLink href="/services/renovation" tone="line">
                Découvrir nos standards
              </ButtonLink>
            </div>
            <div className={`${styles.imageMask} ${styles.imageRight} maskReveal`}>
              <img
                src="/photos/480680043_2084649251974261_4842625914116337843_n.jpg"
                alt="Pièce de vie rénovée avec finition soignée"
              />
            </div>
          </div>
        </section>
        <section className={`${styles.section} ${styles.localSeoLinks}`}>
          <div className={styles.sectionIntro}>
            <span className={`${styles.eyebrow} reveal`}>Zones d&apos;intervention</span>
            <h2 className={`${styles.headlineMd} reveal delay100`}>
              Un artisan peintre pour le Centre Bretagne
            </h2>
          </div>
          <div className={styles.localLinkGrid}>
            {publishedLocalPages.map((page) => (
              <ButtonLink href={`/${page.slug}`} tone="line" key={page.slug}>
                Peintre à {page.city}
              </ButtonLink>
            ))}
          </div>
        </section>
      </main>
    </PageShell>
  );
}
