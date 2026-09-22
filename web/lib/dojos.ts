export interface Dojo {
  name: string;
  branch_off: string;
  days: string[];
  hours: string;
  address: string;
  gmap_src: string;
  phone: string;
  phone_other?: string;
  sensei: string[];
}

export const dojos: Dojo[] = [
  {
    name: "Shin Dojo Aikido",
    branch_off: "Shin Dojo",
    days: ["Martes", "Jueves"],
    hours: "10:00 a 11:30 & 19:00 a 20:30",
    address: "Av. Agraciada 2522",
    gmap_src:
      "https://www.google.com/maps?q=Av.+Agraciada+2522,+Montevideo,+Uruguay&output=embed",
    phone: "091461534",
    phone_other: "",
    sensei: ["Marcos Sosa"],
  },
  {
    name: "Uruguay Aiki Shurendojo",
    branch_off: "La Blanqueada",
    days: ["Lunes", "Miércoles"],
    hours: "20:30 a 22:30",
    address: "Jaime Cibils 2865a",
    gmap_src:
      "https://www.google.com/maps?q=Jaime+Cibils+2865,+Montevideo,+Uruguay&output=embed",
    phone: "099193526",
    phone_other: "098345951",
    sensei: ["Aldo Villagra", "Marcello Scarpa"],
  },
  {
    name: "Uruguay Aiki Shurendojo",
    branch_off: "Yamato Dojo",
    days: ["Martes", "Jueves"],
    hours: "19:00 a 20:30",
    address: "Pasaje Claudio Garcia 970",
    gmap_src:
      "https://www.google.com/maps?q=Pasaje+Claudio+Garcia+970,+Montevideo,+Uruguay&output=embed",
    phone: "099507411",
    phone_other: "",
    sensei: ["Andrés Camargo"],
  },
  {
    name: "Uruguay Aiki Shurendojo",
    branch_off: "Asociación Kokyu Dojo",
    days: ["Martes", "Jueves"],
    hours: "19:30 a 21:30",
    address: "Matto Grosso 557 esq Av. Garzón",
    gmap_src:
      "https://www.google.com/maps?q=Matto+Grosso+557,+Montevideo,+Uruguay&output=embed",
    phone: "097212971",
    phone_other: "",
    sensei: ["Walter Moyano"],
  },
];
