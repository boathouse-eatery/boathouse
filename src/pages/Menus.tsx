import { PageBanner } from "../components/PageBanner";
import { Reveal } from "../components/Reveal";
import { allMenuSections, happyHour, type MenuSection } from "../data/menu";
import { images } from "../data/images";

const tagStyles: Record<string, string> = {
  Vegetarian: "bg-green-50 text-green-700 ring-green-200",
  Vegan: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  GF: "bg-amber-50 text-amber-700 ring-amber-200",
  Spicy: "bg-red-50 text-red-700 ring-red-200",
};

function MenuSectionBlock({ section }: { section: MenuSection }) {
  const isSides = section.id === "sides";
  return (
    <section
      id={section.id}
      // clears the fixed header *and* the sticky section nav below it
      className="scroll-mt-[calc(var(--header-h-condensed)+4.5rem)] border-b border-bay-100 py-14 last:border-none"
    >
      <Reveal>
        <h2 className="font-serif text-2xl font-semibold text-bay-800 sm:text-3xl">
          {section.title}
        </h2>
        {section.note && (
          <p className="mt-2 max-w-2xl font-sans text-sm text-bay-500">
            {section.note}
          </p>
        )}
        <div
          className={
            isSides
              ? "mt-8 grid gap-x-10 gap-y-3 sm:grid-cols-2 lg:grid-cols-3"
              : "mt-8 grid gap-x-10 gap-y-7 sm:grid-cols-2"
          }
        >
          {section.items.map((item) => (
            <div key={item.name} className="flex items-baseline justify-between gap-4">
              <div>
                <h3 className="font-serif text-lg font-semibold text-bay-800">
                  {item.name}
                </h3>
                {item.description && (
                  <p className="mt-1 font-sans text-sm leading-relaxed text-bay-600">
                    {item.description}
                  </p>
                )}
                {item.tags && (
                  <p className="mt-2 flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`rounded-full px-2 py-0.5 font-sans text-[11px] font-semibold uppercase tracking-wide ring-1 ${
                          tagStyles[tag] ?? "bg-bay-50 text-bay-600 ring-bay-200"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </p>
                )}
                {item.options && (
                  <p className="mt-1.5 font-sans text-xs text-bay-500">
                    {item.options}
                  </p>
                )}
              </div>
              <span className="whitespace-nowrap font-sans text-base font-semibold text-bay-700">
                {item.price}
              </span>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

export function Menus() {
  return (
    <>
      <PageBanner
        eyebrow="Menus"
        title="Fresh, thoughtfully sourced, made to share"
        subtitle="Our full food menu, served all day on the waterfront."
        image={images.fishAndChips}
      />

      <div className="bg-white">
        <div className="border-b border-amber-200 bg-amber-50">
          <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-x-3 gap-y-1 px-6 py-3 text-center sm:px-8">
            <span className="font-sans text-xs font-bold uppercase tracking-[0.15em] text-amber-700">
              {happyHour.label}
            </span>
            <span className="font-sans text-sm text-amber-800">
              {happyHour.detail}
            </span>
          </div>
        </div>

        <nav
          aria-label="Menu sections"
          className="sticky top-[var(--header-h-condensed)] z-30 -mt-px flex gap-6 overflow-x-auto border-b border-bay-100 bg-white/95 px-6 py-4 backdrop-blur scrollbar-none sm:justify-center sm:px-8"
        >
          {allMenuSections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="whitespace-nowrap font-sans text-sm font-semibold text-bay-600 hover:text-amber-600"
            >
              {section.title}
            </a>
          ))}
        </nav>

        <div className="mx-auto max-w-4xl px-6 sm:px-8">
          {allMenuSections.map((section) => (
            <MenuSectionBlock key={section.id} section={section} />
          ))}
        </div>
      </div>
    </>
  );
}
