import Link from "next/link";
import Garland from "@/components/Garland";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";

export default function Home() {
  return (
    <>
      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 md:items-center md:py-20">
        <div>
          <p className="text-sm uppercase tracking-widest text-brick">Guinguette</p>
          <h1 className="mt-3 font-display text-5xl leading-tight text-forest sm:text-6xl">
            Ogrossomodo
          </h1>
          <p className="mt-3 font-display text-2xl italic text-brick sm:text-3xl">
            Un nouveau lieu, une nouvelle raison de festoyer.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-ink/85">
            Des guirlandes, des tables en bois, de la musique et une bière fraîche
            brassée à deux pas. Ogrossomodo, c&apos;est une guinguette où l&apos;on
            vient pour un verre et où l&apos;on reste pour la soirée.
          </p>
          <p className="mt-4 text-ink/70">
            [Texte de présentation à compléter : lieu, saison, horaires, ambiance…]
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/histoire"
              className="rounded-full bg-brick px-6 py-3 font-medium text-cream transition-colors hover:bg-forest"
            >
              Notre histoire
            </Link>
            <Link
              href="/contact"
              className="rounded-full border-2 border-forest px-6 py-3 font-medium text-forest transition-colors hover:bg-forest hover:text-cream"
            >
              Nous écrire
            </Link>
          </div>
        </div>
        <PhotoPlaceholder label="Photo principale de la guinguette" className="aspect-[4/3]" />
      </section>

      <Garland />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="font-display text-3xl text-forest">En images</h2>
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3">
          <PhotoPlaceholder label="Photo 1" className="col-span-2 aspect-[16/9] md:col-span-2 md:row-span-2 md:aspect-auto" />
          <PhotoPlaceholder label="Photo 2" className="aspect-square" />
          <PhotoPlaceholder label="Photo 3" className="aspect-square" />
          <PhotoPlaceholder label="Photo 4" className="aspect-square" />
          <PhotoPlaceholder label="Photo 5" className="aspect-square" />
          <PhotoPlaceholder label="Photo 6" className="col-span-2 aspect-[16/9] md:col-span-1 md:aspect-square" />
        </div>
      </section>
    </>
  );
}
