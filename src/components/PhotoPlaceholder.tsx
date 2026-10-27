import { SHOW_DRAFT } from "@/lib/draft";

type Props = {
  label: string;
  className?: string;
};

// Emplacement photo provisoire : à remplacer par <Image> de next/image.
// En brouillon : cadre pointillé avec le nom de la photo attendue.
// En production : motif vichy décoratif (aucun texte « photo à venir » en public).
export default function PhotoPlaceholder({ label, className = "" }: Props) {
  if (!SHOW_DRAFT) {
    return <div aria-hidden="true" className={`gingham rounded-2xl ${className}`} />;
  }
  return (
    <div
      role="img"
      aria-label={`Photo à venir : ${label}`}
      className={`flex items-center justify-center rounded-2xl border-2 border-dashed border-forest/25 bg-paper text-center text-sm text-forest/60 ${className}`}
    >
      <span className="px-4">
        <svg className="mx-auto mb-2" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <circle cx="9" cy="10" r="1.5" />
          <path d="M21 16l-5-5-8 8" />
        </svg>
        {label}
      </span>
    </div>
  );
}
