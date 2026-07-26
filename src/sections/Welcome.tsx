import { Link } from "react-router-dom";
import { Reveal } from "../components/Reveal";
import { Photo } from "../components/Photo";
import { images } from "../data/images";

const stats = [
  { value: "30+", label: "Years on the water" },
  { value: "4", label: "Nights of live music" },
  { value: "2", label: "Patios & a Tiki Hut" },
];

export function Welcome() {
  return (
    <section id="welcome" className="bg-white py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-amber-600">
            Welcome aboard
          </p>
          <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight text-bay-800 sm:text-4xl md:text-[2.75rem]">
            The best view in town, all summer long.
          </h2>
          <p className="mt-6 font-sans text-base leading-relaxed text-bay-600 sm:text-lg">
            We sit right on the Town Docks, where the boats come in and the
            bay opens up in front of you. Locals turn up for an after-work
            pint, boaters tie up for dinner, and families claim a table before
            the band starts.
          </p>
          <p className="mt-4 font-sans text-base leading-relaxed text-bay-600 sm:text-lg">
            The kitchen keeps it fresh and unfussy — beer-battered fish and
            chips, shareable plates, crisp salads, craft cocktails and
            desserts made from scratch. Casual fine dining, no stiff collars
            required.
          </p>

          <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-bay-100 pt-8">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="font-serif text-3xl font-semibold text-bay-700">
                  {s.value}
                </dt>
                <dd className="mt-1 font-sans text-xs leading-snug text-bay-500">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>

          <Link
            to="/about"
            className="mt-9 inline-flex items-center gap-2 font-sans text-sm font-semibold text-bay-700 underline underline-offset-4 hover:text-amber-600"
          >
            Our Story
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </Reveal>

        <Reveal delay={120}>
          <div className="relative">
            <div className="overflow-hidden rounded-3xl shadow-soft">
              <Photo
                image={images.patioDaytime}
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden w-44 overflow-hidden rounded-2xl border-4 border-white shadow-soft sm:block">
              <Photo
                image={images.serverPlates}
                className="aspect-square w-full object-cover"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
