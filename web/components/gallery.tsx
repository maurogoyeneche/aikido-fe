import Image from "next/image";

const photos = [
  {
    src: "/img/gallery-5.jpg",
    alt: "Corte de katana en una demostración de Iwama Shinshin Aiki Shurenkai",
    caption: "Corte de espada",
    className: "sm:col-span-2 sm:row-span-2",
    sizes: "(min-width: 640px) 50vw, 100vw",
    priority: true,
  },
  {
    src: "/img/gallery-6.jpg",
    alt: "Inmovilización en el tatami durante la práctica de Aikido",
    caption: "Inmovilización",
    className: "sm:row-span-2",
    sizes: "(min-width: 640px) 25vw, 50vw",
  },
  {
    src: "/img/gallery-7.jpg",
    alt: "Atemi durante una práctica de Aikido, en blanco y negro",
    caption: "Atemi",
    className: "sm:row-span-2",
    sizes: "(min-width: 640px) 25vw, 50vw",
  },
  {
    src: "/img/gallery-1.jpg",
    alt: "Práctica de kumitachi (bokken) entre alumnos",
    caption: "Kumitachi",
    className: "",
    sizes: "(min-width: 640px) 25vw, 50vw",
  },
  {
    src: "/img/gallery-4.jpg",
    alt: "Práctica de jo en el dojo",
    caption: "Jo",
    className: "",
    sizes: "(min-width: 640px) 25vw, 50vw",
  },
  {
    src: "/img/gallery-9.jpg",
    alt: "Entrada de tsuki entre alumnos, con la bandera de Iwama de fondo",
    caption: "Tsuki",
    className: "",
    sizes: "(min-width: 640px) 25vw, 50vw",
  },
  {
    src: "/img/gallery-8.jpg",
    alt: "Práctica de técnica a mano vacía entre alumnos",
    caption: "Técnica a mano vacía",
    className: "",
    sizes: "(min-width: 640px) 25vw, 50vw",
  },
];

export default function Gallery() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:auto-rows-[220px] sm:gap-4 lg:auto-rows-[260px]">
      {photos.map((photo) => (
        <div
          key={photo.src}
          className={`relative aspect-square overflow-hidden bg-white/5 sm:aspect-auto ${photo.className}`}
        >
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes={photo.sizes}
            priority={photo.priority}
            className="object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-4 pb-3 pt-10">
            <span className="text-sm font-medium text-white">{photo.caption}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
