import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { PageShell } from "@/components/PageShell";
import { createMetadata } from "../../seo";
import styles from "../../site.module.css";

export const metadata: Metadata = createMetadata({
  title: "Fresque murale artistique en Bretagne",
  description:
    "Creation de fresques murales artistiques sur mesure pour maisons, commerces et lieux professionnels en Centre Bretagne, autour de Carhaix et Rostrenen.",
  path: "/services/fresque",
  keywords: ["fresque murale bretagne", "decoration murale carhaix", "fresque artistique centre bretagne"],
});

export default function FresquePage() {
  return (
    <PageShell>
      <main>
        <section className={styles.subHero}>
          <div className={styles.subHeroInner}>
            <span className={`${styles.eyebrow} reveal`}>Artisanal Murals</span>
            <h1 className={`${styles.subHeroTitle} reveal delay100`}>
              Fresques Artistiques
            </h1>
            <p className={`${styles.bodyLg} reveal delay200`}>
              Des murs pensés comme des surfaces vivantes, de l&apos;intention
              artistique au geste artisanal.
            </p>
          </div>
        </section>
        <section className={`${styles.section} ${styles.splitSection}`}>
          <div className={`${styles.imageMask} maskReveal`}>
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMc2FhJubpMxM-g4Rs7WCdAtvaAFerT8TAL0KCfHONX1CgnjlETSB3NNZBqAe2yelOxH2TdIHyBJ9eklWOmkw5THc0whPIo9TWKnubaRYuA9th5Svs5__QhMDD9mKqHshumKV14px2ACVNQ4gPycaNbnyFYLvVaISzqmLVQXYyLeo0ewkBNbxiWpDxYq8V6zXbYNHI8URHwmHuHc_z21NTit-Ktj2CNYRiGCP-q2rdBvXcE3FjkrLaMYF_xyroac4ME4b_MvfMdQ8"
              alt="Artisan applying pigment to a textured wall fresco"
            />
          </div>
          <div className={styles.serviceText}>
            <span className={`${styles.eyebrow} reveal`}>The Artistic Gesture</span>
            <h2 className={`${styles.headlineLg} reveal delay100`}>
              La matière comme langage
            </h2>
            <p className={`${styles.bodyMd} reveal delay200`}>
              Chaque fresque naît d&apos;un dialogue entre le lieu, la lumière, les
              usages et l&apos;identité du commanditaire.
            </p>
            <ButtonLink href="/contact" tone="line">
              Démarrer un projet
            </ButtonLink>
          </div>
        </section>
        <section className={styles.darkBand}>
          <div className={styles.ctaInner}>
            <h2 className={`${styles.headlineLg} reveal`}>De l&apos;esquisse au mur</h2>
            <p className={`${styles.bodyLg} reveal delay100`}>
              Pigments, texture, composition et finitions sont étudiés pour produire
              une œuvre durable, intégrée à l&apos;architecture.
            </p>
            <ButtonLink href="/realisations" tone="light">
              Voir les réalisations
            </ButtonLink>
          </div>
        </section>
        <section className={`${styles.section} ${styles.localSeoLinks}`}>
          <div className={styles.sectionIntro}>
            <span className={`${styles.eyebrow} reveal`}>Fresques locales</span>
            <h2 className={`${styles.headlineMd} reveal delay100`}>
              Creations murales autour de Carhaix et Rostrenen
            </h2>
          </div>
          {/* <div className={styles.localLinkGrid}>
            <ButtonLink href="/peintre-carhaix-plouguer" tone="line">
              Projet mural a Carhaix
            </ButtonLink>
            <ButtonLink href="/peintre-rostrenen" tone="line">
              Projet mural a Rostrenen
            </ButtonLink>
          </div> */}
        </section>
      </main>
    </PageShell>
  );
}
