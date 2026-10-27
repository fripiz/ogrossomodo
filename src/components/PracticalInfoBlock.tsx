import { ToConfirm } from "@/components/Draft";
import type { PracticalInfo } from "@/lib/fidelityapp";
import { closureLines, hasHours, hoursLines } from "@/lib/hours";

// Adresse, horaires et fermetures saisis par la guinguette dans FidelityApp.
export default function PracticalInfoBlock({ info }: { info: PracticalInfo | null }) {
  const address = info?.address ? `${info.address}, ${[info.postalCode, info.city].filter(Boolean).join(" ")}` : null;
  const closures = closureLines(info);

  return (
    <div className="space-y-6">
      {closures.length > 0 && (
        <div role="note" className="rounded-xl bg-mustard/30 px-4 py-3 font-medium text-ink">
          {closures.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      )}
      <div>
        <h2 className="font-display text-xl text-forest">Nous trouver</h2>
        <p className="mt-2">{address ?? <ToConfirm fallback="Bérat (Haute-Garonne)">[Adresse : à saisir dans FidélityApp → Infos pratiques]</ToConfirm>}</p>
      </div>
      <div>
        <h2 className="font-display text-xl text-forest">Horaires</h2>
        {hasHours(info) ? (
          <ul className="mt-2 space-y-1">
            {hoursLines(info).map((line) => (
              <li key={line}>{line}</li>
            ))}
            {info.hoursNote && <li className="text-ink/70">{info.hoursNote}</li>}
          </ul>
        ) : (
          <p className="mt-2">
            <ToConfirm fallback="Ouverture selon les soirées : consultez l'agenda.">[Horaires : à saisir dans FidélityApp → Infos pratiques]</ToConfirm>
          </p>
        )}
      </div>
      {(info?.phone || info?.email) && (
        <div>
          <h2 className="font-display text-xl text-forest">Nous joindre</h2>
          {info.phone && (
            <p className="mt-2">
              <a href={`tel:${info.phone.replace(/\s+/g, "")}`} className="text-brick underline">
                {info.phone}
              </a>
            </p>
          )}
          {info.email && (
            <p className="mt-1">
              <a href={`mailto:${info.email}`} className="text-brick underline">
                {info.email}
              </a>
            </p>
          )}
        </div>
      )}
    </div>
  );
}
