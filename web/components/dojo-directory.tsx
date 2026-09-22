"use client";

import { useState } from "react";
import { dojos } from "@/lib/dojos";

export default function DojoDirectory() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = dojos[activeIndex];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] lg:border lg:border-black/10">
      <ul className="divide-y divide-black/10 border border-black/10 lg:border-0 lg:border-r">
        {dojos.map((dojo, index) => {
          const isActive = index === activeIndex;
          return (
            <li key={`${dojo.name}-${dojo.branch_off}`}>
              <button
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-pressed={isActive}
                className={`block w-full px-6 py-5 text-left transition-colors ${
                  isActive ? "bg-black text-white" : "bg-white text-black hover:bg-black/5"
                }`}
              >
                <span
                  className={`mb-3 block h-0.5 w-10 ${isActive ? "bg-[#4d4dff]" : "bg-[#0000fe]"}`}
                />
                <span className="font-heading block text-xl font-bold">{dojo.branch_off}</span>
                <dl className="mt-3 grid grid-cols-1 gap-1.5 text-sm">
                  <div className="flex gap-2">
                    <dt className={isActive ? "text-white/50" : "text-neutral-500"}>Dirección</dt>
                    <dd>{dojo.address}</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className={isActive ? "text-white/50" : "text-neutral-500"}>Horario</dt>
                    <dd>
                      {dojo.days.join(" y ")}, {dojo.hours}
                    </dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className={isActive ? "text-white/50" : "text-neutral-500"}>Sensei</dt>
                    <dd>{dojo.sensei.join(" & ")}</dd>
                  </div>
                </dl>
              </button>
            </li>
          );
        })}
      </ul>

      <div className="h-80 border border-t-0 border-black/10 lg:h-auto lg:min-h-[420px] lg:border-t">
        <iframe
          key={active.branch_off}
          src={active.gmap_src}
          title={`Mapa - ${active.branch_off}`}
          className="h-full w-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}
