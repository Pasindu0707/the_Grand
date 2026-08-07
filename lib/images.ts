export type Photo = { src: string; alt: string };

export const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

/* ---------------------------------- Landing --------------------------------- */

export const landing = {
  espresso: {
    src: u("photo-1509042239860-f550ce710b93"),
    alt: "A cup of freshly brewed coffee on a dark wooden counter",
  },
  resort: {
    src: u("photo-1540541338287-41700207dee6"),
    alt: "A tropical resort swimming pool lined with palm trees",
  },
};

/* All five Grand locations — placeholder photos until real photography arrives. */
export const locations: {
  town: string;
  name: string;
  href?: string;
  photo: Photo;
}[] = [
  {
    town: "Wennappuwa",
    name: "The Grand Coffee Lounge",
    href: "/coffee-lounge",
    photo: { src: u("photo-1501339847302-ac426a4a7cbb", 900), alt: "Wooden tables inside a warmly lit coffee lounge" },
  },
  {
    town: "Wennappuwa",
    name: "Grand Holiday Resort",
    href: "/resort",
    photo: { src: u("photo-1571896349842-33c89424de2d", 900), alt: "The resort pool at dusk with loungers along its edge" },
  },
  {
    town: "Negombo",
    name: "The Grand Gastrobar",
    href: "/gastrobar",
    photo: { src: u("photo-1514933651103-005eec06c04b", 900), alt: "A softly lit bar lounge set for the evening" },
  },
  {
    town: "Negombo",
    name: "Grand Espresso Bar",
    href: "/espresso",
    photo: { src: u("photo-1495474472287-4d71bcdd2085", 900), alt: "A latte in a ceramic cup beside coffee beans" },
  },
  {
    town: "Katuneriya",
    name: "Grand Cafe",
    href: "/cafe",
    photo: { src: u("photo-1554118811-1e0d58224f24", 900), alt: "The service counter of a warmly lit cafe" },
  },
];

/* ------------------------------- Grand Espresso ------------------------------ */

export const espressoHero: Photo[] = [
  {
    src: u("photo-1554118811-1e0d58224f24", 2000),
    alt: "The service counter of a warmly lit coffee shop",
  },
  {
    src: u("photo-1495474472287-4d71bcdd2085", 2000),
    alt: "A latte in a ceramic cup beside coffee beans",
  },
  {
    src: u("photo-1517433670267-08bbd4be890f", 2000),
    alt: "Freshly baked pastries arranged on a bakery counter",
  },
  {
    src: u("photo-1521017432531-fbd92d768814", 2000),
    alt: "Guests chatting at the wooden tables of a cosy cafe",
  },
];

export const espressoAbout: Photo = {
  src: u("photo-1559925393-8be0ec4767c8", 1200),
  alt: "A quiet corner of the coffee lounge with cane chairs and soft light",
};

export const espressoGallery: Photo[] = [
  { src: u("photo-1541167760496-1628856ab772", 1000), alt: "Latte art poured into a wide ceramic cup" },
  { src: u("photo-1578985545062-69928b1d9587", 1000), alt: "A chocolate layer cake from the bakery counter" },
  { src: u("photo-1555507036-ab1f4038808a", 1000), alt: "Golden croissants fresh from the oven" },
  { src: u("photo-1572442388796-11668a67e53d", 1000), alt: "A cappuccino served on a dark wooden table" },
  { src: u("photo-1501339847302-ac426a4a7cbb", 1000), alt: "The lounge interior with wooden tables set for guests" },
  { src: u("photo-1509440159596-0249088772ff", 1000), alt: "Loaves and baked goods on the bakery display" },
  { src: u("photo-1447933601403-0c6688de566e", 1000), alt: "Roasted coffee beans photographed up close" },
  { src: u("photo-1464349095431-e9a21285b5f3", 1000), alt: "A colourful celebration cake ready for the party" },
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
  { src: u("photo-1555244162-803834f70033", 1200), alt: "A chef's dish served straight from the pan" },
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
