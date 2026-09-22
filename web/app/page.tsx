import Image from "next/image";
import Hero from "@/components/hero";
import DojoList from "@/components/dojo-list";
import AboutAiki from "@/components/about-aiki";
import ContactForm from "@/components/contact-form";
import ContactInfo from "@/components/contact-info";
import Gallery from "@/components/gallery";

export default function HomePage() {
  return (
    <main>
      <Hero />

      <section className="mx-auto max-w-[1280px] px-6 py-20 lg:px-10">
        <div className="mb-12 border-t-2 border-[#0000fe] pt-4">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-black sm:text-4xl">
            Centros de entrenamiento
          </h2>
        </div>
        <Image
          src="/img/dojo-grupo.jpg"
          alt="Alumnos y senseis de Iwama Shinshin Aiki Shuren Kai Uruguay"
          width={2000}
          height={1113}
          className="mb-12 h-auto w-full object-cover"
        />
        <DojoList />
      </section>

      <section className="bg-black py-20">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <div className="mb-12 border-t-2 border-[#0000fe] pt-4">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Entrenamiento
            </h2>
            <p className="mt-3 max-w-2xl text-neutral-400">
              Práctica de armas y técnica a mano vacía en nuestros dojos.
            </p>
          </div>
          <Gallery />
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-6 py-20 lg:px-10">
        <div className="mb-12 border-t-2 border-[#0000fe] pt-4">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-black sm:text-4xl">
            Filosofía
          </h2>
        </div>
        <AboutAiki />
      </section>

      <section className="bg-[whitesmoke] py-20">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <div className="mb-12 border-t-2 border-[#0000fe] pt-4">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-black sm:text-4xl">
              Contáctanos
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-0">
            <ContactForm />
            <div className="sm:border-l sm:border-black/10 sm:pl-10">
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
