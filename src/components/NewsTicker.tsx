import { Marquee } from "./Marquee";

export function NewsTicker() {
  const news = [
    "NEET 2026 Batch Admissions Open! Book a Free Demo Today.",
    "Congratulation to our 2025 toppers for incredible medical college placements!",
    "New AI-powered analytics dashboard now live for all enrolled students.",
    "Free Counseling Sessions available every Saturday. Call us to book.",
  ];

  return (
    <div className="relative z-60 border-b border-white/5 bg-[#0a1230]/90 py-2 backdrop-blur-md">
      <Marquee
        speed={50}
        items={news.map((item, i) => (
          <span
            key={i}
            className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-300/90"
          >
            {item}
          </span>
        ))}
        className="max-w-7xl mx-auto"
      />
    </div>
  );
}
