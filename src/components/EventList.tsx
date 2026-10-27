import { eventTime, formatEventDate, type AgendaEvent } from "@/lib/fidelityapp";

// Liste des prochaines soirées (saisies dans FidelityApp → Agenda).
export default function EventList({ events }: { events: AgendaEvent[] }) {
  return (
    <ol className="grid gap-4 sm:grid-cols-2">
      {events.map((event) => {
        const time = eventTime(event.eventDate);
        return (
          <li key={event.id} className="flex gap-4 rounded-2xl bg-paper p-5">
            <div className="flex w-16 shrink-0 flex-col items-center justify-center rounded-xl bg-brick py-2 text-cream">
              <span className="text-xs uppercase tracking-widest">
                {formatEventDate(event.eventDate, { month: "short" }).replace(".", "")}
              </span>
              <span className="font-display text-3xl leading-none">
                {formatEventDate(event.eventDate, { day: "numeric" }).replace("er", "")}
              </span>
            </div>
            <div className="min-w-0">
              <p className="text-sm text-ink/70 first-letter:uppercase">
                {formatEventDate(event.eventDate, { weekday: "long", day: "numeric", month: "long" })}
                {time && ` · ${time}`}
              </p>
              <h3 className="mt-1 font-display text-xl text-forest">{event.title}</h3>
              {event.description && (
                <p className="mt-2 whitespace-pre-line leading-relaxed text-ink/80">{event.description}</p>
              )}
            </div>
          </li>
        );
      })}
    </ol>
  );
}
