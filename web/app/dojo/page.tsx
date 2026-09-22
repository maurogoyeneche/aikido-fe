import type { Metadata } from "next";
import Image from "next/image";
import DojoDirectory from "@/components/dojo-directory";

export const metadata: Metadata = {
  title: "Dojos | Iwama Shinshin Aiki Shuren Kai",
  description:
    "Encontrá tu dojo de Aikido tradicional más cercano en Montevideo, Uruguay: direcciones, horarios y senseis de cada centro.",
};

export default function DojoPage() {
  return (
    <main className="mx-auto max-w-[1280px] px-6 py-16 lg:px-10">
      <Image
        src="/img/dojo-grupo.jpg"
        alt="Alumnos y senseis de Iwama Shinshin Aiki Shuren Kai Uruguay"
        width={2000}
        height={1113}
        className="mb-12 h-auto w-full object-cover"
      />
      <DojoDirectory />
    </main>
  );
}
