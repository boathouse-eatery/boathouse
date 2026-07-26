import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { navLinks, siteInfo } from "../data/siteInfo";
import { Logo } from "./Logo";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const atTop = !scrolled && !menuOpen;
  const transparentTop = isHome && atTop;
  const navyTop = !isHome && atTop;
  const light = transparentTop || navyTop;

  const headerBgClasses = transparentTop
    ? "bg-gradient-to-b from-bay-950/70 to-transparent py-5"
    : navyTop
    ? "bg-bay-800 py-4 shadow-md"
    : "bg-white/95 backdrop-blur shadow-md py-3";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${headerBgClasses}`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
        <Logo light={light} />

        <nav className="hidden lg:flex items-center gap-8" aria-label="Primary">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              className={({ isActive }) =>
                `font-sans text-sm font-medium tracking-wide transition-colors ${
                  light
                    ? "text-white/90 hover:text-amber-300 drop-shadow-sm"
                    : "text-bay-700 hover:text-amber-600"
                } ${isActive ? (light ? "text-amber-300" : "text-amber-600") : ""}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href={siteInfo.links.reservations}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-amber-400 px-5 py-2.5 text-sm font-semibold text-bay-900 shadow-soft transition-transform hover:-translate-y-0.5 hover:bg-amber-300"
          >
            Reserve
          </a>
        </div>

        <button
          type="button"
          className={`lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors ${
            light ? "text-white" : "text-bay-800"
          }`}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? (
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {menuOpen && (
        <div id="mobile-menu" className="lg:hidden mt-4 border-t border-bay-100 bg-white px-5 pb-6 pt-4 shadow-lg">
          <nav className="flex flex-col gap-4" aria-label="Mobile">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                className={({ isActive }) =>
                  `font-serif text-lg font-medium text-bay-800 ${isActive ? "text-amber-600" : ""}`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <a
              href={siteInfo.links.reservations}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-amber-400 px-5 py-3 text-sm font-semibold text-bay-900 shadow-soft"
            >
              Reserve a Table
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
