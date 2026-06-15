import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { JsonLd } from "@/components/JsonLd";
import { PageShell } from "@/components/PageShell";
import { createMetadata, faqSchema } from "./seo";
import styles from "./site.module.css";

export const metadata: Metadata = createMetadata({
  title: "Artisan peintre a Paule, Carhaix et Rostrenen",
  description:
    "Hendricx Peinture realise peinture interieure, exterieure, renovation et fresques murales a Paule, Carhaix-Plouguer, Rostrenen, Gourin et Huelgoat.",
  path: "/",
  keywords: [
    "peintre carhaix",
    "artisan peintre centre bretagne",
    "peintre rostrenen",
    "fresque murale bretagne",
  ],
});

const images = {
  heroLeft:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDHeRqAo078W769rIgXgzjZEst8TOBzL3ua2CGg0MORtGB3N15WfyO-ahseas8PfJ4YhvoCHqfMLAaICL4hnsiEH2d6gCCOFwllZYVGbEMUjUloMTzvvnHBhrKdZCXsA2xM-XTgzdVzuOo4rUZ-2HlUBvdigDbx0R-a7Z9azln_a9eOJOxKGZvDKgeTY4-VvcYYs-OXPKp6KQD3k90N7T7JhZROOiGP4ENcBHVgXPbeU-dmlEHiV8xBgo9706r0EGJKTOES7hx1TU0",
  heroRight:
    "/test-hero-hendricx.jpg",
  fresco:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuABtvKqmQHN6ZMgVE5FUR6lH0cfaBb-KU6jxn_JSmTOcR0N76qOcTZw7cHKx7ZzoS2vBP_jvApyTaEr8WCW-GNxoqGZwUydb0wT5XMY-1BalcxPv87eEC0AFS7FJz8PtxypUY0lN5Wx7TOC2V58EI3mrq_vOinjXbSYrF9gSzrUurTy7ULeCbY0Y7QMn2I4aiZD2jrZYYsqlvfmesNrjxbjoCMX2DEdWWWv_Nvvw2zpqdn65VUL5iX4SWb9buzgptGpxxeWuFasT-o",
  renovation:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuB43Eql3v6eqjkc-WrF4CCGLFsHNtZwKLg4IJenv-cidXuCKGXCtRiJAiqxWoXOBcLAQTlltJAsai37ZYY4q2XxYRp5XW1fNSo3ulXQ3xDfH-fvLbxWz7i7EaPx6he0QM0fsW1vzj6Irg0gVIkdfiBaiRzPTUh37oTvT0zO8-jWZe1gZ-4En9-ZcNDVUdZm_mlMy7q7OalMXmvfTjoZtJAO0c8WWrfPCdPqrUo28pP7TwIFd7IUPeT_qT0ayyzPHd-t3Rb8uBmC_Zw",
};

const testimonials = [
  {
    quote:
      "Un travail d'une précision rare. Les murs ont été repris, préparés et finis avec un soin que l'on remarque tout de suite.",
    author: "Claire M.",
    context: "Rénovation d'un séjour",
  },
  {
    quote:
      "La fresque a donné une vraie identité à notre espace. Le projet a été compris rapidement et le résultat dépasse nos attentes.",
    author: "Atelier Prisme",
    context: "Fresque murale professionnelle",
  },
  {
    quote:
      "Chantier propre, conseils justes et finitions impeccables. On sent la maîtrise du support avant même la mise en couleur.",
    author: "Marc D.",
    context: "Maison particulière",
  },
];

const faqs = [
  {
    question: "Comment se déroule un premier rendez-vous ?",
    answer:
      "Nous échangeons sur vos envies, l'état des supports, les contraintes du lieu et le rendu attendu. Cela permet de définir une approche claire avant le devis.",
  },
  {
    question: "Intervenez-vous pour les particuliers et les professionnels ?",
    answer:
      "Oui. Les projets peuvent concerner une piece de vie, une maison complete, un commerce, un bureau ou un lieu recevant du public.",
  },
  {
    question: "Pouvez-vous proposer une création de fresque sur mesure ?",
    answer:
      "Oui. La création part de votre univers, de l'architecture du lieu et de l'ambiance souhaitée pour obtenir une fresque intégrée à l'espace.",
  },
  {
    question: "Faut-il préparer les murs avant votre passage ?",
    answer:
      "Non. La préparation fait partie du diagnostic et du savoir-faire : reprise, enduit, ponçage, impression et choix de finition selon le support.",
  },
];

export default function Home() {
  return (
    <PageShell>
      <JsonLd data={faqSchema(faqs)} />
      <main>
        <section className={styles.hero} data-hero>
          <div className={styles.heroOverlay}>
            <div className={styles.heroTitleGroup}>
              <div className={styles.heroTextBlend}>
                <h1 className={`${styles.displayTitle} reveal`}>HENDRICX</h1>
                <p className={`${styles.heroKicker} reveal delay200`}>
                  <span>PEINTURE</span>
                  <span>FRESQUE</span>
                </p>
                <div className={`${styles.heroIntro} reveal delay300`}>
                  <p>Artiste peintre, rénovation, fresque murale</p>
                  <p>
                    PEINTURE TRADITIONNELLE &amp; FRESQUE MURALE POUR DES ESPACES QUI
                    ONT DU CARACTERE.
                  </p>
                </div>
              </div>
              <div className={`${styles.heroCtas} reveal delay300`}>
                <ButtonLink href="/services">
                  Découvrir les services
                </ButtonLink>
                <ButtonLink href="/realisations" tone="light">
                  Voir les réalisations
                </ButtonLink>
              </div>
            </div>
          </div>
          <div className={styles.heroCtaOverlay}>
            <div className={`${styles.heroCtas} reveal delay300`}>
              <ButtonLink href="/services">Découvrir les services</ButtonLink>
              <ButtonLink href="/realisations" tone="light">
                Voir les réalisations
              </ButtonLink>
            </div>
          </div>
          <div className={styles.heroPanel}>
            <img
              className={`${styles.heroImage} ${styles.grayImage}`}
              src={images.heroLeft}
              alt="A pristine, minimalist modern interior with flawlessly painted white walls"
              data-parallax-speed="0.2"
            />
            <div className={styles.shade} />
          </div>
          <div className={styles.heroPanel}>
            <img
              className={styles.heroImage}
              src={images.heroRight}
              alt="A vibrant, highly detailed artistic mural painted directly onto a large wall"
              data-parallax-speed="0.3"
            />
            <div className={styles.shade} />
          </div>
          <div className={`${styles.scrollIndicator} reveal delay300`}>
            <span>Découvrir</span>
            <span className="material-symbols-outlined">arrow_downward</span>
          </div>
        </section>

        <section className={`${styles.section} ${styles.center}`}>
          <div className={`${styles.pill} reveal`}>
            <span className="material-symbols-outlined">brush</span>
            <span>Savoir-faire artisanal</span>
          </div>
          <h2 className={`${styles.headlineMd} reveal delay100`}>
            Au croisement de la rigueur architecturale et de l&apos;expression
            artistique libre.
          </h2>
          <p className={`${styles.bodyLg} reveal delay200`}>
            Nous n&apos;habillons pas seulement vos murs, nous leur donnons une voix.
            De la préparation méticuleuse des supports à la création de fresques
            uniques, chaque intervention est pensée comme une œuvre d&apos;art intégrée
            à votre espace de vie.
          </p>
        </section>

        <section className={styles.section}>
          <div className={styles.serviceGrid}>
            <div className={`${styles.imageMask} ${styles.imageLeft} maskReveal`}>
              <img
                src={images.fresco}
                alt="A close-up of an artist's hand painting a complex, colorful mural"
              />
            </div>
            <div className={`${styles.serviceText} ${styles.textRight}`}>
              <span className={`${styles.eyebrow} reveal`}>01 — Expression</span>
              <h3 className={`${styles.headlineLg} reveal delay100`}>
                Fresques Artistiques
              </h3>
              <p className={`${styles.bodyMd} reveal delay200`}>
                Des créations sur mesure qui transforment un mur nu en une toile
                monumentale. Nous collaborons avec vous pour concevoir des œuvres qui
                reflètent votre identité et s&apos;intègrent parfaitement à
                l&apos;architecture du lieu.
              </p>
              <div className={`${styles.tags} reveal delay300`}>
                <span className={styles.tag}>Sur-mesure</span>
                <span className={styles.tag}>Identité visuelle</span>
                <span className={styles.tag}>Grand format</span>
              </div>
              <ButtonLink href="/services/fresque" tone="line">
                Explorer la galerie créative
              </ButtonLink>
            </div>
          </div>

          <div className={styles.serviceGrid}>
            <div className={`${styles.serviceText} ${styles.textLeft}`}>
              <span className={`${styles.eyebrow} reveal`}>02 — Précision</span>
              <h3 className={`${styles.headlineLg} reveal delay100`}>
                Rénovations d&apos;Intérieur
              </h3>
              <p className={`${styles.bodyMd} reveal delay200`}>
                L&apos;excellence technique au service des espaces exigeants. Nous
                appliquons des finitions haut de gamme, des enduits minéraux aux
                peintures mates veloutées, pour révéler la beauté pure des volumes
                architecturaux.
              </p>
              <div className={`${styles.tags} reveal delay300`}>
                <span className={styles.tag}>Finitions Premium</span>
                <span className={styles.tag}>Enduits Minéraux</span>
                <span className={styles.tag}>Préparation experte</span>
              </div>
              <ButtonLink href="/services/renovation" tone="line">
                Découvrir nos standards
              </ButtonLink>
            </div>
            <div className={`${styles.imageMask} ${styles.imageRight} maskReveal`}>
              <img
                src={images.renovation}
                alt="A highly detailed close-up of a wall with a textured, mineral plaster finish"
              />
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.proofSection}`}>
          <div className={styles.sectionIntro}>
            <span className={`${styles.eyebrow} reveal`}>Confiance</span>
            <h2 className={`${styles.headlineLg} reveal delay100`}>
              Des finitions qui se jugent dans le détail.
            </h2>
            <p className={`${styles.bodyMd} reveal delay200`}>
              Préparation des supports, tenue du chantier, justesse des teintes et
              finitions durables : chaque projet est mené avec la même exigence.
            </p>
          </div>
          <div className={styles.statsGrid}>
            <div className={`${styles.statItem} reveal`}>
              <strong>Sur mesure</strong>
              <span>Chaque intervention part de votre lieu, pas d&apos;une formule.</span>
            </div>
            <div className={`${styles.statItem} reveal delay100`}>
              <strong>Conseil</strong>
              <span>Choix des matières, couleurs et finitions avant travaux.</span>
            </div>
            <div className={`${styles.statItem} reveal delay200`}>
              <strong>Chantier soigne</strong>
              <span>Protection, précision et propreté jusqu&apos;à la réception.</span>
            </div>
          </div>
        </section>

        <section className={styles.testimonialBand}>
          <div className={styles.testimonialInner}>
            <div className={styles.sectionIntro}>
              <span className={`${styles.eyebrow} reveal`}>Avis clients</span>
              <h2 className={`${styles.headlineMd} reveal delay100`}>
                Ils nous confient leurs murs parce que le rendu doit durer.
              </h2>
            </div>
            <div className={styles.testimonialGrid}>
              {testimonials.map((testimonial, index) => (
                <article
                  className={`${styles.testimonialCard} reveal ${
                    index === 1 ? "delay100" : index === 2 ? "delay200" : ""
                  }`}
                  key={testimonial.author}
                >
                  <span className="material-symbols-outlined">format_quote</span>
                  <p>{testimonial.quote}</p>
                  <footer>
                    <strong>{testimonial.author}</strong>
                    <span>{testimonial.context}</span>
                  </footer>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.localSection}`}>
          <div className={styles.localPanel}>
            <span className={`${styles.eyebrow} reveal`}>Où nous trouver</span>
            <h2 className={`${styles.headlineLg} reveal delay100`}>
              Un atelier mobile pour vos projets de peinture et fresque.
            </h2>
            <p className={`${styles.bodyMd} reveal delay200`}>
              Nous nous déplaçons pour évaluer les supports, prendre les mesures et
              construire une proposition adaptée à votre intérieur ou votre lieu
              professionnel.
            </p>
            <div className={`${styles.tags} reveal delay300`}>
              <span className={styles.tag}>Devis sur place</span>
              <span className={styles.tag}>Particuliers</span>
              <span className={styles.tag}>Professionnels</span>
            </div>
          </div>
          <div className={`${styles.locationBox} reveal delay200`}>
            <span className="material-symbols-outlined">location_on</span>
            <div>
              <h3>Zone d&apos;intervention</h3>
              <p>
                Rendez-vous et chantiers sur demande. Contactez-nous pour vérifier la
                faisabilité, les délais et organiser une première visite.
              </p>
              <ButtonLink href="/contact" tone="line">
                Planifier une visite
              </ButtonLink>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.faqSection}`}>
          <div className={styles.sectionIntro}>
            <span className={`${styles.eyebrow} reveal`}>Questions fréquentes</span>
            <h2 className={`${styles.headlineMd} reveal delay100`}>
              Les points à clarifier avant de lancer votre projet.
            </h2>
          </div>
          <div className={styles.faqList}>
            {faqs.map((item, index) => (
              <details
                className={`${styles.faqItem} reveal ${
                  index === 1 ? "delay100" : index > 1 ? "delay200" : ""
                }`}
                key={item.question}
              >
                <summary>
                  {item.question}
                  <span className="material-symbols-outlined">add</span>
                </summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className={styles.ctaBand}>
          <div className={styles.ctaInner}>
            <h2 className={`${styles.headlineLg} reveal`}>Donnez Vie à Vos Murs</h2>
            <p className={`${styles.bodyLg} reveal delay100`}>
              Chaque projet commence par une rencontre. Discutons de vos envies, de
              vos espaces et de la manière dont nous pouvons y apporter notre
              savoir-faire.
            </p>
            <ButtonLink href="/contact" className="reveal delay200">
              Nous Contacter
            </ButtonLink>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
