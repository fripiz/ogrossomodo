import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = { title: "Politique de confidentialité" };

export default function ConfidentialitePage() {
  return (
    <LegalPage title="Politique de confidentialité" updatedAt="30 septembre 2026" hasPlaceholders>
      <h2>Responsable du traitement</h2>
      <p>
        OGROSSO (nom commercial Ogrossomodo), EURL, SIREN 914 889 738, siège social 6
        Place des Halles, 31390 Carbonne, est responsable du traitement des données
        collectées sur ce site.
      </p>

      <h2>Données collectées</h2>
      <p>Ce site collecte des données personnelles uniquement via le formulaire de contact :</p>
      <ul>
        <li>Nom</li>
        <li>Adresse email</li>
        <li>Contenu du message</li>
      </ul>

      <h2>Finalité du traitement</h2>
      <p>
        Ces données sont utilisées exclusivement pour répondre à votre demande de
        contact. Elles ne sont ni revendues, ni partagées avec des tiers à des fins
        commerciales.
      </p>
      <p>
        La base légale de ce traitement est l&apos;intérêt légitime de OGROSSO à répondre
        aux demandes qui lui sont adressées (article 6.1.f du RGPD).
      </p>

      <h2>Transfert de données hors de l&apos;Union européenne</h2>
      <p>
        L&apos;hébergeur Vercel Inc. est une société américaine. Les données peuvent donc
        être transférées vers les États-Unis. Ce transfert est encadré par le Data Privacy
        Framework UE-États-Unis, mécanisme reconnu par la Commission européenne comme
        garantissant un niveau de protection adéquat.
      </p>

      <h2>Durée de conservation</h2>
      <p>
        Les données transmises via le formulaire de contact sont conservées pendant{" "}
        <span className="placeholder">[à compléter]</span>.
      </p>

      <h2>Vos droits</h2>
      <p>
        Conformément au Règlement Général sur la Protection des Données (RGPD) et à la
        loi Informatique et Libertés, vous disposez d&apos;un droit d&apos;accès, de
        rectification, d&apos;effacement et de portabilité de vos données, ainsi que
        d&apos;un droit d&apos;opposition au traitement. Vous pouvez exercer ces droits en
        nous contactant à l&apos;adresse : <span className="placeholder">[à compléter]</span>.
      </p>
      <p>
        Vous disposez également du droit d&apos;introduire une réclamation auprès de la
        Commission Nationale de l&apos;Informatique et des Libertés (CNIL) :{" "}
        <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">www.cnil.fr</a>
      </p>

      <h2>Hébergement des données</h2>
      <p>
        Les données sont hébergées par Vercel Inc. (voir{" "}
        <Link href="/mentions-legales">Mentions légales</Link> pour les coordonnées
        complètes).
      </p>
    </LegalPage>
  );
}
