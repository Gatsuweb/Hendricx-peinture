import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { createMetadata } from "../seo";
import styles from "../site.module.css";

export const metadata: Metadata = createMetadata({
  title: "Conditions generales",
  description:
    "Conditions generales de Hendricx Peinture : devis, prestations, paiement, retractation, garanties et mediation.",
  path: "/conditions-generales",
});

export default function ConditionsGeneralesPage() {
  return (
    <PageShell>
      <main>
        <section className={styles.subHero}>
          <div className={styles.subHeroInner}>
            <span className={`${styles.eyebrow} reveal`}>Cadre des prestations</span>
            <h1 className={`${styles.subHeroTitle} reveal delay100`}>
              Conditions generales
            </h1>
            <p className={`${styles.bodyLg} reveal delay200`}>
              Ces conditions donnent un cadre aux demandes de devis et aux
              prestations de peinture, renovation et fresque murale.
            </p>
          </div>
        </section>

        <section className={`${styles.section} ${styles.legalSection}`}>
          <div className={styles.legalContent}>
            <article className={styles.legalBlock}>
              <h2>Champ d&apos;application</h2>
              <p>
                Les presentes conditions s&apos;appliquent aux prestations proposees
                par Hendricx Peinture : peinture interieure, peinture
                exterieure, renovation, preparation des supports, finitions et
                fresques murales sur mesure.
              </p>
            </article>

            <article className={styles.legalBlock}>
              <h2>Devis et commande</h2>
              <p>
                Toute prestation fait l&apos;objet d&apos;un devis personnalise etabli
                apres echange avec le client et, lorsque necessaire, visite du
                chantier. Le devis precise les travaux prevus, les surfaces, les
                produits ou finitions, les delais indicatifs et le prix.
              </p>
              <p>
                La commande est consideree comme validee apres acceptation du
                devis selon les modalites indiquees sur celui-ci.
              </p>
            </article>

            <article className={styles.legalBlock}>
              <h2>Prix et paiement</h2>
              <p>
                Les prix sont indiques sur devis. Mention TVA applicable :
                <strong> a completer selon le regime de l&apos;entreprise</strong>.
              </p>
              <p>
                Modalites d&apos;acompte, paiement, penalites de retard et frais
                eventuels : <strong>a completer</strong>.
              </p>
            </article>

            <article className={styles.legalBlock}>
              <h2>Execution des prestations</h2>
              <p>
                Les dates d&apos;intervention sont convenues avec le client selon le
                planning, l&apos;etat des supports, les conditions d&apos;acces et, pour
                les travaux exterieurs, les conditions meteorologiques. Le client
                s&apos;engage a permettre l&apos;acces au chantier et a signaler toute
                contrainte connue avant l&apos;intervention.
              </p>
            </article>

            <article className={styles.legalBlock}>
              <h2>Droit de retractation</h2>
              <p>
                Pour les clients consommateurs, les conditions d&apos;exercice du
                droit de retractation dependent du contexte de conclusion du
                contrat, notamment en cas de contrat conclu a distance ou hors
                etablissement. Modalites exactes : <strong>a completer</strong>.
              </p>
            </article>

            <article className={styles.legalBlock}>
              <h2>Garanties et responsabilite</h2>
              <p>
                Les prestations sont realisees avec soin, selon l&apos;etat des
                supports constates et les travaux prevus au devis. Les garanties
                legales applicables et les eventuelles garanties commerciales
                doivent etre precisees au devis ou dans les documents
                contractuels. Details : <strong>a completer</strong>.
              </p>
            </article>

            <article className={styles.legalBlock}>
              <h2>Mediation de la consommation</h2>
              <p>
                Conformement aux obligations applicables aux professionnels
                travaillant avec des consommateurs, le client peut recourir
                gratuitement a un mediateur de la consommation en cas de litige
                non resolu directement avec l&apos;entreprise.
              </p>
              <p>
                Mediateur designe, coordonnees et lien de saisine :
                <strong> a completer</strong>.
              </p>
            </article>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
