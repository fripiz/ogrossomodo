import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import PracticalInfoBlock from "@/components/PracticalInfoBlock";
import ContactForm from "./ContactForm";
import { getPracticalInfo } from "@/lib/fidelityapp";

export const metadata: Metadata = {
  title: "Contact, réservations et privatisations",
  description:
    "Contactez la guinguette Ogrossomodo à Bérat : questions, réservations, privatisations ou proposition d'artistes pour nos soirées.",
  alternates: { canonical: "/contact" },
};

export default async function ContactPage() {
  const info = await getPracticalInfo();
  return (
    <>
      <PageHeader
        title="Contact"
        intro="Une question, une idée de soirée, une privatisation ? Écrivez-nous."
      />
      <div className="mx-auto grid max-w-5xl gap-12 px-4 py-12 sm:px-6 md:grid-cols-[2fr_1fr]">
        <ContactForm />
        <aside className="text-ink/80">
          <PracticalInfoBlock info={info} />
        </aside>
      </div>
    </>
  );
}
