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
  heroLeft: "/photos/476836935_2078489489256904_6370289537618551027_n.jpg",
  heroRight: "/photos/661744embeddedImage.jpg",
  fresco: "/photos/2962805embeddedImage.jpg",
  renovation: "/photos/477796924_2078489629256890_7221419132280354026_n.jpg",
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
    question: "Comment se déroule le premier rendez-vous ?",
    answer:
      "On discute de vos envies, de l'état des murs et du lieu. Cela permet de préparer un devis adapté.",
  },
  {
    question: "Travaillez-vous pour les particuliers et les professionnels ?",
    answer:
      "Oui. Les projets peuvent concerner une pièce de vie, une maison complète, un commerce, un bureau ou un lieu recevant du public.",
  },
  {
    question: "Faites-vous des fresques sur mesure ?",
    answer:
      "Oui. La création de la fresque est créée selon votre style, votre lieu et l'ambiance souhaitée.",
  },
  {
    question: "Faut-il préparer les murs avant ?",
    answer: "Non, nous nous occupons de toute la préparation des surfaces.",
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
              </div>
              <div className={`${styles.heroCtas} reveal delay300`}>
                <ButtonLink href="/services">Découvrir les services</ButtonLink>
                <ButtonLink href="/realisations" tone="light">
                  Voir les réalisations
                </ButtonLink>
              </div>
            </div>
          </div>
          <div className={styles.heroIntroOverlay}>
            <div className={`${styles.heroIntro} reveal delay300`}>
              <p>Artisan et artiste peintre, rénovation, neuf, fresque murale</p>
              <p>
                PEINTURE TRADITIONNELLE &amp; FRESQUE MURALE POUR DES ESPACES QUI ONT
                DU CARACTERE.
              </p>
            </div>
          </div>
          <div className={styles.heroCtaOverlay}>
            <div className={`${styles.heroCtas} reveal delay300`}>
              <ButtonLink href="/services">Découvrir les services</ButtonLink>
              <ButtonLink href="/realisations" tone="loner">
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
            Des murs qui vous ressemblent.
          </h2>
          <p className={`${styles.bodyLg} reveal delay200`}>
            Nous préparons chaque surface avec soin et créons des peintures ou fresques
            uniques pour embellir votre espace. Chaque réalisation est pensée pour
            s&apos;adapter à votre intérieur et refléter votre style.
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
              <span className={`${styles.eyebrow} reveal`}>01 - Expression</span>
              <h3 className={`${styles.headlineLg} reveal delay100`}>
                Fresques artistiques
              </h3>
              <p className={`${styles.bodyMd} reveal delay200`}>
                Des créations uniques pour donner vie à vos murs. Nous réalisons des
                fresques sur mesure qui transforment un mur vide en une œuvre
                originale. Chaque projet est conçu avec vous pour refléter vos envies
                et s&apos;intégrer naturellement à votre espace.
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
              <span className={`${styles.eyebrow} reveal`}>02 - Précision</span>
              <h3 className={`${styles.headlineLg} reveal delay100`}>
                Rénovation d&apos;intérieur
              </h3>
              <p className={`${styles.bodyMd} reveal delay200`}>
                Des finitions soignées pour sublimer vos espaces. Nous réalisons des
                travaux de peinture et de finition avec des matériaux de qualité, pour
                redonner vie à vos murs et mettre en valeur votre intérieur.
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
              Le détail fait la différence.
            </h2>
            <p className={`${styles.bodyMd} reveal delay200`}>
              Préparation soignée, chantier propre et finitions durables : nous
              réalisons chaque projet avec rigueur et précision.
            </p>
          </div>
          <div className={styles.statsGrid}>
            <div className={`${styles.statItem} reveal`}>
              <strong>Sur mesure</strong>
              <span>Chaque projet est conçu en fonction de votre espace et de vos besoins.</span>
            </div>
            <div className={`${styles.statItem} reveal delay100`}>
              <strong>Conseil</strong>
              <span>Accompagnement dans le choix des couleurs et des finitions avant les travaux.</span>
            </div>
            <div className={`${styles.statItem} reveal delay200`}>
              <strong>Chantier soigné</strong>
              <span>Protection des espaces, travail précis et nettoyage complet jusqu&apos;à la fin des travaux.</span>
            </div>
          </div>
        </section>

        <section className={styles.testimonialBand}>
          <div className={styles.testimonialInner}>
            <div className={styles.sectionIntro}>
              <span className={`${styles.eyebrow} reveal`}>Avis clients</span>
              <h2 className={`${styles.headlineMd} reveal delay100`}>
                Ils nous ont confié leur projet.
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
              Nous venons sur place pour évaluer vos besoins, prendre les mesures et
              vous proposer un projet sur mesure adapté à votre espace.
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
                Sur rendez-vous. Contactez-nous pour étudier votre projet, vérifier
                les délais et organiser une première visite sur place.
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
              Les points à savoir avant de commencer votre projet.
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
            <h2 className={`${styles.headlineLg} reveal`}>Donnez vie à vos murs</h2>
            <p className={`${styles.bodyLg} reveal delay100`}>
              Chaque projet commence par une discussion. On échange sur vos envies et
              votre espace pour imaginer une réalisation adaptée.
            </p>
            <ButtonLink href="/contact" className="reveal delay200">
              Nous contacter
            </ButtonLink>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
