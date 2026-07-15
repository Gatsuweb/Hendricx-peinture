import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { createMetadata } from "../seo";
import styles from "../site.module.css";

export const metadata: Metadata = createMetadata({
  title: "Politique de confidentialite",
  description:
    "Politique de confidentialite de Hendricx Peinture : donnees personnelles, finalites, conservation, droits RGPD et cookies.",
  path: "/politique-confidentialite",
});

export default function PolitiqueConfidentialitePage() {
  return (
    <PageShell>
      <main>
        <section className={styles.subHero}>
          <div className={styles.subHeroInner}>
            <span className={`${styles.eyebrow} reveal`}>Donnees personnelles</span>
            <h1 className={`${styles.subHeroTitle} reveal delay100`}>
              Politique de confidentialite
            </h1>
            <p className={`${styles.bodyLg} reveal delay200`}>
              Cette page explique comment les informations transmises a Hendricx
              Peinture peuvent etre utilisees dans le cadre d&apos;une demande de
              contact ou de devis.
            </p>
          </div>
        </section>

        <section className={`${styles.section} ${styles.legalSection}`}>
          <div className={styles.legalContent}>
            <article className={styles.legalBlock}>
              <h2>Responsable du traitement</h2>
              <p>
                Le responsable du traitement est Hendricx Peinture, entreprise
                individuelle de Nicolas Hendricx.
              </p>
              <p>
                Contact donnees personnelles :{" "}
                <a href="mailto:contact@hendricx-peinture.fr">
                  contact@hendricx-peinture.fr
                </a>
              </p>
            </article>

            <article className={styles.legalBlock}>
              <h2>Donnees collectees</h2>
              <p>
                Les donnees susceptibles d&apos;etre transmises sont les
                informations que vous communiquez volontairement lors d&apos;une
                demande de contact ou de devis : nom, adresse e-mail, telephone,
                commune, description du projet et toute information utile a la
                preparation d&apos;une reponse.
              </p>
            </article>

            <article className={styles.legalBlock}>
              <h2>Finalites et base legale</h2>
              <p>
                Ces donnees sont utilisees pour repondre aux demandes, preparer
                un devis, organiser un rendez-vous et assurer le suivi de la
                relation commerciale. La base legale est l&apos;execution de mesures
                precontractuelles ou l&apos;interet legitime de l&apos;entreprise a
                repondre aux sollicitations recues.
              </p>
            </article>

            <article className={styles.legalBlock}>
              <h2>Duree de conservation</h2>
              <p>
                Les donnees liees a une demande sans suite sont conservees pour
                une duree raisonnable a compter du dernier echange. Duree exacte
                a definir par l&apos;entreprise : <strong>a completer</strong>.
              </p>
            </article>

            <article className={styles.legalBlock}>
              <h2>Destinataires</h2>
              <p>
                Les donnees sont destinees a Hendricx Peinture. Elles ne sont
                pas vendues a des tiers. Si des prestataires techniques
                interviennent dans l&apos;hebergement ou la messagerie, ils agissent
                uniquement dans le cadre necessaire au fonctionnement du site et
                des echanges.
              </p>
            </article>

            <article className={styles.legalBlock}>
              <h2>Vos droits</h2>
              <p>
                Vous pouvez demander l&apos;acces, la rectification, l&apos;effacement ou
                la limitation du traitement de vos donnees, ainsi que vous
                opposer a certains traitements lorsque la reglementation le
                permet.
              </p>
              <p>
                Vous pouvez exercer ces droits par e-mail a{" "}
                <a href="mailto:contact@hendricx-peinture.fr">
                  contact@hendricx-peinture.fr
                </a>
                . Vous disposez egalement du droit d&apos;introduire une reclamation
                aupres de la CNIL.
              </p>
            </article>

            <article className={styles.legalBlock}>
              <h2>Cookies et traceurs</h2>
              <p>
                Le site ne doit deposer des cookies ou traceurs soumis au
                consentement qu&apos;apres accord explicite de l&apos;utilisateur. Si un
                outil de mesure d&apos;audience, de publicite, de video embarquee ou
                de suivi tiers est ajoute, un bandeau de consentement et un
                mecanisme de retrait devront etre mis en place.
              </p>
            </article>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
