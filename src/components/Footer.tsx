import { Link } from "react-router-dom";
import { navLinks, site } from "../data/site";

export function Footer() {
  return (
    <footer className="mt-24 bg-navy-900 text-parchment">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-gold-400 text-navy-900 font-display font-semibold">
                SK
              </span>
              <span className="font-display text-2xl font-semibold tracking-tight">
                {site.name}
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-parchment/70">
              A decade of personalized coaching for India's most demanding
              entrance exams. Based in Madurai. Built around every student.
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm uppercase tracking-[0.2em] text-gold-300">
              Explore
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-parchment/80 hover:text-gold-300 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm uppercase tracking-[0.2em] text-gold-300">
              Visit us
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-parchment/80">
              <li>Anna Main Street, Pethaniapuram, Madurai – 625016</li>
              <li>
                <a
                  href={`mailto:${site.contact.email}`}
                  className="hover:text-gold-300 transition-colors"
                >
                  {site.contact.email}
                </a>
              </li>
              {site.contact.phones.map((p) => (
                <li key={p}>
                  <a
                    href={`tel:${p.replace(/\s/g, "")}`}
                    className="hover:text-gold-300 transition-colors"
                  >
                    {p}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-parchment/10 pt-8 text-xs text-parchment/55 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="font-display tracking-wide text-gold-300/80">
            Est. {site.established} · {site.location}
          </p>
        </div>
      </div>
    </footer>
  );
}
