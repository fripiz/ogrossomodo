"use client";

import dynamic from "next/dynamic";
import PracticalInfoBlock from "@/components/PracticalInfoBlock";
import type { PracticalInfo } from "@/lib/fidelityapp";
import { directions, site } from "@/lib/site";

const VenueMap = dynamic(() => import("@/components/VenueMap"), {
  ssr: false,
  loading: () => <div className="flex h-full min-h-72 items-center justify-center bg-paper text-ink/60">Chargement de la carte…</div>,
});

// Accueil : carte avec le point de la guinguette, infos pratiques à droite.
export default function VenueSection({ info }: { info: PracticalInfo | null }) {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6" aria-labelledby="venir-titre">
      <h2 id="venir-titre" className="font-display text-3xl text-forest">Nous rendre visite</h2>
      <div className="mt-8 grid gap-8 md:grid-cols-[3fr_2fr] md:items-stretch">
        <div className="min-w-0 overflow-hidden rounded-2xl border border-forest/15">
          <VenueMap lat={site.position.lat} lng={site.position.lng} label={site.name} />
        </div>
        <div className="min-w-0 space-y-6 text-ink/85">
          <PracticalInfoBlock info={info} />
          <div>
            <h2 className="font-display text-xl text-forest">Itinéraire</h2>
            <ul className="mt-3 flex flex-wrap gap-2" aria-label="Itinéraire vers la guinguette">
              {directions().map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block rounded-full border-2 border-forest px-4 py-2 text-sm font-medium text-forest transition-colors hover:bg-forest hover:text-cream"
                  >
                    {link.label}
                    <span className="sr-only"> (nouvel onglet)</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
