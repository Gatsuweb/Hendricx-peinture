"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  applyConsent,
  DENIED_CONSENT,
  GRANTED_CONSENT,
  hasGrantedConsent,
  loadGtmOnce,
  readStoredConsent,
  storeConsent,
  type ConsentState,
} from "@/lib/consent";
import styles from "./ConsentManager.module.css";

const choices: { key: keyof ConsentState; title: string; description: string }[] = [
  {
    key: "analytics_storage",
    title: "Mesure d'audience",
    description: "Autorise le stockage utilisé par Google Analytics 4.",
  },
  {
    key: "ad_storage",
    title: "Stockage publicitaire",
    description: "Autorise le stockage utilisé pour mesurer les annonces.",
  },
  {
    key: "ad_user_data",
    title: "Données pour la publicité",
    description: "Autorise l'utilisation de données par Google à des fins publicitaires.",
  },
  {
    key: "ad_personalization",
    title: "Personnalisation publicitaire",
    description: "Autorise la personnalisation des annonces.",
  },
];

export function ConsentManager() {
  const [ready, setReady] = useState(false);
  const [choice, setChoice] = useState<ConsentState | null>(null);
  const [open, setOpen] = useState(false);
  const [customize, setCustomize] = useState(false);
  const [draft, setDraft] = useState<ConsentState>(DENIED_CONSENT);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      const stored = readStoredConsent();
      if (stored) {
        applyConsent(stored);
        setChoice(stored);
        setDraft(stored);
        if (hasGrantedConsent(stored)) loadGtmOnce();
      } else {
        setOpen(true);
      }
      setReady(true);
    }, 0);
    return () => window.clearTimeout(timeout);
  }, []);

  function save(value: ConsentState) {
    storeConsent(value);
    applyConsent(value);
    setChoice(value);
    setDraft(value);
    setOpen(false);
    setCustomize(false);
    if (hasGrantedConsent(value)) {
      loadGtmOnce();
    } else if (document.getElementById("hendricx-gtm")) {
      // Unload an already active container after a full withdrawal.
      window.location.reload();
    }
  }

  if (!ready) return null;

  if (!open) {
    return (
      <button
        className={styles.manage}
        type="button"
        onClick={() => {
          setDraft(choice ?? DENIED_CONSENT);
          setOpen(true);
        }}
      >
        Gérer les cookies
      </button>
    );
  }

  return (
    <section className={styles.panel} role="dialog" aria-label="Préférences de confidentialité">
      <div className={styles.heading}>
        <h2>Vos choix de confidentialité</h2>
        <p>
          Nous utilisons vos choix pour la mesure d&apos;audience et la publicité.
          Avant votre accord, ces finalités sont désactivées. Consultez notre{" "}
          <Link href="/politique-confidentialite">politique de confidentialité</Link>.
        </p>
      </div>
      {customize ? (
        <div className={styles.options}>
          {choices.map(({ key, title, description }) => (
            <label className={styles.option} key={key}>
              <span>
                <strong>{title}</strong>
                <small>{description}</small>
              </span>
              <input
                type="checkbox"
                checked={draft[key] === "granted"}
                onChange={(event) =>
                  setDraft((previous) => ({
                    ...previous,
                    [key]: event.target.checked ? "granted" : "denied",
                  }))
                }
              />
            </label>
          ))}
        </div>
      ) : null}
      <div className={styles.actions}>
        <button type="button" onClick={() => save(GRANTED_CONSENT)}>
          Tout accepter
        </button>
        <button type="button" onClick={() => save(DENIED_CONSENT)}>
          Tout refuser
        </button>
        {customize ? (
          <button type="button" onClick={() => save(draft)}>
            Enregistrer mes choix
          </button>
        ) : (
          <button type="button" onClick={() => setCustomize(true)}>
            Personnaliser
          </button>
        )}
      </div>
    </section>
  );
}
