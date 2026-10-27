"use client";

import Link from "next/link";
import { useState } from "react";

const inputClass =
  "mt-1 block w-full rounded-lg border border-forest/25 bg-white px-4 py-3 text-ink placeholder:text-ink/40 focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/20";

const API_URL = (
  process.env.NEXT_PUBLIC_FIDELITYAPP_API_URL || "https://fidelityapp.fr/api/public/merchant"
).replace(/\/$/, "");
const MERCHANT_ID = (process.env.NEXT_PUBLIC_FIDELITYAPP_MERCHANT_ID || "").trim();

type Status = "idle" | "sending" | "sent" | "error";

// Envoi vers FidelityApp : le message arrive dans « Messages » du dashboard
// de la guinguette et par email.
export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;
    const data = new FormData(event.currentTarget);
    if (!MERCHANT_ID) {
      setError("Le formulaire n'est pas encore configuré.");
      setStatus("error");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch(`${API_URL}/${MERCHANT_ID}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: String(data.get("name") ?? "").trim(),
          email: String(data.get("email") ?? "").trim(),
          phone: String(data.get("phone") ?? "").trim(),
          subject: String(data.get("subject") ?? "").trim(),
          message: String(data.get("message") ?? "").trim(),
          website: String(data.get("website") ?? ""),
        }),
      });
      const json = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };
      if (!res.ok || !json.ok) {
        setError(json.error ?? "Votre message n'a pas pu être envoyé.");
        setStatus("error");
        return;
      }
      setStatus("sent");
    } catch {
      setError("Connexion impossible. Vérifiez votre connexion et réessayez.");
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="rounded-2xl bg-paper p-8">
        <p className="font-display text-2xl text-forest">Merci !</p>
        <p className="mt-2 text-ink/80">Votre message est bien envoyé. Nous vous répondons rapidement.</p>
      </div>
    );
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="font-medium">Nom</label>
          <input id="name" name="name" type="text" required autoComplete="name" className={inputClass} />
        </div>
        <div>
          <label htmlFor="phone" className="font-medium">
            Téléphone <span className="font-normal text-ink/60">(facultatif)</span>
          </label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" className={inputClass} />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="font-medium">Email</label>
        <input id="email" name="email" type="email" required autoComplete="email" className={inputClass} />
      </div>
      <div>
        <label htmlFor="subject" className="font-medium">Votre demande</label>
        <select id="subject" name="subject" className={inputClass} defaultValue="Question">
          <option>Question</option>
          <option>Réservation de table</option>
          <option>Privatisation / événement</option>
          <option>Artiste ou groupe</option>
          <option>Autre</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="font-medium">Message</label>
        <textarea id="message" name="message" rows={6} required className={inputClass} />
      </div>
      {/* Champ piège : invisible pour les humains, rempli par les robots */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Ne pas remplir ce champ</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
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
      {status === "error" && (
        <p role="alert" className="rounded-lg bg-brick/10 px-4 py-3 text-brick">
          {error}
        </p>
      )}
      <button
        type="submit"
        disabled={status === "sending"}
        className="rounded-full bg-brick px-8 py-3 font-medium text-cream transition-colors hover:bg-forest disabled:opacity-60"
      >
        {status === "sending" ? "Envoi…" : "Envoyer"}
      </button>
    </form>
  );
}
