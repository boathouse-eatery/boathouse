// Menu content. ALL items below are realistic PLACEHOLDER menu items for mockup
// purposes — swap in the real, current menu before launch.

export type MenuItem = {
  name: string;
  description: string;
  price: string;
  tags?: string[];
};

export type MenuSection = {
  id: string;
  title: string;
  note?: string;
  items: MenuItem[];
};

// "On the Menu" preview cards shown on the homepage, linking into /menus
export const menuCategoryCards = [
  {
    slug: "lunch-dinner",
    title: "Lunch & Dinner",
    blurb: "Shared plates, burgers, seafood, and dockside favourites.",
  },
  {
    slug: "cocktails",
    title: "Cocktails & Drinks",
    blurb: "Craft cocktails, local drafts, and a well-stocked wine list.",
  },
  {
    slug: "desserts",
    title: "Desserts",
    blurb: "Made-from-scratch sweets to finish the night on the water.",
  },
  {
    slug: "vegan-vegetarian-gf",
    title: "Vegan / Vegetarian & GF",
    blurb: "Thoughtfully prepared plant-based and gluten-friendly options.",
  },
  {
    slug: "kids",
    title: "Kids Menu",
    blurb: "Simple, crowd-pleasing plates for the little ones.",
  },
];

export const lunchDinnerSection: MenuSection = {
  id: "lunch-dinner",
  title: "Lunch & Dinner",
  note: "Placeholder menu — items and pricing for illustration only.",
  items: [
    {
      name: "Georgian Bay Calamari",
      description:
        "Lightly fried calamari, banana peppers, house marinara, lemon aioli.",
      price: "$18",
      tags: ["Shareable"],
    },
    {
      name: "Dockside Nachos",
      description:
        "Corn tortilla chips, three-cheese blend, pico de gallo, jalapeño, sour cream. Add pulled pork or chicken.",
      price: "$19",
      tags: ["Shareable"],
    },
    {
      name: "Boathouse Burger",
      description:
        "Half-pound beef patty, aged cheddar, bacon jam, lettuce, tomato, brioche bun, hand-cut fries.",
      price: "$22",
    },
    {
      name: "Harbour Fish & Chips",
      description:
        "Beer-battered whitefish, hand-cut fries, house slaw, tartar sauce.",
      price: "$24",
    },
    {
      name: "Georgian Bay Whitefish",
      description:
        "Pan-seared local whitefish, herb butter, seasonal vegetables, garlic mash.",
      price: "$29",
    },
    {
      name: "Waterfront Caesar Salad",
      description:
        "Romaine, smoked bacon, garlic croutons, shaved parmesan, classic Caesar dressing.",
      price: "$16",
      tags: ["Add chicken +$6", "Add shrimp +$8"],
    },
    {
      name: "Cedar Plank Salmon",
      description:
        "Maple-glazed salmon roasted on cedar, jasmine rice, grilled vegetables.",
      price: "$28",
    },
    {
      name: "Patio Chicken Wrap",
      description:
        "Grilled chicken, romaine, tomato, bacon, ranch, herb tortilla, side salad or fries.",
      price: "$19",
    },
    {
      name: "Bay Street Pizza",
      description:
        "Wood-fired flatbread, tomato sauce, mozzarella, pepperoni, roasted peppers.",
      price: "$20",
    },
  ],
};

export const veganVegetarianGfSection: MenuSection = {
  id: "vegan-vegetarian-gf",
  title: "Vegan / Vegetarian & GF",
  note: "Placeholder menu — items and pricing for illustration only.",
  items: [
    {
      name: "Roasted Vegetable Grain Bowl",
      description:
        "Quinoa, roasted seasonal vegetables, chickpeas, tahini dressing.",
      price: "$19",
      tags: ["Vegan", "GF"],
    },
    {
      name: "Wild Mushroom Risotto",
      description: "Arborio rice, wild mushrooms, parmesan, truffle oil.",
      price: "$23",
      tags: ["Vegetarian", "GF available"],
    },
    {
      name: "Charred Cauliflower Steak",
      description:
        "Spiced cauliflower, herbed yogurt, pomegranate, toasted almonds.",
      price: "$21",
      tags: ["Vegan option", "GF"],
    },
    {
      name: "Garden Harvest Salad",
      description:
        "Mixed greens, roasted beets, candied walnuts, goat cheese, cider vinaigrette.",
      price: "$17",
      tags: ["Vegetarian", "GF", "Vegan without cheese"],
    },
    {
      name: "Beyond Burger",
      description:
        "Plant-based patty, vegan cheddar, lettuce, tomato, vegan aioli, side salad.",
      price: "$21",
      tags: ["Vegan"],
    },
  ],
};

export const dessertsSection: MenuSection = {
  id: "desserts",
  title: "Desserts",
  note: "Made from scratch daily. Placeholder menu for illustration only.",
  items: [
    {
      name: "Sunset Key Lime Pie",
      description: "Graham crust, torched meringue, fresh lime.",
      price: "$11",
    },
    {
      name: "Warm Chocolate Lava Cake",
      description: "Vanilla bean ice cream, salted caramel drizzle.",
      price: "$12",
    },
    {
      name: "Butter Tart Trio",
      description: "Classic Ontario butter tarts, whipped cream.",
      price: "$10",
    },
    {
      name: "Seasonal Berry Crumble",
      description: "Local berries, oat streusel, vanilla ice cream.",
      price: "$11",
    },
  ],
};

export const cocktailsSection: MenuSection = {
  id: "cocktails",
  title: "Cocktails & Drinks",
  note: "Placeholder menu — items and pricing for illustration only.",
  items: [
    {
      name: "Golden Hour Old Fashioned",
      description: "Bourbon, demerara, orange bitters, smoked cedar.",
      price: "$15",
    },
    {
      name: "Georgian Bay Sunset",
      description: "Spiced rum, pineapple, grenadine, lime.",
      price: "$14",
    },
    {
      name: "Dockside Caesar",
      description: "Vodka, house Caesar mix, pickled bean, spiced rim.",
      price: "$13",
    },
    {
      name: "Cedar Dock Mule",
      description: "Vodka, ginger beer, lime, fresh mint.",
      price: "$13",
    },
    {
      name: "Local Draft Beer",
      description: "Rotating taps featuring Ontario breweries.",
      price: "$8",
    },
    {
      name: "House Wine",
      description: "Ask your server about our by-the-glass selections.",
      price: "$11+",
    },
  ],
};

export const kidsSection: MenuSection = {
  id: "kids",
  title: "Kids Menu",
  note: "For guests 12 and under. Placeholder menu for illustration only.",
  items: [
    {
      name: "Mini Burger & Fries",
      description: "Beef patty slider, cheddar, hand-cut fries.",
      price: "$10",
    },
    {
      name: "Chicken Fingers & Fries",
      description: "Crispy chicken tenders, plum sauce, hand-cut fries.",
      price: "$10",
    },
    {
      name: "Kids Grilled Cheese",
      description: "Classic grilled cheese, side of fresh fruit.",
      price: "$8",
    },
    {
      name: "Kids Mac & Cheese",
      description: "Creamy three-cheese sauce, cavatappi pasta.",
      price: "$9",
    },
  ],
};

export const allMenuSections: MenuSection[] = [
  lunchDinnerSection,
  veganVegetarianGfSection,
  dessertsSection,
  cocktailsSection,
  kidsSection,
];
