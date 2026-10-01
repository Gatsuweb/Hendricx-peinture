import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ButtonLink } from "@/components/ButtonLink";
import { JsonLd } from "@/components/JsonLd";
import { PhoneLink } from "@/components/PhoneLink";
import { CONTACT_PHONE } from "@/lib/contact";
import {
  absoluteUrl,
  baseLocalBusinessSchema,
  breadcrumbSchema,
  faqSchema,
} from "@/app/seo";
import type { LocalPageData } from "@/app/local-pages";
import styles from "@/app/site.module.css";

type LocalSeoPageProps = {
  page: LocalPageData;
};

const commitments = [
  {
    icon: "format_paint",
    title: "Préparation soignée",
    text: "Diagnostic des supports, protections et reprises utiles avant la mise en peinture.",
  },
  {
    icon: "description",
    title: "Devis lisible",
    text: "Surfaces, préparation, produits et niveau de finition sont cadrés avant le chantier.",
  },
  {
    icon: "cleaning_services",
    title: "Chantier organisé",
    text: "Ordre des pièces, temps de séchage et nettoyage sont pensés pour limiter les nuisances.",
  },
];

export function LocalSeoPage({ page }: LocalSeoPageProps) {
  const breadcrumbItems = [
    { name: "Accueil", href: "/" },
    { name: page.title, href: `/${page.slug}` },
  ];
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "PaintingService",
    "@id": absoluteUrl(`/${page.slug}#service`),
    name: page.title,
    provider: { "@id": baseLocalBusinessSchema["@id"] },
    areaServed: [{ "@type": "City", name: page.city }],
    description: page.description,
    url: absoluteUrl(`/${page.slug}`),
  };

  return (
    <>
      {[
        breadcrumbSchema(breadcrumbItems.map((item) => ({ name: item.name, path: item.href }))),
        serviceSchema,
        faqSchema(page.faqs),
      ].map((schema, index) => (
        <JsonLd data={schema} key={index} />
      ))}
      <Breadcrumbs items={breadcrumbItems} />
      <main>
        <section className={`${styles.subHero} ${styles.localHero}`}>
          <div className={styles.subHeroInner}>
            <span className={`${styles.eyebrow} reveal`}>Artisan peintre local</span>
            <h1 className={`${styles.subHeroTitle} reveal delay100`}>{page.title}</h1>
            <p className={`${styles.bodyLg} reveal delay200`}>{page.intro}</p>
            <div className={`${styles.localHeroActions} reveal delay300`}>
              <ButtonLink href="/contact">Demander un devis à {page.city}</ButtonLink>
              <ButtonLink href="#realisations" tone="line">
                Voir les réalisations
              </ButtonLink>
            </div>
          </div>
        </section>

        <nav className={styles.localQuickNav} aria-label={`Accès rapide - ${page.city}`}>
          <div className={styles.localQuickNavInner}>
            <a href="#secteur">Le secteur</a>
            <a href="#services">Les prestations</a>
            <a href="#realisations">Les réalisations</a>
            <a href="#questions">Questions fréquentes</a>
          </div>
        </nav>

        <section className={`${styles.section} ${styles.localSeoLead}`} id="secteur">
          <div className={styles.sectionIntro}>
            <span className={`${styles.eyebrow} reveal`}>Centre Bretagne</span>
            <h2 className={`${styles.headlineMd} reveal delay100`}>
              Une intervention adaptée au bâti de {page.city}
            </h2>
          </div>
          <div className={styles.localSeoCopy}>
            <p className="reveal delay100">{page.landmarks}</p>
            <p className="reveal delay200">{page.housing}</p>
            <div className={`${styles.tags} reveal delay300`} aria-label="Communes voisines">
              {page.nearby.map((city) => (
                <span className={styles.tag} key={city}>{city}</span>
              ))}
            </div>
          </div>
        </section>

        <div id="services">
          {page.sections.map((section, index) => (
            <section
              className={`${styles.section} ${styles.localSeoSection} ${
                index % 2 === 1 ? styles.localSeoSectionAlt : ""
              }`}
              key={section.title}
            >
              <div className={styles.sectionIntro}>
                <span className={`${styles.eyebrow} reveal`}>
                  {String(index + 1).padStart(2, "0")} — {page.city}
                </span>
                <h2 className={`${styles.headlineLg} reveal delay100`}>{section.title}</h2>
              </div>
              <div className={styles.localSeoCopy}>
                {section.body.map((paragraph) => (
                  <p className="reveal delay200" key={paragraph}>{paragraph}</p>
                ))}
                {index === 1 ? (
                  <div className={styles.localInlineCta}>
                    <strong>Vous avez un projet à {page.city} ?</strong>
                    <span>Décrivez les pièces, les supports et le résultat souhaité.</span>
                    <ButtonLink href="/contact" tone="line">
                      Préparer ma demande de devis
                    </ButtonLink>
                  </div>
                ) : null}
              </div>
            </section>
          ))}
        </div>

        <section className={`${styles.section} ${styles.localProofSection}`} id="realisations">
          <div className={styles.sectionIntro}>
            <span className={`${styles.eyebrow} reveal`}>Réalisations</span>
            <h2 className={`${styles.headlineMd} reveal delay100`}>
              Des finitions qui montrent le soin apporté aux supports
            </h2>
            <p className={`${styles.bodyMd} reveal delay200`}>
              Peinture intérieure, travail de matière et création murale : ces images
              illustrent le type de rendu proposé pour les projets du secteur.
            </p>
          </div>
          <div className={styles.localGalleryGrid}>
            {page.gallery.map((item, index) => (
              <figure
                className={`${styles.localGalleryItem} reveal ${
                  index === 1 ? "delay100" : index === 2 ? "delay200" : ""
                }`}
                key={item.alt}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={960}
                  height={720}
                  sizes="(min-width: 768px) 30vw, 100vw"
                />
                <figcaption>{item.caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className={styles.localReviewBand} aria-labelledby="engagements-title">
          <div className={styles.localReviewInner}>
            <div className={styles.sectionIntro}>
              <span className={`${styles.eyebrow} reveal`}>Méthode de travail</span>
              <h2 className={`${styles.headlineMd} reveal delay100`} id="engagements-title">
                Des repères clairs avant le premier coup de pinceau
              </h2>
            </div>
            <div className={styles.localCommitmentGrid}>
              {commitments.map((item, index) => (
                <article
                  className={`${styles.localCommitmentCard} reveal ${index > 0 ? "delay100" : ""}`}
                  key={item.title}
                >
                  <span className="material-symbols-outlined" aria-hidden="true">{item.icon}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.faqSection}`} id="questions">
          <div className={styles.sectionIntro}>
            <span className={`${styles.eyebrow} reveal`}>FAQ locale</span>
            <h2 className={`${styles.headlineMd} reveal delay100`}>
              Questions fréquentes pour un projet à {page.city}
            </h2>
          </div>
          <div className={styles.faqList}>
            {page.faqs.map((item, index) => (
              <details
                className={`${styles.faqItem} reveal ${index > 0 ? "delay100" : ""}`}
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

        <section className={styles.localFinalCta}>
          <div>
            <span className={styles.eyebrow}>Votre projet</span>
            <h2>Parlons de vos travaux à {page.city}</h2>
            <p>
              Indiquez le lieu, les surfaces concernées et l’état actuel des supports.
              Ces premiers éléments permettront de préparer un échange utile.
            </p>
          </div>
          <div className={styles.localFinalCtaActions}>
            <ButtonLink href="/contact">Demander un devis</ButtonLink>
            <PhoneLink variant="button" tone="line">
              Appeler le {CONTACT_PHONE.label}
            </PhoneLink>
          </div>
        </section>
      </main>
    </>
  );
}
