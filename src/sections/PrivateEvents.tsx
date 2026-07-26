import { Reveal } from "../components/Reveal";
import { Button } from "../components/ui/Button";
import { Photo } from "../components/Photo";
import { images } from "../data/images";

export function PrivateEvents() {
  return (
    <section className="bg-bay-700 py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <div className="overflow-hidden rounded-3xl shadow-soft">
            <Photo
              image={images.interiorPaddleboard}
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={120}>
          <p className="font-sans text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
            Private Events
          </p>
          <h2 className="mt-4 font-serif text-3xl font-semibold text-sand-50 sm:text-4xl md:text-5xl">
            Celebrate on the water
          </h2>
          <p className="mt-6 font-sans text-base leading-relaxed text-sand-200 sm:text-lg">
            From weddings and milestone birthdays to anniversaries and large
            group get-togethers, our private and semi-private dining spaces
            put your celebration right on the Georgian Bay waterfront. Our
            events team will help you build a menu and a setting your guests
            won't forget.
          </p>
          <div className="mt-8">
            <Button href="/contact" variant="primary">
              Enquire About Events
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
