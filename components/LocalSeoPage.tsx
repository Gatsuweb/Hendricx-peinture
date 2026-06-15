import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ButtonLink } from "@/components/ButtonLink";
import { JsonLd } from "@/components/JsonLd";
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
    <PageContent
      page={page}
      breadcrumbItems={breadcrumbItems}
      schemas={[
        breadcrumbSchema(breadcrumbItems.map((item) => ({ name: item.name, path: item.href }))),
        serviceSchema,
        faqSchema(page.faqs),
      ]}
    />
  );
}

function PageContent({
  page,
  breadcrumbItems,
  schemas,
}: LocalSeoPageProps & {
  breadcrumbItems: Array<{ name: string; href: string }>;
  schemas: unknown[];
}) {
  return (
    <>
      {schemas.map((schema, index) => (
        <JsonLd data={schema} key={index} />
      ))}
      <Breadcrumbs items={breadcrumbItems} />
      <main>
        <section className={styles.subHero}>
          <div className={styles.subHeroInner}>
            <span className={`${styles.eyebrow} reveal`}>Artisan peintre local</span>
            <h1 className={`${styles.subHeroTitle} reveal delay100`}>{page.title}</h1>
            <p className={`${styles.bodyLg} reveal delay200`}>{page.intro}</p>
          </div>
        </section>

        <section className={`${styles.section} ${styles.localSeoLead}`}>
          <div className={styles.sectionIntro}>
            <span className={`${styles.eyebrow} reveal`}>Centre Bretagne</span>
            <h2 className={`${styles.headlineMd} reveal delay100`}>
              Une intervention adaptee au bati de {page.city}
            </h2>
          </div>
          <div className={styles.localSeoCopy}>
            <p className="reveal delay100">{page.landmarks}</p>
            <p className="reveal delay200">{page.housing}</p>
            <div className={`${styles.tags} reveal delay300`}>
              {page.nearby.map((city) => (
                <span className={styles.tag} key={city}>
                  {city}
                </span>
              ))}
            </div>
          </div>
        </section>

        {page.sections.map((section, index) => (
          <section
            className={`${styles.section} ${styles.localSeoSection}`}
            key={section.title}
          >
            <div className={styles.sectionIntro}>
              <span className={`${styles.eyebrow} reveal`}>
                {String(index + 1).padStart(2, "0")} - {page.city}
              </span>
              <h2 className={`${styles.headlineLg} reveal delay100`}>{section.title}</h2>
            </div>
            <div className={styles.localSeoCopy}>
              {section.body.map((paragraph) => (
                <p className="reveal delay200" key={paragraph}>
                  {paragraph}
                </p>
              ))}
              {index === 1 || index === 4 ? (
                <ButtonLink href="/contact" tone="line" className="reveal delay300">
                  Demander un devis a {page.city}
                </ButtonLink>
              ) : null}
            </div>
          </section>
        ))}

        <section className={`${styles.section} ${styles.localProofSection}`}>
          <div className={styles.sectionIntro}>
            <span className={`${styles.eyebrow} reveal`}>Galerie locale</span>
            <h2 className={`${styles.headlineMd} reveal delay100`}>
              Exemples de finitions pour un projet a {page.city}
            </h2>
            <p className={`${styles.bodyMd} reveal delay200`}>
              Quelques reperes visuels pour comprendre le niveau de preparation, de
              matiere et de finition recherche sur les chantiers locaux.
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
                <img src={item.src} alt={item.alt} loading="lazy" decoding="async" />
                <figcaption>{item.caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className={styles.localReviewBand}>
          <div className={styles.localReviewInner}>
            <div className={styles.sectionIntro}>
              <span className={`${styles.eyebrow} reveal`}>Avis clients</span>
              <h2 className={`${styles.headlineMd} reveal delay100`}>
                Des retours centres sur la proprete et les finitions
              </h2>
            </div>
            <div className={styles.localReviewGrid}>
              {page.reviews.map((review, index) => (
                <article
                  className={`${styles.localReviewCard} reveal ${
                    index === 1 ? "delay100" : ""
                  }`}
                  key={review.quote}
                >
                  <span className="material-symbols-outlined">format_quote</span>
                  <p>{review.quote}</p>
                  <footer>
                    <strong>{review.author}</strong>
                    <span>{review.context}</span>
                  </footer>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.localSeoLinks}`}>
          <div className={styles.sectionIntro}>
            <span className={`${styles.eyebrow} reveal`}>Pour aller plus loin</span>
            <h2 className={`${styles.headlineMd} reveal delay100`}>
              Services, realisations et prise de contact
            </h2>
          </div>
          <div className={styles.localLinkGrid}>
            <ButtonLink href="/services" tone="line">
              Voir les services
            </ButtonLink>
            <ButtonLink href="/realisations" tone="line">
              Voir les realisations
            </ButtonLink>
            <ButtonLink href="/a-propos" tone="line">
              Decouvrir l&apos;atelier
            </ButtonLink>
            <ButtonLink href="/contact">Demander un devis</ButtonLink>
          </div>
        </section>

        <section className={`${styles.section} ${styles.faqSection}`}>
          <div className={styles.sectionIntro}>
            <span className={`${styles.eyebrow} reveal`}>FAQ locale</span>
            <h2 className={`${styles.headlineMd} reveal delay100`}>
              Questions frequentes pour un projet a {page.city}
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
      </main>
    </>
  );
}
