import type { SiteImage } from "../data/images";
import { Photo } from "./Photo";

type Props = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  image: SiteImage;
};

export function PageBanner({ eyebrow, title, subtitle, image }: Props) {
  // min-h (not a fixed h) so the banner grows when the heading wraps — a
  // fixed height let tall content overflow upward under the fixed header.
  // The top padding clears the header explicitly rather than relying on
  // the box being tall enough.
  return (
    <section className="relative flex min-h-[26rem] items-end overflow-hidden sm:min-h-[52vh]">
      <div className="absolute inset-0">
        <Photo image={image} priority className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-bay-950/90 via-bay-950/55 to-bay-950/40" />
      </div>
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-12 pt-[calc(var(--header-h)+2.5rem)] sm:px-8">
        <p className="flex items-center gap-3 font-sans text-xs font-semibold uppercase tracking-[0.25em] text-amber-300">
          <span className="h-px w-8 bg-amber-300/70" />
          {eyebrow}
        </p>
        <h1 className="mt-4 max-w-3xl font-serif text-3xl font-semibold leading-tight text-white sm:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl font-sans text-base text-white/80 sm:text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
