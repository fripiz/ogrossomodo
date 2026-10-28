// Données gérées par la guinguette dans son dashboard FidelityApp :
// soirées (agenda), infos pratiques (coordonnées, horaires, fermetures).
// Lu côté serveur, cache de 5 minutes vidé aussitôt par FidelityApp à chaque
// modification (route /api/revalidate). Erreur ou bloc non activé : vide.

const API_URL = (
  process.env.NEXT_PUBLIC_FIDELITYAPP_API_URL || "https://fidelityapp.fr/api/public/merchant"
).replace(/\/$/, "");
// ID marchand d'Ogrossomodo dans FidelityApp (affiché dans /admin). Public.
export const MERCHANT_ID = (process.env.NEXT_PUBLIC_FIDELITYAPP_MERCHANT_ID || "").trim();
const REVALIDATE_SECONDS = 300;

export type AgendaEvent = {
  id: string;
  title: string;
  description: string | null;
  eventDate: string; // "AAAA-MM-JJ" ou date ISO
};

export type DayKey = "mon" | "tue" | "wed" | "thu" | "fri" | "sat" | "sun";
export type TimeRange = { open: string; close: string };
export type PracticalInfo = {
  phone: string;
  email: string;
  address: string;
  postalCode: string;
  city: string;
  hours: Record<DayKey, TimeRange[]>;
  hoursNote: string;
  closures: { id: string; start: string; end: string; label: string }[];
};

async function get<T>(block: string): Promise<T | null> {
  if (!MERCHANT_ID) return null;
  try {
    const res = await fetch(`${API_URL}/${MERCHANT_ID}/blocks/${block}`, {
      next: { revalidate: REVALIDATE_SECONDS, tags: ["fidelityapp"] },
    });
    if (!res.ok) return null;
    return (await res.json()) as T;
  } catch (error) {
    console.error(`FidelityApp : bloc ${block} inaccessible`, error);
    return null;
  }
}

// L'API ne renvoie que les événements à venir.
export async function getUpcomingEvents(limit?: number): Promise<AgendaEvent[]> {
  const json = await get<{ items?: AgendaEvent[] }>("agenda");
  const items = Array.isArray(json?.items) ? json.items : [];
  return items.toSorted((a, b) => a.eventDate.localeCompare(b.eventDate)).slice(0, limit);
}

export async function getPracticalInfo(): Promise<PracticalInfo | null> {
  const json = await get<{ info?: PracticalInfo }>("infos");
  return json?.info ?? null;
}

const DATE_ONLY = /^(\d{4})-(\d{2})-(\d{2})$/;

function parseDate(value: string): Date {
  const m = DATE_ONLY.exec(value);
  if (m) return new Date(Date.UTC(Number(m[1]), Number(m[2]) - 1, Number(m[3]), 12));
  return new Date(value);
}

export function formatEventDate(value: string, options: Intl.DateTimeFormatOptions): string {
  const date = parseDate(value);
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat("fr-FR", { timeZone: "Europe/Paris", ...options })
    .format(date)
    .replace(/(^|\s)1 (?=\p{L})/u, (_, before) => `${before}1er `);
}

// Heure de l'événement si l'API en fournit une (date ISO), sinon null.
export function eventTime(value: string): string | null {
  if (DATE_ONLY.test(value)) return null;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return null;
  return new Intl.DateTimeFormat("fr-FR", { timeZone: "Europe/Paris", hour: "2-digit", minute: "2-digit" })
    .format(date)
    .replace(":", " h ");
}

// Carte (bloc « menu ») : catégories dans l'ordre du dashboard et formules.
export type MenuItem = { id: string; name: string; description: string | null; price: number | null };
export type MenuCategory = { name: string; items: MenuItem[] };
export type FixedMenu = MenuItem & { starter: string | null; mainCourse: string | null; dessert: string | null };
export type Menu = { categories: MenuCategory[]; fixedMenus: FixedMenu[] };

export async function getMenu(): Promise<Menu> {
  const json = await get<Partial<Menu>>("menu");
  return {
    categories: Array.isArray(json?.categories) ? json.categories : [],
    fixedMenus: Array.isArray(json?.fixedMenus) ? json.fixedMenus : [],
  };
}

const priceFormat = new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR" });
export function formatPrice(value: number): string {
  return priceFormat.format(value);
}
