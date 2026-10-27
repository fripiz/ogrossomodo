"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { LogoMark } from "@/components/Logo";
import { mainNav, site } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 bg-cream/95 backdrop-blur border-b border-forest/10">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="flex items-center gap-3 font-display text-2xl font-semibold italic text-forest">
          <LogoMark size={44} className="shrink-0" />
          {site.name}
        </Link>

        <button
          type="button"
          className="sm:hidden rounded-md p-2 text-forest"
          aria-expanded={open}
          aria-controls="main-nav"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setOpen(!open)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>

        <nav
          id="main-nav"
          className={`${open ? "flex" : "hidden"} absolute left-0 right-0 top-full flex-col divide-y divide-forest/10 border-y-2 border-forest/25 bg-paper px-4 pb-4 pt-2 shadow-[0_12px_24px_-8px_rgba(34,55,43,0.35)] sm:static sm:flex sm:flex-row sm:gap-8 sm:divide-y-0 sm:border-0 sm:bg-transparent sm:p-0 sm:shadow-none`}
        >
          {mainNav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                aria-current={active ? "page" : undefined}
                className={`py-2 text-lg sm:text-base transition-colors hover:text-brick ${
                  active ? "text-brick font-medium" : "text-ink"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
