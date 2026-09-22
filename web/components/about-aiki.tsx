import Image from "next/image";
import Lineage from "@/components/lineage";

export default function AboutAiki() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col items-center px-6 py-16">
      <article className="mb-12 grid w-full grid-cols-1 items-center gap-6 sm:grid-cols-[auto_1fr]">
        <Image
          src="/img/img-aiki-daijin.png"
          alt="Aiki Daijin"
          width={220}
          height={220}
          className="mx-auto h-auto w-40 sm:w-56"
        />
        <div className="flex flex-col gap-6">
          <p className="text-lg">
            Conservamos y compartimos la gran influencia de mi padre Morihiro
            manteniéndonos fiel a la herencia técnica y a la espiritualidad
            dejada por el Fundador Morihei Ueshiba.
          </p>
          <p className="text-lg">
            Continuamente tratamos de mejorarnos a nosotros mismos a través del
            intensivo y práctico sistemática de kihon. Creemos que cada
            entrenamiento y cada sesión es una oportunidad única para sentirse
            más cerca del Fundador. Yo soy el primero en aplicar día a día,
            este entrenamiento constante.
          </p>
          <blockquote className="border-l-2 border-[#0000fe] py-1 pl-6">
            <cite className="font-heading not-italic font-medium">Hitohira Saito</cite>
            <span className="block text-sm text-neutral-500">
              Iwama Shinshin Aiki Shurenkai
            </span>
          </blockquote>
        </div>
      </article>

      <article className="mb-12 w-full">
        <div className="mb-8 flex items-end justify-between gap-4 border-t-2 border-[#0000fe] pt-4">
          <h3 className="font-heading text-2xl font-bold text-black">Linaje</h3>
          <span className="hidden text-sm text-neutral-500 sm:block">
            1942 — hoy
          </span>
        </div>
        <Lineage />

        <div className="mt-10 grid grid-cols-1 gap-8 border-t border-black/10 pt-10 sm:grid-cols-[220px_1fr] sm:items-center">
          <div className="relative aspect-[3/4] w-full max-w-[220px] sm:max-w-none">
            <Image
              src="/img/aikido-tecnica.jpg"
              alt="Mario Silva Sensei aplicando una técnica en el dojo"
              fill
              className="h-full w-full rounded-none object-cover object-top"
            />
          </div>
          <div>
            <span className="mb-2 block text-sm text-neutral-500">
              Representante en Uruguay
            </span>
            <h4 className="font-heading text-xl font-bold text-black">
              Mario Silva Sensei
            </h4>
            <p className="mt-1 text-sm text-neutral-600">
              6to Dan — Representante de ISSASK LATAM en Uruguay
            </p>
          </div>
        </div>
      </article>

      <article className="w-full">
        <h3 className="font-heading bg-black p-3 text-white">
          Más sobre Iwama ShinShin Aikishurenkai
        </h3>
        <iframe
          className="mt-4 aspect-video w-full"
          src="https://www.youtube.com/embed/CoUlKdN-kgQ"
          title="Entrevista a Saito Hitohira - Iwama ShinShin Aiki Shurenkai"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </article>
    </div>
  );
}
