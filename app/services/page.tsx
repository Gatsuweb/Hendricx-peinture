import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { PageShell } from "@/components/PageShell";
import { createMetadata } from "../seo";
import styles from "../site.module.css";

export const metadata: Metadata = createMetadata({
  title: "Services peinture, renovation et fresques murales",
  description:
    "Peinture interieure, peinture exterieure, renovation et fresques murales par Hendricx Peinture a Paule, Carhaix-Plouguer, Rostrenen, Gourin et Huelgoat.",
  path: "/services",
  keywords: ["peinture interieure carhaix", "peinture exterieure carhaix", "renovation centre bretagne"],
});

export default function ServicesPage() {
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
              Deux approches complémentaires pour révéler les volumes, maîtriser les
              finitions et créer des interventions murales sur mesure.
            </p>
          </div>
        </section>

        <section className={`${styles.section} ${styles.sectionTight}`}>
          <div className={styles.serviceGrid}>
            <div className={`${styles.imageMask} ${styles.imageLeft} maskReveal`}>
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuABtvKqmQHN6ZMgVE5FUR6lH0cfaBb-KU6jxn_JSmTOcR0N76qOcTZw7cHKx7ZzoS2vBP_jvApyTaEr8WCW-GNxoqGZwUydb0wT5XMY-1BalcxPv87eEC0AFS7FJz8PtxypUY0lN5Wx7TOC2V58EI3mrq_vOinjXbSYrF9gSzrUurTy7ULeCbY0Y7QMn2I4aiZD2jrZYYsqlvfmesNrjxbjoCMX2DEdWWWv_Nvvw2zpqdn65VUL5iX4SWb9buzgptGpxxeWuFasT-o"
                alt="A close-up of an artist's hand painting a complex, colorful mural"
              />
            </div>
            <div className={`${styles.serviceText} ${styles.textRight}`}>
              <span className={`${styles.eyebrow} reveal`}>01 — Expression</span>
              <h2 className={`${styles.headlineLg} reveal delay100`}>
                Fresques Artistiques
              </h2>
              <p className={`${styles.bodyMd} reveal delay200`}>
                Des créations sur mesure qui transforment un mur nu en une toile
                monumentale.
              </p>
              <ButtonLink href="/services/fresque" tone="line">
                Explorer la galerie créative
              </ButtonLink>
            </div>
          </div>
          <div className={styles.serviceGrid}>
            <div className={`${styles.serviceText} ${styles.textLeft}`}>
              <span className={`${styles.eyebrow} reveal`}>02 — Précision</span>
              <h2 className={`${styles.headlineLg} reveal delay100`}>
                Rénovations d&apos;Intérieur
              </h2>
              <p className={`${styles.bodyMd} reveal delay200`}>
                L&apos;excellence technique au service des espaces exigeants.
              </p>
              <ButtonLink href="/services/renovation" tone="line">
                Découvrir nos standards
              </ButtonLink>
            </div>
            <div className={`${styles.imageMask} ${styles.imageRight} maskReveal`}>
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB43Eql3v6eqjkc-WrF4CCGLFsHNtZwKLg4IJenv-cidXuCKGXCtRiJAiqxWoXOBcLAQTlltJAsai37ZYY4q2XxYRp5XW1fNSo3ulXQ3xDfH-fvLbxWz7i7EaPx6he0QM0fsW1vzj6Irg0gVIkdfiBaiRzPTUh37oTvT0zO8-jWZe1gZ-4En9-ZcNDVUdZm_mlMy7q7OalMXmvfTjoZtJAO0c8WWrfPCdPqrUo28pP7TwIFd7IUPeT_qT0ayyzPHd-t3Rb8uBmC_Zw"
                alt="A highly detailed close-up of a wall with a textured, mineral plaster finish"
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
            <ButtonLink href="/peintre-carhaix-plouguer" tone="line">
              Peintre a Carhaix-Plouguer
            </ButtonLink>
            <ButtonLink href="/peintre-rostrenen" tone="line">
              Peintre a Rostrenen
            </ButtonLink>
            <ButtonLink href="/peintre-gourin" tone="line">
              Peintre a Gourin
            </ButtonLink>
            <ButtonLink href="/peintre-huelgoat" tone="line">
              Peintre a Huelgoat
            </ButtonLink>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
