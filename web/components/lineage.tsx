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
];

export default function Lineage() {
  return (
    <ol className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-10">
      {lineage.map((person) => (
        <li key={person.name} className="border-t-2 border-[#0000fe] pt-4">
          <h4 className="font-heading text-lg font-bold text-black">
            {person.name}
          </h4>
          <p className="mt-1 text-sm text-neutral-600">{person.role}</p>
        </li>
      ))}
    </ol>
  );
}
