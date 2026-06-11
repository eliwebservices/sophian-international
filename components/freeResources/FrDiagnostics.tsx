"use client";
import { useState } from "react";

const questions = [
  {
    q: "What is your biggest challenge right now?",
    options: [
      { label: "Finding and hiring the right senior leaders",        score: { search: 2, training: 0, consulting: 0 } },
      { label: "Training teams to deliver consistent service",       score: { search: 0, training: 2, consulting: 0 } },
      { label: "High turnover and unclear people strategy",          score: { search: 0, training: 0, consulting: 2 } },
      { label: "Not sure — everything feels broken",                 score: { search: 1, training: 1, consulting: 1 } },
    ],
  },
  {
    q: "How would you describe your current HR function?",
    options: [
      { label: "We struggle to attract quality executive candidates", score: { search: 2, training: 0, consulting: 0 } },
      { label: "We have no structured training or onboarding system", score: { search: 0, training: 2, consulting: 0 } },
      { label: "HR is reactive — no clear strategy or framework",     score: { search: 0, training: 0, consulting: 2 } },
      { label: "Our HR team is small and handles everything at once", score: { search: 1, training: 1, consulting: 1 } },
    ],
  },
  {
    q: "What outcome matters most to you in the next 6 months?",
    options: [
      { label: "Fill a critical leadership vacancy with the right person", score: { search: 2, training: 0, consulting: 0 } },
      { label: "Reduce guest complaints and improve service quality",      score: { search: 0, training: 2, consulting: 0 } },
      { label: "Reduce turnover and build a stronger culture",             score: { search: 0, training: 0, consulting: 2 } },
      { label: "Get a clear picture of where we stand as an organization", score: { search: 1, training: 1, consulting: 1 } },
    ],
  },
  {
    q: "What type of property do you work with?",
    options: [
      { label: "Luxury or ultra-luxury hotel / resort",  score: { search: 1, training: 1, consulting: 1 } },
      { label: "Mid-scale or upscale hotel",             score: { search: 0, training: 2, consulting: 1 } },
      { label: "Restaurant group or F&B operation",      score: { search: 1, training: 1, consulting: 0 } },
      { label: "Hotel management company or group",      score: { search: 1, training: 0, consulting: 2 } },
    ],
  },
];

const results: Record<string, { title: string; sub: string; desc: string }> = {
  search: {
    title: "Fast Hire Pack",
    sub: "Executive Search",
    desc: "Based on your answers, your biggest opportunity is in executive hiring. The Fast Hire Pack gives you the tools to brief, evaluate, and select the right senior leaders with confidence.",
  },
  training: {
    title: "Learning & Culture Gap Pack",
    sub: "Corporate Training",
    desc: "Your responses point to a training and service culture gap. This pack will help you diagnose what's missing, build a structured plan, and prove ROI on every training investment.",
  },
  consulting: {
    title: "HR Health Check Pack",
    sub: "HR Consulting",
    desc: "Your situation calls for a strategic people reset. This pack helps you assess where your HR systems stand and create a roadmap for building a stronger, more commercially aligned people function.",
  },
};

export default function ResourcesDiagnostic() {
  const [started, setStarted]     = useState(false);
  const [step, setStep]           = useState(0);
  const [scores, setScores]       = useState({ search: 0, training: 0, consulting: 0 });
  const [result, setResult]       = useState<string | null>(null);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const handleAnswer = (score: { search: number; training: number; consulting: number }) => {
    const updated = {
      search:    scores.search    + score.search,
      training:  scores.training  + score.training,
      consulting: scores.consulting + score.consulting,
    };
    setScores(updated);

    if (step + 1 < questions.length) {
      setStep(step + 1);
    } else {
      // Determine winner
      const winner = Object.entries(updated).reduce((a, b) => a[1] > b[1] ? a : b)[0];
      setResult(winner);
    }
  };

  const reset = () => {
    setStarted(false);
    setStep(0);
    setScores({ search: 0, training: 0, consulting: 0 });
    setResult(null);
  };

  return (
    <section id="diagnostic" className="bg-white py-28 px-6">
      <div className="max-w-4xl mx-auto">

        <div className="text-center mb-16">
          <p className="font-display md:text-[14px] text-[9px] font-semibold tracking-[0.35em] uppercase text-gold mb-5">
            Not Sure Where to Start?
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-navy leading-[1.12] mb-6">
            Take the 3-Minute Diagnostic
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mb-6" />
          <p className="font-display text-sm text-muted leading-relaxed max-w-xl mx-auto">
            Answer 4 questions and we'll recommend the right resource pack for your
            situation. Takes under 3 minutes.
          </p>
        </div>

        {!started && !result && (
          <div className="relative overflow-hidden border border-gold/25">
            <img
              src="https://www.aman.com/sites/default/files/styles/carousel_cards_extra_large_2x/public/2026-06/Campaign_-Summer-2026--Portals-1--Indonesia.webp?itok=eWfEa9O2"
              alt="Luxury hotel"
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-navy/60" />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 px-8 text-center">
              <p className="font-body text-lg italic text-white/80">
                "Answer 4 questions · Get your recommended pack · Book a call if needed"
              </p>
              <button
                onClick={() => setStarted(true)}
                className="font-display text-[9px] font-semibold tracking-[0.28em] uppercase bg-gold text-navy px-10 py-4 hover:bg-gold2 transition-colors duration-300 cursor-pointer border-none"
              >
                Start Diagnostic →
              </button>
            </div>
          </div>
        )}

        {started && !result && (
          <div className="border border-gold/25 bg-cream p-10 md:p-14">
            {/* Progress */}
            <div className="flex gap-2 mb-10">
              {questions.map((_, i) => (
                <div
                  key={i}
                  className={[
                    "h-[3px] flex-1 transition-all duration-300",
                    i <= step ? "bg-gold" : "bg-gold/20",
                  ].join(" ")}
                />
              ))}
            </div>

            <p className="font-display text-[9px] font-semibold tracking-[0.25em] uppercase text-gold mb-4">
              Question {step + 1} of {questions.length}
            </p>
            <h3 className="font-display text-2xl font-light text-navy mb-8 leading-snug">
              {questions[step].q}
            </h3>

            <div className="flex flex-col gap-3">
              {questions[step].options.map((opt) => (
                <button
                  key={opt.label}
                  onClick={() => handleAnswer(opt.score)}
                  className="text-left font-display text-sm text-navy border border-gold/25 px-6 py-4 hover:bg-navy hover:text-white hover:border-navy transition-all duration-300 cursor-pointer bg-white"
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {result && results[result] && (
          <div className="border border-gold/25 overflow-hidden">
            <div className="bg-navy px-10 py-8 text-center">
              <p className="font-display text-[9px] font-semibold tracking-[0.35em] uppercase text-gold mb-3">
                Your Recommended Pack
              </p>
              <h3 className="font-display text-3xl font-light text-white mb-1">
                {results[result].title}
              </h3>
              <p className="font-display text-[9px] font-semibold tracking-[0.2em] uppercase text-gold/70">
                {results[result].sub}
              </p>
            </div>
            <div className="bg-cream px-10 py-10 text-center">
              <div className="w-12 h-px bg-gold mx-auto mb-6" />
              <p className="font-display text-sm text-muted leading-relaxed max-w-xl mx-auto mb-8">
                {results[result].desc}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button
                  onClick={() => scrollTo("request")}
                  className="font-display text-[9px] font-semibold tracking-[0.28em] uppercase bg-navy text-white px-8 py-4 hover:bg-gold hover:text-navy transition-all duration-300 cursor-pointer border-none"
                >
                  Unlock This Pack →
                </button>
                <button
                  onClick={reset}
                  className="font-display text-[9px] font-semibold tracking-[0.28em] uppercase border border-gold/30 text-muted px-8 py-4 hover:border-navy hover:text-navy transition-all duration-300 cursor-pointer bg-transparent"
                >
                  Retake Diagnostic
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}