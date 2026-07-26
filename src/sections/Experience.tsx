import { Link } from "react-router-dom";
import { Reveal } from "../components/Reveal";
import { Photo } from "../components/Photo";
import { images } from "../data/images";

const spaces = [
  {
    image: images.tikiHut,
    title: "The Tiki Hut",
    copy: "Our thatched-roof outdoor bar under the shade sails and string lights. Order a cocktail, grab a stool, stay for the sunset.",
  },
  {
    image: images.barInterior,
    title: "The Bar",
    copy: "Edison bulbs, cold taps and the game on. The spot for an after-work beer when the wind comes off the bay.",
  },
  {
    image: images.interiorPaddleboard,
    title: "The Dining Room",
    copy: "Warm pine, weathered timber and dockside character, comfortable year-round whatever the weather is doing outside.",
  },
];

export function Experience() {
  return (
    <section className="bg-bay-900 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">
            The Experience
          </p>
          <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-[2.75rem]">
            Three ways to spend an evening
          </h2>
          <p className="mt-5 font-sans text-base leading-relaxed text-bay-100 sm:text-lg">
            Cedar planks underfoot, Edison bulbs overhead, and the bay turning
            amber behind you. Pick your spot, there's a band on every night.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {spaces.map((space, i) => (
            <Reveal key={space.title} delay={i * 100}>
              <article className="group h-full overflow-hidden rounded-2xl bg-bay-800/60 ring-1 ring-white/10">
                <div className="overflow-hidden">
                  <Photo
                    image={space.image}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-semibold text-white">
                    {space.title}
                  </h3>
                  <p className="mt-2 font-sans text-sm leading-relaxed text-bay-100">
                    {space.copy}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12">
          <Link
            to="/about"
            className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-amber-300 underline underline-offset-4 hover:text-amber-200"
          >
            Discover More
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
