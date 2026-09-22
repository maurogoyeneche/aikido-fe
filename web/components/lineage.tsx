const lineage = [
  {
    name: "Morihei Ueshiba",
    role: "Fundador del Aikido (O-Sensei)",
  },
  {
    name: "Morihiro Saito",
    role: "Alumno directo del Fundador, guardián del dojo de Iwama",
  },
  {
    name: "Hitohira Saito",
    role: "Soke, Iwama Shinshin Aiki Shurenkai",
  },
  {
    name: "Yasuhiro Saito",
    role: "Hijo de Hitohira Saito",
  },
];

export default function Lineage() {
  return (
    <ol className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-8 lg:grid-cols-4 lg:gap-0">
      {lineage.map((person, index) => (
        <li key={person.name} className="relative lg:px-6 lg:first:pl-0 lg:last:pr-0">
          <div className="mb-4 flex items-center gap-2">
            <span className="font-heading flex h-7 w-7 shrink-0 items-center justify-center border border-black text-xs font-bold">
              {index + 1}
            </span>
            <span className="h-px flex-1 bg-black/15 sm:block" />
          </div>
          <h4 className="font-heading text-lg font-bold text-black">{person.name}</h4>
          <p className="mt-1 text-sm text-neutral-600">{person.role}</p>
        </li>
      ))}
    </ol>
  );
}
