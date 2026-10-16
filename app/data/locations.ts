export interface WeeklySpot {
  day: string;
  dayNl: string;
  locations: { name: string; address: string; time: string; alternating?: boolean }[];
}

export interface Review {
  author: string;
  rating: number;
  text: string;
  timeAgo: string;
  isLocalGuide?: boolean;
}

export const weeklySchedule: WeeklySpot[] = [
  {
    day: "monday",
    dayNl: "Maandag",
    locations: [
      { name: "Oldenzaal", address: "Groote Markt", time: "11:00 – 16:00" },
    ],
  },
  {
    day: "wednesday",
    dayNl: "Woensdag",
    locations: [
      { name: "Overdinkel", address: "Dorpsplein", time: "11:00 – 16:00" },
      { name: "Oldenzaal", address: "Winkelcentrum De Thij", time: "11:00 – 17:00" },
    ],
  },
  {
    day: "thursday",
    dayNl: "Donderdag",
    locations: [
      { name: "Losser", address: "Martinusplein", time: "11:00 – 17:00" },
      { name: "Oldenzaal", address: "Vijfhoek – bij Albert Heijn/Action", time: "11:00 – 17:00" },
    ],
  },
  {
    day: "friday",
    dayNl: "Vrijdag",
    locations: [
      { name: "Olst", address: "Weekmarkt", time: "11:00 – 16:30" },
      { name: "De Lutte", address: "Kerkplein", time: "11:00 – 18:00" },
    ],
  },
  {
    day: "saturday",
    dayNl: "Zaterdag",
    locations: [
      { name: "Losser", address: "Brinkstraat", time: "10:30 – 17:00" },
      { name: "Oldenzaal", address: "Groote Markt", time: "10:00 – 17:00", alternating: true },
    ],
  },
];

export const reviews: Review[] = [
  {
    author: "Daan Blaauwbroek",
    rating: 5,
    text: "Een heel aardige man achter de bediening met ook nog hele lekkere loempia's — wat wil je nog meer. Dit is zeker een aanrader als je zin hebt in lekkere loempia's.",
    timeAgo: "Een maand geleden",
  },
  {
    author: "Evelien Andriessen",
    rating: 5,
    text: "We komen hier in Slangenbeek graag elke week onze lunch halen. Vriendelijke dame, eten is erg lekker en ze weet wat we willen eten. \"Zelfde als de vorige keer?\" Dat sowieso en soms nog wat extra's erbij. Aanrader!",
    timeAgo: "2 jaar geleden",
    isLocalGuide: true,
  },
  {
    author: "Claudia Smit",
    rating: 5,
    text: "Lekkere loempia's — ook de pastei is erg lekker! De verkoopster is erg vriendelijk en knoopt altijd een praatje aan. Slangenbeek mag blij zijn dat er iedere donderdag wat lekkers te halen valt!",
    timeAgo: "2 jaar geleden",
  },
  {
    author: "Mariska",
    rating: 5,
    text: "Heerlijke loempia's met overheerlijke eigengemaakte saus. Ons vaste uitje naar Slangenbeek op de donderdag.",
    timeAgo: "2 jaar geleden",
  },
  {
    author: "Sander Adolfsen",
    rating: 5,
    text: "Ik kom hier al jaren elke week en er staat standaard een pastei op het menu. Altijd goed gevuld en overheerlijk.",
    timeAgo: "2 jaar geleden",
  },
  {
    author: "Rob Brinkkemper",
    rating: 5,
    text: "Heerlijk eten en vriendelijke mensen — wat wil een mens nog meer.",
    timeAgo: "5 jaar geleden",
  },
];

export const menuItems = [
  {
    name: "Vietnamese Loempia's",
    variants: [
      { label: "2 Loempia's", price: "€ 6,00" },
      { label: "4 Loempia's", price: "€ 11,00" },
      { label: "Mini Loempia's (vegan)", price: "€ 6,00" },
    ],
    description:
      "Knapperige loempia's gevuld met verse Vietnamese ingrediënten. Geserveerd met zelfgemaakte zoete chilisaus.",
  },
  {
    name: "Gyoza's",
    variants: [{ label: "6 Gyoza's (kip)", price: "€ 7,50" }],
    description:
      "Sappige, geroosterde Japanse dumplings met een krokant korstje. Geserveerd met sojasaus.",
  },
];
