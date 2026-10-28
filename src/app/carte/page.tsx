import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { formatPrice, getMenu } from "@/lib/fidelityapp";

export const metadata: Metadata = {
  title: "La carte de la guinguette",
  description:
    "La carte de la guinguette Ogrossomodo à Bérat : les bières de La Bièrataise et tout ce que l'on sert, avec les prix, mise à jour en direct.",
  alternates: { canonical: "/carte" },
};

// Carte gérée par la guinguette dans FidélityApp (Mon site > Carte / menu).
export default async function CartePage() {
  const { categories, fixedMenus } = await getMenu();
  const empty = categories.length === 0 && fixedMenus.length === 0;

  return (
    <>
      <PageHeader title="La carte" intro="Tout ce que l'on sert à la guinguette, avec les bières de La Bièrataise brassées sur place." />
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        {empty ? (
          <div className="rounded-2xl bg-paper p-8 text-center">
            <p className="font-display text-2xl text-forest">La carte arrive bientôt</p>
            <p className="mt-2 text-ink/80">
              Une question sur ce que l&apos;on sert ?{" "}
              <Link href="/contact" className="text-brick underline">
                Écrivez-nous
              </Link>
              .
            </p>
          </div>
        ) : (
          <div className="space-y-12">
            {categories.map((category) => (
              <section key={category.name} aria-labelledby={`cat-${category.name}`}>
                <h2 id={`cat-${category.name}`} className="font-display text-3xl text-forest">
                  {category.name}
                </h2>
                <ul className="mt-4 divide-y divide-forest/10 border-y border-forest/10">
                  {category.items.map((item) => (
                    <li key={item.id} className="flex items-baseline justify-between gap-4 py-3">
                      <div className="min-w-0">
                        <p className="font-medium text-ink">{item.name}</p>
                        {item.description && <p className="mt-0.5 text-sm text-ink/70">{item.description}</p>}
                      </div>
                      {item.price !== null && (
                        <p className="shrink-0 font-medium tabular-nums text-brick">{formatPrice(item.price)}</p>
                      )}
                    </li>
                  ))}
                </ul>
              </section>
            ))}

            {fixedMenus.length > 0 && (
              <section aria-labelledby="formules">
                <h2 id="formules" className="font-display text-3xl text-forest">
                  Formules
                </h2>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  {fixedMenus.map((menu) => (
                    <div key={menu.id} className="rounded-2xl border border-forest/15 bg-paper p-5">
                      <div className="flex items-baseline justify-between gap-4">
                        <p className="font-display text-xl text-forest">{menu.name}</p>
                        {menu.price !== null && (
                          <p className="shrink-0 font-medium tabular-nums text-brick">{formatPrice(menu.price)}</p>
                        )}
                      </div>
                      {menu.description && <p className="mt-1 text-sm text-ink/70">{menu.description}</p>}
                      <ul className="mt-3 space-y-1 text-sm text-ink/85">
                        {menu.starter && <li>Entrée : {menu.starter}</li>}
                        {menu.mainCourse && <li>Plat : {menu.mainCourse}</li>}
                        {menu.dessert && <li>Dessert : {menu.dessert}</li>}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        )}

        <p className="mt-12 text-center text-sm text-ink/70">
          L&apos;abus d&apos;alcool est dangereux pour la santé, à consommer avec modération.
        </p>
      </div>
    </>
  );
}
