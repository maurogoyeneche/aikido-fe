import Image from "next/image";

const photos = [
  { src: "/img/gallery-1.jpg", alt: "Práctica de bokken en el dojo" },
  { src: "/img/gallery-2.jpg", alt: "Técnica de control de muñeca" },
  { src: "/img/gallery-3.jpg", alt: "Práctica de técnica entre alumnos" },
  { src: "/img/gallery-4.jpg", alt: "Práctica de jo" },
];

export default function Gallery() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4">
      {photos.map((photo) => (
        <div key={photo.src} className="relative aspect-[4/3] overflow-hidden bg-black/5">
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes="(min-width: 640px) 25vw, 50vw"
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}
