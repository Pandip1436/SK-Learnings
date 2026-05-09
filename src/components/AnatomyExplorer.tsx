import { useState } from "react";
import { anatomyData, type AnatomyPart } from "../data/anatomy";
import { Reveal } from "./Reveal";
import { PremiumIcon } from "./PremiumIcon";
import silhouetteImg from "../assets/silhouette.png";

export function AnatomyExplorer() {
  const [activePart, setActivePart] = useState<AnatomyPart>(anatomyData[0]);

  return (
    <section className="relative mx-auto max-w-7xl px-6 py-24 lg:py-32 lg:px-10 z-10 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-600/5 blur-[120px] -z-10 rounded-full" />
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-cyan-600/5 blur-[100px] -z-10 rounded-full" />

      <Reveal className="text-center mb-20">
        <p className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-violet-300">
          The Anatomy of Success
        </p>
        <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Visualizing <span className="text-transparent bg-clip-text bg-linear-to-r from-violet-400 to-cyan-300 drop-shadow-[0_0_20px_rgba(167,139,250,0.3)]">NEET Mastery.</span>
        </h2>
      </Reveal>

      <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        {/* Left: Info Card */}
        <div className="lg:col-span-5 order-2 lg:order-1">
          <Reveal delay={200} key={activePart.id}>
            <div className="glow-border relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#0c1226]/80 p-8 sm:p-10 backdrop-blur-xl shadow-2xl">
              <div className={`absolute -right-20 -top-20 h-64 w-64 rounded-full opacity-30 blur-[80px] ${activePart.color === "violet" ? "bg-violet-500" :
                  activePart.color === "cyan" ? "bg-cyan-500" :
                    activePart.color === "emerald" ? "bg-emerald-500" :
                      activePart.color === "rose" ? "bg-rose-500" : "bg-sky-500"
                }`} />

              <div className="relative">
                <div className="flex items-center justify-between mb-10">
                  <PremiumIcon accent={activePart.color} size="lg">
                    <PartIcon name={activePart.icon} />
                  </PremiumIcon>
                  <div className="text-right">
                    <p className="text-[10px] uppercase tracking-widest text-parchment/40 mb-1">NEET Weightage</p>
                    <p className={`text-xl font-bold ${activePart.color === "violet" ? "text-violet-300" :
                        activePart.color === "cyan" ? "text-cyan-300" :
                          activePart.color === "emerald" ? "text-emerald-300" :
                            activePart.color === "rose" ? "text-rose-300" : "text-sky-300"
                      }`}>{activePart.weightage}</p>
                  </div>
                </div>

                <h3 className="text-3xl sm:text-4xl font-display font-semibold text-white mb-8 tracking-tight">
                  {activePart.name}
                </h3>

                <div className="space-y-4">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300/60 mb-6">High-Yield Facts</p>
                  {activePart.facts.map((fact, i) => (
                    <div key={i} className="flex gap-4 p-5 rounded-2xl bg-white/5 border border-white/5 transition-all hover:bg-white/10 hover:translate-x-1">
                      <span className={`flex-shrink-0 w-2 h-2 rounded-full mt-2 ${activePart.color === "violet" ? "bg-violet-400" :
                          activePart.color === "cyan" ? "bg-cyan-400" :
                            activePart.color === "emerald" ? "bg-emerald-400" :
                              activePart.color === "rose" ? "bg-rose-400" : "bg-sky-400"
                        } shadow-[0_0_8px_currentColor]`} />
                      <p className="text-base leading-relaxed text-parchment/80">{fact}</p>
                    </div>
                  ))}
                </div>
                </div> {/* end relative */}
              </div> {/* end glow-border */}
            </Reveal>
          </div>

        {/* Right: Visual Explorer */}
        <div className="lg:col-span-7 order-1 lg:order-2 flex justify-center relative">
          <div className="relative w-full max-w-sm aspect-[2/3] bg-navy-950/40 rounded-[3rem] border border-white/5 p-6 backdrop-blur-sm overflow-hidden flex items-center justify-center">
            {/* Visual Glow */}
            <div className="absolute inset-0 bg-radial from-cyan-500/5 via-transparent to-transparent opacity-50" />

            <div className="relative w-full h-full">
              {/* Silhouette */}
              <img
                src={silhouetteImg}
                alt="Anatomy Silhouette"
                className="w-full h-full object-contain filter drop-shadow-[0_0_50px_rgba(34,211,238,0.15)] mix-blend-screen pointer-events-none"
              />

              {/* Hotspots */}
              {anatomyData.map((part) => (
                <button
                  key={part.id}
                  onClick={() => setActivePart(part)}
                  className={`absolute w-10 h-10 -translate-x-1/2 -translate-y-1/2 group z-20 cursor-pointer outline-none`}
                  style={{ left: `${part.coordinates.x}%`, top: `${part.coordinates.y}%` }}
                >
                  <span className={`absolute inset-0 rounded-full animate-ping opacity-30 ${part.color === "violet" ? "bg-violet-400" :
                      part.color === "cyan" ? "bg-cyan-400" :
                        part.color === "emerald" ? "bg-emerald-400" :
                          part.color === "rose" ? "bg-rose-400" : "bg-sky-400"
                    }`} />
                  <span className={`absolute inset-2.5 rounded-full transition-all duration-500 group-hover:scale-150 ${activePart.id === part.id ?
                      (part.color === "violet" ? "bg-violet-400 shadow-[0_0_30px_rgba(167,139,250,1)]" :
                        part.color === "cyan" ? "bg-cyan-400 shadow-[0_0_30px_rgba(34,211,238,1)]" :
                          part.color === "emerald" ? "bg-emerald-400 shadow-[0_0_30px_rgba(52,211,153,1)]" :
                            part.color === "rose" ? "bg-rose-400 shadow-[0_0_30px_rgba(251,113,133,1)]" :
                              "bg-sky-400 shadow-[0_0_30px_rgba(56,189,248,1)]") :
                      "bg-white/20 backdrop-blur-sm border border-white/40 group-hover:bg-white/50"
                    }`} />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PartIcon({ name }: { name: string }) {
  if (name === "Brain") {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-1.44Z" />
        <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-1.44Z" />
      </svg>
    );
  }
  if (name === "Heart") {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.51 4.05 3 5.5l7 7Z" />
      </svg>
    );
  }
  if (name === "Lungs") {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 21c-2-2-3-4.5-3-7 0-3 1.5-5.5 4-7.5l4-3.5 4 3.5c2.5 2 4 4.5 4 7.5 0 2.5-1 5-3 7" />
        <path d="M12 21V7" />
        <path d="M7 14h10" />
      </svg>
    );
  }
  if (name === "Kidney") {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 18c0-3.3 2.7-6 6-6s6 2.7 6 6-2.7 6-6 6-6-2.7-6-6Z" />
        <path d="M12 12c.1 0 .2 0 .3.1L18 6.5" />
        <path d="M12 12c-.1 0-.2 0-.3.1L6 6.5" />
      </svg>
    );
  }
  if (name === "Stomach") {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 21a9 9 0 0 0 9-9 9 9 0 0 0-9-9 9 9 0 0 0-9 9 9 9 0 0 0 9 9Z" />
        <path d="M12 12c.1 0 .2 0 .3.1L18 6.5" />
      </svg>
    );
  }
  if (name === "Bone") {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 10c.7-.7 1.6-1 2.5-1 1.9 0 3.5 1.6 3.5 3.5s-1.6 3.5-3.5 3.5c-.9 0-1.8-.3-2.5-1" />
        <path d="M7 10c-.7-.7-1.6-1-2.5-1-1.9 0-3.5 1.6-3.5 3.5S2.6 16 4.5 16c.9 0 1.8-.3 2.5-1" />
        <path d="M7 10h10v5H7z" />
      </svg>
    );
  }
  if (name === "Gland") {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v2M12 20v2M20 12h2M2 12h2M17.6 6.4l-1.4 1.4M7.8 16.2l-1.4 1.4M17.6 17.6l-1.4-1.4M7.8 7.8l-1.4-1.4" />
      </svg>
    );
  }
  if (name === "Cell") {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z" />
        <circle cx="12" cy="12" r="3" />
        <path d="M12 9V2M12 22v-7M5 12H2M22 12h-3" />
      </svg>
    );
  }
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 6.5c.5-2 2-3.5 4-4s4 .5 4 2.5v14c0 2-1.5 3.5-4 3s-3.5-2-4-4" />
      <path d="M19.5 6.5c-.5-2-2-3.5-4-4s-4 .5-4 2.5v14c0 2 1.5 3.5 4 3s3.5-2 4-4" />
    </svg>
  );
}
