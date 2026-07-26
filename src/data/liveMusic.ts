// Live music schedule.
//
// Transcribed from the July 2026 "LIVE MUSIC" calendar poster published on
// boathouseeatery.com. NOTE: the old site's body copy claims live music runs
// "Thursday-Sunday", but the actual calendar shows shows seven days a week,
// with three acts on Saturdays and Sundays. The calendar wins.
//
// TO UPDATE EACH MONTH: add the month's rows below. A day with no `acts`
// entry simply renders as an empty calendar cell.

export type Act = {
  name: string;
  /** display time, e.g. "6-9 PM" */
  time: string;
  /** first weekend slot each day is weather dependent */
  weatherDependent?: boolean;
};

export type LiveMusicEntry = {
  /** YYYY-MM-DD */
  date: string;
  acts: Act[];
};

/** Printed on the poster. */
export const weekendSlots = {
  saturday: ["12-3 PM", "4-7 PM", "8-11 PM"],
  sunday: ["12-3 PM", "3-6 PM", "6-9 PM"],
  note: "The first time slot each day is weather dependent.",
};

const SAT = weekendSlots.saturday;
const SUN = weekendSlots.sunday;

/** Helper so the weekend rows stay readable. */
function weekend(slots: string[], names: [string, string, string]): Act[] {
  return names.map((name, i) => ({
    name,
    time: slots[i],
    weatherDependent: i === 0,
  }));
}

export const liveMusicSchedule: LiveMusicEntry[] = [
  // --- week of Jun 29 ---
  { date: "2026-07-01", acts: [{ name: "Gibbons & Figgs", time: "6-9 PM" }] },
  { date: "2026-07-02", acts: [{ name: "Kitty Unplugged 3.0", time: "6-9 PM" }] },
  { date: "2026-07-03", acts: [{ name: "The Remedy", time: "7-10 PM" }] },
  {
    date: "2026-07-04",
    acts: weekend(SAT, ["Andrew Walker", "Lil Chill", "David Gallagher"]),
  },
  {
    date: "2026-07-05",
    acts: weekend(SUN, ["Emrey", "Chris Figgures", "Matt Playne"]),
  },

  // --- week of Jul 6 ---
  { date: "2026-07-06", acts: [{ name: "The Remedy", time: "6-9 PM" }] },
  { date: "2026-07-07", acts: [{ name: "The Syndicate", time: "6-9 PM" }] },
  { date: "2026-07-08", acts: [{ name: "Gibbons & Figgs", time: "6-9 PM" }] },
  { date: "2026-07-09", acts: [{ name: "Kitty Unplugged 3.0", time: "6-9 PM" }] },
  { date: "2026-07-10", acts: [{ name: "Karla Crawford Band", time: "7-10 PM" }] },
  {
    date: "2026-07-11",
    acts: weekend(SAT, ["Andrew Walker", "Mr. B", "Mr. B"]),
  },
  {
    date: "2026-07-12",
    acts: weekend(SUN, ["Marlon Gibbons", "Heather Halo", "Matt Playne"]),
  },

  // --- week of Jul 13 ---
  { date: "2026-07-13", acts: [{ name: "The Remedy", time: "6-9 PM" }] },
  { date: "2026-07-15", acts: [{ name: "Gibbons & Figgs", time: "6-9 PM" }] },
  { date: "2026-07-16", acts: [{ name: "Kitty Unplugged 3.0", time: "6-9 PM" }] },
  { date: "2026-07-17", acts: [{ name: "Karla Crawford Band", time: "7-10 PM" }] },
  {
    date: "2026-07-18",
    acts: weekend(SAT, ["Marlon Gibbons", "Stéphan Bernard", "Kitty & The Boyz"]),
  },
  {
    date: "2026-07-19",
    acts: weekend(SUN, ["Andrew Walker", "Emrey", "Matt Playne"]),
  },

  // --- week of Jul 20 ---
  { date: "2026-07-20", acts: [{ name: "The Remedy", time: "6-9 PM" }] },
  { date: "2026-07-21", acts: [{ name: "Lil Chill", time: "6-9 PM" }] },
  { date: "2026-07-22", acts: [{ name: "Gibbons & Figgs", time: "6-9 PM" }] },
  { date: "2026-07-23", acts: [{ name: "Kitty Unplugged 3.0", time: "6-9 PM" }] },
  { date: "2026-07-24", acts: [{ name: "Karla Crawford Band", time: "7-10 PM" }] },
  {
    date: "2026-07-25",
    acts: weekend(SAT, ["JoJo", "Giant's Tomb Band", "Lil Chill"]),
  },
  {
    date: "2026-07-26",
    acts: weekend(SUN, ["Chris Figgures", "Marlon Gibbons", "Matt Playne"]),
  },

  // --- week of Jul 27 ---
  { date: "2026-07-27", acts: [{ name: "The Remedy", time: "6-9 PM" }] },
  { date: "2026-07-28", acts: [{ name: "2-4 The Show", time: "6-9 PM" }] },
  { date: "2026-07-29", acts: [{ name: "Gibbons & Figgs", time: "6-9 PM" }] },
  { date: "2026-07-30", acts: [{ name: "Kitty Unplugged 3.0", time: "6-9 PM" }] },
  { date: "2026-07-31", acts: [{ name: "Karla Crawford Band", time: "7-10 PM" }] },
];

export function toIsoDate(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

export function getEntry(dateStr: string): LiveMusicEntry | undefined {
  return liveMusicSchedule.find((e) => e.date === dateStr);
}

/** Next `count` days that have at least one act, for the homepage strip. */
export function getUpcomingEntries(
  schedule: LiveMusicEntry[] = liveMusicSchedule,
  from: Date = new Date(),
  count = 4
): LiveMusicEntry[] {
  const fromStr = toIsoDate(from);
  return schedule
    .filter((e) => e.date >= fromStr && e.acts.length > 0)
    .slice(0, count);
}

export type CalendarDay = {
  date: string;
  dayOfMonth: number;
  inMonth: boolean;
  isToday: boolean;
  acts: Act[];
};

/**
 * Builds a Monday-first month grid, padded with leading/trailing days so
 * every row has seven cells.
 */
export function getMonthGrid(year: number, month: number): CalendarDay[][] {
  const first = new Date(year, month, 1);
  // JS weeks start Sunday; shift so Monday is column 0.
  const leading = (first.getDay() + 6) % 7;

  const start = new Date(year, month, 1 - leading);
  const todayStr = toIsoDate(new Date());

  const weeks: CalendarDay[][] = [];
  const cursor = new Date(start);

  while (true) {
    const week: CalendarDay[] = [];
    for (let i = 0; i < 7; i++) {
      const iso = toIsoDate(cursor);
      week.push({
        date: iso,
        dayOfMonth: cursor.getDate(),
        inMonth: cursor.getMonth() === month,
        isToday: iso === todayStr,
        acts: getEntry(iso)?.acts ?? [],
      });
      cursor.setDate(cursor.getDate() + 1);
    }
    weeks.push(week);
    // stop once we've passed the final day of the month
    if (cursor.getMonth() !== month && weeks.length >= 4) break;
    if (weeks.length > 6) break;
  }

  return weeks;
}

/** Months that actually have data, for the calendar's month switcher. */
export function getAvailableMonths(): { year: number; month: number }[] {
  const seen = new Set<string>();
  const out: { year: number; month: number }[] = [];
  for (const e of liveMusicSchedule) {
    const [y, m] = e.date.split("-").map(Number);
    const key = `${y}-${m}`;
    if (!seen.has(key)) {
      seen.add(key);
      out.push({ year: y, month: m - 1 });
    }
  }
  return out.sort((a, b) => a.year - b.year || a.month - b.month);
}

export function formatEntryDate(dateStr: string): {
  weekday: string;
  monthDay: string;
} {
  const date = new Date(`${dateStr}T00:00:00`);
  return {
    weekday: date.toLocaleDateString("en-CA", { weekday: "long" }),
    monthDay: date.toLocaleDateString("en-CA", { month: "short", day: "numeric" }),
  };
}
