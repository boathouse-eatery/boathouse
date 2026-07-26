import { Link } from "react-router-dom";
import { Photo } from "../components/Photo";
import { Button } from "../components/ui/Button";
import { images } from "../data/images";
import { siteInfo } from "../data/siteInfo";

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden">
      <div className="absolute inset-0">
        <Photo
          image={images.patioSunset}
          priority
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bay-950/92 via-bay-950/55 to-bay-950/35" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-24 pt-32 sm:px-8 sm:pb-28">
        <div className="max-w-3xl">
          <p className="flex items-center gap-3 font-sans text-xs font-semibold uppercase tracking-[0.25em] text-amber-300">
            <span className="h-px w-10 bg-amber-300/70" />
            Town Docks · Midland, Ontario
          </p>
          <h1 className="mt-6 font-serif text-[2.6rem] font-semibold leading-[1.02] text-white sm:text-6xl md:text-7xl">
            The best seat on
            <br />
            Georgian Bay.
          </h1>
          <p className="mt-6 max-w-xl font-sans text-lg leading-relaxed text-white/85 sm:text-xl">
            Three decades on the Midland waterfront. Fresh plates, cold
            drinks, live music Thursday through Sunday, and a patio that
            watches the sun go down over the docks.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3 sm:gap-4">
            <Button href={siteInfo.links.reservations} variant="primary">
              Reserve a Table
            </Button>
            <Button href="/menus" variant="outline-light">
              View Menus
            </Button>
            <Button href={siteInfo.links.giftCards} variant="outline-light">
              Gift Cards
            </Button>
          </div>

          <Link
            to="/contact"
            className="mt-7 inline-flex items-center gap-2 font-sans text-sm font-medium text-white/75 underline underline-offset-4 transition-colors hover:text-amber-300"
          >
            Large Groups &amp; Special Events
          </Link>
        </div>
      </div>

      <a
        href="#welcome"
        aria-label="Scroll to learn more"
        className="absolute bottom-7 left-1/2 z-10 hidden -translate-x-1/2 text-white/70 transition-colors hover:text-amber-300 sm:block"
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
          className="animate-bounce"
        >
          <path d="M12 4v15M6 13l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </section>
  );
}
