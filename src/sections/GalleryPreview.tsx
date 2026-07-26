import { Link } from "react-router-dom";
import { Reveal } from "../components/Reveal";
import { Photo } from "../components/Photo";
import { galleryPreviewImages } from "../data/gallery";

const spans = [
  "sm:col-span-2 sm:row-span-2",
  "sm:col-span-1",
  "sm:col-span-1",
  "sm:col-span-1",
  "sm:col-span-1",
  "sm:col-span-2",
];

export function GalleryPreview() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <Reveal className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-amber-600">
              Gallery
            </p>
            <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight text-bay-800 sm:text-4xl md:text-[2.75rem]">
              A taste of the view
            </h2>
          </div>
          <Link
            to="/gallery"
            className="inline-flex items-center gap-1 font-sans text-sm font-semibold text-bay-700 underline underline-offset-4 hover:text-amber-600"
          >
            View Gallery
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </Reveal>

        <div className="mt-10 grid auto-rows-[150px] grid-cols-2 gap-3 sm:auto-rows-[170px] sm:grid-cols-4">
          {galleryPreviewImages.map((img, i) => (
            <Reveal key={img.id} delay={i * 60} className={spans[i] ?? ""}>
              <Link
                to="/gallery"
                className="group block h-full overflow-hidden rounded-2xl"
              >
                <Photo
                  image={img}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
