import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Politique de cookies" };

export default function CookiesPage() {
  return (
    <LegalPage title="Politique de cookies" updatedAt="[date]">
      <h2>Qu&apos;est-ce qu&apos;un cookie ?</h2>
      <p>
        Un cookie est un petit fichier déposé sur votre appareil lorsque vous visitez un
        site. Il permet notamment de mémoriser des préférences ou de mesurer
        l&apos;audience.
      </p>

      <h2>Cookies utilisés sur ce site</h2>
      <p>
        À ce jour, le site {site.name} ne dépose <strong>aucun cookie de mesure
        d&apos;audience, publicitaire ou de réseau social</strong>. Seuls des cookies
        strictement nécessaires au fonctionnement technique du site peuvent être
        utilisés ; ils sont exemptés de consentement (article 82 de la loi Informatique
        et Libertés).
      </p>
      <p>
        C&apos;est pourquoi aucun bandeau de consentement ne s&apos;affiche lors de
        votre visite.
      </p>

      <h2>Liens vers d&apos;autres sites</h2>
      <p>
        Les sites vers lesquels nous renvoyons (par exemple celui de La Bièrataise)
        disposent de leur propre politique de cookies, que nous vous invitons à
        consulter.
      </p>

      <h2>Gérer les cookies dans votre navigateur</h2>
      <p>
        Vous pouvez à tout moment configurer votre navigateur pour bloquer ou supprimer
        les cookies. La marche à suivre est décrite dans l&apos;aide de votre navigateur
        (Chrome, Firefox, Safari, Edge…).
      </p>

      <h2>Évolutions</h2>
      <p>
        Si nous ajoutons un outil de mesure d&apos;audience ou un contenu tiers
        (carte, vidéo, réseaux sociaux), cette page sera mise à jour et votre
        consentement sera demandé lorsque la loi l&apos;exige.
      </p>
    </LegalPage>
  );
}
