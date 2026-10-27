import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Politique de cookies",
  description:
    "Les cookies utilisés sur ogrossomodo.com, leur durée et la façon de les gérer ou de les refuser depuis votre navigateur.",
  alternates: { canonical: "/cookies" },
};

export default function CookiesPage() {
  return (
    <LegalPage title="Politique de cookies" updatedAt="30 septembre 2026">
      <p>
        Ce site n&apos;utilise actuellement aucun cookie ni traceur de suivi (pas
        d&apos;outil d&apos;analyse d&apos;audience, pas de publicité ciblée).
      </p>
      <p>Aucun consentement préalable n&apos;est donc requis pour naviguer sur ce site.</p>
      <p>
        Cette page sera mise à jour si des outils de mesure d&apos;audience ou
        d&apos;autres traceurs venaient à être ajoutés au site, conformément à la
        réglementation applicable (RGPD et directive ePrivacy).
      </p>
    </LegalPage>
  );
}
