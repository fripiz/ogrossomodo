import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Mentions légales" };

export default function MentionsLegalesPage() {
  return (
    <LegalPage title="Mentions légales" updatedAt="[date]">
      <p>
        Conformément à l&apos;article 6 de la loi n° 2004-575 du 21 juin 2004 pour la
        confiance dans l&apos;économie numérique (LCEN), voici les informations relatives
        à l&apos;éditeur et à l&apos;hébergeur du site.
      </p>

      <h2>Éditeur du site</h2>
      <ul>
        <li>Nom / raison sociale : <span className="placeholder">[nom de la structure]</span></li>
        <li>Forme juridique : <span className="placeholder">[association loi 1901, SAS, EI…]</span></li>
        <li>Siège social : <span className="placeholder">[adresse]</span></li>
        <li>SIRET / RNA : <span className="placeholder">[numéro]</span></li>
        <li>Email : {site.email}</li>
        <li>Téléphone : <span className="placeholder">[numéro]</span></li>
      </ul>

      <h2>Directeur de la publication</h2>
      <p>
        <span className="placeholder">[Prénom Nom]</span>, en qualité de{" "}
        <span className="placeholder">[président·e, gérant·e…]</span>.
      </p>

      <h2>Hébergement</h2>
      <p>
        Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis —{" "}
        <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">vercel.com</a>
      </p>

      <h2>Propriété intellectuelle</h2>
      <p>
        L&apos;ensemble des contenus de ce site (textes, photographies, logos) est la
        propriété de {site.name} ou de ses partenaires, sauf mention contraire. Toute
        reproduction sans autorisation préalable est interdite.
      </p>
      <p>Crédits photos : <span className="placeholder">[à compléter]</span></p>

      <h2>Liens externes</h2>
      <p>
        Le site contient des liens vers d&apos;autres sites, notamment celui de La
        Bièrataise. {site.name} n&apos;est pas responsable du contenu de ces sites.
      </p>

      <h2>Données personnelles</h2>
      <p>
        Le traitement des données collectées via le formulaire de contact est décrit
        dans notre <Link href="/confidentialite">politique de confidentialité</Link>.
      </p>
    </LegalPage>
  );
}
