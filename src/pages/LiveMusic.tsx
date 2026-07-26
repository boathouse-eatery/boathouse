import { PageBanner } from "../components/PageBanner";
import { Reveal } from "../components/Reveal";
import { Button } from "../components/ui/Button";
import {
  formatEntryDate,
  getUpcomingEntries,
  liveMusicSchedule,
  showSampleNotice,
} from "../data/liveMusic";
import { siteInfo } from "../data/siteInfo";
import { images } from "../data/images";

export function LiveMusic() {
  const upcoming = getUpcomingEntries(liveMusicSchedule, new Date(), liveMusicSchedule.length);

  return (
    <>
      <PageBanner
        eyebrow="Live Music"
        title="Live entertainment, Thursday through Sunday"
        subtitle="Cold drinks, dockside sunsets, and a different act most nights of the week."
        image={images.liveMusic}
      />

      <section className="bg-sand-50 py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-6 sm:px-8">
          {showSampleNotice && (
            <Reveal className="mb-10 rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4">
              <p className="font-sans text-sm text-amber-800">
                <strong className="font-semibold">Sample schedule.</strong>{" "}
                Live entertainment runs Thursday through Sunday. The act names
                below are placeholders to show the layout — swap in the real
                booking calendar in{" "}
                <code className="rounded bg-amber-100 px-1 py-0.5 text-xs">
                  src/data/liveMusic.ts
                </code>
                .
              </p>
            </Reveal>
          )}

          <div className="space-y-3">
            {upcoming.map((entry, i) => {
              const { weekday, monthDay } = formatEntryDate(entry.date);
              return (
                <Reveal key={entry.date} delay={Math.min(i * 40, 400)}>
                  <div className="flex items-center justify-between gap-4 rounded-2xl border border-bay-100 bg-sand-100 px-6 py-5 shadow-sm">
                    <div className="flex items-center gap-5">
                      <div className="flex w-16 flex-col items-center rounded-xl bg-bay-700 py-2 text-sand-50">
                        <span className="font-sans text-xs font-semibold uppercase tracking-wide text-amber-300">
                          {weekday.slice(0, 3)}
                        </span>
                        <span className="font-serif text-lg font-semibold">
                          {monthDay.split(" ")[1]}
                        </span>
                      </div>
                      <div>
                        <p className="font-sans text-xs font-medium uppercase tracking-wide text-bay-500">
                          {weekday}, {monthDay}
                        </p>
                        {entry.act ? (
                          <p className="font-serif text-lg font-semibold text-bay-800">
                            {entry.act}
                          </p>
                        ) : (
                          <p className="font-sans text-base italic text-bay-400">
                            No show scheduled
                          </p>
                        )}
                      </div>
                    </div>
                    {entry.genre && (
                      <span className="hidden shrink-0 rounded-full bg-amber-100 px-3 py-1 font-sans text-xs font-semibold text-amber-700 sm:inline-block">
                        {entry.genre}
                      </span>
                    )}
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal className="mt-14 flex flex-col items-center gap-4 text-center">
            <p className="font-sans text-base text-bay-600">
              Planning a night out around the music? Grab a table ahead of
              time.
            </p>
            <Button href={siteInfo.links.reservations} variant="primary">
              Reserve a Table
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
