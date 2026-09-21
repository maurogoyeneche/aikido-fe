import { Card, CardContent, CardHeader } from "@/components/ui/card";
import type { Dojo } from "@/lib/dojos";

export default function DojoCard({ dojo }: { dojo: Dojo }) {
  return (
    <Card className="mx-auto my-6 max-w-4xl overflow-hidden">
      <CardHeader>
        <h3 className="text-2xl font-bold">{dojo.branch_off}</h3>
      </CardHeader>
      <CardContent className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <iframe
          src={dojo.gmap_src}
          title={`Mapa - ${dojo.branch_off}`}
          className="h-64 w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div className="flex flex-col gap-3">
          <div>
            <h4 className="font-semibold">Dirección</h4>
            <p>{dojo.address}</p>
          </div>
          <div>
            <h4 className="font-semibold">Teléfono</h4>
            <p>{dojo.phone}</p>
          </div>
          <div>
            <h4 className="font-semibold">Días y horarios</h4>
            <p>
              {dojo.days.join(" y ")} de {dojo.hours}
            </p>
          </div>
          <div>
            <h4 className="font-semibold">Representante</h4>
            <p>{dojo.sensei.join(" & ")}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
