import { Link } from "react-router-dom";
import { testimonials } from "../data/testimonials";
import { videos } from "../data/site";
import { keyFeatures, aboutPillars, examsList } from "../data/features";
import { Reveal } from "../components/Reveal";
import { Counter } from "../components/Counter";
import { Marquee } from "../components/Marquee";
import { LiteYouTube } from "../components/LiteYouTube";
import { PremiumIcon } from "../components/PremiumIcon";

export function Home() {
  return (
    <>
      <Hero />
      <ExamMarquee />
      <AboutCompany />
      <DualCards />
      <KeyFeatures />
      <ExamsGrid />
      <CrackNEET />
      <AboutUs />
      <CrashCourseBanner />
      <StatsBar />
      <UltimateGoal />
      <Testimonials />
      <CTA />
    </>
  );
}

function ExamMarquee() {
  return (
    <section className="border-y border-parchment/10 bg-navy-950/60 py-5 text-parchment backdrop-blur">
      <Marquee
        speed={45}
        items={examsList.map((e) => (
          <span
            key={e}
            className="font-display text-sm uppercase tracking-[0.32em] text-parchment/70"
          >
            {e}
          </span>
        ))}
      />
    </section>
  );
}

function Hero() {
  return (
    <section className="relative isolate overflow-hidden text-parchment">
      <div className="absolute inset-0 -z-50 bg-linear-to-b from-[#020617] via-[#070321] to-[#0a0820]" />
      <div className="pointer-events-none absolute inset-0 -z-40 bg-grid-cyan opacity-20 mask-fade-radial animate-grid-scan" />

      <AmbientOrbs />
      <NetworkMesh />
      <Particles />
      <DNAStrand />
      <MoleculeMotif />
      <HeartbeatLine />
      <WaveFloor />
      <DashboardCards />

      <div className="relative mx-auto max-w-6xl px-6 pt-28 pb-44 text-center lg:px-10 lg:pt-36 lg:pb-56">
        <p className="animate-rise inline-flex items-center gap-2.5 rounded-full border border-cyan-400/30 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-[0.32em] text-cyan-200 backdrop-blur">
          <span className="grid h-4 w-4 place-items-center rounded-full bg-cyan-400/20">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 animate-pulse" />
          </span>
          AI-Powered NEET Coaching · Madurai
        </p>

        <h1
          className="animate-rise mx-auto mt-8 max-w-5xl text-5xl font-semibold tracking-tight sm:text-7xl lg:text-[7.5rem] lg:leading-[0.95]"
          style={{ animationDelay: "0.1s" }}
        >
          <span className="bg-clip-text text-transparent bg-linear-to-r from-cyan-200 via-sky-200 to-violet-300 drop-shadow-[0_0_40px_rgba(34,211,238,0.25)]">
            The SK Learnings
          </span>
        </h1>

        <p
          className="animate-rise mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-parchment/75 sm:text-xl lg:text-2xl"
          style={{ animationDelay: "0.2s" }}
        >
          Crack <span className="font-semibold text-cyan-300">NEET</span> with{" "}
          <span className="font-semibold text-sky-300">Smart Learning</span> &{" "}
          <span className="font-semibold text-violet-300">AI-Powered Preparation</span>.
        </p>

        <div
          className="animate-rise mt-12 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
          style={{ animationDelay: "0.3s" }}
        >
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-linear-to-r from-cyan-400 via-sky-400 to-violet-500 px-7 py-4 text-base font-medium text-white shadow-[0_10px_40px_-10px_rgba(56,189,248,0.6)] transition hover:from-cyan-300 hover:via-sky-300 hover:to-violet-400"
          >
            Start learning
            <span aria-hidden className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
          <Link
            to="/programs"
            className="inline-flex items-center gap-2 rounded-full border border-cyan-300/40 bg-cyan-400/10 px-6 py-4 text-base font-medium text-cyan-100 backdrop-blur transition hover:border-cyan-300/80 hover:bg-cyan-400/20"
          >
            Join NEET batch
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-4 text-base font-medium text-parchment backdrop-blur transition hover:border-violet-300/60 hover:bg-white/10"
          >
            <PlayBadge />
            Free demo class
          </Link>
        </div>

        <Reveal delay={500} className="mt-16 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-xs uppercase tracking-[0.22em] text-parchment/50">
          <span>500+ NEET aspirants mentored</span>
          <span className="hidden sm:inline">·</span>
          <span>10 years of medical-entrance focus</span>
          <span className="hidden sm:inline">·</span>
          <span>84% success ratio</span>
        </Reveal>
      </div>
    </section>
  );
}

function AmbientOrbs() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-30 overflow-hidden">
      <div className="absolute -left-[10%] top-[15%] h-[420px] w-[420px] rounded-full bg-cyan-500/25 blur-[120px] animate-drift-a" />
      <div className="absolute -right-[8%] top-[25%] h-[420px] w-[420px] rounded-full bg-violet-500/30 blur-[120px] animate-drift-b" />
      <div className="absolute left-1/2 bottom-[5%] h-[360px] w-[520px] -translate-x-1/2 rounded-full bg-sky-500/20 blur-[140px] animate-drift-c" />
    </div>
  );
}

function NetworkMesh() {
  const W = 1600;
  const H = 1000;
  const nodes: [number, number][] = [
    [110, 180], [280, 90], [490, 220], [680, 110],
    [870, 200], [1080, 95], [1280, 200], [1450, 130],
    [180, 380], [410, 460], [620, 360], [820, 480],
    [1000, 380], [1220, 470], [1410, 380],
    [120, 620], [340, 700], [560, 620], [780, 740],
    [970, 660], [1180, 760], [1400, 640],
    [240, 880], [490, 920], [720, 880], [950, 920],
    [1180, 880], [1430, 900],
  ];
  const edges: [number, number][] = [
    [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7],
    [0, 8], [1, 8], [2, 9], [2, 10], [3, 10], [4, 11], [5, 12],
    [6, 13], [7, 14], [8, 9], [9, 10], [10, 11], [11, 12], [12, 13], [13, 14],
    [8, 15], [9, 16], [10, 17], [11, 18], [12, 19], [13, 20], [14, 21],
    [15, 16], [16, 17], [17, 18], [18, 19], [19, 20], [20, 21],
    [15, 22], [16, 23], [17, 23], [18, 24], [19, 25], [20, 26], [21, 27],
    [22, 23], [23, 24], [24, 25], [25, 26], [26, 27],
  ];

  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-30 h-full w-full"
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="net-line-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.45" />
        </linearGradient>
      </defs>

      <g stroke="url(#net-line-grad)" strokeWidth={1.1}>
        {edges.map(([a, b], i) => {
          const [ax, ay] = nodes[a];
          const [bx, by] = nodes[b];
          return (
            <line
              key={i}
              x1={ax}
              y1={ay}
              x2={bx}
              y2={by}
              opacity={0.32 + ((i * 7) % 10) / 30}
            />
          );
        })}
      </g>

      <g>
        {nodes.map(([x, y], i) => (
          <g key={i}>
            <circle cx={x} cy={y} r={9} fill="#22d3ee" opacity={0.18} />
            <circle
              cx={x}
              cy={y}
              r={2.6}
              fill="#67e8f9"
              className="animate-node-pulse"
              style={{ animationDelay: `${(i * 0.18) % 3.4}s` }}
            />
          </g>
        ))}
      </g>
    </svg>
  );
}

function DNAStrand() {
  const points = Array.from({ length: 24 }, (_, i) => {
    const t = i / 23;
    const y = t * 800 + 80;
    const phase = t * Math.PI * 4;
    return {
      x1: 60 + Math.sin(phase) * 18,
      x2: 60 + Math.sin(phase + Math.PI) * 18,
      y,
    };
  });
  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute left-2 top-0 -z-20 hidden h-full w-32 lg:block"
      viewBox="0 0 120 1000"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id="dna-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#67e8f9" stopOpacity="0" />
          <stop offset="20%" stopColor="#67e8f9" stopOpacity="0.7" />
          <stop offset="80%" stopColor="#a78bfa" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#a78bfa" stopOpacity="0" />
        </linearGradient>
      </defs>

      <path
        d={
          "M " +
          points
            .map((p) => `${p.x1.toFixed(1)} ${p.y.toFixed(1)}`)
            .join(" L ")
        }
        stroke="url(#dna-grad)"
        strokeWidth="1.4"
        fill="none"
      />
      <path
        d={
          "M " +
          points
            .map((p) => `${p.x2.toFixed(1)} ${p.y.toFixed(1)}`)
            .join(" L ")
        }
        stroke="url(#dna-grad)"
        strokeWidth="1.4"
        fill="none"
      />
      {points.map((p, i) =>
        i % 2 === 0 ? (
          <line
            key={i}
            x1={p.x1}
            y1={p.y}
            x2={p.x2}
            y2={p.y}
            stroke="#67e8f9"
            strokeWidth="0.8"
            opacity={0.25 + (i % 4) * 0.1}
          />
        ) : null
      )}
    </svg>
  );
}

function MoleculeMotif() {
  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute right-4 top-[55%] -z-20 hidden h-44 w-44 lg:block animate-spin-slow"
      viewBox="-100 -100 200 200"
      style={{ transformOrigin: "center" }}
    >
      <g stroke="#a78bfa" strokeWidth="1.1" fill="none" opacity="0.55">
        <circle cx="0" cy="-60" r="6" fill="#67e8f9" opacity="0.4" />
        <circle cx="52" cy="-30" r="6" fill="#a78bfa" opacity="0.4" />
        <circle cx="52" cy="30" r="6" fill="#67e8f9" opacity="0.4" />
        <circle cx="0" cy="60" r="6" fill="#a78bfa" opacity="0.4" />
        <circle cx="-52" cy="30" r="6" fill="#67e8f9" opacity="0.4" />
        <circle cx="-52" cy="-30" r="6" fill="#a78bfa" opacity="0.4" />
        <circle cx="0" cy="0" r="9" fill="#67e8f9" opacity="0.55" />
        <line x1="0" y1="-60" x2="0" y2="0" />
        <line x1="52" y1="-30" x2="0" y2="0" />
        <line x1="52" y1="30" x2="0" y2="0" />
        <line x1="0" y1="60" x2="0" y2="0" />
        <line x1="-52" y1="30" x2="0" y2="0" />
        <line x1="-52" y1="-30" x2="0" y2="0" />
        <line x1="0" y1="-60" x2="52" y2="-30" />
        <line x1="52" y1="-30" x2="52" y2="30" />
        <line x1="52" y1="30" x2="0" y2="60" />
        <line x1="0" y1="60" x2="-52" y2="30" />
        <line x1="-52" y1="30" x2="-52" y2="-30" />
        <line x1="-52" y1="-30" x2="0" y2="-60" />
      </g>
    </svg>
  );
}

function HeartbeatLine() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 top-1/2 -z-20 hidden h-24 -translate-y-1/2 lg:block"
    >
      <svg
        viewBox="0 0 1600 80"
        preserveAspectRatio="none"
        className="h-full w-full opacity-30"
      >
        <defs>
          <linearGradient id="hb-grad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#67e8f9" stopOpacity="0" />
            <stop offset="20%" stopColor="#67e8f9" stopOpacity="0.9" />
            <stop offset="80%" stopColor="#a78bfa" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#a78bfa" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M0,40 L240,40 L260,40 L275,18 L290,62 L305,28 L320,40 L520,40 L540,40 L555,18 L570,62 L585,28 L600,40 L820,40 L840,40 L855,18 L870,62 L885,28 L900,40 L1120,40 L1140,40 L1155,18 L1170,62 L1185,28 L1200,40 L1600,40"
          stroke="url(#hb-grad)"
          strokeWidth="1.6"
          fill="none"
        />
      </svg>
    </div>
  );
}

function WaveFloor() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 bottom-0 -z-25 h-[34%] overflow-hidden"
    >
      <svg
        viewBox="0 0 2400 220"
        preserveAspectRatio="none"
        className="h-full w-full"
      >
        <defs>
          <linearGradient id="wave-grad-a" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="wave-grad-b" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
          </linearGradient>
        </defs>

        <path fill="url(#wave-grad-b)" opacity="0.7">
          <animate
            attributeName="d"
            dur="14s"
            repeatCount="indefinite"
            values="M0,150 C200,90 400,200 600,150 C800,90 1000,200 1200,150 C1400,90 1600,200 1800,150 C2000,90 2200,200 2400,150 L2400,220 L0,220 Z;M0,170 C200,120 400,180 600,170 C800,110 1000,180 1200,170 C1400,120 1600,180 1800,170 C2000,110 2200,180 2400,170 L2400,220 L0,220 Z;M0,150 C200,90 400,200 600,150 C800,90 1000,200 1200,150 C1400,90 1600,200 1800,150 C2000,90 2200,200 2400,150 L2400,220 L0,220 Z"
          />
        </path>

        <path fill="url(#wave-grad-a)">
          <animate
            attributeName="d"
            dur="18s"
            repeatCount="indefinite"
            values="M0,110 C300,60 500,170 800,110 C1100,50 1300,170 1600,110 C1900,50 2100,170 2400,110 L2400,220 L0,220 Z;M0,130 C300,90 500,150 800,130 C1100,80 1300,150 1600,130 C1900,80 2100,150 2400,130 L2400,220 L0,220 Z;M0,110 C300,60 500,170 800,110 C1100,50 1300,170 1600,110 C1900,50 2100,170 2400,110 L2400,220 L0,220 Z"
          />
        </path>
      </svg>
    </div>
  );
}

function Particles() {
  const pts = Array.from({ length: 38 }, (_, i) => ({
    x: ((i * 137.508) % 100 + 100) % 100,
    y: ((i * 73.5) % 100 + 100) % 100,
    size: 1 + (i % 3),
    delay: (i * 0.27) % 6,
    duration: 5 + (i % 4),
    hue: i % 3 === 0 ? "#67e8f9" : i % 3 === 1 ? "#c4b5fd" : "#a5f3fc",
  }));

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-30 overflow-hidden"
    >
      {pts.map((p, i) => (
        <span
          key={i}
          className="absolute block rounded-full animate-particle-drift"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: p.hue,
            boxShadow: `0 0 8px ${p.hue}`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}
    </div>
  );
}

function DashboardCards() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 hidden lg:block">
      <FloatCard
        className="left-[3%] top-[14%] animate-card-float"
        accent="cyan"
      >
        <div className="flex items-center gap-2.5">
          <span className="grid h-7 w-7 place-items-center rounded-full bg-emerald-400/20 text-emerald-300">
            <BiologyIcon />
          </span>
          <p className="text-xs font-semibold uppercase tracking-wider text-emerald-200">
            Biology
          </p>
        </div>
        <p className="mt-3 text-sm font-medium text-white">
          Human Physiology · Chapter 17
        </p>
        <ProgressBar value={72} accent="emerald" />
        <p className="mt-2 text-[11px] text-white/55">
          72% mastery · weakness: Endocrine
        </p>
      </FloatCard>

      <FloatCard
        className="right-[3%] top-[16%] animate-card-float-alt"
        accent="violet"
      >
        <div className="flex items-center gap-2.5">
          <span className="grid h-7 w-7 place-items-center rounded-full bg-violet-400/20 text-violet-300">
            <PhysicsIcon />
          </span>
          <p className="text-xs font-semibold uppercase tracking-wider text-violet-200">
            Physics
          </p>
        </div>
        <p className="mt-3 text-sm font-medium text-white">
          Optics · Mock test ready
        </p>
        <BarMini />
        <p className="mt-2 text-[11px] text-white/55">
          +14% improvement vs cohort
        </p>
      </FloatCard>

      <FloatCard
        className="left-[4%] bottom-[12%] animate-card-float-alt"
        accent="sky"
      >
        <div className="flex items-center gap-2.5">
          <span className="grid h-7 w-7 place-items-center rounded-full bg-sky-400/20 text-sky-300">
            <ChemistryIcon />
          </span>
          <p className="text-xs font-semibold uppercase tracking-wider text-sky-200">
            Chemistry
          </p>
        </div>
        <p className="mt-3 text-sm font-medium text-white">
          Organic — Reaction Mechanisms
        </p>
        <ProgressBar value={58} accent="sky" />
        <p className="mt-2 text-[11px] text-white/55">
          58% complete · 12 chapters left
        </p>
      </FloatCard>

      <FloatCard
        className="right-[4%] bottom-[14%] animate-card-float"
        accent="cyan"
      >
        <div className="flex items-center justify-between">
          <p className="text-[11px] uppercase tracking-wider text-white/55">
            All-India rank
          </p>
          <p className="inline-flex items-center gap-1 text-xs text-emerald-300">
            <ArrowUp /> 1,842 ↑
          </p>
        </div>
        <p className="mt-2 font-display text-4xl font-semibold text-white">
          4,212
        </p>
        <p className="mt-1 text-[11px] text-white/55">
          Predicted from last 4 mock tests
        </p>
      </FloatCard>
    </div>
  );
}

function FloatCard({
  children,
  className = "",
  accent = "cyan",
}: {
  children: React.ReactNode;
  className?: string;
  accent?: "cyan" | "violet" | "sky";
}) {
  const ring =
    accent === "cyan"
      ? "ring-cyan-400/30 shadow-[0_10px_40px_-12px_rgba(34,211,238,0.45)]"
      : accent === "violet"
      ? "ring-violet-400/30 shadow-[0_10px_40px_-12px_rgba(167,139,250,0.45)]"
      : "ring-sky-400/30 shadow-[0_10px_40px_-12px_rgba(56,189,248,0.45)]";

  return (
    <div
      className={`absolute w-60 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl ring-1 ${ring} ${className}`}
    >
      {children}
    </div>
  );
}

function BarMini() {
  const bars = [40, 62, 35, 78, 50, 90, 70];
  return (
    <div className="mt-3 flex h-12 items-end gap-1.5">
      {bars.map((h, i) => (
        <span
          key={i}
          className="flex-1 rounded-t bg-linear-to-t from-violet-500/40 via-violet-400/70 to-cyan-300"
          style={{ height: `${h}%` }}
        />
      ))}
    </div>
  );
}

function ProgressBar({
  value,
  accent = "cyan",
}: {
  value: number;
  accent?: "cyan" | "sky" | "emerald";
}) {
  const fill =
    accent === "cyan"
      ? "bg-linear-to-r from-cyan-400 to-violet-500"
      : accent === "sky"
      ? "bg-linear-to-r from-sky-400 to-cyan-300"
      : "bg-linear-to-r from-emerald-400 to-cyan-300";
  return (
    <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-white/10">
      <div className={`h-full rounded-full ${fill}`} style={{ width: `${value}%` }} />
    </div>
  );
}

function BiologyIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M4 4c4 4 12 12 16 16M20 4C16 8 8 16 4 20" />
      <path d="M7 4h10M7 20h10" />
    </svg>
  );
}

function PhysicsIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <ellipse cx="12" cy="12" rx="10" ry="4" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    </svg>
  );
}

function ChemistryIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M9 3h6M10 3v6L4 19a2 2 0 0 0 1.7 3h12.6A2 2 0 0 0 20 19l-6-10V3" />
      <line x1="7" y1="14" x2="17" y2="14" />
    </svg>
  );
}

function ArrowUp() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <line x1="12" y1="19" x2="12" y2="5" />
      <polyline points="5 12 12 5 19 12" />
    </svg>
  );
}

function PlayBadge() {
  return (
    <span className="grid h-6 w-6 place-items-center rounded-full bg-violet-300/20 text-violet-200">
      <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M8 5v14l11-7z" />
      </svg>
    </span>
  );
}

function StatsBar() {
  type Item = {
    label: string;
    to?: number;
    suffix?: string;
    prefix?: string;
    text?: string;
  };
  const items: Item[] = [
    { to: 100, suffix: "%", label: "Student satisfaction" },
    { to: 10, label: "Years of experience" },
    { to: 84, suffix: "%", label: "Success ratio per batch" },
  ];
  return (
    <section className="border-y border-parchment/5">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 py-16 sm:grid-cols-3 lg:px-10">
        {items.map((it, i) => (
          <Reveal key={it.label} delay={i * 100}>
            <div className="text-center sm:text-left">
              <p className="font-display text-5xl font-semibold tabular-nums text-gold-300 sm:text-6xl">
                {it.text ? (
                  it.text
                ) : (
                  <Counter
                    to={it.to ?? 0}
                    prefix={it.prefix}
                    suffix={it.suffix}
                  />
                )}
              </p>
              <p className="mt-3 text-xs uppercase tracking-[0.2em] text-parchment/60">
                {it.label}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function AboutCompany() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
      <div className="grid gap-14 lg:grid-cols-12">
        <Reveal as="div" className="lg:col-span-6">
          <VideoCard
            videoId={videos.intro}
            label="Watch our intro"
            title="How to crack NEET 2022 with our NEET Individual Program"
          />
        </Reveal>

        <Reveal as="div" className="lg:col-span-6 self-center" delay={120}>
          <p className="font-display text-xs uppercase tracking-[0.22em] text-gold-300">
            About SK Learnings
          </p>
          <p className="mt-5 text-lg leading-relaxed text-parchment/80">
            At The SK Learnings, we are committed to empowering students with
            knowledge and skills that go beyond conventional education. With a
            distinguished legacy spanning a decade, we specialize in coaching
            students from <span className="text-gold-300 font-semibold">3rd to 12th grade</span>,
            particularly focusing on NEET Foundation Courses. Our experienced
            faculty ensures a solid foundation and deep understanding of subjects.
          </p>
          <p className="mt-6 border-l-2 border-gold-400 pl-5 font-display text-xl italic leading-snug text-gold-200">
            "Success is not just a goal — it's a journey we embark on with each student."
          </p>
        </Reveal>
      </div>

      <Reveal as="div" delay={200} className="mt-14">
        <p className="mx-auto max-w-4xl text-base leading-relaxed text-parchment/70">
          Our commitment extends beyond the classroom, fostering an environment
          where curiosity thrives and learning becomes a lifelong adventure.
          With a focus on <span className="font-semibold text-gold-300">'Individual Coaching,'</span>{" "}
          our approach combines personalized analytics, targeted training, and
          genuine care to create a pathway to inevitable success. The formula
          is simple: <span className="font-semibold text-parchment">Individual Analytics + Training + Care = Inevitable Success.</span>{" "}
          With an outstanding 84% success ratio per batch, SK Learnings stands
          as a testament to our dedication and the potential within every
          student we nurture.
        </p>
        <div className="mt-10 flex justify-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-gold-400/60 px-7 py-3.5 text-sm font-medium text-gold-300 transition hover:bg-gold-400 hover:text-navy-950"
          >
            Admissions
            <span aria-hidden>→</span>
          </Link>
        </div>
      </Reveal>
    </section>
  );
}

function VideoCard({
  videoId,
  label,
  title,
}: {
  videoId: string;
  label: string;
  title: string;
}) {
  return (
    <div className="lift glow-border relative overflow-hidden rounded-3xl border border-parchment/10 bg-navy-950">
      <div className="aspect-video">
        <LiteYouTube videoId={videoId} title={title} className="h-full w-full" />
      </div>
      <div className="border-t border-parchment/10 p-5">
        <p className="font-display text-xs uppercase tracking-[0.22em] text-gold-300">
          {label}
        </p>
        <p className="mt-1 font-display text-base font-semibold text-parchment">
          {title}
        </p>
      </div>
    </div>
  );
}

function DualCards() {
  const cards = [
    {
      eyebrow: "Intensity of teaching",
      body: "is high when we focus on individual students rather than a classroom full of 50 students.",
      tone: "from-sky-100 to-sky-200",
      ink: "text-navy-900",
    },
    {
      eyebrow: "Individual care",
      body: "from educators — to solve the difficulties in studies, one student at a time.",
      tone: "from-rose-100 to-rose-200",
      ink: "text-navy-900",
    },
  ];
  return (
    <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
      <div className="grid gap-6 md:grid-cols-2">
        {cards.map((c, i) => (
          <Reveal key={c.eyebrow} delay={i * 120}>
            <article
              className={`lift relative overflow-hidden rounded-3xl bg-linear-to-br ${c.tone} p-10 sm:p-12 ${c.ink}`}
            >
              <p className="font-display text-xs uppercase tracking-[0.22em] text-navy-700">
                Why it matters
              </p>
              <h3 className="mt-5 font-display text-2xl font-semibold leading-snug sm:text-3xl">
                <span className="text-navy-900">{c.eyebrow}</span>{" "}
                {c.body}
              </h3>
              <span className="pointer-events-none absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-white/30 blur-2xl" />
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function KeyFeatures() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
      <Reveal>
        <p className="font-display text-xs uppercase tracking-[0.22em] text-gold-300">
          Our features
        </p>
        <h2 className="mt-3 max-w-3xl font-display text-4xl font-semibold tracking-tight text-parchment sm:text-5xl">
          Discover what makes SK Learnings different.
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {keyFeatures.map((f, i) => {
          const accents = ["cyan", "violet", "sky", "emerald", "rose"] as const;
          return (
            <Reveal key={f.title} delay={(i % 5) * 90}>
              <article className="lift glow-border corner-accent relative flex h-full flex-col rounded-3xl border border-parchment/10 bg-navy-900/40 p-6 backdrop-blur">
                <PremiumIcon accent={accents[i % 5]}>
                  <FeatureIcon name={f.icon} />
                </PremiumIcon>
                <h3 className="mt-5 font-display text-lg font-semibold text-parchment">
                  {f.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-parchment/70">
                  {f.body}
                </p>
              </article>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={500} className="mt-12 text-center">
        <p className="font-display text-lg text-parchment/80">
          Discover more about our key features and elevate your learning experience.
        </p>
        <Link
          to="/programs"
          className="mt-6 inline-flex items-center gap-2 rounded-full border border-gold-400/60 px-7 py-3 text-sm font-medium text-gold-300 transition hover:bg-gold-400 hover:text-navy-950"
        >
          Our features
          <span aria-hidden>→</span>
        </Link>
      </Reveal>
    </section>
  );
}

function ExamsGrid() {
  return (
    <section className="relative isolate overflow-hidden border-y border-parchment/5 bg-[#0c0816]">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid-gold opacity-15" />
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <Reveal className="text-center">
          <p className="font-display text-xs uppercase tracking-[0.22em] text-gold-300">
            We coach for
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-parchment sm:text-5xl">
            Every exam that matters.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-3 lg:grid-cols-5">
          {examsList.map((e, i) => (
            <Reveal key={e} delay={(i % 5) * 60}>
              <div className="text-center">
                <p className="font-display text-3xl font-semibold uppercase tracking-wider text-parchment/30 transition-colors hover:text-gold-300 sm:text-4xl">
                  {e}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={400} className="mt-14 text-center">
          <Link
            to="/programs"
            className="inline-flex items-center gap-2 rounded-full border border-gold-400/60 px-7 py-3 text-sm font-medium text-gold-300 transition hover:bg-gold-400 hover:text-navy-950"
          >
            Check the course details
            <span aria-hidden>→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

function CrackNEET() {
  return (
    <section className="relative isolate overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_50%,rgba(124,58,237,0.18),transparent_60%)]"
      />
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <Reveal>
              <VideoCard
                videoId={videos.crack}
                label="Watch the result"
                title="The SK Learnings — the best NEET Individual Coaching"
              />
            </Reveal>

            <div className="mt-5 grid grid-cols-3 gap-4">
              <Reveal delay={120}>
                <div className="lift relative aspect-video overflow-hidden rounded-2xl border border-parchment/10 bg-navy-950">
                  <LiteYouTube
                    videoId={videos.related}
                    title="More from SK Learnings"
                    className="h-full w-full"
                  />
                </div>
              </Reveal>

              <Reveal delay={200}>
                <ResultCard year={2021} name="Kajin Prabhu" score={632} />
              </Reveal>

              <Reveal delay={280}>
                <ResultCard year={2021} name="Akash" score={561} />
              </Reveal>
            </div>
          </div>

          <Reveal as="div" delay={150} className="lg:col-span-5">
            <p className="font-display text-xs uppercase tracking-[0.32em] text-cyan-300">
              Real students · Real ranks
            </p>
            <h2 className="mt-5 font-display text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl">
              <span className="text-parchment">Crack your </span>
              <span className="bg-clip-text text-transparent bg-linear-to-r from-cyan-300 via-sky-300 to-violet-300">
                NEET exam
              </span>
              <span className="text-parchment"> with </span>
              <span className="bg-clip-text text-transparent bg-linear-to-r from-violet-300 to-cyan-300">
                High Score &amp; Top Ranks.
              </span>
            </h2>

            <p className="mt-7 text-base leading-relaxed text-parchment/75">
              Watch how individualised coaching changes the equation. Hear from
              students who walked into top medical colleges with the help of
              personalised plans built around their actual gaps.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-cyan-400 to-violet-500 px-7 py-3.5 text-sm font-medium text-white shadow-[0_10px_30px_-10px_rgba(56,189,248,0.55)] transition hover:from-cyan-300 hover:to-violet-400"
              >
                Apply for the 2026 batch
                <span aria-hidden>→</span>
              </Link>
              <Link
                to="/success-stories"
                className="text-sm font-medium text-parchment/80 transition hover:text-cyan-300"
              >
                See more results →
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ResultCard({
  year,
  name,
  score,
}: {
  year: number;
  name: string;
  score: number;
}) {
  const initials = name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <div className="lift glow-border relative flex h-full flex-col overflow-hidden rounded-2xl border border-cyan-400/20 bg-navy-950/70 p-4 backdrop-blur">
      <span className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-cyan-400/20 blur-2xl" />

      <div className="flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-full bg-linear-to-br from-cyan-400 to-violet-500 font-display text-sm font-semibold text-navy-950">
          {initials}
        </span>
        <div>
          <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-cyan-200">
            NEET Result
          </p>
          <p className="text-[9px] uppercase tracking-[0.18em] text-parchment/50">
            Class of {year}
          </p>
        </div>
      </div>

      <p className="mt-3 font-display text-base font-semibold leading-tight text-parchment">
        {name}
      </p>

      <div className="mt-auto pt-3">
        <p className="font-display text-3xl font-semibold tabular-nums text-cyan-300">
          {score}
        </p>
        <p className="text-[10px] uppercase tracking-wider text-parchment/55">
          NEET score
        </p>
      </div>
    </div>
  );
}

function AboutUs() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
      <Reveal className="text-center">
        <p className="font-display text-xs uppercase tracking-[0.22em] text-gold-300">
          About us
        </p>
        <p className="mx-auto mt-5 max-w-4xl text-lg leading-relaxed text-parchment/80 sm:text-xl">
          At SK Learnings, our journey is defined by a passion for education
          and a commitment to nurturing academic excellence. For over a decade,
          we have been a beacon of learning — guiding students from{" "}
          <span className="text-gold-300 font-semibold">3rd to 12th grade</span>{" "}
          on a transformative educational odyssey.{" "}
          <Link to="/about" className="text-gold-300 hover:text-gold-200 underline-offset-4 hover:underline">
            Read more
          </Link>
        </p>
      </Reveal>

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {aboutPillars.map((p, i) => {
          const accents = ["cyan", "violet", "sky", "emerald", "gold"] as const;
          return (
            <Reveal key={p.title} delay={(i % 5) * 90}>
              <article className="lift glow-border relative flex h-full flex-col items-center rounded-3xl border border-parchment/10 bg-navy-900/30 p-7 text-center backdrop-blur">
                <PremiumIcon accent={accents[i % 5]} size="lg">
                  <PillarIcon name={p.icon} />
                </PremiumIcon>
                <h3 className="mt-6 font-display text-base font-semibold text-parchment">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-parchment/70">
                  {p.body}
                </p>
              </article>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={500} className="mt-14 text-center">
        <p className="font-display text-xl text-gold-300 sm:text-2xl">
          Discover the power of 'Individual Coaching' — Join SK Learnings today.
        </p>
        <Link
          to="/contact"
          className="mt-6 inline-flex items-center gap-2 rounded-full border border-gold-400/60 px-7 py-3 text-sm font-medium text-gold-300 transition hover:bg-gold-400 hover:text-navy-950"
        >
          Contact now
          <span aria-hidden>→</span>
        </Link>
      </Reveal>
    </section>
  );
}

function CrashCourseBanner() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
      <Reveal>
        <div className="lift relative overflow-hidden rounded-3xl border border-parchment/10 bg-linear-to-br from-navy-900 via-navy-950 to-[#04050d] p-10 sm:p-16">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-grid-gold opacity-20 mask-fade-radial" />
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-gold-400/20 blur-3xl animate-glow-breathe" />

          <div className="relative grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <p className="font-display text-xs uppercase tracking-[0.22em] text-gold-300">
                Crash course · For aspirants
              </p>
              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-parchment sm:text-5xl lg:text-6xl">
                NEET Foundation Crash Course
                <span className="block text-gold-300">— learn from top educators.</span>
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-parchment/75">
                Join a focused cohort built around fast revision, weekly mock tests, and
                one-on-one mentorship from faculty who know what NEET asks.
              </p>
            </div>
            <div className="lg:col-span-4 lg:justify-self-end">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-gold-400 px-7 py-4 text-base font-medium text-navy-950 transition hover:bg-gold-300"
              >
                Reserve a seat
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function UltimateGoal() {
  const steps = [
    { n: "01", label: "Analysis", colour: "bg-orange-500" },
    { n: "02", label: "Training", colour: "bg-sky-500" },
    { n: "03", label: "Care", colour: "bg-teal-500" },
  ];
  return (
    <section className="relative isolate overflow-hidden border-y border-parchment/5 bg-[#0c0816]">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-dots-gold opacity-30 mask-fade-radial" />
      <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
        <Reveal className="text-center">
          <p className="font-display text-xs uppercase tracking-[0.32em] text-gold-300">
            Our Ultimate Goal
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-parchment sm:text-4xl">
            The formula for inevitable success.
          </h2>
        </Reveal>

        <div className="relative mt-20">
          <div className="grid gap-10 sm:grid-cols-3">
            {steps.map((s, i) => (
              <Reveal key={s.label} delay={i * 140}>
                <div className="flex flex-col items-center text-center">
                  <span className="font-display text-3xl font-semibold text-parchment/70">
                    {s.n}
                  </span>
                  <div
                    className={`mt-4 grid h-24 w-24 place-items-center rounded-2xl ${s.colour} shadow-2xl shadow-black/40`}
                  >
                    <GoalIcon name={s.label} />
                  </div>
                  <p className="mt-5 font-display text-lg font-semibold uppercase tracking-wider text-parchment">
                    {s.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <div aria-hidden className="my-12 hidden sm:flex justify-center">
            <svg width="220" height="40" viewBox="0 0 220 40" className="text-parchment/30">
              <path
                d="M20 0 V 20 H 200 V 40"
                stroke="currentColor"
                strokeWidth="1.2"
                fill="none"
                strokeDasharray="4 4"
              />
              <path
                d="M110 0 V 40"
                stroke="currentColor"
                strokeWidth="1.2"
                fill="none"
                strokeDasharray="4 4"
              />
            </svg>
          </div>

          <Reveal delay={500} className="mt-8 flex justify-center sm:mt-0">
            <div className="rounded-full bg-linear-to-r from-indigo-700 via-violet-700 to-purple-700 px-10 py-4 shadow-2xl shadow-violet-900/50 ring-1 ring-violet-400/40">
              <p className="font-display text-lg font-semibold uppercase tracking-[0.18em] text-white sm:text-xl">
                Inevitable Success
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function FeatureIcon({ name }: { name: "list" | "id" | "chart" | "bulb" | "building" }) {
  const common = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor" as const,
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (name) {
    case "list":
      return (
        <svg {...common}>
          <line x1="4" y1="6" x2="20" y2="6" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="18" x2="20" y2="18" />
        </svg>
      );
    case "id":
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <circle cx="9" cy="11" r="2" />
          <line x1="14" y1="10" x2="18" y2="10" />
          <line x1="14" y1="14" x2="18" y2="14" />
        </svg>
      );
    case "chart":
      return (
        <svg {...common}>
          <line x1="6" y1="20" x2="6" y2="12" />
          <line x1="12" y1="20" x2="12" y2="6" />
          <line x1="18" y1="20" x2="18" y2="14" />
        </svg>
      );
    case "bulb":
      return (
        <svg {...common}>
          <path d="M9 18h6M10 22h4M12 2a7 7 0 0 1 4 12.7V17H8v-2.3A7 7 0 0 1 12 2z" />
        </svg>
      );
    case "building":
      return (
        <svg {...common}>
          <rect x="4" y="3" width="16" height="18" rx="1" />
          <line x1="9" y1="7" x2="9" y2="7.01" />
          <line x1="15" y1="7" x2="15" y2="7.01" />
          <line x1="9" y1="12" x2="9" y2="12.01" />
          <line x1="15" y1="12" x2="15" y2="12.01" />
          <line x1="9" y1="17" x2="9" y2="17.01" />
          <line x1="15" y1="17" x2="15" y2="17.01" />
        </svg>
      );
  }
}

function PillarIcon({ name }: { name: "analytics" | "target" | "heart" | "thumbsup" | "spark" }) {
  const common = {
    width: 26,
    height: 26,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor" as const,
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (name) {
    case "analytics":
      return (
        <svg {...common}>
          <line x1="6" y1="20" x2="6" y2="12" />
          <line x1="12" y1="20" x2="12" y2="6" />
          <line x1="18" y1="20" x2="18" y2="14" />
        </svg>
      );
    case "target":
      return (
        <svg {...common}>
          <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5 5l3 3M16 16l3 3M5 19l3-3M16 8l3-3" />
        </svg>
      );
    case "heart":
      return (
        <svg {...common} fill="currentColor" stroke="none">
          <path d="M12 21s-7-4.6-9.3-9A5.2 5.2 0 0 1 12 6.5 5.2 5.2 0 0 1 21.3 12C19 16.4 12 21 12 21z" />
        </svg>
      );
    case "thumbsup":
      return (
        <svg {...common}>
          <path d="M7 21V11l5-8 1.5 1.5A2 2 0 0 1 14 6v4h5a2 2 0 0 1 2 2.4l-1.4 7A2 2 0 0 1 17.6 21H7z" />
          <line x1="3" y1="11" x2="7" y2="11" />
        </svg>
      );
    case "spark":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" strokeDasharray="3 4" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      );
  }
}

function GoalIcon({ name }: { name: string }) {
  const common = {
    width: 36,
    height: 36,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor" as const,
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className: "text-white",
  };
  switch (name) {
    case "Analysis":
      return (
        <svg {...common}>
          <line x1="6" y1="20" x2="6" y2="12" />
          <line x1="12" y1="20" x2="12" y2="6" />
          <line x1="18" y1="20" x2="18" y2="14" />
          <path d="M3 4h6" />
        </svg>
      );
    case "Training":
      return (
        <svg {...common}>
          <path d="M9 11a3 3 0 1 1 6 0c0 1.7-3 3-3 3v2" />
          <line x1="12" y1="19" x2="12" y2="19.01" />
          <circle cx="12" cy="12" r="9" />
        </svg>
      );
    case "Care":
      return (
        <svg {...common}>
          <rect x="3" y="6" width="18" height="14" rx="2" />
          <path d="M3 8l9 7 9-7" />
        </svg>
      );
    default:
      return null;
  }
}

function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
      <Reveal>
        <p className="font-display text-xs uppercase tracking-[0.22em] text-gold-300">
          Student stories
        </p>
        <h2 className="mt-3 max-w-3xl font-display text-4xl font-semibold tracking-tight text-parchment sm:text-5xl">
          Words from the students who walked in nervous and walked out into medical school.
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <Reveal key={t.name} delay={i * 110}>
            <figure className="lift glow-border glow-border-gold relative flex h-full flex-col rounded-3xl border border-navy-900/10 bg-parchment-warm p-7 hover:shadow-xl hover:shadow-navy-900/5">
              <svg
                className="text-gold-500"
                width="28"
                height="22"
                viewBox="0 0 32 24"
                fill="currentColor"
                aria-hidden
              >
                <path d="M0 24V12C0 5.4 5.4 0 12 0v6c-3.3 0-6 2.7-6 6h6v12H0zm20 0V12c0-6.6 5.4-12 12-12v6c-3.3 0-6 2.7-6 6h6v12H20z" />
              </svg>
              <blockquote className="mt-5 font-display text-lg leading-snug text-navy-900">
                {t.quote}
              </blockquote>
              <figcaption className="mt-auto pt-6">
                <p className="font-display font-semibold text-navy-900">{t.name}</p>
                <p className="text-xs uppercase tracking-wider text-ink-soft">
                  {t.outcome}
                </p>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
     <Reveal>
      <div className="relative overflow-hidden rounded-3xl bg-navy-950 px-8 py-16 text-parchment sm:px-14 sm:py-20">
        <div className="absolute inset-0 -z-0 bg-grid-gold opacity-40 mask-fade-radial" />
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-gold-400/20 blur-3xl animate-glow-breathe" />
        <div className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-gold-200/10 blur-3xl" />

        <div className="relative grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <p className="font-display text-xs uppercase tracking-[0.22em] text-gold-300">
              Ready to begin?
            </p>
            <h2 className="mt-3 font-display text-4xl font-semibold leading-tight sm:text-5xl">
              Talk to a senior mentor before you commit a single rupee.
            </h2>
            <p className="mt-5 max-w-2xl text-base text-parchment/75">
              Book a free 30-minute consultation. We'll walk you through your
              child's current standing, what's realistic, and the plan we'd
              build for them — no pressure, no scripts.
            </p>
          </div>
          <div className="lg:col-span-4 lg:justify-self-end">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gold-400 px-7 py-4 text-base font-medium text-navy-900 transition hover:bg-gold-300"
            >
              Book a free demo
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </div>
     </Reveal>
    </section>
  );
}
