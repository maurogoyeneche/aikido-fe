import type { Dojo } from "@/lib/dojos";

export default function DojoCard({ dojo }: { dojo: Dojo }) {
  return (
    <article className="mx-auto my-6 max-w-4xl border-t-2 border-[#0000fe] pt-6">
      <h3 className="font-heading mb-6 text-2xl font-bold text-black">{dojo.branch_off}</h3>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        <iframe
          src={dojo.gmap_src}
          title={`Mapa - ${dojo.branch_off}`}
          className="h-64 w-full border border-black/10"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <dl className="grid grid-cols-1 gap-4 content-start">
          <div>
            <dt className="text-xs font-medium text-neutral-500">Dirección</dt>
            <dd className="text-base">{dojo.address}</dd>
          </div>
          <div>
            <dt className="text-xs font-medium text-neutral-500">Teléfono</dt>
            <dd className="text-base">{dojo.phone}</dd>
          </div>
          <div>
            <dt className="text-xs font-medium text-neutral-500">Días y horarios</dt>
            <dd className="text-base">
              {dojo.days.join(" y ")} de {dojo.hours}
            </dd>
          </div>
          <div>
            <dt className="text-xs font-medium text-neutral-500">Representante</dt>
            <dd className="text-base">{dojo.sensei.join(" & ")}</dd>
          </div>
        </dl>
      </div>
    </article>
  );
}
