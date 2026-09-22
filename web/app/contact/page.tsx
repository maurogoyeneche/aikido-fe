import type { Metadata } from "next";
import ContactForm from "@/components/contact-form";
import ContactInfo from "@/components/contact-info";

export const metadata: Metadata = {
  title: "Contacto | Iwama Shinshin Aiki Shuren Kai",
  description:
    "Escribinos para coordinar tu clase de Aikido tradicional en Montevideo, Uruguay.",
};

export default function ContactPage() {
  return (
    <main className="mx-auto grid max-w-[1280px] grid-cols-1 gap-10 px-6 py-16 sm:grid-cols-2 sm:gap-0 lg:px-10">
      <ContactForm />
      <div className="sm:border-l sm:border-black/10 sm:pl-10">
        <ContactInfo />
      </div>
    </main>
  );
}
