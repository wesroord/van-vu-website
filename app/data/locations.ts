export interface Location {
  id: string;
  date: string;
  time: string;
  event: string;
  city: string;
  address: string;
  description?: string;
}

export const upcomingLocations: Location[] = [
  {
    id: "1",
    date: "2026-10-25",
    time: "12:00 - 21:00",
    event: "Herfstmarkt Zwolle",
    city: "Zwolle",
    address: "Grote Markt, Zwolle",
    description: "Gezellige herfstmarkt in het centrum",
  },
  {
    id: "2",
    date: "2026-11-01",
    time: "11:00 - 18:00",
    event: "Foodfestival Enschede",
    city: "Enschede",
    address: "Oude Markt, Enschede",
    description: "Jaarlijks foodfestival met internationale streetfood",
  },
  {
    id: "3",
    date: "2026-11-08",
    time: "14:00 - 22:00",
    event: "Nachtmarkt Deventer",
    city: "Deventer",
    address: "Brink, Deventer",
  },
  {
    id: "4",
    date: "2026-11-15",
    time: "10:00 - 17:00",
    event: "Wintermarkt Almelo",
    city: "Almelo",
    address: "Marktplein, Almelo",
    description: "Sfeervolle wintermarkt met muziek en lekker eten",
  },
];

export const menuItems = [
  {
    name: "Vietnamese Loempia's",
    variants: [
      { label: "2 Loempia's", price: "€6,00" },
      { label: "4 Loempia's", price: "€11,00" },
      { label: "Mini Loempia's (vegan)", price: "€6,00" },
    ],
    description:
      "Knapperige loempia's gevuld met verse Vietnamese ingrediënten. Geserveerd met zoete chilisaus.",
    emoji: "🥢",
  },
  {
    name: "Gyoza's",
    variants: [
      { label: "6 Gyoza's (kip)", price: "€7,50" },
    ],
    description:
      "Sappige, geroosterde Japanse dumplings met een krokant korstje. Geserveerd met sojasaus.",
    emoji: "🥟",
  },
];
