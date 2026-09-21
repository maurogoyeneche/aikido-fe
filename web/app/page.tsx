import Hero from "@/components/hero";
import DojoList from "@/components/dojo-list";
import AboutAiki from "@/components/about-aiki";
import ContactForm from "@/components/contact-form";
import ContactInfo from "@/components/contact-info";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="mb-8 bg-neutral-100 p-3 text-center text-black">
          Centros de entrenamiento
        </h1>
        <DojoList />
      </section>
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="mb-8 bg-neutral-100 p-3 text-center text-black">
          Filosofía
        </h1>
        <AboutAiki />
      </section>
      <section className="bg-black py-16">
        <h1 className="mb-8 p-3 text-center text-white">Contáctanos</h1>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 sm:grid-cols-2">
          <ContactForm />
          <ContactInfo />
        </div>
      </section>
    </main>
  );
}
