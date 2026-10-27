import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import { DraftOnly, PublicOnly, ToConfirm } from "@/components/Draft";

export const metadata: Metadata = {
  title: "Notre histoire",
  description:
    "L'histoire de la guinguette Ogrossomodo, édition après édition, jusqu'à son nouveau lieu à Bérat, à la brasserie La Bièrataise.",
  alternates: { canonical: "/histoire" },
};

// TODO: remplacer par les vraies éditions (années, lieux, anecdotes)
const editions = [
  {
    period: "Édition 1 — [année]",
    place: "[Premier emplacement]",
    text: "Texte à compléter : comment tout a commencé, le premier lieu, les premières soirées.",
  },
  {
    period: "Édition 2 — [année]",
    place: "[Deuxième emplacement]",
    text: "Texte à compléter : le déménagement, ce qui a changé, les moments marquants.",
  },
  {
    period: "Nouvelle édition — [année]",
    place: "[Emplacement actuel]",
    text: "Texte à compléter : le nouveau lieu, ce qui attend les visiteurs cette saison.",
    current: true,
  },
];

export default function HistoirePage() {
  return (
    <>
      <PageHeader
        title="Notre histoire"
        intro="Une guinguette qui a changé de décor au fil des éditions, sans jamais perdre son esprit."
      />

      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <div className="prose-page">
          <DraftOnly>
            <p>
              <ToConfirm>[Texte d&apos;introduction à compléter]</ToConfirm>{" "}
              Qui est derrière Ogrossomodo, pourquoi une guinguette, le lien avec La
              Bièrataise…
            </p>
          </DraftOnly>
          <PublicOnly>
            <p>
              Ogrossomodo, c&apos;est une guinguette née de l&apos;envie de se retrouver autour
              d&apos;une table, d&apos;un verre et de la musique. Elle a connu plusieurs décors au
              fil des éditions et pose aujourd&apos;hui ses guirlandes à Bérat, aux côtés de la
              brasserie La Bièrataise.
            </p>
          </PublicOnly>
        </div>

        <DraftOnly>
        <ol className="relative mt-12 space-y-12 border-l-2 border-brick/30 pl-8">
          {editions.map((edition) => (
            <li key={edition.period} className="relative">
              <span
                aria-hidden="true"
                className={`absolute -left-[41px] top-1 h-4 w-4 rounded-full border-2 border-cream ${
                  edition.current ? "bg-brick ring-4 ring-brick/20" : "bg-forest"
                }`}
              />
              <p className="text-sm uppercase tracking-widest text-brick">
                {edition.period}
                {edition.current && (
                  <span className="ml-2 rounded-full bg-mustard px-2 py-0.5 text-xs normal-case tracking-normal text-ink">
                    En ce moment
                  </span>
                )}
              </p>
              <h2 className="mt-1 font-display text-2xl text-forest">{edition.place}</h2>
              <p className="mt-3 leading-relaxed text-ink/80">{edition.text}</p>
              <PhotoPlaceholder label={`Photo — ${edition.place}`} className="mt-5 aspect-[16/9]" />
            </li>
          ))}
        </ol>
        </DraftOnly>
      </div>
    </>
  );
}
