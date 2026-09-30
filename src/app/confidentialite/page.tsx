import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Politique de confidentialité" };

export default function ConfidentialitePage() {
  return (
    <LegalPage title="Politique de confidentialité" updatedAt="[date]">
      <p>
        Cette politique explique quelles données personnelles {site.name} collecte sur
        ce site, pourquoi, et quels sont vos droits, conformément au Règlement général
        sur la protection des données (RGPD) et à la loi Informatique et Libertés.
      </p>

      <h2>Responsable du traitement</h2>
      <p>
        <span className="placeholder">[nom de la structure]</span>,{" "}
        <span className="placeholder">[adresse]</span>. Contact : {site.email}
      </p>

      <h2>Données collectées</h2>
      <p>Via le formulaire de contact, nous collectons :</p>
      <ul>
        <li>votre nom ;</li>
        <li>votre adresse email ;</li>
        <li>le contenu de votre message.</li>
      </ul>
      <p>Aucune autre donnée n&apos;est collectée à votre insu.</p>

      <h2>Finalité et base légale</h2>
      <p>
        Ces données servent uniquement à répondre à votre demande. Le traitement repose
        sur notre intérêt légitime à répondre aux messages qui nous sont adressés
        (article 6.1.f du RGPD).
      </p>

      <h2>Durée de conservation</h2>
      <p>
        Les messages sont conservés <span className="placeholder">[durée, par ex. 3 ans]</span>{" "}
        à compter du dernier échange, puis supprimés.
      </p>

      <h2>Destinataires</h2>
      <p>
        Vos données sont destinées exclusivement à l&apos;équipe de {site.name}. Elles ne
        sont ni vendues ni cédées à des tiers. Elles peuvent être traitées par nos
        prestataires techniques (hébergement :{" "}
        Vercel Inc. ; envoi des emails : <span className="placeholder">[prestataire]</span>),
        dans la limite nécessaire à leur mission.
      </p>

      <h2>Transferts hors de l&apos;Union européenne</h2>
      <p>
        Notre hébergeur est situé aux États-Unis. Ces transferts sont encadrés par{" "}
        <span className="placeholder">
          [le Data Privacy Framework UE–États-Unis et/ou les clauses contractuelles types de la Commission européenne]
        </span>
        .
      </p>

      <h2>Vos droits</h2>
      <p>
        Vous disposez d&apos;un droit d&apos;accès, de rectification, d&apos;effacement,
        de limitation, d&apos;opposition et de portabilité de vos données. Pour les
        exercer, écrivez-nous à {site.email}.
      </p>
      <p>
        Si vous estimez que vos droits ne sont pas respectés, vous pouvez adresser une
        réclamation à la CNIL (
        <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">www.cnil.fr</a>
        ).
      </p>

      <h2>Cookies</h2>
      <p>
        Voir notre <Link href="/cookies">politique de cookies</Link>.
      </p>
    </LegalPage>
  );
}
