import { useState } from "react";
import {
  getAvailableMonths,
  getMonthGrid,
  weekendSlots,
  type CalendarDay,
} from "../data/liveMusic";

const WEEKDAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

function monthLabel(year: number, month: number) {
  return new Date(year, month, 1).toLocaleDateString("en-CA", {
    month: "long",
    year: "numeric",
  });
}

function DayCell({ day }: { day: CalendarDay }) {
  const hasActs = day.acts.length > 0;

  return (
    <div
      className={`flex min-h-[104px] flex-col rounded-xl border p-2 transition-colors sm:min-h-[132px] ${
        day.inMonth
          ? hasActs
            ? "border-bay-100 bg-white"
            : "border-bay-50 bg-bay-50/40"
          : "border-transparent bg-transparent"
      } ${day.isToday ? "ring-2 ring-amber-400" : ""}`}
    >
      <span
        className={`font-sans text-xs font-semibold ${
          !day.inMonth
            ? "text-bay-200"
            : day.isToday
            ? "text-amber-600"
            : "text-bay-400"
        }`}
      >
        {day.dayOfMonth}
        {day.isToday && <span className="ml-1 font-normal">today</span>}
      </span>

      {day.inMonth && hasActs && (
        <ul className="mt-1.5 flex flex-1 flex-col gap-1">
          {day.acts.map((act, i) => (
            <li
              key={`${act.name}-${i}`}
              className="rounded-md bg-bay-600 px-1.5 py-1 leading-tight"
            >
              <span className="block font-sans text-[11px] font-semibold text-white">
                {act.name}
              </span>
              <span className="block font-sans text-[10px] text-bay-100">
                {act.time}
                {act.weatherDependent && "*"}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function LiveMusicCalendar() {
  const months = getAvailableMonths();
  const [index, setIndex] = useState(() => {
    const now = new Date();
    const found = months.findIndex(
      (m) => m.year === now.getFullYear() && m.month === now.getMonth()
    );
    return found >= 0 ? found : 0;
  });

  const current = months[index];
  if (!current) return null;

  const weeks = getMonthGrid(current.year, current.month);

  return (
    <div>
      <div className="flex items-center justify-between gap-4">
        <h2 className="font-serif text-2xl font-semibold text-bay-800 sm:text-3xl">
          {monthLabel(current.year, current.month)}
        </h2>
        {months.length > 1 && (
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIndex((i) => Math.max(0, i - 1))}
              disabled={index === 0}
              aria-label="Previous month"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-bay-200 text-bay-600 transition-colors hover:bg-bay-50 disabled:opacity-30"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => setIndex((i) => Math.min(months.length - 1, i + 1))}
              disabled={index === months.length - 1}
              aria-label="Next month"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-bay-200 text-bay-600 transition-colors hover:bg-bay-50 disabled:opacity-30"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        )}
      </div>

      {/* Calendar grids are wide; let it scroll rather than squash the cells. */}
      <div className="mt-6 overflow-x-auto">
        <div className="min-w-[680px]">
          <div className="grid grid-cols-7 gap-2">
            {WEEKDAYS.map((d) => (
              <div
                key={d}
                className="pb-2 text-center font-sans text-xs font-bold uppercase tracking-[0.12em] text-bay-500"
              >
                {d}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-2">
            {weeks.flat().map((day) => (
              <DayCell key={day.date} day={day} />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-3 rounded-2xl bg-bay-50 p-5 sm:grid-cols-2">
        <div>
          <h3 className="font-sans text-xs font-bold uppercase tracking-[0.12em] text-bay-600">
            Saturday slots
          </h3>
          <p className="mt-1 font-sans text-sm text-bay-700">
            {weekendSlots.saturday.join(" · ")}
          </p>
        </div>
        <div>
          <h3 className="font-sans text-xs font-bold uppercase tracking-[0.12em] text-bay-600">
            Sunday slots
          </h3>
          <p className="mt-1 font-sans text-sm text-bay-700">
            {weekendSlots.sunday.join(" · ")}
          </p>
        </div>
        <p className="font-sans text-xs text-bay-500 sm:col-span-2">
          * {weekendSlots.note}
        </p>
      </div>
    </div>
  );
}
