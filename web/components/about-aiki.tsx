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

      <article className="mb-12 grid w-full grid-cols-1 gap-8 sm:grid-cols-[1fr_220px]">
        <div>
          <h4 className="font-heading mb-6 text-sm font-medium tracking-tight text-neutral-500">
            Linaje
          </h4>
          <Lineage />
        </div>
        <Image
          src="/img/aikido-tecnica.jpg"
          alt="Práctica de técnica en el dojo"
          width={750}
          height={1334}
          className="h-full w-full rounded-none object-cover"
        />
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
