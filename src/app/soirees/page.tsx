import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import EventList from "@/components/EventList";
import { getUpcomingEvents } from "@/lib/fidelityapp";

export const metadata: Metadata = {
  title: "Soirées et concerts à Bérat",
  description:
    "Les prochaines soirées de la guinguette Ogrossomodo à Bérat : concerts, bals et événements, avec les bières de La Bièrataise.",
  alternates: { canonical: "/soirees" },
};

export default async function SoireesPage() {
  const events = await getUpcomingEvents();

  return (
    <>
      <PageHeader title="Prochaines soirées" intro="Concerts, bals, soirées à thème : venez danser sous les guirlandes." />
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
        {events.length > 0 ? (
          <EventList events={events} />
        ) : (
          <div className="rounded-2xl bg-paper p-8 text-center">
            <p className="font-display text-2xl text-forest">Le programme arrive bientôt</p>
            <p className="mt-2 text-ink/80">
              Les prochaines dates seront annoncées ici. Une question ou une envie de privatiser la guinguette ?{" "}
              <Link href="/contact" className="text-brick underline">
                Écrivez-nous
              </Link>
              .
            </p>
          </div>
        )}
      </div>
    </>
  );
}
