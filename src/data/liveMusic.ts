// Live music schedule. Single source of truth for both the homepage
// "Live this week" strip and the full /live-music calendar.
//
// Live entertainment runs THURSDAY–SUNDAY, matching boathouseeatery.com.
// The current site does not publish individual act names, so every act
// below is SAMPLE DATA to demonstrate the layout — replace with the real
// booking calendar before launch. `showSampleNotice` drives the on-page
// banner that says so; set it to false once real acts are in.
//
// To update: add/edit rows below. `date` is ISO format (YYYY-MM-DD).
// Set `act` to null to show "No show scheduled."

export const showSampleNotice = true;

export type LiveMusicEntry = {
  date: string; // YYYY-MM-DD
  act: string | null;
  genre?: string;
};

export const liveMusicSchedule: LiveMusicEntry[] = [
  { date: "2026-07-23", act: "The Dockside Trio", genre: "Classic Rock" },
  { date: "2026-07-24", act: "Sarah & The Sunset Set", genre: "Acoustic Pop" },
  { date: "2026-07-25", act: "The Bay Ramblers", genre: "Country" },
  { date: "2026-07-26", act: "Jake Turner Acoustic", genre: "Singer-Songwriter" },
  { date: "2026-07-30", act: "Copper Kettle Duo", genre: "Blues" },
  { date: "2026-07-31", act: "Midland Sound Collective", genre: "Funk & Soul" },
  { date: "2026-08-01", act: "The Wharf Rats", genre: "Classic Rock" },
  { date: "2026-08-02", act: null },
  { date: "2026-08-06", act: "Two for the Road", genre: "Acoustic Covers" },
  { date: "2026-08-07", act: "Long Weekend", genre: "Rock" },
  { date: "2026-08-08", act: "Cedar & Sun", genre: "Indie Folk" },
  { date: "2026-08-09", act: "Jake Turner Acoustic", genre: "Singer-Songwriter" },
  { date: "2026-08-13", act: "The Dockside Trio", genre: "Classic Rock" },
  { date: "2026-08-14", act: "Sarah & The Sunset Set", genre: "Acoustic Pop" },
  { date: "2026-08-15", act: "The Bay Ramblers", genre: "Country" },
  { date: "2026-08-16", act: null },
  { date: "2026-08-20", act: "Copper Kettle Duo", genre: "Blues" },
  { date: "2026-08-21", act: "Midland Sound Collective", genre: "Funk & Soul" },
  { date: "2026-08-22", act: "The Wharf Rats", genre: "Classic Rock" },
  { date: "2026-08-23", act: "Two for the Road", genre: "Acoustic Covers" },
  { date: "2026-08-27", act: "Long Weekend", genre: "Rock" },
  { date: "2026-08-28", act: "Cedar & Sun", genre: "Indie Folk" },
  { date: "2026-08-29", act: "The Dockside Trio", genre: "Classic Rock" },
  { date: "2026-08-30", act: "Jake Turner Acoustic", genre: "Singer-Songwriter" },
  { date: "2026-09-03", act: "Sarah & The Sunset Set", genre: "Acoustic Pop" },
  { date: "2026-09-04", act: "The Bay Ramblers", genre: "Country" },
  { date: "2026-09-05", act: "Copper Kettle Duo", genre: "Blues" },
  { date: "2026-09-06", act: null },
];

export function getUpcomingEntries(
  schedule: LiveMusicEntry[],
  from: Date = new Date(),
  count = 4
): LiveMusicEntry[] {
  const fromStr = toIsoDate(from);
  return schedule.filter((entry) => entry.date >= fromStr).slice(0, count);
}

export function toIsoDate(d: Date): string {
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function formatEntryDate(dateStr: string): {
  weekday: string;
  monthDay: string;
} {
  const date = new Date(`${dateStr}T00:00:00`);
  const weekday = date.toLocaleDateString("en-CA", { weekday: "long" });
  const monthDay = date.toLocaleDateString("en-CA", {
    month: "short",
    day: "numeric",
  });
  return { weekday, monthDay };
}
