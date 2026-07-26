import { Reveal } from "../components/Reveal";
import { testimonials } from "../data/testimonials";

export function Testimonials() {
  return (
    <section className="bg-sand-100 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-sans text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
            Guest Stories
          </p>
          <h2 className="mt-4 font-serif text-3xl font-semibold text-bay-800 sm:text-4xl md:text-5xl">
            What guests are saying
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.author + i} delay={i * 100}>
              <figure className="relative flex h-full flex-col rounded-2xl bg-sand-50 p-8 shadow-sm">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-amber-300"
                  aria-hidden="true"
                >
                  <path d="M9 7c-2.8 0-5 2.2-5 5v5h5v-5H6.5c0-1.4 1.1-2.5 2.5-2.5V7Zm10 0c-2.8 0-5 2.2-5 5v5h5v-5h-2.5c0-1.4 1.1-2.5 2.5-2.5V7Z" />
                </svg>
                <blockquote className="mt-4 flex-1 font-serif text-lg leading-relaxed text-bay-800">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-6 font-sans text-sm font-semibold text-bay-600">
                  {t.author}
                  {t.isPlaceholder && (
                    <span className="ml-2 rounded-full bg-bay-100 px-2 py-0.5 text-xs font-medium text-bay-500">
                      Placeholder quote
                    </span>
                  )}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
