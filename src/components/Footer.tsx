import { Link } from "react-router-dom";
import { hours, hoursNote, navLinks, siteInfo } from "../data/siteInfo";
import { Logo } from "./Logo";

function SocialIcon({ kind }: { kind: "facebook" | "instagram" }) {
  if (kind === "facebook") {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M13.5 21v-7.5h2.5l.4-3H13.5V8.4c0-.87.24-1.46 1.5-1.46h1.6V4.32C16.3 4.22 15.36 4.1 14.26 4.1 11.98 4.1 10.4 5.5 10.4 8.1v2.4H8v3h2.4V21h3.1Z" />
      </svg>
    );
  }
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-bay-900 text-sand-100">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo light size={48} />
          <p className="mt-4 text-sm leading-relaxed text-bay-100/90 max-w-xs">
            Waterfront dining on Georgian Bay at the Town Docks of Midland —
            fresh food, cold drinks, and live music, three decades running.
          </p>
          <div className="mt-5 flex items-center gap-3">
            <a
              href={siteInfo.links.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="The Boathouse Eatery on Facebook"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-sand-50/10 text-sand-100 transition-colors hover:bg-amber-400 hover:text-bay-900"
            >
              <SocialIcon kind="facebook" />
            </a>
            <a
              href={siteInfo.links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="The Boathouse Eatery on Instagram"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-sand-50/10 text-sand-100 transition-colors hover:bg-amber-400 hover:text-bay-900"
            >
              <SocialIcon kind="instagram" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-serif text-base font-semibold text-sand-50">Hours</h3>
          <ul className="mt-4 space-y-2 text-sm text-sand-200/90">
            {hours.map((h) => (
              <li key={h.days} className="flex flex-col gap-0.5">
                <span>{h.days}</span>
                <span className="font-medium text-sand-50">{h.hours}</span>
              </li>
            ))}
          </ul>
          {hoursNote && (
            <p className="mt-3 text-xs text-amber-300">{hoursNote}</p>
          )}
        </div>

        <div>
          <h3 className="font-serif text-base font-semibold text-sand-50">Visit</h3>
          <address className="mt-4 not-italic text-sm leading-relaxed text-sand-200/90">
            <a
              href={siteInfo.links.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-300 transition-colors"
            >
              {siteInfo.address.line1}
              <br />
              {siteInfo.address.city}, {siteInfo.address.province}{" "}
              {siteInfo.address.postalCode}
            </a>
            <br />
            <a href={siteInfo.phoneHref} className="mt-2 inline-block hover:text-amber-300 transition-colors">
              {siteInfo.phone}
            </a>
          </address>
        </div>

        <div>
          <h3 className="font-serif text-base font-semibold text-sand-50">Explore</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link to={link.href} className="text-sand-200/90 hover:text-amber-300 transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={siteInfo.links.giftCards}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sand-200/90 hover:text-amber-300 transition-colors"
              >
                Gift Cards
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-sand-50/10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-5 text-xs text-sand-200/70">
          © {new Date().getFullYear()} The Boathouse Eatery. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
