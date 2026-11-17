import { gastrobarGallery, gastrobarHero, gastrobarKitchen, u, type Photo } from "./images";

export type Hours = { days: string; time: string };

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
  /** Present when the venue takes enquiries over WhatsApp. */
  whatsapp?: { display: string; number: string };
  hours: Hours[];
  mapSrc: string;
  mapTitle: string;
  facebookPages: string[];
};

export const venues: Record<"gastrobar" | "coffeeLounge" | "cafe", Venue> = {
  gastrobar: {
    slug: "/gastrobar",
    wordmark: "The Grand Gastrobar",
    place: "Negombo",
    metaTitle: "The Grand Gastrobar - Kitchen & Bar, Negombo",
    metaDescription:
      "The Grand Gastrobar on Colombo Road, Negombo: breakfast through to late plates, a coffee counter that takes its beans seriously, and a bar built for long evenings.",
    heroEyebrow: "Kitchen & bar · Negombo",
    heroName: "The Grand Gastrobar",
    heroBlurb:
      "Breakfast, long lunches and late plates - under one high timber roof on Colombo Road.",
    hero: gastrobarHero,
    aboutHeading: "One room for the whole day -",
    aboutHeadingEm: "coffee at eight, the last pour at eleven.",
    aboutParas: [
      "The Grand Gastrobar brings the kitchen, the bakery and the bar to a single counter. Mornings start with the grinder and a breakfast platter; by evening the same room is given over to sharing plates, the grill, and a bar that takes its list seriously.",
      "Western, Eastern and Sri Lankan kitchens meet on one menu - the seer fish and the lamb chops arrive from the same pass as the pesto penne. Come for a flat white, stay for dinner. Most people do.",
    ],
    callout: {
      title: "The Long Table",
      body: "One table, set for the whole party. Book it for birthdays, send-offs, and any evening that deserves company.",
    },
    aboutPhoto: gastrobarKitchen[0],
    galleryEyebrow: "From the pass",
    legalName: "The Grand Gastrobar",
    addressLines: ["361 Colombo Road,", "Negombo, Sri Lanka"],
    phones: [
      { display: "+94 77 588 6300", tel: "+94775886300" },
      { display: "+94 31 222 7300", tel: "+94312227300" },
    ],
    email: "info@grand.lk",
    // Same number as the outlet mobile; digits only, country code, no "+".
    whatsapp: { display: "+94 77 588 6300", number: "94775886300" },
    hours: [
      { days: "Monday - Thursday", time: "8.00 am - 11.00 pm" },
      { days: "Friday - Saturday", time: "8.00 am - 12.00 am" },
      { days: "Sunday", time: "8.00 am - 11.00 pm" },
    ],
    mapSrc:
      "https://maps.google.com/maps?q=361+Colombo+Road,+Negombo,+Sri+Lanka&z=16&output=embed",
    mapTitle: "Map showing The Grand Gastrobar at 361 Colombo Road, Negombo",
    facebookPages: ["The Grand", "The Grand Gastrobar"],
  },

  coffeeLounge: {
    slug: "/coffee-lounge",
    wordmark: "The Grand Coffee Lounge",
    place: "Wennappuwa",
    metaTitle: "The Grand Coffee Lounge - Wennappuwa",
    metaDescription:
      "The Grand Coffee Lounge in Wennappuwa: coffee ground fresh, bakery delights, and private rooms to reserve for quieter gatherings.",
    heroEyebrow: "The Grand family · Wennappuwa",
    heroName: "The Grand Coffee Lounge",
    heroBlurb: "Coffee and quiet corners, a few streets from the Dutch canal.",
    hero: [
      { src: u("photo-1445116572660-236099ec97a0", 2000), alt: "Sunlight falling across the lounge wooden tables" },
      { src: u("photo-1453614512568-c4024d13c247", 2000), alt: "The coffee counter with cups stacked and ready" },
      { src: u("photo-1442512595331-e89e73853f31", 2000), alt: "A barista pouring coffee slowly from a kettle" },
      { src: u("photo-1521017432531-fbd92d768814", 2000), alt: "Guests chatting over coffee in the lounge" },
    ],
    aboutHeading: "A cup poured slowly,",
    aboutHeadingEm: "in a room built for lingering.",
    aboutParas: [
      "The Grand Coffee Lounge is the Wennappuwa sitting room - coffee ground fresh, tea brewed properly, and bakery delights carried over warm. It is a lounge in the true sense: made for the second cup and the longer conversation.",
      "Families after church, friends back from the market, couples planning a wedding at the resort down the road - everyone finds a corner here.",
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
    hours: [
      { days: "Monday - Saturday", time: "7.30 am - 9.00 pm" },
      { days: "Sunday", time: "8.00 am - 9.00 pm" },
    ],
    mapSrc: "https://maps.google.com/maps?q=7.3537,79.8380&z=15&output=embed",
    mapTitle: "Map showing The Grand Coffee Lounge in Wennappuwa",
    facebookPages: ["The Grand", "The Grand Coffee Lounge"],
  },

  cafe: {
    slug: "/cafe",
    wordmark: "Grand Cafe",
    place: "Katuneriya",
    metaTitle: "Grand Cafe - Katuneriya",
    metaDescription:
      "Grand Cafe in Katuneriya: breakfast, short eats, cakes to order, and a proper cuppa on the coast road between Negombo and Wennappuwa.",
    heroEyebrow: "On the coast road · Katuneriya",
    heroName: "Grand Cafe",
    heroBlurb:
      "A friendly stop between Negombo and Wennappuwa - short eats, cakes, and a proper cuppa.",
    hero: [
      { src: u("photo-1554118811-1e0d58224f24", 2000), alt: "The service counter of the warmly lit cafe" },
      { src: u("photo-1493857671505-72967e2e2760", 2000), alt: "Morning light across the cafe seating" },
      { src: u("photo-1504754524776-8f4f37790ca0", 2000), alt: "A breakfast table laid with plates to share" },
      { src: u("photo-1517433670267-08bbd4be890f", 2000), alt: "Freshly baked pastries arranged on the counter" },
    ],
    aboutHeading: "The kettle is on,",
    aboutHeadingEm: "and the short eats are warm.",
    aboutParas: [
      "Grand Cafe is the family door in Katuneriya: a bright, easy place for breakfast on the way north, a mid-drive coffee, or an armful of cakes for the weekend. The bakery counter is stocked through the day.",
      "Order at the counter, take a seat by the window, and watch the coast road go by. Most who stop once make a habit of it.",
    ],
    callout: {
      title: "Cakes to Order",
      body: "Birthday, wedding, or just-because - order a cake a day ahead and collect it iced, boxed, and ready for the table.",
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
    hours: [
      { days: "Monday - Saturday", time: "7.00 am - 8.30 pm" },
      { days: "Sunday", time: "7.30 am - 8.30 pm" },
    ],
    mapSrc: "https://maps.google.com/maps?q=7.2779,79.8285&z=14&output=embed",
    mapTitle: "Map showing Grand Cafe in Katuneriya",
    facebookPages: ["The Grand", "The Grand Cafe Katuneriya"],
  },
};

export const venueGalleries: Record<keyof typeof venues, Photo[]> = {
  gastrobar: gastrobarGallery,
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
