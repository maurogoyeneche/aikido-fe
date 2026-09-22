import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "/about", label: "Sobre Aikido" },
  { href: "/dojo", label: "Dojo" },
  { href: "/contact", label: "Contacto" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-[1280px] px-6 py-14 lg:px-10">
        <div className="flex flex-col gap-10 border-t border-white/15 pt-10 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/img/iwamashinshinlogo-2.png"
              alt="Iwama Shinshin Aiki Shuren Kai"
              width={160}
              height={48}
              className="h-auto w-32"
            />
          </div>

          <nav className="flex flex-col gap-2 text-sm">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-neutral-400 transition hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="text-sm text-neutral-400">
            <p>+598 91 461 534</p>
            <Link
              href="https://www.instagram.com/aikido_uruguay"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
            >
              @aikido_uruguay
            </Link>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-1 border-t border-white/10 pt-6 text-xs text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
          <span>Copyright © {year} Iwama Shinshin Aiki Shuren Kai Uruguay</span>
          <span>Linaje Ueshiba → Morihiro Saito → Hitohira Saito soke</span>
        </div>
      </div>
    </footer>
  );
}
