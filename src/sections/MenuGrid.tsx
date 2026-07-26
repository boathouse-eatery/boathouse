import { Link } from "react-router-dom";
import { Reveal } from "../components/Reveal";
import { Photo } from "../components/Photo";
import { images } from "../data/images";
import { menuCategoryCards } from "../data/menu";

export function MenuGrid() {
  return (
    <section id="menus" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <Reveal className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-amber-600">
              On the Menu
            </p>
            <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight text-bay-800 sm:text-4xl md:text-[2.75rem]">
              Something for everyone at the table
            </h2>
          </div>
          <Link
            to="/menus"
            className="inline-flex shrink-0 items-center gap-1 font-sans text-sm font-semibold text-bay-700 underline underline-offset-4 hover:text-amber-600"
          >
            All Menus
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <Reveal className="lg:col-span-1">
            <Link
              to="/menus#entrees"
              className="group relative flex h-full min-h-[340px] flex-col justify-end overflow-hidden rounded-2xl shadow-soft"
            >
              <Photo
                image={images.fishAndChips}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bay-950/90 via-bay-950/35 to-transparent" />
              <div className="relative p-7">
                <span className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-amber-300">
                  Guest favourite
                </span>
                <h3 className="mt-2 font-serif text-2xl font-semibold text-white">
                  Fish &amp; Chips
                </h3>
                <p className="mt-2 font-sans text-sm text-white/80">
                  Beer-battered, hand-cut fries, house slaw. The one people
                  come back for.
                </p>
              </div>
            </Link>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-2">
            {menuCategoryCards.map((card, i) => (
              <Reveal key={card.slug} delay={i * 70}>
                <Link
                  to={`/menus#${card.slug}`}
                  className="group flex h-full flex-col justify-between rounded-2xl border border-bay-100 bg-bay-50/60 p-6 transition-all hover:-translate-y-1 hover:border-bay-200 hover:shadow-soft"
                >
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-bay-800">
                      {card.title}
                    </h3>
                    <p className="mt-2 font-sans text-sm leading-relaxed text-bay-600">
                      {card.blurb}
                    </p>
                  </div>
                  <span className="mt-5 inline-flex items-center gap-1 font-sans text-xs font-semibold uppercase tracking-wide text-bay-500 group-hover:text-amber-600">
                    View
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
