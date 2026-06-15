import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageShell } from "@/components/PageShell";
import { createMetadata } from "../seo";
import { blogDrafts } from "./drafts";
import styles from "../site.module.css";

export const metadata: Metadata = createMetadata({
  title: "Blog peinture et renovation en Centre Bretagne",
  description:
    "Brouillons editoriaux Hendricx Peinture : conseils peinture, renovation interieure, longere bretonne et fresques murales. Page non indexee avant publication.",
  path: "/blog",
  noindex: true,
});

export default function BlogPage() {
  return (
    <PageShell>
      <Breadcrumbs
        items={[
          { name: "Accueil", href: "/" },
          { name: "Blog", href: "/blog" },
        ]}
      />
      <main>
        <section className={styles.subHero}>
          <div className={styles.subHeroInner}>
            <span className={`${styles.eyebrow} reveal`}>Brouillons SEO</span>
            <h1 className={`${styles.subHeroTitle} reveal delay100`}>
              Blog peinture en preparation
            </h1>
            <p className={`${styles.bodyLg} reveal delay200`}>
              Les sujets sont prepares pour une publication progressive. Cette page
              reste volontairement non indexee tant que les articles ne sont pas
              finalises.
            </p>
          </div>
        </section>
        <section className={`${styles.section} ${styles.draftGrid}`}>
          {blogDrafts.map((draft) => (
            <article className={`${styles.draftCard} reveal`} key={draft.slug}>
              <span className={styles.eyebrow}>{draft.status}</span>
              <h2>{draft.title}</h2>
              <p>{draft.angle}</p>
              <strong>Mot-cle cible : {draft.target}</strong>
            </article>
          ))}
        </section>
      </main>
    </PageShell>
  );
}
