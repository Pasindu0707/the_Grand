import { asset } from "./site";

export type Photo = { src: string; alt: string };

export const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

/* Real photography lives under /public/images/<venue>/ */
const g = (file: string) => asset(`images/gastrobar/${file}`);

/* ------------------------- The Grand Gastrobar (real) ------------------------ */

export const gastrobarRooms: Photo[] = [
  {
    src: g("ambience-hall.jpg"),
    alt: "The Gastrobar main room at night, its curved bar and high timber roof lit low",
  },
  {
    src: g("ambience-bar.jpg"),
    alt: "The counter after dark, pastry cases and coffee machines glowing against dark wood",
  },
  {
    src: g("ambience-guests.jpg"),
    alt: "Guests gathered at the counter with the garden windows behind them",
  },
  {
    src: g("ambience-mezzanine.jpg"),
    alt: "The dining room seen from the mezzanine, long tables beneath the clock",
  },
];

export const gastrobarKitchen: Photo[] = [
  { src: g("breakfast-platter.jpg"), alt: "A breakfast platter laid out overhead with bread, eggs and coffee" },
  { src: g("lamb-chops.jpg"), alt: "Lamb chops searing in the pan with peppers and baby potatoes" },
  { src: g("fried-fish.jpg"), alt: "A whole fried fish plated with chilli, herbs and crushed peanuts" },
  { src: g("rice-bowl.jpg"), alt: "A rice bowl with prawn and chicken skewers, seen from above" },
  { src: g("plated-fish.jpg"), alt: "A plated fish course being cut into at the table" },
  { src: g("pesto-pasta.jpg"), alt: "A bowl of pesto penne finished with basil and parmesan" },
  { src: g("chicken-tenders.jpg"), alt: "Crisp chicken tenders carried out on a teal plate with dipping sauce" },
  { src: g("pancakes.jpg"), alt: "Pancakes with fresh fruit beside a doughnut and a danish" },
];

export const gastrobarBar: Photo[] = [
  { src: g("cold-drinks.jpg"), alt: "Tall cold drinks lined up with mint and rosemary" },
  { src: g("latte-art.jpg"), alt: "Latte art poured into a stoneware cup on a stack of cups" },
  { src: g("iced-coffee.jpg"), alt: "Espresso poured over a frosted glass of iced coffee" },
  { src: g("french-press.jpg"), alt: "Coffee poured from a french press into a waiting cup" },
  { src: g("coffee-beans.jpg"), alt: "A handful of roasted beans dropping into the hopper" },
  { src: g("waffle-tea.jpg"), alt: "A caramel waffle served with tea and coffee on a dark table" },
];

export const gastrobarGallery: Photo[] = [
  gastrobarKitchen[0],
  gastrobarBar[0],
  gastrobarKitchen[2],
  gastrobarBar[1],
  gastrobarKitchen[1],
  gastrobarBar[2],
  gastrobarKitchen[3],
  gastrobarBar[5],
  gastrobarKitchen[5],
  gastrobarBar[3],
  gastrobarKitchen[6],
  gastrobarKitchen[4],
];

export const gastrobarHero: Photo[] = gastrobarRooms;

/* ---------------------------------- Landing --------------------------------- */

export const landing = {
  gastrobar: gastrobarRooms[0],
  resort: {
    src: u("photo-1540541338287-41700207dee6"),
    alt: "A tropical resort swimming pool lined with palm trees",
  },
};

/* The four Grand locations, south to north along the coast road. */
export const locations: {
  town: string;
  name: string;
  href: string;
  tagline: string;
  photo: Photo;
}[] = [
  {
    town: "Negombo",
    name: "The Grand Gastrobar",
    href: "/gastrobar",
    tagline: "Kitchen & bar",
    photo: gastrobarRooms[0],
  },
  {
    town: "Katuneriya",
    name: "Grand Cafe",
    href: "/cafe",
    tagline: "Coffee & bakery",
    photo: { src: u("photo-1554118811-1e0d58224f24", 1400), alt: "The service counter of a warmly lit cafe" },
  },
  {
    town: "Wennappuwa",
    name: "The Grand Coffee Lounge",
    href: "/coffee-lounge",
    tagline: "Coffee & private rooms",
    photo: { src: u("photo-1501339847302-ac426a4a7cbb", 1400), alt: "Wooden tables inside a warmly lit coffee lounge" },
  },
  {
    town: "Wennappuwa",
    name: "Grand Holiday Resort",
    href: "/resort",
    tagline: "Weddings & stays",
    photo: { src: u("photo-1571896349842-33c89424de2d", 1400), alt: "The resort pool at dusk with loungers along its edge" },
  },
];

/* ---------------------------- Grand Holiday Resort ---------------------------- */

export const resortHero: Photo[] = [
  { src: u("photo-1571896349842-33c89424de2d", 2000), alt: "The resort pool at dusk with loungers along its edge" },
  { src: u("photo-1540541338287-41700207dee6", 2000), alt: "Palm trees leaning over a tropical swimming pool" },
  { src: u("photo-1519167758481-83f550bb49b3", 2000), alt: "A wedding reception hall dressed in lights and drapery" },
  { src: u("photo-1566073771259-6a8506099945", 2000), alt: "The resort facade reflected in still water" },
  { src: u("photo-1520250497591-112f2f40a3f4", 2000), alt: "An open-air pool deck under a bright sky" },
  { src: u("photo-1505236858219-8359eb29e329", 2000), alt: "A garden wedding aisle leading to a floral arch" },
  { src: u("photo-1584132967334-10e028bd69f7", 2000), alt: "A shaded veranda deck beside the water" },
];

export const facilities: { label: string; href: string; photo: Photo }[] = [
  {
    label: "Pavilion",
    href: "/resort/banquets",
    photo: { src: u("photo-1464366400600-7168b8af9bc3", 900), alt: "Rows of ceremony chairs beneath a garden pavilion" },
  },
  {
    label: "Swimming Pool",
    href: "/resort/gallery",
    photo: { src: u("photo-1582719508461-905c673771fd", 900), alt: "Loungers on the wooden deck beside the swimming pool" },
  },
  {
    label: "Restaurant",
    href: "/resort/restaurant",
    photo: { src: u("photo-1517248135467-4c7edcad34c4", 900), alt: "Tables laid and waiting in the open restaurant" },
  },
  {
    label: "Rooms",
    href: "/resort/gallery",
    photo: { src: u("photo-1611892440504-42a792e24d32", 900), alt: "A calm guest room with a neatly made bed" },
  },
];

export const grandstandPhotos: Photo[] = [
  { src: u("photo-1519167758481-83f550bb49b3", 1200), alt: "The banquet hall dressed for a wedding reception" },
  { src: u("photo-1511795409834-ef04bbd61622", 1200), alt: "A long table set with flowers and candlelight" },
  { src: u("photo-1519225421980-715cb0215aed", 1200), alt: "Reception tables arranged beneath soft festoon lights" },
];

export const pavilionPhotos: Photo[] = [
  { src: u("photo-1431540015161-0bf868a2d407", 1200), alt: "A bright hall arranged for a corporate gathering" },
  { src: u("photo-1505373877841-8d25f7d46678", 1200), alt: "A stage and screen prepared for a presentation" },
  { src: u("photo-1517457373958-b7bdd4587205", 1200), alt: "Guests seated for an event in the lounge" },
];

export const restaurantPhotos: Photo[] = [
  { src: u("photo-1555396273-367ea4eb4db5", 1200), alt: "The open restaurant with its buffet laid out" },
  { src: u("photo-1414235077428-338989a2e8c0", 1200), alt: "A dining table set with polished glassware" },
  { src: u("photo-1555244162-803834f70033", 1200), alt: "A chef dish served straight from the pan" },
];

export const wetBarPhotos: Photo[] = [
  { src: u("photo-1470337458703-46ad1756a187", 1200), alt: "Cocktails lined up along the wet bar counter" },
  { src: u("photo-1514933651103-005eec06c04b", 1200), alt: "The veranda bar lounge lit softly in the evening" },
  { src: u("photo-1536935338788-846bb9981813", 1200), alt: "A cold drink served at the poolside bar" },
];

export const resortGallery: Photo[] = [
  ...resortHero.slice(0, 3).map((p) => ({ ...p })),
  { src: u("photo-1512918728675-ed5a9ecdebfd", 1000), alt: "A guest room with garden light through the windows" },
  { src: u("photo-1618773928121-c32242e63f39", 1000), alt: "Crisp white linens in a quiet hotel room" },
  { src: u("photo-1445019980597-93fa8acb246c", 1000), alt: "Loungers on the terrace in the evening light" },
  { src: u("photo-1414235077428-338989a2e8c0", 1000), alt: "A restaurant table set for dinner service" },
  { src: u("photo-1555244162-803834f70033", 1000), alt: "A signature dish from the resort kitchen" },
  { src: u("photo-1470337458703-46ad1756a187", 1000), alt: "Drinks served at the poolside wet bar" },
  { src: u("photo-1520250497591-112f2f40a3f4", 1000), alt: "The open-air pool deck under a bright sky" },
  { src: u("photo-1584132967334-10e028bd69f7", 1000), alt: "A shaded veranda deck beside the water" },
  { src: u("photo-1511795409834-ef04bbd61622", 1000), alt: "A wedding table dressed with flowers and candles" },
];
