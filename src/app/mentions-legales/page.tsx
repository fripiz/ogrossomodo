import type { Metadata } from "next";
import { site } from "@/lib/site";
import LegalPage from "@/components/LegalPage";
import { ToConfirm } from "@/components/Draft";

export const metadata: Metadata = {
  title: "Mentions légales",
  description:
    "Mentions légales du site ogrossomodo.com : éditeur, directeur de la publication, hébergeur et propriété des contenus.",
  alternates: { canonical: "/mentions-legales" },
};

export default function MentionsLegalesPage() {
  return (
    <LegalPage title="Mentions légales" updatedAt="30 septembre 2026" hasPlaceholders>
      <h2>Éditeur du site</h2>
      <p>Le site internet Ogrossomodo est édité par :</p>
      <ul>
        <li>Raison sociale : OGROSSO</li>
        <li>Nom commercial : Ogrossomodo</li>
        <li>
          Forme juridique : EURL (entreprise unipersonnelle à responsabilité limitée) au
          capital de 2 000 €
        </li>
        <li>SIREN : 914 889 738</li>
        <li>SIRET (siège) : 914 889 738 00029</li>
        <li>RCS : Toulouse, 914 889 738</li>
        <li>TVA intracommunautaire : FR03914889738</li>
        <li>Siège social : 6 Place des Halles, 31390 Carbonne</li>
        <li>Directeur de la publication : Romain Rosso, gérant</li>
        <li>
          Contact : {site.legalEmail} · {site.legalPhone}
        </li>
      </ul>

      <h2>Hébergement</h2>
      <p>Le site est hébergé par :</p>
      <p>
        Vercel Inc., société de droit américain, 440 N Barranca Ave #4133, Covina, CA 91723,
        États-Unis. Téléphone : +1 951 383 6898 <ToConfirm /> Site web :{" "}
        <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">vercel.com</a>
      </p>

      <h2>Propriété intellectuelle</h2>
      <p>
        L&apos;ensemble des contenus présents sur ce site (textes, images, logos,
        graphismes) est protégé par le droit d&apos;auteur. Toute reproduction ou
        représentation, totale ou partielle, sans autorisation préalable, est interdite.
      </p>

      <h2>Avertissement</h2>
      <p>L&apos;abus d&apos;alcool est dangereux pour la santé, à consommer avec modération.</p>
    </LegalPage>
  );
}
