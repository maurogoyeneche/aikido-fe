import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37a4 4 0 1 1-7.914 1.174A4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export default function ContactInfo() {
  return (
    <div className="flex h-full flex-col justify-between gap-8 px-3">
      <div className="w-full">
        <h5 className="font-heading mb-5 bg-black p-2 pl-3 font-bold text-white">
          Información de contacto
        </h5>
        <dl className="flex items-center gap-3">
          <dt><Phone className="h-5 w-5" /></dt>
          <dd>+598 91 461 534</dd>
        </dl>
        <dl className="flex items-center gap-3">
          <dt><InstagramIcon className="h-5 w-5" /></dt>
          <dd>
            <Link
              href="https://www.instagram.com/aikido_uruguay"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:underline"
            >
              @aikido_uruguay
            </Link>
          </dd>
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
