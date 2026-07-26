import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { PageBanner } from "../components/PageBanner";
import { Reveal } from "../components/Reveal";
import { allMenuSections, type MenuSection } from "../data/menu";
import { images } from "../data/images";

const pathToAnchor: Record<string, string> = {
  "/menus/kids": "kids",
  "/menus/desserts": "desserts",
};

function MenuSectionBlock({ section }: { section: MenuSection }) {
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
          <p className="mt-2 font-sans text-sm italic text-bay-500">{section.note}</p>
        )}
        <div className="mt-8 grid gap-x-10 gap-y-7 sm:grid-cols-2">
          {section.items.map((item) => (
            <div key={item.name} className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-serif text-lg font-semibold text-bay-800">
                  {item.name}
                </h3>
                <p className="mt-1 font-sans text-sm leading-relaxed text-bay-600">
                  {item.description}
                </p>
                {item.tags && (
                  <p className="mt-1.5 font-sans text-xs font-medium uppercase tracking-wide text-amber-600">
                    {item.tags.join(" · ")}
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
  const location = useLocation();

  useEffect(() => {
    const anchor = pathToAnchor[location.pathname];
    if (anchor) {
      const el = document.getElementById(anchor);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [location.pathname]);

  return (
    <>
      <PageBanner
        eyebrow="Menus"
        title="Fresh, thoughtfully sourced, made to share"
        subtitle="All menus below are placeholders for this mockup — swap in the current menu and pricing before launch."
        image={images.fishAndChips}
      />

      <div className="bg-white">
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
