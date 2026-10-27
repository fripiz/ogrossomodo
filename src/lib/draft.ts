// Mode brouillon : les passages à compléter sont visibles en local et sur les
// previews Vercel, masqués (ou remplacés par un texte neutre) en production.
// NEXT_PUBLIC_SHOW_DRAFT=true force l'affichage en production.
export const SHOW_DRAFT =
  process.env.NEXT_PUBLIC_SITE_ENV !== "production" || process.env.NEXT_PUBLIC_SHOW_DRAFT === "true";
