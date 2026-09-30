"use client";

import Link from "next/link";
import { useState } from "react";

const inputClass =
  "mt-1 block w-full rounded-lg border border-forest/25 bg-white px-4 py-3 text-ink placeholder:text-ink/40 focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/20";

// Structure visuelle uniquement : aucun envoi pour l'instant
export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div role="status" className="rounded-2xl bg-paper p-8">
        <p className="font-display text-2xl text-forest">Merci !</p>
        <p className="mt-2 text-ink/80">
          Le formulaire n&apos;est pas encore relié à un service d&apos;envoi : votre
          message n&apos;a pas été transmis.
        </p>
      </div>
    );
  }

  return (
    <form
      className="space-y-5"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <div>
        <label htmlFor="name" className="font-medium">Nom</label>
        <input id="name" name="name" type="text" required autoComplete="name" className={inputClass} />
      </div>
      <div>
        <label htmlFor="email" className="font-medium">Email</label>
        <input id="email" name="email" type="email" required autoComplete="email" className={inputClass} />
      </div>
      <div>
        <label htmlFor="message" className="font-medium">Message</label>
        <textarea id="message" name="message" rows={6} required className={inputClass} />
      </div>
      <p className="text-sm text-ink/70">
        Les informations saisies sont utilisées uniquement pour répondre à votre
        message. Pour en savoir plus sur la gestion de vos données et vos droits,
        consultez notre{" "}
        <Link href="/confidentialite" className="text-brick underline">
          politique de confidentialité
        </Link>
        .
      </p>
      <button
        type="submit"
        className="rounded-full bg-brick px-8 py-3 font-medium text-cream transition-colors hover:bg-forest"
      >
        Envoyer
      </button>
    </form>
  );
}
