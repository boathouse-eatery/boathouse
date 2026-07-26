// Core business details. Edit here to update site-wide contact info, links, and hours.

export const siteInfo = {
  name: "The Boathouse Eatery",
  tagline: "Waterfront Dining on Georgian Bay",
  address: {
    line1: "177 King Street",
    city: "Midland",
    province: "Ontario",
    postalCode: "L4R 3L8",
    full: "177 King Street, Midland, Ontario L4R 3L8",
  },
  phone: "705.242.2428",
  phoneHref: "tel:+17052422428",
  links: {
    reservations:
      "https://www.opentable.com/restref/client/?rid=325579&restref=325579",
    giftCards: "https://order.toasttab.com/egiftcards/boathouse-eatery",
    facebook: "https://www.facebook.com/boathousemidland/",
    instagram: "https://www.instagram.com/theboathouseeatery/",
    googleMaps: "https://www.google.ca/maps/place/The+Boathouse+Eatery",
  },
} as const;

export type HoursEntry = {
  days: string;
  hours: string;
};

export const hours: HoursEntry[] = [
  { days: "Monday – Sunday", hours: "11:00 AM – 10:00 PM" },
];

/** Shown alongside the hours block. Set to null to hide. */
export const hoursNote = "Open seven days a week";

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Menus", href: "/menus" },
  { label: "Live Music", href: "/live-music" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];
