import Link from "next/link";
import { legalNav, mainNav, site } from "@/lib/site";
import { getPracticalInfo } from "@/lib/fidelityapp";

export default async function Footer() {
  const info = await getPracticalInfo();
  const address = info?.address
    ? `${info.address}, ${[info.postalCode, info.city].filter(Boolean).join(" ")}`
    : `${site.city} (Haute-Garonne)`;
  return (
    <footer className="bg-forest-dark text-cream/80">
      <div className="h-[3px] bg-cream" aria-hidden="true" />
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 text-sm sm:grid-cols-3 sm:px-6">
        <div>
          <p className="font-display text-xl text-cream">{site.name}</p>
          <p className="mt-2">{address}</p>
          {info?.phone && (
            <a href={`tel:${info.phone.replace(/\s+/g, "")}`} className="mt-1 block hover:text-mustard">
              {info.phone}
            </a>
          )}
          {info?.email && (
            <a href={`mailto:${info.email}`} className="mt-1 block hover:text-mustard">
              {info.email}
            </a>
          )}
        </div>
        <nav aria-label="Navigation secondaire">
          <ul className="space-y-2">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-mustard">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Informations légales">
          <ul className="space-y-2">
            {legalNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-mustard">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <p className="border-t border-cream/10 px-4 py-4 text-center text-xs text-cream/60">
        © {new Date().getFullYear()} {site.name}
      </p>
    </footer>
  );
}
