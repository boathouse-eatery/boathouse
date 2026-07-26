// Guest testimonials. The first entry is a real guest review (verbatim).
// The rest are PLACEHOLDER quotes — replace with real guest reviews.

export type Testimonial = {
  quote: string;
  author: string;
  isPlaceholder?: boolean;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "No matter how they change their menu it is always always delicious — absolutely incredible apps and salads. With amazing bands, loads of interesting drinks and delectable desserts, you can't go wrong. It's our only waterside restaurant and is just a great venue for anyone any time.",
    author: "Tiffany M.",
  },
  {
    quote:
      "The patio at sunset is unbeatable — we come for the view and stay for the calamari. Our new go-to spot on the water.",
    author: "Placeholder Guest",
    isPlaceholder: true,
  },
  {
    quote:
      "Great live music, friendly staff, and a menu with something for everyone in our group. Highly recommend for a summer evening.",
    author: "Placeholder Guest",
    isPlaceholder: true,
  },
];
