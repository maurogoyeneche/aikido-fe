import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-[92vh] w-full items-center overflow-hidden bg-black text-white">
      <Image
        src="/img/aikidoJefeMobile.jpg"
        alt=""
        fill
        priority
        className="object-cover object-top opacity-60 sm:hidden"
      />
      <Image
        src="/img/aikidoJefeBackground.jpg"
        alt=""
        fill
        priority
        className="hidden object-cover object-[top_right] opacity-60 sm:block"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6 sm:px-10 lg:px-10">
        <div className="flex flex-col gap-6">
          <h1 className="font-heading max-w-[11ch] text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
            Aikido Tradicional
          </h1>
          <h4 className="max-w-[26ch] text-xl font-normal text-neutral-300 sm:text-2xl">
            Alumnos directos de{" "}
            <b className="font-semibold text-[#5b7fff]">Hitohira Saito soke</b>.
          </h4>
          <Link
            href="/contact"
            className="w-fit rounded-md bg-[#0000fe] px-6 py-3 text-lg font-medium text-white transition hover:bg-[#0033a0]"
          >
            CONTACTANOS
          </Link>

          <div className="mt-10 flex items-center gap-3 border-t border-white/15 pt-6">
            <span className="text-sm font-medium text-neutral-400">
              Membresía
            </span>
            <a href="https://paselibre.uy/" target="_blank" rel="noreferrer">
              <Image
                src="/img/paselibreLogo.svg"
                alt="Pase libre"
                width={120}
                height={40}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
