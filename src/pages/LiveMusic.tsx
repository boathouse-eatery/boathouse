import { PageBanner } from "../components/PageBanner";
import { Reveal } from "../components/Reveal";
import { Button } from "../components/ui/Button";
import { LiveMusicCalendar } from "../components/LiveMusicCalendar";
import { siteInfo } from "../data/siteInfo";
import { images } from "../data/images";

export function LiveMusic() {
  return (
    <>
      <PageBanner
        eyebrow="Live Music"
        title="Live music seven days a week"
        subtitle="Weeknight sets on the patio, and three acts every Saturday and Sunday."
        image={images.liveMusic}
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <Reveal>
            <LiveMusicCalendar />
          </Reveal>

          <Reveal className="mt-14 flex flex-col items-center gap-4 rounded-3xl bg-bay-800 px-6 py-12 text-center">
            <h2 className="font-serif text-2xl font-semibold text-white sm:text-3xl">
              Planning a night out around the music?
            </h2>
            <p className="max-w-md font-sans text-base text-bay-100">
              Patio tables go fast when the band starts. Book ahead so you get
              the view as well as the music.
            </p>
            <div className="mt-2">
              <Button href={siteInfo.links.reservations} variant="primary">
                Reserve a Table
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
