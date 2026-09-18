import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { PageShell } from "@/components/PageShell";
import { createMetadata } from "../../seo";
import styles from "../../site.module.css";

export const metadata: Metadata = createMetadata({
  title: "Renovation interieure et peinture en Centre Bretagne",
  description:
    "Renovation interieure, preparation des supports, peintures mates et finitions durables par Hendricx Peinture autour de Carhaix, Rostrenen et Paule.",
  path: "/services/renovation",
  keywords: [
    "peintre renovation centre bretagne",
    "renovation interieure carhaix",
    "peinture interieur carhaix",
  ],
});

const keyPoints = [
  "Diagnostic du support avant mise en peinture",
  "Protections soignées du chantier et des sols",
  "Préparation adaptée selon l'état des murs et plafonds",
  "Finitions propres et durables",
];

const processSteps = [
  {
    title: "État des lieux",
    description:
      "J'évalue les supports, les reprises nécessaires et le niveau de finition attendu avant de chiffrer.",
  },
  {
    title: "Préparation",
    description:
      "Protection des zones sensibles, lessivage, rebouchage, ratissage et ponçage selon les contraintes du chantier.",
  },
  {
    title: "Application",
    description:
      "Impressions, couches de finition et traitements spécifiques sont appliqués avec une exécution régulière et propre.",
  },
  {
    title: "Réception",
    description:
      "Le chantier est contrôlé avec vous pour valider les détails, la netteté des raccords et la tenue générale du rendu.",
  },
];

const projectScopes = [
  "Maisons principales et résidences secondaires",
  "Appartements en rénovation ou remise en état",
  "Pièces de vie, chambres, couloirs et plafonds",
  "Biens avant mise en location ou mise en vente",
];

export default function RenovationPage() {
  return (
    <PageShell>
      <main>
        <section className={styles.subHero}>
          <div className={styles.subHeroInner}>
            <span className={`${styles.eyebrow} reveal`}>Rénovation intérieure</span>
            <h1 className={`${styles.subHeroTitle} reveal delay100`}>
              Des chantiers sobres, nets et maîtrisés
            </h1>
            <p className={`${styles.bodyLg} reveal delay200`}>
              Préparation des supports, protections soignées et finitions durables.
            </p>
          </div>
        </section>

        <section className={`${styles.section} ${styles.renovationHeroGrid}`}>
          <div className={styles.sectionIntro}>
            <span className={`${styles.eyebrow} reveal`}>Mon engagement</span>
            <h2 className={`${styles.headlineMd} reveal delay100`}>
              Des rénovations simples, propres et durables.
            </h2>
            <p className={`${styles.bodyMd} reveal delay200`}>
              Je commence par analyser l&apos;état des surfaces, puis je
              préparons soigneusement les supports pour garantir un résultat propre et
              adapté à votre quotidien.
            </p>
          </div>
          <div className={styles.renovationHeroPanel}>
            <div className={styles.renovationMetric}>
              <strong>Supports pris en charge</strong>
              <span>Murs, plafonds, boiseries, métaux et petites réparations.</span>
            </div>
            <div className={styles.renovationMetric}>
              <strong>Chantier protégé</strong>
              <span>Protection des zones sensibles, passages et mobilier.</span>
            </div>
            <div className={styles.renovationMetric}>
              <strong>Finitions adaptées</strong>
              <span>Choix des finitions selon la pièce : mat, velouté, lessivable ou technique.</span>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.splitSection}`}>
          <div className={`${styles.imageMask} maskReveal`}>
            <img
              src="/photos/477592076_2078489795923540_2799130433770111071_n.jpg"
              alt="Salon rénové avec peinture intérieure soignée"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className={styles.serviceText}>
            <span className={`${styles.eyebrow} reveal`}>Intervention maîtrisée</span>
            <h2 className={`${styles.headlineLg} reveal delay100`}>
              Un travail sérieux, du diagnostic à la finition.
            </h2>
            <p className={`${styles.bodyMd} reveal delay200`}>
              Chaque chantier est réalisé étape par étape : analyse du support,
              préparation adaptée, application des bons produits et finition soignée
              pour un résultat durable.
            </p>
            <div className={styles.renovationChecklist}>
              {keyPoints.map((point) => (
                <div key={point} className={styles.renovationCheckItem}>
                  <span className="material-symbols-outlined" aria-hidden="true">
                    check
                  </span>
                  <span>{point}</span>
                </div>
              ))}
            </div>
            <ButtonLink href="/contact" tone="line">
              Demander un devis
            </ButtonLink>
          </div>
        </section>

        <section className={`${styles.section} ${styles.proofSection}`}>
          <div className={styles.sectionIntro}>
            <span className={`${styles.eyebrow} reveal`}>Les surfaces que je traite</span>
            <h2 className={`${styles.headlineMd} reveal delay100`}>
              Une intervention adaptée à l&apos;état du chantier.
            </h2>
          </div>
          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <strong>Préparation</strong>
              <span>
                Rebouchage, lissage, ponçage et ratissage selon les irrégularités
                constatées.
              </span>
            </div>
            <div className={styles.statItem}>
              <strong>Protection</strong>
              <span>Sols, menuiseries, zones de passage et mobilier traités avec méthode.</span>
            </div>
            <div className={styles.statItem}>
              <strong>Finition</strong>
              <span>
                Teintes, aspects et résistance choisis selon la fonction de chaque
                pièce.
              </span>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.renovationProcessSection}`}>
          <div className={styles.sectionIntro}>
            <span className={`${styles.eyebrow} reveal`}>Méthode de travail</span>
            <h2 className={`${styles.headlineMd} reveal delay100`}>
              Un déroulement lisible, du devis à la livraison
            </h2>
          </div>
          <div className={styles.renovationProcessGrid}>
            {processSteps.map((step, index) => (
              <article key={step.title} className={styles.renovationProcessCard}>
                <strong>0{index + 1}</strong>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={`${styles.section} ${styles.localSeoLinks}`}>
          <div className={styles.sectionIntro}>
            <span className={`${styles.eyebrow} reveal`}>Types de projets</span>
            <h2 className={`${styles.headlineMd} reveal delay100`}>
              Des interventions pour l&apos;habitat courant comme pour les biens à
              remettre en état
            </h2>
          </div>
          <div className={styles.renovationScopeGrid}>
            {projectScopes.map((scope) => (
              <article key={scope} className={styles.renovationScopeCard}>
                <span className="material-symbols-outlined" aria-hidden="true">
                  home_repair_service
                </span>
                <p>{scope}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          className={`${styles.section} ${styles.localSeoLinks} ${styles.renovationLocalSection}`}
        >
          <div className={`${styles.sectionIntro} ${styles.center}`}>
            <span className={`${styles.eyebrow} reveal`}>Rénovation locale</span>
            <h2 className={`${styles.headlineMd} reveal delay100`}>
              Rénovation de maisons et longères en Centre Bretagne
            </h2>
            <p className={styles.renovationNote}>
              J&apos;interviens autour de Carhaix, Rostrenen et Paule pour des projets
              de remise en état, de rafraîchissement ou de rénovation complète des
              surfaces intérieures.
            </p>
          </div>
        </section>

        <section className={styles.ctaBand}>
          <div className={styles.ctaInner}>
            <h2 className={styles.headlineLg}>Parlons de votre chantier</h2>
            <p className={styles.bodyLg}>
              Si vous cherchez une rénovation intérieure sérieuse, propre et lisible,
              je peux étudier votre projet et définir le bon niveau de finition.
            </p>
            <ButtonLink href="/contact">Demander un devis</ButtonLink>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
