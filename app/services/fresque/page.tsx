import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { PageShell } from "@/components/PageShell";
import { createMetadata } from "../../seo";
import styles from "../../site.module.css";

const frescoPrinciples = [
  {
    icon: "gesture",
    title: "Unique",
    description: "Chaque création est entièrement imaginée pour un seul lieu.",
  },
  {
    icon: "view_in_ar",
    title: "Pensée dans son environnement",
    description:
      "La composition s'intègre naturellement à l'architecture et aux volumes.",
  },
  {
    icon: "verified",
    title: "Durable",
    description:
      "Des matériaux et une préparation soignée garantissent une œuvre pérenne.",
  },
];

const editorialProjects = [
  {
    type: "Maison",
    title: "Horizon abstrait",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB61gPt-df3paHZX6mNFFRa9e5xN_ZzJoivVaMURR3xtVPXg3-8wnROHFckykks_UnkbdkEfrn9DdNFxWBthFoYmx_CWE4s51RT7_oRhyzdPprT-1QovdeXrboFAPIRu1IDluIEQFPzGyuptQO09T0priKiqe4x1BOb9KgnU0II_Uwu-bOmKvyq_hCre0Ym9q61iqcH-Z95my_gCnNuj7wcUqOOWOMqUqGPUzc5bTkrp3iP0NAZG9BnekI1MjMT5HSnJqnQo2HiqYg",
    className: "frescoFeatureLarge",
  },
  {
    type: "Restaurant",
    title: "Ambiance graphique",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDY2veYLDhzNiFrE5y9DioL4vTdxXl5BZlEJOKbpjzT7kFYsrDOk6nhoCNIJnGcWAyq7KUBi1dbtawp2QMo3SwIGBZcVawLP5lgPZ6hhfcoY0z2zxym5Yz-RpVFRYDPbdxmQiRE0CjmrW5LRauPPtJ1HKOwr6KJfguM4obtCIlwOQ8-SbZsow6YXzCrRzIs-Gpx9RoJj6g_1RARAaOGfwbKZKgTgMz-J9TO7Zl93WpHOnwUwyp_laumW_Qlt7OHm4Mw_FwX7RWq7Og",
    className: "frescoFeatureTall",
  },
  {
    type: "Commerce",
    title: "Identité murale",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuABtvKqmQHN6ZMgVE5FUR6lH0cfaBb-KU6jxn_JSmTOcR0N76qOcTZw7cHKx7ZzoS2vBP_jvApyTaEr8WCW-GNxoqGZwUydb0wT5XMY-1BalcxPv87eEC0AFS7FJz8PtxypUY0lN5Wx7TOC2V58EI3mrq_vOinjXbSYrF9gSzrUurTy7ULeCbY0Y7QMn2I4aiZD2jrZYYsqlvfmesNrjxbjoCMX2DEdWWWv_Nvvw2zpqdn65VUL5iX4SWb9buzgptGpxxeWuFasT-o",
    className: "frescoFeatureHalf",
  },
  {
    type: "Salon",
    title: "Matière et lumière",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBMc2FhJubpMxM-g4Rs7WCdAtvaAFerT8TAL0KCfHONX1CgnjlETSB3NNZBqAe2yelOxH2TdIHyBJ9eklWOmkw5THc0whPIo9TWKnubaRYuA9th5Svs5__QhMDD9mKqHshumKV14px2ACVNQ4gPycaNbnyFYLvVaISzqmLVQXYyLeo0ewkBNbxiWpDxYq8V6zXbYNHI8URHwmHuHc_z21NTit-Ktj2CNYRiGCP-q2rdBvXcE3FjkrLaMYF_xyroac4ME4b_MvfMdQ8",
    className: "frescoFeatureHalf",
  },
  {
    type: "Chambre",
    title: "Composition douce",
    image: "/test-hero-hendricx.jpg",
    className: "frescoFeatureWide",
  },
  {
    type: "Bureau",
    title: "Espace signe",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB61gPt-df3paHZX6mNFFRa9e5xN_ZzJoivVaMURR3xtVPXg3-8wnROHFckykks_UnkbdkEfrn9DdNFxWBthFoYmx_CWE4s51RT7_oRhyzdPprT-1QovdeXrboFAPIRu1IDluIEQFPzGyuptQO09T0priKiqe4x1BOb9KgnU0II_Uwu-bOmKvyq_hCre0Ym9q61iqcH-Z95my_gCnNuj7wcUqOOWOMqUqGPUzc5bTkrp3iP0NAZG9BnekI1MjMT5HSnJqnQo2HiqYg",
    className: "frescoFeatureTall",
  },
];

const processSteps = [
  "Premier échange",
  "Découverte du lieu",
  "Recherche graphique",
  "Esquisse",
  "Validation",
  "Realisation",
  "Livraison",
];

export const metadata: Metadata = createMetadata({
  title: "Fresque murale artistique en Bretagne",
  description:
    "Creation de fresques murales artistiques sur mesure pour maisons, commerces et lieux professionnels en Centre Bretagne, autour de Carhaix et Rostrenen.",
  path: "/services/fresque",
  keywords: [
    "fresque murale bretagne",
    "decoration murale carhaix",
    "fresque artistique centre bretagne",
  ],
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

        <section className={`${styles.section} ${styles.frescoIdentitySection}`}>
          <div className={styles.sectionIntro}>
            <span className={`${styles.eyebrow} reveal`}>
              Une œuvre pensée pour le lieu
            </span>
            <h2 className={`${styles.frescoStatementTitle} reveal delay100`}>
              Une fresque ne décore pas un espace.
              <span>Elle lui donne une identité.</span>
            </h2>
            <p className={`${styles.bodyMd} reveal delay200`}>
              Chaque projet est imaginé selon le lieu, son architecture, sa lumière
              et les envies de celles et ceux qui l&apos;habitent. La fresque devient
              une présence juste, composée pour dialoguer avec l&apos;espace plutôt que
              le remplir.
            </p>
          </div>
          <div className={styles.frescoPrincipleGrid}>
            {frescoPrinciples.map((principle, index) => (
              <article
                className={`${styles.frescoPrincipleCard} reveal ${
                  index === 1 ? "delay100" : index === 2 ? "delay200" : ""
                }`}
                key={principle.title}
              >
                <span className="material-symbols-outlined" aria-hidden="true">
                  {principle.icon}
                </span>
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={`${styles.section} ${styles.frescoGallerySection}`}>
          <div className={styles.galleryHeader}>
            <span className={`${styles.eyebrow} reveal`}>Des lieux uniques</span>
            <h2 className={`${styles.headlineLg} reveal delay100`}>
              Chaque mur raconte une histoire différente.
            </h2>
          </div>
          <div className={styles.frescoEditorialGrid}>
            {editorialProjects.map((project, index) => (
              <figure
                className={`${styles.frescoEditorialItem} ${
                  styles[project.className as keyof typeof styles]
                } reveal ${index === 1 ? "delay100" : index > 1 ? "delay200" : ""}`}
                key={`${project.type}-${project.title}`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                />
                <figcaption>
                  <span>{project.type}</span>
                  <strong>{project.title}</strong>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className={`${styles.section} ${styles.frescoProcessSection}`}>
          <div className={styles.sectionIntro}>
            <span className={`${styles.eyebrow} reveal`}>Le processus</span>
            <h2 className={`${styles.headlineLg} reveal delay100`}>
              De la première idée jusqu&apos;au dernier coup de pinceau.
            </h2>
          </div>
          <ol className={styles.frescoTimeline}>
            {processSteps.map((step, index) => (
              <li
                className={`reveal ${
                  index === 1 || index === 2
                    ? "delay100"
                    : index > 2
                      ? "delay200"
                      : ""
                }`}
                key={step}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{step}</strong>
              </li>
            ))}
          </ol>
        </section>

        <section className={styles.frescoCraftBand}>
          <div className={styles.frescoCraftInner}>
            <div className={`${styles.frescoCraftImage} maskReveal`}>
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMc2FhJubpMxM-g4Rs7WCdAtvaAFerT8TAL0KCfHONX1CgnjlETSB3NNZBqAe2yelOxH2TdIHyBJ9eklWOmkw5THc0whPIo9TWKnubaRYuA9th5Svs5__QhMDD9mKqHshumKV14px2ACVNQ4gPycaNbnyFYLvVaISzqmLVQXYyLeo0ewkBNbxiWpDxYq8V6zXbYNHI8URHwmHuHc_z21NTit-Ktj2CNYRiGCP-q2rdBvXcE3FjkrLaMYF_xyroac4ME4b_MvfMdQ8"
                alt="Détail de peinture, pigment et texture sur une fresque murale"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className={styles.serviceText}>
              <span className={`${styles.eyebrow} reveal`}>Le geste artisanal</span>
              <h2 className={`${styles.headlineLg} reveal delay100`}>
                Chaque détail participe à l&apos;émotion finale.
              </h2>
              <p className={`${styles.bodyMd} reveal delay200`}>
                Le support est observé, préparé et stabilisé avant la couleur. Le
                choix des pigments, des textures, des passages et des finitions guide
                ensuite le geste, pour obtenir une œuvre sensible, précise et faite
                pour rester juste dans le temps.
              </p>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.frescoQuoteSection}`}>
          <blockquote className="reveal">
            &quot;Chaque mur possède déjà une histoire.
            <span>
              Mon travail consiste simplement à lui donner une nouvelle voix.&quot;
            </span>
          </blockquote>
        </section>

        <section className={styles.darkBand}>
          <div className={styles.ctaInner}>
            <h2 className={`${styles.headlineLg} reveal`}>
              Et si votre mur devenait une œuvre ?
            </h2>
            <p className={`${styles.bodyLg} reveal delay100`}>
              Chaque projet débute par une discussion. Imaginons ensemble une fresque
              pensée spécialement pour votre espace.
            </p>
            <ButtonLink href="/contact" tone="light">
              Demander un devis
            </ButtonLink>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
