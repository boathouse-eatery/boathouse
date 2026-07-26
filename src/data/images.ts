// Central registry for every real photo used on the site.
// Files live in `public/images/`. To swap a photo: drop the new file in
// that folder and change the `src` here — nothing else needs to change.

export type SiteImage = {
  src: string;
  alt: string;
  /** focal point for object-position, e.g. "50% 40%" */
  focus?: string;
};

export const images = {
  logo: {
    src: "/images/boathouse-round-logo.jpg",
    alt: "The Boathouse Eatery logo — an anchor with fork tines over Georgian Bay waves",
  },
  patioSunset: {
    src: "/images/patio-sunset-crowd.jpeg",
    alt: "Guests filling the waterfront patio at sunset, string lights overhead and Georgian Bay glowing gold behind the docks",
    focus: "50% 45%",
  },
  patioDaytime: {
    src: "/images/patio-daytime-cruise-ship.jpeg",
    alt: "The cedar patio on a clear summer afternoon, umbrellas open and a cruise ship docked on Georgian Bay beyond",
    focus: "50% 55%",
  },
  tikiHut: {
    src: "/images/tiki-hut-patio.jpeg",
    alt: "The Tiki Hut bar at dusk — thatched roof, shade sails, palms and warm string lights over the deck",
    focus: "50% 50%",
  },
  barInterior: {
    src: "/images/bar-interior-edison.jpeg",
    alt: "The indoor bar with Edison bulb pendants, taps, leather stools and TVs showing the game",
    focus: "50% 50%",
  },
  interiorPaddleboard: {
    src: "/images/interior-paddleboard.jpeg",
    alt: "Inside the restaurant — warm pine floors, a paddleboard mounted above the beam and a hand-painted washrooms sign",
    focus: "50% 55%",
  },
  liveMusic: {
    src: "/images/live-music-duo-sunset.jpeg",
    alt: "An acoustic duo with guitars performing on the patio as the sun sets over the marina",
    focus: "50% 40%",
  },
  fishAndChips: {
    src: "/images/kitchen-fish-and-chips.jpeg",
    alt: "A cook in the kitchen holding up a plate of beer-battered fish and chips with slaw and lemon",
    focus: "50% 60%",
  },
  serverPlates: {
    src: "/images/server-fish-chips-bowl.jpeg",
    alt: "A server carrying a plate of fish and chips alongside a fresh grain bowl out of the kitchen",
    focus: "50% 45%",
  },
  iceCream: {
    src: "/images/dockside-sweets-treats.jpeg",
    alt: "Staff waving from the windows of the Dockside Sweets & Treats ice cream hut",
    focus: "50% 50%",
  },
} satisfies Record<string, SiteImage>;

export type ImageKey = keyof typeof images;
