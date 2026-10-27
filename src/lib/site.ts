export const site = {
  name: "Ogrossomodo",
  tagline: "Guinguette",
  description:
    "Guinguette à Bérat, à la brasserie La Bièrataise : soirées, concerts et bières artisanales brassées sur place. Programme, horaires et accès.",
  bierataiseUrl: "https://bierataise.com",
  url: "https://ogrossomodo.com",
  // Coordonnées : saisies par la guinguette dans FidélityApp (Infos pratiques).
  // Aucune valeur inventée ici : vide = rien n'est affiché en production.
  city: "Bérat",
  // Position GPS de la guinguette (même lieu que la brasserie La Bièrataise,
  // 848 route de Poucharramet) : carte et boutons d'itinéraire de l'accueil.
  position: { lat: 43.393304, lng: 1.171074 },
};

// Liens d'itinéraire (ouvrent l'application GPS du téléphone).
export function directions(): { label: string; href: string }[] {
  const ll = `${site.position.lat},${site.position.lng}`;
  return [
    { label: "Google Maps", href: `https://www.google.com/maps/dir/?api=1&destination=${ll}` },
    { label: "Waze", href: `https://waze.com/ul?ll=${ll}&navigate=yes` },
    { label: "Plans (iPhone)", href: `https://maps.apple.com/?daddr=${ll}` },
  ];
}

export const mainNav = [
  { href: "/", label: "Accueil" },
  { href: "/soirees", label: "Soirées" },
  { href: "/histoire", label: "Histoire" },
  { href: "/contact", label: "Contact" },
];

export const legalNav = [
  { href: "/mentions-legales", label: "Mentions légales" },
  { href: "/confidentialite", label: "Politique de confidentialité" },
  { href: "/cookies", label: "Politique de cookies" },
];
