import { useState } from "react";
import { topperRoadmap, type RoadmapStep } from "../data/roadmap";
import { Reveal } from "./Reveal";

export function TopperJourney() {
  const [activeStep, setActiveStep] = useState<RoadmapStep>(topperRoadmap[2]); // Default to 'current'

  return (
    <section className="relative mx-auto max-w-7xl px-6 py-24 lg:px-10 z-10 overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 blur-[120px] -z-10 rounded-full" />
      
      <Reveal className="text-center mb-20">
        <p className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
          The Success Blueprint
        </p>
        <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Topper's <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-300 to-violet-400 drop-shadow-[0_0_20px_rgba(56,189,248,0.3)]">Roadmap.</span>
        </h2>
        <p className="mt-6 mx-auto max-w-2xl text-parchment/60 leading-relaxed">
          From foundation to final polish, follow the strategic journey of students who cleared NEET with top ranks.
        </p>
      </Reveal>

      <div className="grid lg:grid-cols-12 gap-12 items-start">
        {/* Left: Interactive Path */}
        <div className="lg:col-span-5 relative">
          <div className="space-y-8 relative">
            {/* Timeline Line - Mathematically centered at 28px (half of w-14/56px) */}
            <div className="absolute left-[28px] top-4 bottom-4 w-0.5 bg-white/5">
              <div 
                className="absolute top-0 w-full bg-linear-to-b from-cyan-400 to-violet-500 transition-all duration-1000"
                style={{ height: `${(activeStep.id / topperRoadmap.length) * 100}%` }}
              />
            </div>

            {topperRoadmap.map((step) => (
              <button
                key={step.id}
                onClick={() => setActiveStep(step)}
                className={`flex items-center justify-start gap-6 w-full text-left group transition-all duration-500 p-0 outline-none relative z-10 ${
                  activeStep.id === step.id ? "opacity-100" : "opacity-40 hover:opacity-70"
                }`}
              >
                <div className={`relative w-14 h-14 rounded-2xl border flex items-center justify-center transition-all duration-500 flex-shrink-0 z-10 ${
                  activeStep.id === step.id ? 
                  "bg-navy-950 border-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.3)] scale-110" : 
                  "bg-[#0c1226] border-white/10 group-hover:border-white/20"
                }`}>
                  <span className={`text-sm font-bold ${activeStep.id === step.id ? "text-cyan-300" : "text-parchment/40"}`}>
                    0{step.id}
                  </span>
                </div>
                <div>
                  <p className={`text-[10px] uppercase tracking-widest font-bold mb-1 transition-colors ${
                    activeStep.id === step.id ? "text-cyan-400" : "text-parchment/30"
                  }`}>
                    {step.month}
                  </p>
                  <h4 className={`text-lg font-display font-medium transition-colors ${
                    activeStep.id === step.id ? "text-white" : "text-parchment/60"
                  }`}>
                    {step.title}
                  </h4>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Right: Milestone Details */}
        <div className="lg:col-span-7">
          <Reveal key={activeStep.id} delay={100}>
            <div className="glow-border relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#0c1226]/80 p-8 sm:p-12 backdrop-blur-xl">
              <div className="absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-violet-500/10 blur-[80px]" />
              
              <div className="relative">
                <div className="flex items-center gap-4 mb-8">
                  <div className="px-4 py-1.5 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-300">
                    Phase 0{activeStep.id}
                  </div>
                  <div className="h-px flex-1 bg-white/10" />
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full animate-pulse ${
                      activeStep.status === 'completed' ? 'bg-emerald-400' :
                      activeStep.status === 'current' ? 'bg-cyan-400' : 'bg-parchment/20'
                    }`} />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-parchment/40">
                      {activeStep.status}
                    </span>
                  </div>
                </div>

                <h3 className="text-2xl sm:text-4xl font-display font-semibold text-white mb-6 leading-tight">
                  {activeStep.title}
                </h3>
                
                <p className="text-lg text-parchment/70 leading-relaxed mb-10 italic">
                  "{activeStep.description}"
                </p>

                <div className="grid sm:grid-cols-2 gap-8 mb-10">
                  <div className="p-6 rounded-3xl bg-white/5 border border-white/5">
                    <p className="text-[10px] uppercase tracking-widest font-bold text-violet-400 mb-4 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                      Critical Focus
                    </p>
                    <ul className="space-y-3">
                      {activeStep.focusAreas.map((area, i) => (
                        <li key={i} className="text-sm text-parchment/60 flex items-start gap-3">
                          <svg className="w-4 h-4 text-emerald-400/60 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          {area}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-6 rounded-3xl bg-linear-to-br from-cyan-500/10 to-violet-500/10 border border-white/10 relative group overflow-hidden">
                    <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity">
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M14.017 21L14.017 18C14.017 16.8954 13.1216 16 12.017 16C10.9124 16 10.017 16.8954 10.017 18L10.017 21H4.01703V11C4.01703 10.4477 4.46474 10 5.01703 10H19.017C19.5693 10 20.017 10.4477 20.017 11V21H14.017Z" />
                      </svg>
                    </div>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-cyan-400 mb-4">Topper's Personal Tip</p>
                    <p className="text-sm text-white font-medium leading-relaxed">
                      "{activeStep.topperTip}"
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
