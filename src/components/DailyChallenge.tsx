import { useState, useEffect } from "react";
import { dailyChallenges, type Challenge } from "../data/challenges";
import { Reveal } from "./Reveal";
import { PremiumIcon } from "./PremiumIcon";

export function DailyChallenge() {
  const [challengeIndex, setChallengeIndex] = useState(0);
  const [currentChallenge, setCurrentChallenge] = useState<Challenge | null>(null);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [timeLeft, setTimeLeft] = useState("");

  const loadChallenge = (index: number) => {
    setCurrentChallenge(dailyChallenges[index % dailyChallenges.length]);
    setSelectedOption(null);
    setIsRevealed(false);
  };

  useEffect(() => {
    // Initial load
    const initialIndex = Math.floor(Date.now() / 30000) % dailyChallenges.length;
    setChallengeIndex(initialIndex);
    loadChallenge(initialIndex);

    const timer = setInterval(() => {
      const nowInSeconds = Math.floor(Date.now() / 1000);
      const secondsLeft = 30 - (nowInSeconds % 30);
      setTimeLeft(`${secondsLeft}s`);
      
      if (secondsLeft === 30) {
        setChallengeIndex(prev => {
          const next = prev + 1;
          loadChallenge(next);
          return next;
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleOptionSelect = (index: number) => {
    if (isRevealed) return;
    setSelectedOption(index);
  };

  const handleReveal = () => {
    if (selectedOption === null) return;
    setIsRevealed(true);
  };

  const handleNextChallenge = () => {
    setChallengeIndex(prev => {
      const next = prev + 1;
      loadChallenge(next);
      return next;
    });
  };

  if (!currentChallenge) return null;

  return (
    <div className="relative mx-auto max-w-4xl px-6 py-20 lg:px-10 z-10">
      <Reveal className="text-center mb-12">
        <p className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
          Daily Micro-Challenge
        </p>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Test your <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-300 to-violet-400">Intelligence.</span>
        </h2>
      </Reveal>

      <Reveal delay={100}>
        <div className="glow-border relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#0c1226]/80 p-8 sm:p-12 backdrop-blur-xl">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-500/10 blur-[80px]" />
          
          <div className="relative flex flex-col md:flex-row gap-10 items-start">
            <div className="flex-1 w-full">
              <div className="flex flex-wrap items-center gap-5 mb-8">
                <PremiumIcon 
                  accent={
                    currentChallenge.subject === "Biology" ? "emerald" : 
                    currentChallenge.subject === "Physics" ? "violet" : 
                    "sky"
                  } 
                  size="sm"
                >
                  <SubjectIcon subject={currentChallenge.subject} />
                </PremiumIcon>
                <div>
                  <p className="text-parchment/40 text-[10px] uppercase tracking-[0.2em] mb-0.5">Subject Focus</p>
                  <p className={`text-sm font-bold tracking-wide ${
                    currentChallenge.subject === "Biology" ? "text-emerald-400" :
                    currentChallenge.subject === "Physics" ? "text-violet-400" :
                    "text-sky-400"
                  }`}>
                    {currentChallenge.subject}
                  </p>
                </div>
                <div className="ml-auto flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/10">
                  <span className="text-[10px] font-bold text-cyan-400">CHALLENGE #{challengeIndex + 1}</span>
                  <div className="w-px h-3 bg-white/10" />
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400/80">Active Now</span>
                  </div>
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-medium text-white leading-relaxed mb-8">
                {currentChallenge.question}
              </h3>

              <div className="space-y-3">
                {currentChallenge.options.map((option, index) => {
                  const isCorrect = index === currentChallenge.correctIndex;
                  const isSelected = index === selectedOption;
                  
                  let stateClasses = "border-white/10 bg-white/5 hover:border-cyan-500/40 hover:bg-white/10";
                  
                  if (isRevealed) {
                    if (isCorrect) {
                      stateClasses = "border-emerald-500/50 bg-emerald-500/10 text-emerald-200 ring-1 ring-emerald-500/20";
                    } else if (isSelected) {
                      stateClasses = "border-red-500/50 bg-red-500/10 text-red-200";
                    } else {
                      stateClasses = "border-white/5 bg-white/[0.02] opacity-50";
                    }
                  } else if (isSelected) {
                    stateClasses = "border-cyan-500/60 bg-cyan-500/10 text-cyan-100 ring-1 ring-cyan-500/30";
                  }

                  return (
                    <button
                      key={index}
                      onClick={() => handleOptionSelect(index)}
                      disabled={isRevealed}
                      className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 flex items-center justify-between group ${stateClasses}`}
                    >
                      <span className="flex items-center gap-4">
                        <span className={`w-8 h-8 rounded-full border flex items-center justify-center text-xs font-bold transition-colors ${
                          isSelected ? "border-cyan-400 bg-cyan-400 text-black" : "border-white/20 text-white/40"
                        }`}>
                          {String.fromCharCode(65 + index)}
                        </span>
                        {option}
                      </span>
                      {isRevealed && isCorrect && (
                        <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </button>
                  );
                })}
              </div>

              <div className="mt-10 flex flex-wrap items-center justify-between gap-6">
                <div className="flex flex-wrap items-center gap-4">
                  {!isRevealed ? (
                    <button
                      onClick={handleReveal}
                      disabled={selectedOption === null}
                      className="group relative inline-flex items-center gap-2 rounded-full bg-linear-to-r from-cyan-400 via-sky-400 to-violet-500 px-8 py-3.5 text-sm font-semibold text-white shadow-[0_10px_40px_-10px_rgba(56,189,248,0.4)] transition hover:scale-105 disabled:opacity-50 disabled:hover:scale-100 disabled:cursor-not-allowed"
                    >
                      Check Answer
                      <span className="transition-transform group-hover:translate-x-1">→</span>
                    </button>
                  ) : (
                    <button
                      onClick={handleNextChallenge}
                      className="group relative inline-flex items-center gap-2 rounded-full border border-cyan-400/50 bg-cyan-500/10 px-8 py-3.5 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-500/20 hover:text-white"
                    >
                      Next Challenge
                      <span className="transition-transform group-hover:translate-x-1">→</span>
                    </button>
                  )}
                </div>

                <div className="flex items-center gap-4 text-parchment/40">
                   <div className="text-right">
                     <p className="text-[10px] uppercase tracking-[0.2em] mb-0.5">Auto-rotate In</p>
                     <p className="text-sm font-mono font-medium text-cyan-200/60 tabular-nums">{timeLeft}</p>
                   </div>
                   <div className="h-8 w-px bg-white/10" />
                   <div className="flex -space-x-2">
                     {[1, 2, 3].map(i => (
                       <div key={i} className="w-7 h-7 rounded-full border border-white/20 bg-[#07050f] grid place-items-center">
                         <div className="w-1 h-1 rounded-full bg-cyan-400 animate-pulse" />
                       </div>
                     ))}
                     <div className="pl-4 text-[10px] font-medium uppercase tracking-wider text-parchment/30">
                       4.2k Active
                     </div>
                   </div>
                </div>

                {isRevealed && (
                  <div className="animate-rise bg-white/5 border border-white/10 rounded-2xl p-5 w-full mt-2">
                    <p className="text-xs font-bold uppercase tracking-widest text-cyan-300 mb-2">Explanation</p>
                    <p className="text-parchment/80 leading-relaxed italic">
                      {currentChallenge.explanation}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}

function SubjectIcon({ subject }: { subject: string }) {
  if (subject === "Biology") {
    return (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4c4 4 12 12 16 16M20 4C16 8 8 16 4 20" />
      </svg>
    );
  }
  if (subject === "Physics") {
    return (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="12" rx="10" ry="4" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
      </svg>
    );
  }
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 3h6M10 3v6L4 19a2 2 0 0 0 1.7 3h12.6A2 2 0 0 0 20 19l-6-10V3" />
    </svg>
  );
}
