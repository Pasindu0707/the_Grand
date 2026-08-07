import {
  espressoAbout,
  espressoGallery,
  espressoHero,
  u,
  type Photo,
} from "./images";

export type Venue = {
  slug: string;
  wordmark: string;
  place: string;
  metaTitle: string;
  metaDescription: string;
  heroEyebrow: string;
  heroName: string;
  heroBlurb: string;
  hero: Photo[];
  aboutHeading: string;
  aboutHeadingEm: string;
  aboutParas: string[];
  callout: { title: string; body: string };
  aboutPhoto: Photo;
  galleryEyebrow: string;
  legalName: string;
  addressLines: string[];
  phones: { display: string; tel: string }[];
  email: string;
  mapSrc: string;
  mapTitle: string;
  facebookPages: string[];
};

export const venues: Record<
  "espresso" | "gastrobar" | "coffeeLounge" | "cafe",
  Venue
> = {
  espresso: {
    slug: "/espresso",
    wordmark: "Grand Espresso",
    place: "Negombo",
    metaTitle: "Grand Espresso — Coffee Lounge, Negombo",
    metaDescription:
      "Grand Espresso in Negombo: fresh coffee, bakery delights, cakes for every occasion, and a private lounge to reserve.",
    heroEyebrow: "The Grand family · Negombo",
    heroName: "Grand Espresso",
    heroBlurb:
      "Coffee, cake, and conversation — served in the grand style since our doors first opened on Saunders Road.",
    hero: espressoHero,
    aboutHeading: "Coffee is grand when it’s ground —",
    aboutHeadingEm: "and comes from the cup to your lips.",
    aboutParas: [
      "Enjoy the perfect cuppa with family and friends. Pastries and short eats, our bakery delights, and a wide variety of cakes in all their glory for any occasion — served to you in a blissful platter.",
      "A lounge of coziness and friendliness, where drinks and eats come in leaps and bounds. The joy of a gathering here is truly in the grand style.",
    ],
    callout: {
      title: "Private Coffee Lounge",
      body: "The Grand Coffee Lounge is where privacy remains solely yours. Reserve a room and enjoy the coziness and comfort that comes with it.",
    },
    aboutPhoto: espressoAbout,
    galleryEyebrow: "From the counter",
    legalName: "Grand Espresso (Pvt) Ltd.",
    addressLines: ["No. 2C/2D, Saunders Road,", "Negombo, Sri Lanka"],
    phones: [
      { display: "+94-31-222 7027", tel: "+94312227027" },
      { display: "+94-31-223 6005", tel: "+94312236005" },
      { display: "+94-777 393 684", tel: "+94777393684" },
    ],
    email: "info@grand.lk",
    mapSrc: "https://maps.google.com/maps?q=7.2173,79.8462&z=15&output=embed",
    mapTitle: "Map showing Grand Espresso on Saunders Road, Negombo",
    facebookPages: [
      "The Grand",
      "The Grand Coffee Lounge",
      "The Grand Cafe Katuneriya",
    ],
  },

  gastrobar: {
    slug: "/gastrobar",
    wordmark: "The Grand Gastrobar",
    place: "Negombo",
    metaTitle: "The Grand Gastrobar — Kitchen & Bar, Negombo",
    metaDescription:
      "The Grand Gastrobar in Negombo: small plates, hearty mains, and a bar that takes its list seriously — open late into the evening.",
    heroEyebrow: "Kitchen & bar · Negombo",
    heroName: "The Grand Gastrobar",
    heroBlurb:
      "Plates and pours under one roof — where Negombo winds down for the evening.",
    hero: [
      { src: u("photo-1514933651103-005eec06c04b", 2000), alt: "The bar counter lit softly for the evening" },
      { src: u("photo-1528605248644-14dd04022da1", 2000), alt: "Friends sharing wine and conversation at the table" },
      { src: u("photo-1504674900247-0877df9cc836", 2000), alt: "A table spread with plates from the kitchen" },
      { src: u("photo-1470337458703-46ad1756a187", 2000), alt: "Cocktails lined up along the bar" },
    ],
    aboutHeading: "Good plates deserve",
    aboutHeadingEm: "a good pour beside them.",
    aboutParas: [
      "The Grand Gastrobar brings the kitchen and the bar to one table. Small plates and hearty mains, drawn from the same Western, Eastern, and Sri Lankan kitchens the Grand family is known for — matched with a bar that takes its list seriously.",
      "Come early for dinner or late for a nightcap. Either way, the evening tends to stretch — that is rather the point.",
    ],
    callout: {
      title: "The Long Table",
      body: "One table, set for the whole party. Book the long table for birthdays, send-offs, and any evening that deserves company.",
    },
    aboutPhoto: {
      src: u("photo-1466978913421-dad2ebd01d17", 1200),
      alt: "A long dinner table laid out for a shared meal",
    },
    galleryEyebrow: "From the pass",
    legalName: "The Grand Gastrobar",
    addressLines: ["Negombo, Sri Lanka"],
    phones: [{ display: "+94-777 393 684", tel: "+94777393684" }],
    email: "info@grand.lk",
    mapSrc: "https://maps.google.com/maps?q=7.2110,79.8386&z=15&output=embed",
    mapTitle: "Map showing The Grand Gastrobar in Negombo",
    facebookPages: ["The Grand", "The Grand Gastrobar"],
  },

  coffeeLounge: {
    slug: "/coffee-lounge",
    wordmark: "The Grand Coffee Lounge",
    place: "Wennappuwa",
    metaTitle: "The Grand Coffee Lounge — Wennappuwa",
    metaDescription:
      "The Grand Coffee Lounge in Wennappuwa: coffee ground fresh, bakery delights, and private rooms to reserve for quieter gatherings.",
    heroEyebrow: "The Grand family · Wennappuwa",
    heroName: "The Grand Coffee Lounge",
    heroBlurb:
      "Coffee and quiet corners, a few streets from the Dutch canal.",
    hero: [
      { src: u("photo-1445116572660-236099ec97a0", 2000), alt: "Sunlight falling across the lounge's wooden tables" },
      { src: u("photo-1453614512568-c4024d13c247", 2000), alt: "The coffee counter with cups stacked and ready" },
      { src: u("photo-1442512595331-e89e73853f31", 2000), alt: "A barista pouring coffee slowly from a kettle" },
      { src: u("photo-1521017432531-fbd92d768814", 2000), alt: "Guests chatting over coffee in the lounge" },
    ],
    aboutHeading: "A cup poured slowly,",
    aboutHeadingEm: "in a room built for lingering.",
    aboutParas: [
      "The Grand Coffee Lounge is Wennappuwa's sitting room — coffee ground fresh, tea brewed properly, and bakery delights carried over warm. It is a lounge in the true sense: made for the second cup and the longer conversation.",
      "Families after church, friends back from the market, couples planning a wedding at the resort down the road — everyone finds a corner here.",
    ],
    callout: {
      title: "Private Coffee Lounge",
      body: "Privacy remains solely yours. Reserve a room and enjoy the coziness and comfort that comes with it.",
    },
    aboutPhoto: {
      src: u("photo-1497935586351-b67a49e012bf", 1200),
      alt: "An espresso served on a quiet corner table",
    },
    galleryEyebrow: "From the lounge",
    legalName: "The Grand Coffee Lounge",
    addressLines: ["Wennappuwa, Sri Lanka"],
    phones: [{ display: "+94-777 393 684", tel: "+94777393684" }],
    email: "info@grand.lk",
    mapSrc: "https://maps.google.com/maps?q=7.3537,79.8380&z=15&output=embed",
    mapTitle: "Map showing The Grand Coffee Lounge in Wennappuwa",
    facebookPages: ["The Grand", "The Grand Coffee Lounge"],
  },

  cafe: {
    slug: "/cafe",
    wordmark: "Grand Cafe",
    place: "Katuneriya",
    metaTitle: "Grand Cafe — Katuneriya",
    metaDescription:
      "Grand Cafe in Katuneriya: breakfast, short eats, cakes to order, and a proper cuppa on the coast road between Negombo and Wennappuwa.",
    heroEyebrow: "On the coast road · Katuneriya",
    heroName: "Grand Cafe",
    heroBlurb:
      "A friendly stop between Negombo and Wennappuwa — short eats, cakes, and a proper cuppa.",
    hero: [
      { src: u("photo-1554118811-1e0d58224f24", 2000), alt: "The service counter of the warmly lit cafe" },
      { src: u("photo-1493857671505-72967e2e2760", 2000), alt: "Morning light across the cafe's seating" },
      { src: u("photo-1504754524776-8f4f37790ca0", 2000), alt: "A breakfast table laid with plates to share" },
      { src: u("photo-1517433670267-08bbd4be890f", 2000), alt: "Freshly baked pastries arranged on the counter" },
    ],
    aboutHeading: "The kettle is on,",
    aboutHeadingEm: "and the short eats are warm.",
    aboutParas: [
      "Grand Cafe is the family's door in Katuneriya: a bright, easy place for breakfast on the way north, a mid-drive coffee, or an armful of cakes for the weekend. The bakery counter is stocked through the day.",
      "Order at the counter, take a seat by the window, and watch the coast road go by. Most who stop once make a habit of it.",
    ],
    callout: {
      title: "Cakes to Order",
      body: "Birthday, wedding, or just-because — order a cake a day ahead and collect it iced, boxed, and ready for the table.",
    },
    aboutPhoto: {
      src: u("photo-1507133750040-4a8f57021571", 1200),
      alt: "Breakfast and coffee served by the cafe window",
    },
    galleryEyebrow: "From the counter",
    legalName: "The Grand Cafe Katuneriya",
    addressLines: ["Katuneriya, Sri Lanka"],
    phones: [{ display: "+94-777 393 684", tel: "+94777393684" }],
    email: "info@grand.lk",
    mapSrc: "https://maps.google.com/maps?q=7.2779,79.8285&z=14&output=embed",
    mapTitle: "Map showing Grand Cafe in Katuneriya",
    facebookPages: ["The Grand", "The Grand Cafe Katuneriya"],
  },
};

export const venueGalleries: Record<keyof typeof venues, Photo[]> = {
  espresso: espressoGallery,
  gastrobar: [
    { src: u("photo-1551218808-94e220e084d2", 1000), alt: "A plated dish finished at the pass" },
    { src: u("photo-1540189549336-e6e99c3679fe", 1000), alt: "A bright bowl fresh from the kitchen" },
    { src: u("photo-1565299624946-b28f40a0ae38", 1000), alt: "A favourite from the evening menu" },
    { src: u("photo-1536935338788-846bb9981813", 1000), alt: "A cold drink poured at the bar" },
    { src: u("photo-1565958011703-44f9829ba187", 1000), alt: "Dessert with berries to end the meal" },
    { src: u("photo-1546069901-ba9599a7e63c", 1000), alt: "A fresh bowl from the lighter side of the menu" },
    { src: u("photo-1551782450-a2132b4ba21d", 1000), alt: "A burger stacked high from the grill" },
    { src: u("photo-1414235077428-338989a2e8c0", 1000), alt: "A table set with polished glassware" },
  ],
  coffeeLounge: [
    { src: u("photo-1461023058943-07fcbe16d735", 1000), alt: "Coffee on the table beside a window seat" },
    { src: u("photo-1512568400610-62da28bc8a13", 1000), alt: "A quiet cup of coffee on a wooden table" },
    { src: u("photo-1534040385115-33dcb3acba5b", 1000), alt: "A croissant served with morning coffee" },
    { src: u("photo-1541167760496-1628856ab772", 1000), alt: "Latte art poured into a wide ceramic cup" },
    { src: u("photo-1447933601403-0c6688de566e", 1000), alt: "Roasted coffee beans photographed up close" },
    { src: u("photo-1578985545062-69928b1d9587", 1000), alt: "A chocolate layer cake from the bakery counter" },
    { src: u("photo-1504754524776-8f4f37790ca0", 1000), alt: "A shared breakfast laid across the table" },
    { src: u("photo-1495474472287-4d71bcdd2085", 1000), alt: "A latte in a ceramic cup beside coffee beans" },
  ],
  cafe: [
    { src: u("photo-1509440159596-0249088772ff", 1000), alt: "Loaves and baked goods on the bakery display" },
    { src: u("photo-1555507036-ab1f4038808a", 1000), alt: "Golden croissants fresh from the oven" },
    { src: u("photo-1567620905732-2d1ec7ab7445", 1000), alt: "Pancakes stacked and ready for breakfast" },
    { src: u("photo-1464349095431-e9a21285b5f3", 1000), alt: "A colourful celebration cake ready for the party" },
    { src: u("photo-1501339847302-ac426a4a7cbb", 1000), alt: "The cafe interior with wooden tables set for guests" },
    { src: u("photo-1572442388796-11668a67e53d", 1000), alt: "A cappuccino served on a dark wooden table" },
    { src: u("photo-1559925393-8be0ec4767c8", 1000), alt: "A quiet corner with cane chairs and soft light" },
    { src: u("photo-1509042239860-f550ce710b93", 1000), alt: "A cup of freshly brewed coffee on a dark counter" },
  ],
};
