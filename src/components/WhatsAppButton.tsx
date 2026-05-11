import { useState, useEffect } from "react";
import { site } from "../data/site";

export function WhatsAppButton() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  // Delay entrance so it doesn't compete with page load animations
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  // Build the WhatsApp URL from the first phone number
  const phone = site.contact.phones[0].replace(/[\s+]/g, "");
  const message = encodeURIComponent(
    "Hi SK Learnings! I'm interested in learning more about your coaching programs."
  );
  const href = `https://wa.me/${phone}?text=${message}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 transition-all duration-500 ease-out ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-12 opacity-0 pointer-events-none"
      }`}
    >
      {/* Tooltip */}
      <span
        className={`whitespace-nowrap rounded-xl bg-[#0c1226]/90 px-4 py-2.5 text-sm font-medium text-white shadow-lg backdrop-blur-xl border border-white/10 transition-all duration-300 ${
          hovered
            ? "translate-x-0 opacity-100 scale-100"
            : "translate-x-4 opacity-0 scale-95 pointer-events-none"
        }`}
      >
        Chat with us 💬
      </span>

      {/* Button */}
      <span className="relative group">
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />

        {/* Glow */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] blur-[12px] opacity-30 group-hover:opacity-50 transition-opacity" />

        {/* Icon circle */}
        <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-[0_4px_20px_rgba(37,211,102,0.5)] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_6px_30px_rgba(37,211,102,0.7)] active:scale-95">
          <svg
            viewBox="0 0 32 32"
            width="28"
            height="28"
            fill="white"
            aria-hidden
          >
            <path d="M16.004 2.667a13.26 13.26 0 0 0-11.35 20.12L2.667 29.333l6.758-1.934A13.264 13.264 0 1 0 16.004 2.667Zm0 24.279a11.009 11.009 0 0 1-5.614-1.535l-.403-.239-4.18 1.196 1.117-4.082-.263-.418a10.992 10.992 0 1 1 9.343 5.078Zm6.035-8.23c-.331-.166-1.96-.967-2.264-1.078-.304-.11-.526-.166-.747.166-.222.331-.86 1.078-1.054 1.3-.194.221-.388.249-.72.083-.331-.166-1.397-.515-2.662-1.641-.984-.876-1.648-1.958-1.842-2.289-.194-.331-.02-.51.146-.675.148-.148.331-.388.497-.582.166-.194.221-.331.331-.554.111-.221.056-.415-.028-.582-.083-.166-.747-1.8-1.023-2.464-.27-.647-.544-.56-.747-.57l-.637-.011c-.222 0-.582.083-.886.415-.304.331-1.162 1.134-1.162 2.767 0 1.632 1.19 3.21 1.356 3.431.166.222 2.342 3.573 5.676 5.012.793.342 1.412.547 1.894.7.796.253 1.52.218 2.093.132.638-.095 1.96-.801 2.237-1.575.276-.774.276-1.437.194-1.575-.083-.139-.304-.222-.636-.388Z" />
          </svg>
        </span>
      </span>
    </a>
  );
}
