import { Link } from "react-router-dom";
import { navLinks, site } from "../data/site";

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/5 bg-[#07050f] py-20 selection:bg-cyan-500/30">
      {/* Ambient background glow */}
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/5 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-12">
          {/* Brand Column */}
          <div className="lg:col-span-5">
            <Link to="/" className="inline-flex items-center group">
              <img 
                src="/logo.png" 
                alt={site.name} 
                className="h-[48px] w-auto object-contain transition-transform group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                  const fallback = document.getElementById('footer-logo-fallback');
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              <div id="footer-logo-fallback" className="hidden items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-linear-to-br from-cyan-400 to-violet-500 p-[1px]">
                  <div className="grid h-full w-full place-items-center rounded-[11px] bg-[#07050f] text-xs font-bold text-white">SK</div>
                </div>
                <span className="font-display text-2xl font-bold tracking-tight text-white">{site.name}</span>
              </div>
            </Link>
            <p className="mt-8 max-w-sm text-[15px] leading-relaxed text-parchment/60">
              Transforming academic potential into professional excellence since {site.established}. 
              Our individualized coaching framework provides the focus required for India's most competitive medical and engineering gateways.
            </p>
            
            {/* Social Links */}
            <div className="mt-10 flex items-center gap-4">
              {[
                { label: 'Facebook', href: site.socials.facebook, icon: <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.03 1.964-5.932 5.445-5.932 1.667 0 3.099.124 3.517.179v4.077l-2.41.001c-1.956 0-2.333.93-2.333 2.292v1.514h4.515l-.588 3.667h-3.927v7.98h-3.821z"/></svg> },
                { label: 'Instagram', href: site.socials.instagram, icon: <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.981 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg> },
                { label: 'YouTube', href: site.socials.youtube, icon: <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 00 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 00 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg> },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="group relative flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-parchment/60 transition-all hover:border-cyan-500/40 hover:text-cyan-400"
                >
                  <div className="absolute inset-0 rounded-xl bg-cyan-500/0 blur-md transition-colors group-hover:bg-cyan-500/10" />
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3">
            <h4 className="font-display text-xs font-bold uppercase tracking-[0.25em] text-violet-300">
              Navigate
            </h4>
            <ul className="mt-8 space-y-4">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="group flex items-center text-[15px] text-parchment/50 transition-colors hover:text-white"
                  >
                    <span className="h-[1px] w-0 bg-cyan-500 transition-all group-hover:mr-3 group-hover:w-4" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-4">
            <h4 className="font-display text-xs font-bold uppercase tracking-[0.25em] text-violet-300">
              Visit Us
            </h4>
            <div className="mt-8 space-y-6">
              <div className="flex gap-4">
                <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center text-cyan-400">
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <p className="text-[15px] leading-relaxed text-parchment/60">
                  {site.contact.addresses[0]}
                </p>
              </div>
              
              <div className="flex gap-4">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center text-cyan-400">
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <a href={`mailto:${site.contact.email}`} className="text-[15px] text-parchment/60 hover:text-white transition-colors">
                  {site.contact.email}
                </a>
              </div>

              <div className="flex gap-4">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center text-cyan-400">
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div className="space-y-1">
                  {site.contact.phones.map(p => (
                    <a key={p} href={`tel:${p.replace(/\s/g, "")}`} className="block text-[15px] text-parchment/60 hover:text-white transition-colors">
                      {p}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-white/5 pt-10 text-[13px] text-parchment/40 sm:flex-row">
          <div className="flex items-center gap-6">
            <p>2026 THE SK LEARNINGS</p>
            <span className="h-1 w-1 rounded-full bg-white/20" />
            <p>Built for Excellence</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <p className="font-display tracking-widest uppercase">{site.location}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

