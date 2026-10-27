import Link from "next/link";
import Garland from "@/components/Garland";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import EventList from "@/components/EventList";
import { getPracticalInfo, getUpcomingEvents } from "@/lib/fidelityapp";
import { hasHours, openingHoursSpecification } from "@/lib/hours";
import { site } from "@/lib/site";
import { DraftOnly, ToConfirm } from "@/components/Draft";

export default async function Home() {
  const [events, info] = await Promise.all([getUpcomingEvents(4), getPracticalInfo()]);

  // Données structurées Google : la guinguette (bar) et ses prochaines soirées.
  const address = {
    "@type": "PostalAddress",
    streetAddress: info?.address || undefined,
    postalCode: info?.postalCode || undefined,
    addressLocality: info?.city || site.city,
    addressRegion: "Haute-Garonne",
    addressCountry: "FR",
  };
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BarOrPub",
      name: site.name,
      description: site.description,
      url: site.url,
      address,
      ...(info?.phone ? { telephone: info.phone } : {}),
      ...(hasHours(info) ? { openingHoursSpecification: openingHoursSpecification(info) } : {}),
    },
    ...events.map((event) => ({
      "@context": "https://schema.org",
      "@type": "Event",
      name: event.title,
      description: event.description ?? undefined,
      startDate: event.eventDate,
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      location: { "@type": "Place", name: site.name, address },
      organizer: { "@type": "Organization", name: site.name, url: site.url },
    })),
  ];

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
          <DraftOnly>
            <p className="mt-4 text-ink/70">
              <ToConfirm>[Texte de présentation à compléter : lieu, saison, horaires, ambiance…]</ToConfirm>
            </p>
          </DraftOnly>
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

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6" aria-labelledby="soirees-titre">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 id="soirees-titre" className="font-display text-3xl text-forest">Prochaines soirées</h2>
          <Link href="/soirees" className="font-medium text-brick underline underline-offset-4">
            Tout le programme
          </Link>
        </div>
        <div className="mt-8">
          {events.length > 0 ? (
            <EventList events={events} />
          ) : (
            <p className="rounded-2xl bg-paper p-6 text-ink/80">
              Le programme de la saison arrive bientôt.{" "}
              <Link href="/contact" className="text-brick underline">
                Une question ? Écrivez-nous
              </Link>
              .
            </p>
          )}
        </div>
      </section>

      <DraftOnly>
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
      </DraftOnly>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
    </>
  );
}
