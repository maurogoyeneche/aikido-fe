import type { Metadata } from "next";
import AboutAiki from "@/components/about-aiki";

export const metadata: Metadata = {
  title: "Filosofía y linaje | Iwama Shinshin Aiki Shuren Kai",
  description:
    "Linaje directo de Morihei Ueshiba, Morihiro Saito y Hitohira Saito soke. Conocé la filosofía del Aikido tradicional que practicamos en Uruguay.",
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-[1280px] px-6 py-16 lg:px-10">
      <AboutAiki />
    </main>
  );
}
