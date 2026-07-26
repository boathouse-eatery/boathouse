import { PageBanner } from "../components/PageBanner";
import { Reveal } from "../components/Reveal";
import { Photo } from "../components/Photo";
import { images } from "../data/images";
import { Button } from "../components/ui/Button";
import { siteInfo } from "../data/siteInfo";

export function About() {
  return (
    <>
      <PageBanner
        eyebrow="Our Story"
        title="Three decades on the Midland waterfront"
        subtitle="From humble dockside beginnings to the best patio seat on Georgian Bay."
        image={images.patioDaytime}
      />

      <section className="bg-sand-50 py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 sm:px-8 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="font-sans text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
              How it started
            </p>
            <h2 className="mt-4 font-serif text-3xl font-semibold text-bay-800 sm:text-4xl">
              A dockside gathering spot, built for the water
            </h2>
            <p className="mt-6 font-sans text-base leading-relaxed text-bay-700 sm:text-lg">
              The Boathouse Eatery has anchored the Town Docks of Midland for
              close to three decades, long enough to have served multiple
              generations of the same families, welcomed countless boaters in
              off the bay, and watched a few thousand sunsets from the same
              stretch of shoreline.
            </p>
            <p className="mt-4 font-sans text-base leading-relaxed text-bay-700 sm:text-lg">
              What hasn't changed is the reason people keep coming back: a
              patio that puts Georgian Bay front and centre, a kitchen that
              takes fresh, thoughtfully sourced food seriously without taking
              itself too seriously, and a room that feels equally right for a
              quiet weeknight dinner or a table of ten celebrating a big
              birthday.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="overflow-hidden rounded-3xl shadow-soft">
              <Photo
                image={images.barInterior}
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-bay-800 py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 sm:px-8 lg:grid-cols-2 lg:gap-20">
          <Reveal className="order-2 lg:order-1">
            <div className="overflow-hidden rounded-3xl shadow-soft">
              <Photo
                image={images.patioSunset}
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={120} className="order-1 lg:order-2">
            <p className="font-sans text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
              The Patio
            </p>
            <h2 className="mt-4 font-serif text-3xl font-semibold text-sand-50 sm:text-4xl">
              Every seat has a view
            </h2>
            <p className="mt-6 font-sans text-base leading-relaxed text-sand-200 sm:text-lg">
              Cedar planks, Edison bulbs, and open water as far as you can
              see. Our patio is built to make the most of every Midland
              summer evening. It's where an after-work beer turns into
              dinner, and dinner turns into staying for the band.
            </p>
            <p className="mt-4 font-sans text-base leading-relaxed text-sand-200 sm:text-lg">
              Live entertainment runs seven days a week, and the kitchen
              and bar keep going right alongside it: craft cocktails,
              made-from-scratch desserts, and a menu built for sharing.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-sand-50 py-20 sm:py-24">
        <Reveal className="mx-auto flex max-w-2xl flex-col items-center px-6 text-center">
          <h2 className="font-serif text-3xl font-semibold text-bay-800 sm:text-4xl">
            Come see it for yourself
          </h2>
          <p className="mt-4 font-sans text-base text-bay-600 sm:text-lg">
            {siteInfo.address.full}
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
            <Button href={siteInfo.links.reservations} variant="primary">
              Reserve a Table
            </Button>
            <Button href="/menus" variant="secondary">
              View Menu
            </Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}
