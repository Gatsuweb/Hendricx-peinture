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
  "Protections soignees du chantier et des sols",
  "Preparation adaptee selon l'etat des murs et plafonds",
  "Finitions durables, regulieres et faciles a vivre",
];

const processSteps = [
  {
    title: "Etat des lieux",
    description:
      "Nous evaluons les supports, les reprises necessaires et le niveau de finition attendu avant de chiffrer.",
  },
  {
    title: "Preparation",
    description:
      "Protection des zones sensibles, lessivage, rebouchage, ratissage et poncage selon les contraintes du chantier.",
  },
  {
    title: "Application",
    description:
      "Impressions, couches de finition et traitements specifiques sont appliques avec une execution reguliere et propre.",
  },
  {
    title: "Reception",
    description:
      "Le chantier est controle avec vous pour valider les details, la nettete des raccords et la tenue generale du rendu.",
  },
];

const projectScopes = [
  "Maisons principales et residences secondaires",
  "Appartements en renovation ou remise en etat",
  "Pieces de vie, chambres, couloirs et plafonds",
  "Biens avant mise en location ou mise en vente",
];

export default function RenovationPage() {
  return (
    <PageShell>
      <main>
        <section className={styles.subHero}>
          <div className={styles.subHeroInner}>
            <span className={`${styles.eyebrow} reveal`}>Renovation interieure</span>
            <h1 className={`${styles.subHeroTitle} reveal delay100`}>
              Des chantiers sobres, nets et maitrises
            </h1>
            <p className={`${styles.bodyLg} reveal delay200`}>
              Preparation des supports, protections soignes et finitions durables
              pour les maisons et appartements du Centre Bretagne.
            </p>
          </div>
        </section>

        <section className={`${styles.section} ${styles.renovationHeroGrid}`}>
          <div className={styles.sectionIntro}>
            <span className={`${styles.eyebrow} reveal`}>Notre engagement</span>
            <h2 className={`${styles.headlineMd} reveal delay100`}>
              Une renovation pensee pour durer et rester simple a vivre
            </h2>
            <p className={`${styles.bodyMd} reveal delay200`}>
              Nous intervenons avec une approche claire: comprendre l&apos;etat du
              support, preparer correctement et livrer une finition propre, reguliere
              et adaptee a l&apos;usage quotidien.
            </p>
          </div>
          <div className={styles.renovationHeroPanel}>
            <div className={styles.renovationMetric}>
              <strong>Supports analyses</strong>
              <span>Murs, plafonds, boiseries et reprises localisees.</span>
            </div>
            <div className={styles.renovationMetric}>
              <strong>Chantiers proteges</strong>
              <span>Zones sensibles, circulations et mobilier pris en compte.</span>
            </div>
            <div className={styles.renovationMetric}>
              <strong>Finitions adaptees</strong>
              <span>Mat, veloute, lessivable ou technique selon la piece.</span>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.splitSection}`}>
          <div className={`${styles.imageMask} maskReveal`}>
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB43Eql3v6eqjkc-WrF4CCGLFsHNtZwKLg4IJenv-cidXuCKGXCtRiJAiqxWoXOBcLAQTlltJAsai37ZYY4q2XxYRp5XW1fNSo3ulXQ3xDfH-fvLbxWz7i7EaPx6he0QM0fsW1vzj6Irg0gVIkdfiBaiRzPTUh37oTvT0zO8-jWZe1gZ-4En9-ZcNDVUdZm_mlMy7q7OalMXmvfTjoZtJAO0c8WWrfPCdPqrUo28pP7TwIFd7IUPeT_qT0ayyzPHd-t3Rb8uBmC_Zw"
              alt="Enduit mineral et finition murale texturee pour renovation interieure"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className={styles.serviceText}>
            <span className={`${styles.eyebrow} reveal`}>Intervention maitrisee</span>
            <h2 className={`${styles.headlineLg} reveal delay100`}>
              Une execution serieuse du premier diagnostic a la derniere couche
            </h2>
            <p className={`${styles.bodyMd} reveal delay200`}>
              Chaque chantier avance avec une logique simple: corriger les defauts du
              support, choisir la bonne preparation, appliquer les produits adaptes et
              tenir un niveau de finition constant dans le temps.
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
            <span className={`${styles.eyebrow} reveal`}>Ce que nous traitons</span>
            <h2 className={`${styles.headlineMd} reveal delay100`}>
              Une reponse adaptee a l&apos;etat reel du chantier
            </h2>
          </div>
          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <strong>Preparation</strong>
              <span>
                Rebouchage, lissage, poncage et ratissage selon les irregularites
                constatees.
              </span>
            </div>
            <div className={styles.statItem}>
              <strong>Protection</strong>
              <span>
                Sols, menuiseries, zones de passage et mobilier traites avec methode.
              </span>
            </div>
            <div className={styles.statItem}>
              <strong>Finition</strong>
              <span>
                Teintes, aspects et resistance choisis selon la fonction de chaque
                piece.
              </span>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.renovationProcessSection}`}>
          <div className={styles.sectionIntro}>
            <span className={`${styles.eyebrow} reveal`}>Methode de travail</span>
            <h2 className={`${styles.headlineMd} reveal delay100`}>
              Un deroulement lisible, du devis a la livraison
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
              Des interventions pour l&apos;habitat courant comme pour les biens a
              remettre en etat
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

        <section className={`${styles.section} ${styles.localSeoLinks}`}>
          <div className={styles.sectionIntro}>
            <span className={`${styles.eyebrow} reveal`}>Renovation locale</span>
            <h2 className={`${styles.headlineMd} reveal delay100`}>
              Renovation de maisons et longeres en Centre Bretagne
            </h2>
            <p className={styles.renovationNote}>
              Nous intervenons autour de Carhaix, Rostrenen et Paule pour des projets
              de remise en etat, de rafraichissement ou de renovation complete des
              surfaces interieures.
            </p>
          </div>
          <div className={styles.localLinkGrid}>
            <ButtonLink href="/peintre-carhaix-plouguer" tone="line">
              Renovation a Carhaix
            </ButtonLink>
            <ButtonLink href="/peintre-rostrenen" tone="line">
              Renovation a Rostrenen
            </ButtonLink>
          </div>
        </section>

        <section className={styles.ctaBand}>
          <div className={styles.ctaInner}>
            <h2 className={styles.headlineLg}>Parlons de votre chantier</h2>
            <p className={styles.bodyLg}>
              Si vous cherchez une renovation interieure serieuse, propre et lisible,
              nous pouvons etudier votre projet et definir le bon niveau de finition.
            </p>
            <ButtonLink href="/contact">Demander un devis</ButtonLink>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
