import Image from "next/image";
import { MapPin, Phone } from "lucide-react";

export default function ContactInfo() {
  return (
    <div className="flex h-full flex-col justify-between gap-8 px-3">
      <div className="w-full">
        <h5 className="font-heading mb-5 bg-black p-2 pl-3 font-bold text-white">
          Información de contacto
        </h5>
        <dl className="flex items-center gap-3">
          <dt><MapPin className="h-5 w-5" /></dt>
          <dd>Bv. Gral. Artigas 2498</dd>
        </dl>
        <dl className="flex items-center gap-3">
          <dt><Phone className="h-5 w-5" /></dt>
          <dd>+598 91 461 534</dd>
        </dl>
      </div>
      <Image
        src="/img/Kanji-Aikido-PNG-Download-Image.png"
        alt="Aikido"
        width={160}
        height={160}
        className="h-auto w-40 self-center opacity-80"
      />
    </div>
  );
}
