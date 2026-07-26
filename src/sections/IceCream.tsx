import { Reveal } from "../components/Reveal";
import { Photo } from "../components/Photo";
import { images } from "../data/images";

export function IceCream() {
  return (
    <section className="bg-bay-50 py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div className="overflow-hidden rounded-3xl shadow-soft">
            <Photo
              image={images.iceCream}
              className="aspect-[5/4] w-full object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={120}>
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-amber-600">
            On the dock
          </p>
          <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight text-bay-800 sm:text-4xl">
            Dockside Sweets &amp; Treats
          </h2>
          <p className="mt-6 font-sans text-base leading-relaxed text-bay-600 sm:text-lg">
            Our walk-up ice cream hut right on the boardwalk. Hard scoops,
            slushies and cold drinks, no reservation required. Grab a cone and
            take a lap of the Town Docks, or finish dinner with one on the way
            back to the boat.
          </p>
          <ul className="mt-7 flex flex-wrap gap-2">
            {["Hard scoop ice cream", "Slushies", "Cold drinks", "Walk-up window"].map(
              (item) => (
                <li
                  key={item}
                  className="rounded-full bg-white px-4 py-1.5 font-sans text-sm font-medium text-bay-700 ring-1 ring-bay-100"
                >
                  {item}
                </li>
              )
            )}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
