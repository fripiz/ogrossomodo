import type { Metadata } from "next";
import { Fraunces, Work_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BierataiseBanner from "@/components/BierataiseBanner";
import { site } from "@/lib/site";
import { SHOW_DRAFT } from "@/lib/draft";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} — guinguette à Bérat`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  metadataBase: new URL(site.url),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: site.name,
    title: `${site.name} — guinguette à Bérat`,
    description: site.description,
  },
  // Indexation en production uniquement (pas les previews Vercel)
  robots: SHOW_DRAFT ? { index: false, follow: false } : { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${fraunces.variable} ${workSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <BierataiseBanner />
        <Footer />
      </body>
    </html>
  );
}
