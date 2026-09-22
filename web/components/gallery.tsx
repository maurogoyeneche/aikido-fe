import Image from "next/image";

const photos = [
  { src: "/img/gallery-1.jpg", alt: "Práctica de bokken", caption: "Bokken" },
  { src: "/img/gallery-2.jpg", alt: "Control de muñeca (kotegaeshi)", caption: "Kotegaeshi" },
  { src: "/img/gallery-3.jpg", alt: "Técnica a mano vacía entre alumnos", caption: "Técnica a mano vacía" },
  { src: "/img/gallery-4.jpg", alt: "Práctica de jo", caption: "Jo" },
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
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-3 pb-2 pt-6">
            <span className="text-xs font-medium text-white">{photo.caption}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
