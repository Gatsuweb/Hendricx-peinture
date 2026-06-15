import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { PageShell } from "@/components/PageShell";
import { RealisationsGallery } from "@/components/RealisationsGallery";
import { createMetadata } from "../seo";
import styles from "../site.module.css";

export const metadata: Metadata = createMetadata({
  title: "Realisations peinture et fresques murales",
  description:
    "Selection de realisations Hendricx Peinture : fresques murales, renovations interieures, finitions texturees et projets de peinture en Centre Bretagne.",
  path: "/realisations",
  keywords: ["realisations peintre carhaix", "fresque murale bretagne", "renovation peinture centre bretagne"],
});

export default function RealisationsPage() {
  return (
    <PageShell>
      <main>
        <section className={styles.subHero}>
          <div className={styles.subHeroInner}>
            <span className={`${styles.eyebrow} reveal`}>Realisations</span>
            <h1 className={`${styles.subHeroTitle} reveal delay100`}>
              Matieres, couleurs et gestes a l&apos;echelle de l&apos;espace
            </h1>
            <p className={`${styles.bodyLg} reveal delay200`}>
              Une selection de projets ou la precision technique rencontre
              l&apos;expression picturale.
            </p>
          </div>
        </section>

        <RealisationsGallery />

        <section className={styles.ctaBand}>
          <div className={styles.ctaInner}>
            <h2 className={`${styles.headlineLg} reveal`}>Imaginer le prochain mur</h2>
            <p className={`${styles.bodyLg} reveal delay100`}>
              Chaque projet commence par une rencontre.
            </p>
            <ButtonLink href="/contact">Nous Contacter</ButtonLink>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
