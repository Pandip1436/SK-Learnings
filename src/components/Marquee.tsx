import type { ReactNode } from "react";

type Props = {
  items: ReactNode[];
  speed?: number;
  className?: string;
};

export function Marquee({ items, speed = 40, className = "" }: Props) {
  const loop = [...items, ...items];
  return (
    <div
      className={`group relative overflow-hidden ${className}`}
      role="presentation"
    >
      <div
        className="flex w-max items-center gap-12 whitespace-nowrap will-change-transform group-hover:[animation-play-state:paused]"
        style={{ animation: `marquee ${speed}s linear infinite` }}
      >
        {loop.map((item, i) => (
          <span key={i} className="flex items-center gap-12">
            {item}
            <Dot />
          </span>
        ))}
      </div>
    </div>
  );
}

function Dot() {
  return (
    <span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full bg-gold-400/60" />
  );
}
