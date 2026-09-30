import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-4 py-24 text-center">
      <h1 className="font-display text-4xl text-forest">Page introuvable</h1>
      <p className="mt-4 text-ink/80">Cette page n&apos;existe pas, ou plus.</p>
      <Link href="/" className="mt-8 inline-block rounded-full bg-brick px-6 py-3 text-cream hover:bg-forest">
        Retour à l&apos;accueil
      </Link>
    </div>
  );
}
