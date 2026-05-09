import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { navLinks, site } from "../data/site";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${scrolled
          ? "bg-[#07050f]/80 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent border-b border-transparent"
        }`}
    >
      <div className="mx-auto flex max-w-7xl items-center px-6 py-4 lg:px-10">
        {/* Logo Side */}
        <div className="flex-1 flex items-center justify-start">
          <Link to="/" className="flex items-center group">
            <img
              src="/logo.png"
              alt={site.name}
              className="h-[42px] w-auto object-contain transition-transform group-hover:scale-105"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
                const fallback = document.getElementById('logo-fallback');
                if (fallback) fallback.style.display = 'flex';
              }}
            />
            <div id="logo-fallback" className="hidden items-center gap-3">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-cyan-500 text-white font-display font-semibold shadow-[0_0_15px_rgba(34,211,238,0.5)]">
                SK
              </span>
              <span className="hidden sm:block font-display text-lg font-semibold tracking-tight text-white">
                {site.name}
              </span>
            </div>
          </Link>
        </div>

        {/* Navigation Links - Centered */}
        <nav className="hidden md:flex items-center justify-center gap-1 xl:gap-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `text-[13px] uppercase tracking-[0.12em] font-medium transition-all px-3.5 py-2 rounded-xl ${isActive
                  ? "text-cyan-300 bg-cyan-400/10 border border-cyan-400/20 shadow-[0_0_15px_-5px_rgba(34,211,238,0.3)]"
                  : "text-parchment/60 hover:text-white hover:bg-white/5"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* CTA Side */}
        <div className="flex-1 flex items-center justify-end gap-4">
          <Link
            to="/contact"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-linear-to-r from-cyan-400 to-sky-500 px-6 py-2.5 text-[13px] font-semibold text-white shadow-[0_0_20px_-5px_rgba(34,211,238,0.5)] transition hover:scale-105 active:scale-95"
          >
            <span>Book a free demo</span>
            <span aria-hidden>→</span>
          </Link>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden rounded-md p-2 text-white hover:bg-white/10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {open ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-[#07050f]/95 backdrop-blur-xl">
          <nav className="flex flex-col px-6 py-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `py-3 text-base ${isActive ? "text-cyan-300 font-semibold" : "text-parchment/70"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center rounded-full bg-linear-to-r from-cyan-400 to-sky-500 px-5 py-3.5 text-sm font-semibold text-white shadow-[0_0_20px_-5px_rgba(34,211,238,0.5)]"
            >
              Book a free demo
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
