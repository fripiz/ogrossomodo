// Mise en forme des infos pratiques venant de FidelityApp (horaires, fermetures).
// Fonctions pures : utilisables côté serveur comme dans un composant client.

import type { DayKey, PracticalInfo, TimeRange } from "@/lib/fidelityapp";

const DAYS: { key: DayKey; label: string; schema: string }[] = [
  { key: "mon", label: "Lundi", schema: "Monday" },
  { key: "tue", label: "Mardi", schema: "Tuesday" },
  { key: "wed", label: "Mercredi", schema: "Wednesday" },
  { key: "thu", label: "Jeudi", schema: "Thursday" },
  { key: "fri", label: "Vendredi", schema: "Friday" },
  { key: "sat", label: "Samedi", schema: "Saturday" },
  { key: "sun", label: "Dimanche", schema: "Sunday" },
];

// "10:00" → "10 h", "10:30" → "10 h 30"
function time(value: string): string {
  const [h, m] = value.split(":");
  return m === "00" ? `${Number(h)} h` : `${Number(h)} h ${m}`;
}

function ranges(list: TimeRange[]): string {
  return list.map((r) => `${time(r.open)}–${time(r.close)}`).join(" et ");
}

export function hasHours(info: PracticalInfo | null): info is PracticalInfo {
  return !!info && DAYS.some(({ key }) => (info.hours[key] ?? []).length > 0);
}

// Regroupe les jours consécutifs aux mêmes horaires :
// « Lundi au jeudi : 10 h–17 h », « Vendredi : 10 h–12 h », « Samedi et dimanche : fermé ».
export function hoursLines(info: PracticalInfo): string[] {
  const groups: { from: number; to: number; text: string }[] = [];
  DAYS.forEach(({ key }, index) => {
    const list = info.hours[key] ?? [];
    const text = list.length > 0 ? ranges(list) : "fermé";
    const last = groups[groups.length - 1];
    if (last && last.text === text && last.to === index - 1) last.to = index;
    else groups.push({ from: index, to: index, text });
  });
  return groups.map(({ from, to, text }) => {
    const first = DAYS[from].label;
    const span =
      from === to ? first : to === from + 1 ? `${first} et ${DAYS[to].label.toLowerCase()}` : `${first} au ${DAYS[to].label.toLowerCase()}`;
    return `${span} : ${text}`;
  });
}

function dateLabel(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d)).toLocaleDateString("fr-FR", { day: "numeric", month: "long", timeZone: "UTC" });
}

// « Fermé du 22 décembre au 2 janvier (congés) »
export function closureLines(info: PracticalInfo | null): string[] {
  if (!info) return [];
  return info.closures.map((c) => {
    const when = c.start === c.end ? `le ${dateLabel(c.start)}` : `du ${dateLabel(c.start)} au ${dateLabel(c.end)}`;
    return `Fermeture exceptionnelle ${when}${c.label ? ` (${c.label})` : ""}`;
  });
}

// Pour les données structurées Google (schema.org openingHoursSpecification).
export function openingHoursSpecification(info: PracticalInfo) {
  return DAYS.flatMap(({ key, schema }) =>
    (info.hours[key] ?? []).map((r) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: `https://schema.org/${schema}`,
      opens: r.open,
      closes: r.close,
    })),
  );
}
