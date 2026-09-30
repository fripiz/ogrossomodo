import { site } from "@/lib/site";

export default function BierataiseBanner() {
  return (
    <section aria-labelledby="bierataise-title" className="bg-forest text-cream">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <p className="text-sm uppercase tracking-widest text-mustard">Notre brasserie</p>
          <h2 id="bierataise-title" className="mt-2 font-display text-3xl">
            La Bièrataise
          </h2>
          <p className="mt-3 max-w-xl text-cream/85">
            Les bières servies à la guinguette sont brassées par La Bièrataise.
            Découvrez la brasserie, ses recettes et ses points de vente.
          </p>
          <p className="mt-5 text-xs text-cream/70">
            L&apos;abus d&apos;alcool est dangereux pour la santé, à consommer avec modération.
          </p>
        </div>
        <a
          href={site.bierataiseUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-mustard px-6 py-3 font-medium text-ink transition-colors hover:bg-cream"
        >
          Visiter le site de la brasserie
          <span aria-hidden="true">↗</span>
          <span className="sr-only">(nouvel onglet)</span>
        </a>
      </div>
    </section>
  );
}
