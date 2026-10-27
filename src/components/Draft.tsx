import { SHOW_DRAFT } from "@/lib/draft";

// Information manquante : surlignée en brouillon, remplacée par `fallback`
// (rien par défaut) en production.
export function ToConfirm({
  children = "[à compléter]",
  fallback = null,
}: {
  children?: React.ReactNode;
  fallback?: React.ReactNode;
}) {
  if (!SHOW_DRAFT) return <>{fallback}</>;
  return <mark className="placeholder">{children}</mark>;
}

// Passage qui n'a de sens qu'une fois complété : visible en brouillon seulement.
export function DraftOnly({ children }: { children: React.ReactNode }) {
  return SHOW_DRAFT ? <>{children}</> : null;
}

// Passage affiché uniquement en production, à la place d'un contenu brouillon.
export function PublicOnly({ children }: { children: React.ReactNode }) {
  return SHOW_DRAFT ? null : <>{children}</>;
}
