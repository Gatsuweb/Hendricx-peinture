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
      "Chaque projet est réalisé à la main avec soin, adapté à votre espace.",
  },
  {
    icon: "architecture",
    title: "Précision",
    description:
      "Une préparation rigoureuse des supports pour un rendu propre et durable.",
  },
  {
    icon: "palette",
    title: "Créativité",
    description:
      "Des réalisations uniques, pensées selon vos envies et votre intérieur.",
  },
  {
    icon: "handshake",
    title: "Accompagnement",
    description:
      "Un suivi simple et attentif, du premier rendez-vous jusqu'aux finitions.",
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
              Derrière Hendricx Peinture
            </h1>
            <p className={`${styles.bodyLg} reveal delay200`}>
              Artisan peintre, je réalise vos travaux avec soin et rigueur. À
              l&apos;écoute de vos besoins, je vous accompagne dans votre projet avec
              sérieux et disponibilité.
            </p>
          </div>
        </section>
        <section className={`${styles.section} ${styles.splitSection}`}>
          <div className={`${styles.imageMask} maskReveal`}>
            <img
              src="/photos/478143953_1480482836493462_3457604464599603571_n.jpg"
              alt="Véhicule Hendricx Peinture"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className={styles.serviceText}>
            <span className={`${styles.eyebrow} reveal`}>Savoir-faire artisanal</span>
            <h2 className={`${styles.headlineLg} reveal delay100`}>
              Donner vie aux murs
            </h2>
            <p className={`${styles.bodyMd} reveal delay200`}>
              Je m&apos;appelle Nicolas, originaire de Brest. Après quelques années en
              ville, j&apos;ai fait le choix de m&apos;installer à la campagne et de me lancer
              à mon compte. Fort de 12 années d&apos;expérience dans le domaine de la
              peinture et des métiers qui l&apos;entourent, j&apos;ai développé un savoir-faire
              solide.
            </p>
            <p className={`${styles.bodyMd} reveal delay200`}>
              J&apos;ai toujours apprécié le travail bien fait, et particulièrement le
              moment où, après les préparations, le support retrouve un état sain et
              prêt à être mis en valeur. Ce métier me procure avant tout la
              satisfaction du travail accompli et le plaisir de voir un résultat
              propre et soigné, partagé avec mes clients.
            </p>
            <ButtonLink href="/contact" tone="line">
              Rencontrer l&apos;atelier
            </ButtonLink>
          </div>
        </section>
        <section className={`${styles.section} ${styles.center}`}>
          <div className={`${styles.pill} reveal`}>
            <span className="material-symbols-outlined">brush</span>
            <span>Savoir-faire artisanal</span>
          </div>
          <h2 className={`${styles.headlineMd} reveal delay100`}>
            Donner vie aux murs
          </h2>
          <p className={`${styles.bodyLg} reveal delay200`}>
            De la préparation des surfaces à la réalisation de créations uniques,
            chaque intervention est réalisée avec soin pour un résultat propre,
            durable et adapté à votre intérieur.
          </p>
        </section>
        <section className={`${styles.section} ${styles.valuesSection}`}>
          <div className={styles.sectionIntro}>
            <span className={`${styles.eyebrow} reveal`}>Nos valeurs</span>
            <h2 className={`${styles.headlineLg} reveal delay100`}>
              Une peinture pensée pour durer
            </h2>
            <p className={`${styles.bodyMd} reveal delay200`}>
              Je propose un travail artisanal, soigné et précis. Chaque chantier
              commence par l&apos;écoute de vos besoins et la préparation des supports,
              pour garantir un résultat propre et durable.
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
