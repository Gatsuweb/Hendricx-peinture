"use client";

import { useState } from "react";
import buttonStyles from "./ButtonLink.module.css";
import styles from "@/app/site.module.css";

type SubmitState = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [state, setState] = useState<SubmitState>("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        message: formData.get("message"),
        website: formData.get("website"),
      }),
    });

    if (response.ok) {
      form.reset();
      setState("success");
      return;
    }

    setState("error");
  }

  return (
    <form className={`${styles.fieldGroup} reveal delay200`} onSubmit={handleSubmit}>
      <input aria-label="Nom" name="name" placeholder="Nom" autoComplete="name" required />
      <input
        aria-label="Email"
        name="email"
        placeholder="Email"
        type="email"
        autoComplete="email"
        required
      />
      <input
        aria-label="Telephone"
        name="phone"
        placeholder="Telephone"
        type="tel"
        autoComplete="tel"
      />
      <input
        aria-hidden="true"
        className={styles.honeypot}
        name="website"
        tabIndex={-1}
        autoComplete="off"
      />
      <textarea
        aria-label="Message"
        name="message"
        placeholder="Commune, type de travaux, surfaces, delais souhaites"
        required
      />
      <button
        className={`${buttonStyles.button} ${buttonStyles.dark}`}
        disabled={state === "sending"}
        type="submit"
      >
        <span className={buttonStyles.fill} />
        <span className={buttonStyles.label}>
          {state === "sending" ? "Envoi en cours" : "Envoyer la demande"}
          <span className="material-symbols-outlined">arrow_forward</span>
        </span>
      </button>
      {state === "success" ? (
        <p className={styles.formStatus}>Votre demande a bien ete envoyee.</p>
      ) : null}
      {state === "error" ? (
        <p className={styles.formStatus}>
          L&apos;envoi a echoue. Vous pouvez ecrire a n.hendricx@laposte.net.
        </p>
      ) : null}
    </form>
  );
}
