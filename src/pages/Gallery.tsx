import { useState } from "react";
import { PageBanner } from "../components/PageBanner";
import { Reveal } from "../components/Reveal";
import { Photo } from "../components/Photo";
import { Lightbox } from "../components/Lightbox";
import { galleryImages } from "../data/gallery";
import { images as siteImages } from "../data/images";

export function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>
      <PageBanner
        eyebrow="Gallery"
        title="The Boathouse, in every light"
        subtitle="A look at the food, the drinks, the patio, and the sunsets that bring people back."
        image={siteImages.tikiHut}
      />

      <section className="bg-sand-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {galleryImages.map((img, i) => (
              <Reveal key={img.id} delay={(i % 4) * 60}>
                <button
                  type="button"
                  onClick={() => setActiveIndex(i)}
                  className="group block aspect-square w-full overflow-hidden rounded-2xl shadow-sm focus-visible:outline-offset-4"
                  aria-label={`Open image: ${img.alt}`}
                >
                  <Photo
                    image={img}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {activeIndex !== null && (
        <Lightbox
          images={galleryImages}
          index={activeIndex}
          onClose={() => setActiveIndex(null)}
          onNavigate={setActiveIndex}
        />
      )}
    </>
  );
}
