import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { PageShell } from "@/components/PageShell";
import { createMetadata } from "../seo";
import styles from "../site.module.css";

const values = [
  {
    icon: "draw",
    title: "Artisanat",
    description:
      "Chaque projet est realise avec soin, entierement a la main et adapte a son environnement.",
  },
  {
    icon: "architecture",
    title: "Precision",
    description:
      "Une preparation minutieuse des supports garantit un rendu propre et durable.",
  },
  {
    icon: "palette",
    title: "Creativite",
    description:
      "Chaque realisation est unique et imaginee selon vos envies et votre espace.",
  },
  {
    icon: "handshake",
    title: "Accompagnement",
    description:
      "Un echange permanent, du premier rendez-vous jusqu'aux dernieres finitions.",
  },
];

export const metadata: Metadata = createMetadata({
  title: "A propos de Hendricx Peinture",
  description:
    "Decouvrez Hendricx Peinture, artisan peintre a Paule en Centre Bretagne, specialise en renovation, peinture interieure, exterieure et fresques murales.",
  path: "/a-propos",
  keywords: ["hendricx peinture", "artisan peintre paule", "peintre centre bretagne"],
});

export default function AboutPage() {
  return (
    <PageShell>
      <main>
        <section className={styles.subHero}>
          <div className={styles.subHeroInner}>
            <span className={`${styles.eyebrow} reveal`}>Hendricx</span>
            <h1 className={`${styles.subHeroTitle} reveal delay100`}>
              Derriere Hendricx Peinture
            </h1>
            <p className={`${styles.bodyLg} reveal delay200`}>
              Atelier de peinture artisanale et de creation de fresques murales base
              a Paule, au coeur du Centre Bretagne.
            </p>
          </div>
        </section>
        <section className={`${styles.section} ${styles.splitSection}`}>
          <div className={`${styles.imageMask} maskReveal`}>
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcwGH56oPXHGd8UCml8dfXOvXps4wSaqYBbUFYn3CpWXT6XoWLUD1A2f7NMquaqAle1vVVBbU3Xb1euOvKjVeeqv-O-M03MUmgJzF8v6L9Tb5Va3_uqpiD2U6D_DMdvWHxfBc_p1vj4kI8c_UlRrEU4Qlm22xg71UJAoIWedS7s9foT-nSWyOYavdPektE9L4a-9pEnuGjY4cza4GdQXWHigBZ1jypDrsEH70UDy_47GZJHzBktUj95LwzSVeMHFOuqnKIUG_CGmk"
              alt="Echantillons de pigments et recherches graphiques pour une fresque murale"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className={styles.serviceText}>
            <span className={`${styles.eyebrow} reveal`}>Savoir-faire artisanal</span>
            <h2 className={`${styles.headlineLg} reveal delay100`}>
              Donner une voix aux murs
            </h2>
            <p className={`${styles.bodyMd} reveal delay200`}>
              De la preparation meticuleuse des supports a la creation d&apos;oeuvres
              uniques, chaque intervention est pensee comme une finition durable,
              precise et integree a votre espace de vie.
            </p>
            <ButtonLink href="/contact" tone="line">
              Rencontrer l&apos;atelier
            </ButtonLink>
          </div>
        </section>
        <section className={`${styles.section} ${styles.valuesSection}`}>
          <div className={styles.sectionIntro}>
            <span className={`${styles.eyebrow} reveal`}>Nos valeurs</span>
            <h2 className={`${styles.headlineLg} reveal delay100`}>
              Une peinture pensee pour durer.
            </h2>
            <p className={`${styles.bodyMd} reveal delay200`}>
              Hendricx Peinture defend une approche artisanale, precise et sensible
              du metier. Chaque chantier commence par l&apos;ecoute du lieu, le soin
              apporte aux supports et la recherche d&apos;une finition juste.
            </p>
          </div>
          <div className={styles.valuesGrid}>
            {values.map((value, index) => (
              <article
                className={`${styles.valueCard} reveal ${
                  index === 1 ? "delay100" : index > 1 ? "delay200" : ""
                }`}
                key={value.title}
              >
                <span className="material-symbols-outlined" aria-hidden="true">
                  {value.icon}
                </span>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </PageShell>
  );
}
