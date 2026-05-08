export function AnimatedBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-50 overflow-hidden bg-[#07050f]"
    >
      <div className="absolute -left-[15%] top-[8%] h-[80%] w-[60%] rounded-full bg-[#7c3aed] opacity-30 blur-[140px] animate-drift-a will-change-transform" />

      <div className="absolute -right-[10%] bottom-[5%] h-[65%] w-[50%] rounded-full bg-[#a855f7] opacity-[0.18] blur-[140px] animate-drift-b will-change-transform" />

      <div className="absolute left-[40%] top-[30%] h-[40%] w-[30%] rounded-full bg-gold-400 opacity-[0.07] blur-[120px] animate-drift-c will-change-transform" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(124,58,237,0.2),transparent_60%)]" />
    </div>
  );
}
