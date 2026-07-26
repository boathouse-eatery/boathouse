import { Reveal } from "../components/Reveal";
import { Button } from "../components/ui/Button";
import { Photo } from "../components/Photo";
import { images } from "../data/images";
import { siteInfo } from "../data/siteInfo";

export function ReservationsCta() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0">
        <Photo
          image={images.patioSunset}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-bay-950/80" />
      </div>

      <Reveal className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-6 text-center text-white">
        <h2 className="font-serif text-3xl font-semibold sm:text-4xl md:text-5xl">
          Join Us on the Waterfront
        </h2>
        <p className="mt-5 font-sans text-base text-white/80 sm:text-lg">
          Tables fill fast on patio nights — reserve ahead, or give us a call.
        </p>
        <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row">
          <Button href={siteInfo.links.reservations} variant="primary">
            Reserve a Table
          </Button>
          <Button href={siteInfo.phoneHref} variant="outline-light">
            Call {siteInfo.phone}
          </Button>
          <Button href={siteInfo.links.giftCards} variant="outline-light">
            Gift Cards
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
