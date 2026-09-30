import PageHeader from "@/components/PageHeader";

type Props = {
  title: string;
  updatedAt: string;
  // Affiche l'encart jaune tant qu'il reste des passages [à compléter]
  hasPlaceholders?: boolean;
  children: React.ReactNode;
};

export default function LegalPage({ title, updatedAt, hasPlaceholders = false, children }: Props) {
  return (
    <>
      <PageHeader title={title} />
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        {hasPlaceholders && (
          <p className="mb-8 rounded-lg border border-mustard/50 bg-mustard/10 px-4 py-3 text-sm">
            Les passages <span className="rounded bg-mustard/25 px-1">surlignés</span> sont
            à compléter.
          </p>
        )}
        <div className="prose-page">{children}</div>
        <p className="mt-12 text-sm text-ink/60">Dernière mise à jour : {updatedAt}</p>
      </div>
    </>
  );
}
