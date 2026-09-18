import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { PageShell } from "@/components/PageShell";
import { createMetadata } from "../../seo";
import styles from "../../site.module.css";

const frescoPrinciples = [
  {
    icon: "gesture",
    title: "Unique",
    description: "Chaque création est conçue sur mesure pour un lieu précis.",
  },
  {
    icon: "view_in_ar",
    title: "Intégré",
    description: "Pensée pour s'harmoniser avec l'architecture et les volumes.",
  },
  {
    icon: "verified",
    title: "Durable",
    description:
      "Des matériaux adaptés et une préparation soignée pour un résultat qui dure dans le temps.",
  },
];

const editorialProjects = [

  {
    type: "Fresque mythologique",
    title: "Le dieu Arès",
    image: "/photos/fresque-ares.jpg",
    alt: "Fresque murale rouge, noire et blanche représentant le dieu Arès",
    className: "frescoFeatureTall",
  },
  {
    type: "Fresque japonaise",
    title: "Perspective murale",
    image: "/photos/fresque-japonaise-cote.jpg",
    alt: "Fresque japonaise vue de cote dans une piece interieure",
    className: "frescoFeatureLarge",
  },
  {
    type: "Chambre",
    title: "Caserne graphique",
    image: "/photos/fresque-foot.jpg",
    alt: "Fresque graphique dans une chambre",
    className: "frescoFeatureTall",
  },
  {
    type: "Maison",
    title: "Route au coucher du soleil",
    image: "/photos/661744embeddedImage.jpg",
    alt: "Fresque murale avec route et coucher de soleil",
    className: "frescoFeatureWide",
  },
  {
    type: "Restaurant",
    title: "Fresque en cours",
    image: "/photos/187393embeddedImage.jpg",
    alt: "Fresque murale artistique en cours de realisation",
    className: "frescoFeatureTall",
  },
  {
    type: "Commerce",
    title: "Terrain de sport",
    image: "/photos/2962805embeddedImage.jpg",
    alt: "Fresque murale decorative sur le theme du sport",
    className: "frescoFeatureHalf",
  },
  {
    type: "Salon",
    title: "Jeu et mouvement",
    image: "/photos/311261embeddedImage.jpg",
    alt: "Fresque murale graphique avec mouvement et couleurs",
    className: "frescoFeatureHalf",
  },
  {
    type: "Chambre",
    title: "Caserne graphique",
    image: "/photos/830e704a-58d9-4ba1-bd83-2b2384fa5691.jpg",
    alt: "Fresque graphique dans une chambre",
    className: "frescoFeatureSmall",
  },

];

const processSteps = [
  "Premier échange",
  "Découverte du lieu",
  "Recherche graphique",
  "Esquisse",
  "Validation",
  "Réalisation",
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
            <span className={`${styles.eyebrow} reveal`}>Et si votre mur devenait une œuvre ?</span>
            <h1 className={`${styles.subHeroTitle} reveal delay100`}>
              Fresques artistiques
            </h1>
            <p className={`${styles.bodyLg} reveal delay200`}>
              Des murs transformés en surfaces vivantes, entre idée créative et
              savoir-faire artisanal.
            </p>
          </div>
        </section>

        <section className={`${styles.section} ${styles.splitSection}`}>
          <div className={`${styles.imageMask} maskReveal`}>
            <img
              src="/photos/fresque-japonaise-cote.jpg"
              alt="Fresque japonaise rouge et noire vue de face"
            />
          </div>
          <div className={styles.serviceText}>
            <span className={`${styles.eyebrow} reveal`}>La matière comme langage</span>
            <h2 className={`${styles.headlineLg} reveal delay100`}>
              Une fresque créée pour votre lieu
            </h2>
            <p className={`${styles.bodyMd} reveal delay200`}>
              Chaque fresque est créée en lien avec le lieu, la lumière et vos envies,
              pour un résultat adapté et harmonieux.
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
              Une fresque et son espace
              <span>Une fresque ne se contente pas de décorer.</span>
            </h2>
            <p className={`${styles.bodyMd} reveal delay200`}>
              Elle donne une identité au lieu. Chaque projet est pensé selon l&apos;espace,
              sa lumière et vos envies, pour s&apos;intégrer naturellement et créer une
              vraie harmonie avec le décor.
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
                  alt={project.alt}
                  loading={index < 2 ? "eager" : "lazy"}
                  decoding="async"
                />

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
                src="/photos/187393embeddedImage.jpg"
                alt="Application de peinture sur une fresque murale"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className={styles.serviceText}>
              <span className={`${styles.eyebrow} reveal`}>Le geste artisanal</span>
              <h2 className={`${styles.headlineLg} reveal delay100`}>
                Chaque détail compte
              </h2>
              <p className={`${styles.bodyMd} reveal delay200`}>
                Le support est d&apos;abord préparé avec soin avant l&apos;application de la
                couleur. Le choix des teintes, des textures et des finitions permet de
                créer une œuvre précise, harmonieuse et durable dans le temps.
              </p>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.frescoQuoteSection}`}>
          <blockquote className="reveal">
            &quot;Et si votre mur devenait une œuvre ?&quot;
          </blockquote>
        </section>

        <section className={styles.darkBand}>
          <div className={styles.ctaInner}>
            <h2 className={`${styles.headlineLg} reveal`}>
              Imaginons une fresque adaptée à votre espace
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
