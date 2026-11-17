import { gastrobarBar, gastrobarKitchen, type Photo } from "./images";

export type MenuItem = {
  name: string;
  note: string;
  price: string;
  signature?: boolean;
};

export type MenuSection = {
  id: string;
  label: string;
  kicker: string;
  photo: Photo;
  items: MenuItem[];
};

/**
 * Placeholder menu copy and prices - written to match the photography.
 * Swap the names, notes and prices for the real card before launch.
 */
export const menuSections: MenuSection[] = [
  {
    id: "morning",
    label: "Morning",
    kicker: "Served 8.00 am until noon",
    photo: gastrobarKitchen[0],
    items: [
      {
        name: "The Grand Breakfast",
        note: "Poached eggs, hash, bacon, sausage, grilled tomato, house bread and butter",
        price: "2,450",
        signature: true,
      },
      {
        name: "Pancake Stack",
        note: "Mango, pineapple, strawberry and banana, maple on the side",
        price: "1,650",
      },
      {
        name: "Bakery Basket",
        note: "Danish, almond doughnut and a warm croissant, for the table",
        price: "1,200",
      },
      {
        name: "Caramel Waffle",
        note: "Salted caramel and cream, with a pot of Ceylon tea",
        price: "1,450",
      },
    ],
  },
  {
    id: "pass",
    label: "From the Pass",
    kicker: "Small plates and mains, all day",
    photo: gastrobarKitchen[2],
    items: [
      {
        name: "Whole Fried Seer",
        note: "Chilli, lime, coriander and crushed peanut, with a herb oil",
        price: "4,200",
        signature: true,
      },
      {
        name: "Lamb Chops",
        note: "Seared in the pan with peppers, baby potato and rosemary",
        price: "4,850",
      },
      {
        name: "Crumbed Chicken Tenders",
        note: "Cornflake crust, hot honey dip - the long-table favourite",
        price: "1,850",
      },
      {
        name: "Fish of the Day",
        note: "Potato puree, greens, dill and a lemon butter",
        price: "3,900",
      },
    ],
  },
  {
    id: "bowls",
    label: "Bowls & Pasta",
    kicker: "From the Eastern and Italian sides of the kitchen",
    photo: gastrobarKitchen[3],
    items: [
      {
        name: "Grand Rice Bowl",
        note: "Turmeric rice, prawn and chicken skewers, wok vegetables, garlic cream",
        price: "2,950",
        signature: true,
      },
      {
        name: "Pesto Penne",
        note: "Basil pesto, parmesan, olive oil - add grilled chicken or prawn",
        price: "2,350",
      },
      {
        name: "Nasi Goreng",
        note: "Fried rice, egg, prawn crackers and sambol",
        price: "2,100",
      },
      {
        name: "Garden Bowl",
        note: "Charred vegetables, herbs, lime dressing and toasted seeds",
        price: "1,750",
      },
    ],
  },
  {
    id: "counter",
    label: "Coffee Counter",
    kicker: "Beans ground to order, all day",
    photo: gastrobarBar[1],
    items: [
      { name: "Flat White", note: "Double shot, silk microfoam", price: "650", signature: true },
      { name: "Cappuccino", note: "In the stoneware, dusted", price: "650" },
      { name: "French Press", note: "For two, poured at the table", price: "950" },
      { name: "Ceylon Tea", note: "A proper pot, loose leaf", price: "450" },
    ],
  },
  {
    id: "cold",
    label: "Cold & Long",
    kicker: "Poured from four until close",
    photo: gastrobarBar[0],
    items: [
      {
        name: "Iced Shakerato",
        note: "Espresso shaken over ice, poured at the counter",
        price: "850",
        signature: true,
      },
      { name: "Passion & Mint Cooler", note: "Fresh passion fruit, lime, mint", price: "750" },
      { name: "Rosemary Iced Tea", note: "Long brewed, rosemary and citrus", price: "750" },
      { name: "Watermelon Crush", note: "Pressed to order, no syrup", price: "700" },
    ],
  },
];

export const marqueeWords = [
  "Breakfast from 8",
  "Coffee ground to order",
  "Small plates & mains",
  "The long table seats 14",
  "361 Colombo Road, Negombo",
  "Open late Friday & Saturday",
];

export const storyStats: { value: string; label: string }[] = [
  { value: "8am", label: "Grinder on" },
  { value: "3", label: "Kitchens on one menu" },
  { value: "14", label: "Seats at the long table" },
  { value: "11pm", label: "Last pour" },
];
