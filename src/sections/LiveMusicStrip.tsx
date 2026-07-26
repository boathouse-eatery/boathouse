import { Link } from "react-router-dom";
import { Reveal } from "../components/Reveal";
import { Photo } from "../components/Photo";
import { images } from "../data/images";
import {
  formatEntryDate,
  getUpcomingEntries,
  liveMusicSchedule,
} from "../data/liveMusic";

export function LiveMusicStrip() {
  const upcoming = getUpcomingEntries(liveMusicSchedule, new Date(), 4);

  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div className="absolute inset-0">
        <Photo image={images.liveMusic} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-bay-950/85" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8">
        <Reveal className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">
              Live Music · Seven Days a Week
            </p>
            <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-[2.75rem]">
              Live this week
            </h2>
          </div>
          <Link
            to="/live-music"
            className="inline-flex items-center gap-1 font-sans text-sm font-semibold text-amber-300 underline underline-offset-4 hover:text-amber-200"
          >
            See Full Calendar
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {upcoming.map((entry, i) => {
            const { weekday, monthDay } = formatEntryDate(entry.date);
            return (
              <Reveal key={entry.date} delay={i * 80}>
                <div
                  className={`flex h-full flex-col rounded-2xl p-6 backdrop-blur-sm ${
                    entry.acts.length > 0
                      ? "bg-white/10 ring-1 ring-white/15"
                      : "bg-white/5 ring-1 ring-white/10"
                  }`}
                >
                  <span className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-amber-300">
                    {weekday}
                  </span>
                  <span className="mt-1 font-serif text-lg font-semibold text-white/90">
                    {monthDay}
                  </span>
                  <div className="mt-4 flex-1">
                    {entry.acts.length > 0 ? (
                      <ul className="space-y-2">
                        {entry.acts.map((act, n) => (
                          <li key={`${act.name}-${n}`}>
                            <p className="font-sans text-base font-semibold leading-tight text-white">
                              {act.name}
                            </p>
                            <p className="mt-0.5 font-sans text-sm text-bay-200">
                              {act.time}
                            </p>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="font-sans text-sm italic text-white/40">
                        No show scheduled
                      </p>
                    )}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
