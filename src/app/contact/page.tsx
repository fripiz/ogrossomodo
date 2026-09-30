import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ContactForm from "./ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Écrire à la guinguette Ogrossomodo.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact"
        intro="Une question, une idée de soirée, une privatisation ? Écrivez-nous."
      />
      <div className="mx-auto grid max-w-5xl gap-12 px-4 py-12 sm:px-6 md:grid-cols-[2fr_1fr]">
        <ContactForm />
        <aside className="space-y-6 text-ink/80">
          <div>
            <h2 className="font-display text-xl text-forest">Nous trouver</h2>
            <p className="mt-2">{site.address}</p>
          </div>
          <div>
            <h2 className="font-display text-xl text-forest">Par email</h2>
            <a href={`mailto:${site.email}`} className="mt-2 inline-block text-brick underline">
              {site.email}
            </a>
          </div>
        </aside>
      </div>
    </>
  );
}
