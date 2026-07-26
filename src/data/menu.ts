// Real Boathouse Eatery food menu, transcribed from
// "Menu Management/Menus/Food Menu.pdf".
//
// NOTE: that PDF is the FOOD menu only. Drinks, desserts and kids menus
// are not published in it, so those categories are intentionally absent
// rather than filled with invented items. Add them here when the PDFs
// are available.

export type MenuItem = {
  name: string;
  description: string;
  price: string;
  /** dietary + prep markers, e.g. "Vegetarian", "Vegan", "GF" */
  tags?: string[];
  /** upcharges / options specific to this item */
  options?: string;
};

export type MenuSection = {
  id: string;
  title: string;
  /** shown under the section heading */
  note?: string;
  items: MenuItem[];
};

/** Happy hour, printed on the menu. */
export const happyHour = {
  label: "Happy Hour",
  detail: "Every day, 9:00 PM to close",
};

// "On the Menu" preview cards on the homepage, linking into /menus
export const menuCategoryCards = [
  {
    slug: "starters",
    title: "Starters & Shareables",
    blurb: "Calamari, wings, burrata, ceviche and lamb chops for the table.",
  },
  {
    slug: "handhelds",
    title: "Handhelds",
    blurb: "Burgers, sandwiches, tacos and pitas, all served with a side.",
  },
  {
    slug: "entrees",
    title: "Entrées",
    blurb: "Striploin, salmon, brisket, duck confit and our fish & chips.",
  },
  {
    slug: "pastas-bowls",
    title: "Pastas & Bowls",
    blurb: "Lobster ravioli, Tuscan shrimp, alfredo and stir fry bowls.",
  },
  {
    slug: "flatbreads",
    title: "Flatbreads & Salads",
    blurb: "Stone-baked flatbreads and fresh salads, gluten-free on request.",
  },
];

export const startersSection: MenuSection = {
  id: "starters",
  title: "Starters & Shareables",
  items: [
    {
      name: "Tempura Cauliflower Bites",
      description:
        "Tempura-battered and seasoned with lemon pepper and herbs. Served with sweet thai sauce, topped with green onion.",
      price: "$15.95",
      tags: ["Vegetarian"],
    },
    {
      name: "Calamari",
      description:
        "Lightly dusted in flour and mango-chipotle seasoning. Served with fresh diced mango and tzatziki.",
      price: "$20.95",
    },
    {
      name: "Bacon & Cheese Spinach Dip",
      description:
        "Cream cheese mixed with mozzarella, bacon, baby spinach and sweet red peppers. Served with a choice of deep fried or baked pitas.",
      price: "$19.95",
      options: "Sub gluten-free pitas +$2.95",
    },
    {
      name: "Coconut Shrimp",
      description:
        "Coconut battered shrimp. Served with sweet thai dipping sauce and lemon.",
      price: "$20.95",
    },
    {
      name: "Deep Fried Pickles",
      description: "Battered, deep fried pickle spears. Served with creamy ranch.",
      price: "$14.95",
      tags: ["Vegetarian"],
    },
    {
      name: "Bruschetta",
      description:
        "Toasted baguette, olive oil, bruschetta mix, fresh basil, balsamic glaze.",
      price: "$15.95",
      tags: ["Vegetarian"],
      options: "Add feta cheese $2.95",
    },
    {
      name: "Lamb Chops + Pita Board",
      description:
        "Two 3oz lamb chops marinated in olive oil, rosemary, thyme and garlic. Served with baked pitas, tzatziki sauce, grilled lemon, mixed olives and capers.",
      price: "$23.95",
    },
    {
      name: "Classic Poutine",
      description: "Smothered in gravy and cheese curds.",
      price: "$14.95",
      options: "Pulled pork +$6.95 · Pulled brisket +$8.95",
    },
    {
      name: "Chicken Wings",
      description:
        "8 large house-battered chicken wings. Lemon pepper, chipotle mango, cajun, smokey bbq, whiskey bbq, honey garlic, creamy dill, medium or hot.",
      price: "$19.95",
    },
    {
      name: "Shrimp Dumplings",
      description:
        "Fried dumplings served with sweet soy sauce, sesame seeds and green onion.",
      price: "$19.95",
    },
    {
      name: "Burrata Cheese",
      description:
        "With roasted tomatoes, olive oil, balsamic glaze, fresh basil and candied pecans. Served with garlic bread.",
      price: "$18.95",
    },
    {
      name: "Seafood Ceviche",
      description:
        "Shrimp and white fish marinated in lime juice, red onions, cucumbers, tomatoes and cilantro. Served with tortilla chips.",
      price: "$20.95",
    },
  ],
};

export const saladsSection: MenuSection = {
  id: "salads",
  title: "Salads",
  items: [
    {
      name: "Chicken Caesar Salad",
      description:
        "Romaine lettuce, grilled chicken, bacon bits, parmesan cheese, croutons in a creamy caesar dressing.",
      price: "$21.95",
    },
    {
      name: "Rainbow Spring Salad",
      description:
        "Spring mix, romaine lettuce, cucumber, watermelon radish, blueberries, diced mango, cherry tomatoes, roasted pecans, goat cheese, house-made orange-ginger dressing.",
      price: "$19.95",
      tags: ["Vegetarian"],
      options: "Add chicken $7.95 · Add shrimp $9.95",
    },
  ],
};

export const flatbreadsSection: MenuSection = {
  id: "flatbreads",
  title: "Flatbreads",
  note: "All flatbreads include side garden greens and balsamic. Gluten-free option +$2.95.",
  items: [
    {
      name: "Margherita",
      description:
        "Marinara sauce, mozzarella, tomatoes, bocconcini, pesto and basil.",
      price: "$22.95",
      tags: ["Vegetarian"],
    },
    {
      name: "Hawaiian",
      description: "Marinara sauce, mozzarella, parmesan, bacon and pineapple.",
      price: "$22.95",
    },
    {
      name: "Smoked Bacon & Mushroom",
      description:
        "Marinara sauce, mozzarella, smoked bacon, red onion, cremini mushrooms, bocconcini cheese, chilli flakes.",
      price: "$22.95",
    },
  ],
};

export const pastasBowlsSection: MenuSection = {
  id: "pastas-bowls",
  title: "Pastas & Bowls",
  items: [
    {
      name: "Chicken Alfredo Fettuccine",
      description:
        "Grilled chicken breast, bacon, house-made alfredo sauce, fettuccine. Served with garlic bread.",
      price: "$27.95",
    },
    {
      name: "Lobster Ravioli",
      description:
        "Tossed with sautéed red onion, red peppers and bacon in a rosé sauce. Finished with basil oil and served with garlic bread.",
      price: "$29.95",
    },
    {
      name: "Tuscan Shrimp Pasta",
      description:
        "Penne tossed with sautéed red onion, red pepper, bacon, shrimp, chilli flakes and olives in a red wine marinara sauce. Finished with fresh basil and served with garlic bread.",
      price: "$28.95",
    },
    {
      name: "Asian Stir Fry Bowl",
      description:
        "Seasoned rice with red onions, mixed peppers, mushrooms, corn, green onion and ginger in a soya-miso sauce. Served with gluten-free focaccia.",
      price: "$26.95",
      tags: ["Vegan", "GF"],
    },
    {
      name: "Tuscan Garden Pasta",
      description:
        "Penne rigate, sautéed mushrooms, mixed peppers, red onions, tossed in marinara sauce with coconut cream. Served with gluten-free focaccia.",
      price: "$26.95",
      tags: ["Vegan", "GF"],
    },
  ],
};

export const handheldsSection: MenuSection = {
  id: "handhelds",
  title: "Handhelds",
  note: "All handhelds served with fries or house salad. Upgrade your side +$2.95 (sweet potato fries, onion rings, caesar salad, poutine). Gluten-free bun +$2.95.",
  items: [
    {
      name: "Bacon Cheese Burger",
      description:
        "House-made beef patty on a toasted brioche bun, cheddar cheese, lettuce, tomato, red onion, pickles.",
      price: "$23.45",
    },
    {
      name: "Canadian Whiskey BBQ Burger",
      description:
        "House-made beef patty on a toasted brioche bun, canadian whiskey bbq sauce, cheddar cheese, caramelized onions, pickles, bacon, garlic aioli.",
      price: "$23.95",
    },
    {
      name: "Monterey Jack Mushroom Burger",
      description:
        "House-made beef patty on a toasted brioche bun, monterey jack cheese, caramelized onions, sautéed mushrooms, arugula, garlic aioli.",
      price: "$23.95",
    },
    {
      name: "Hawaiian Burger",
      description:
        "House-made beef patty on a toasted brioche bun, cheddar cheese, bacon, grilled pineapple, lettuce, onion, tomato, pickles, chipotle mayo.",
      price: "$23.95",
    },
    {
      name: "Chicken Bacon Avocado Sandwich",
      description:
        "Grilled chicken, bacon, guacamole, lettuce, tomato, red onion, pickle, chipotle mayo, on a ciabatta bun.",
      price: "$23.95",
    },
    {
      name: "Mediterranean Chicken Pita",
      description:
        "Marinated chicken breast, fresh arugula and house bruschetta mix served in a grilled pita, finished with creamy tzatziki.",
      price: "$22.95",
    },
    {
      name: "Island BBQ Tacos",
      description:
        "Tortillas with guacamole, crispy onions, shaved radish, chipotle mayo, island bbq rum sauce and cilantro. Choice of beef brisket or pulled jackfruit.",
      price: "$23.95",
    },
    {
      name: "Pulled Pork Sandwich",
      description:
        "Island rum bbq sauce, slow-roasted pulled pork, coleslaw, crispy onions, chipotle mayo, on a toasted brioche bun.",
      price: "$22.95",
    },
    {
      name: "Haddock Sandwich",
      description:
        "Oven-roasted haddock seasoned with lemon pepper on a brioche bun, lettuce, pickles, coleslaw and aioli.",
      price: "$23.95",
    },
    {
      name: "Hawaiian Plant-Based Burger",
      description:
        "Vegan patty, grilled pineapple, arugula, tomato, guacamole, pepperoncini, vegan pesto aioli, on a toasted vegan brioche bun.",
      price: "$23.95",
      tags: ["Vegan"],
    },
    {
      name: "Island BBQ Jackfruit Sandwich",
      description:
        "BBQ jackfruit, lettuce, coleslaw, crispy onions, vegan chipotle mayo, on a toasted vegan brioche bun.",
      price: "$23.95",
      tags: ["Vegan"],
    },
  ],
};

export const entreesSection: MenuSection = {
  id: "entrees",
  title: "Entrées",
  items: [
    {
      name: "New York Striploin Steak AAA",
      description:
        "10oz AAA strip steak, crispy onions, sautéed mushrooms and sautéed vegetables. Served with a loaded baked potato topped with shredded cheese, bacon bits and green onion.",
      price: "$46.95",
    },
    {
      name: "Braised Beef Brisket",
      description:
        "Braised beef brisket with roasted vegetables, garlic mashed potatoes. Served with house-made gravy.",
      price: "$39.95",
    },
    {
      name: "Pineapple Duck Leg Confit",
      description:
        "Roasted in herbs and finished with pineapple habanero chutney. Served with sautéed vegetables and mashed potatoes.",
      price: "$36.95",
      tags: ["Spicy"],
    },
    {
      name: "Seafood Duo",
      description:
        "Haddock, baby shrimp, red onions, mixed peppers, garlic and cilantro in a coconut cream sauce. Served with seasoned rice and sweet plantain.",
      price: "$36.95",
      tags: ["GF"],
    },
    {
      name: "Roasted Atlantic Salmon",
      description:
        "Adobo-rubbed salmon fillet. Served with garlic mashed potatoes and roasted vegetables.",
      price: "$36.95",
      tags: ["GF"],
    },
    {
      name: "Hawaiian Pineapple Shell",
      description:
        "Pineapple shell stuffed with rice, mixed peppers, red onions, roasted corn, sautéed mushrooms, grilled pineapple and parsley in a coconut cream sauce. Topped with chilli flakes.",
      price: "$26.95",
      tags: ["Vegetarian", "GF"],
    },
    {
      name: "Fish & Chips",
      description: "Crispy battered cod. Served with fries, coleslaw and tartar sauce.",
      price: "$24.95",
    },
  ],
};

export const sidesSection: MenuSection = {
  id: "sides",
  title: "Side Orders & Add-ons",
  items: [
    { name: "French Fries", description: "", price: "$7.95" },
    { name: "Sweet Potato Fries", description: "", price: "$9.95" },
    { name: "Onion Rings", description: "", price: "$9.95" },
    { name: "Mashed Potatoes", description: "", price: "$6.95" },
    { name: "Caesar Salad", description: "", price: "$9.95" },
    { name: "House Garden Salad", description: "", price: "$6.95" },
    { name: "Rainbow Spring Salad", description: "", price: "$9.95" },
    { name: "House-Made Gravy", description: "", price: "$2.95" },
    { name: "Add Chicken", description: "", price: "$7.95" },
    { name: "Add Shrimp Skewer", description: "", price: "$9.95" },
    { name: "Add Falafel", description: "", price: "$5.95" },
  ],
};

export const allMenuSections: MenuSection[] = [
  startersSection,
  saladsSection,
  flatbreadsSection,
  pastasBowlsSection,
  handheldsSection,
  entreesSection,
  sidesSection,
];
