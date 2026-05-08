import type { ReactNode } from "react";

type Accent =
  | "cyan"
  | "violet"
  | "sky"
  | "gold"
  | "emerald"
  | "rose";

type Size = "sm" | "md" | "lg";

const accentRing: Record<Accent, string> = {
  cyan: "from-cyan-400 via-sky-400 to-violet-500",
  violet: "from-violet-400 via-fuchsia-500 to-cyan-400",
  sky: "from-sky-400 via-cyan-300 to-violet-400",
  gold: "from-gold-300 via-gold-400 to-gold-500",
  emerald: "from-emerald-400 via-cyan-400 to-sky-400",
  rose: "from-rose-400 via-fuchsia-400 to-violet-400",
};

const accentText: Record<Accent, string> = {
  cyan: "text-cyan-200",
  violet: "text-violet-200",
  sky: "text-sky-200",
  gold: "text-gold-200",
  emerald: "text-emerald-200",
  rose: "text-rose-200",
};

const accentGlow: Record<Accent, string> = {
  cyan: "shadow-[0_8px_24px_-8px_rgba(34,211,238,0.45)]",
  violet: "shadow-[0_8px_24px_-8px_rgba(167,139,250,0.45)]",
  sky: "shadow-[0_8px_24px_-8px_rgba(56,189,248,0.45)]",
  gold: "shadow-[0_8px_24px_-8px_rgba(212,169,59,0.45)]",
  emerald: "shadow-[0_8px_24px_-8px_rgba(52,211,153,0.45)]",
  rose: "shadow-[0_8px_24px_-8px_rgba(251,113,133,0.45)]",
};

const sizeOuter: Record<Size, string> = {
  sm: "h-10 w-10",
  md: "h-12 w-12",
  lg: "h-16 w-16",
};

export function PremiumIcon({
  children,
  accent = "cyan",
  size = "md",
  variant = "ringed",
  className = "",
}: {
  children: ReactNode;
  accent?: Accent;
  size?: Size;
  variant?: "ringed" | "filled";
  className?: string;
}) {
  if (variant === "filled") {
    return (
      <span
        className={`relative grid ${sizeOuter[size]} place-items-center rounded-2xl bg-linear-to-br ${accentRing[accent]} text-navy-950 ${accentGlow[accent]} ${className}`}
      >
        {children}
      </span>
    );
  }

  return (
    <span
      className={`relative grid ${sizeOuter[size]} place-items-center rounded-2xl ${accentGlow[accent]} ${className}`}
    >
      <span
        className={`absolute inset-0 rounded-2xl bg-linear-to-br ${accentRing[accent]} opacity-90`}
      />
      <span className="absolute inset-[1.5px] rounded-[14px] bg-[#07050f]" />
      <span
        className={`absolute inset-0 rounded-2xl bg-linear-to-br ${accentRing[accent]} opacity-30 blur-md`}
      />
      <span className={`relative z-10 ${accentText[accent]}`}>{children}</span>
    </span>
  );
}
