"use client";
import { useEffect, useState } from "react";

const pillars = [
  {
    title: "Executive Search",
    subtitle: "Right leaders in the right roles",
    questions: [
      "We have the right leaders in critical roles to execute our business strategy.",
      "Leadership vacancies or mis-hires rarely slow down performance.",
      "Our senior leaders consistently model the behaviors we expect from the team.",
      "When we hire executives, success is clearly defined before the hire is made.",
      "Poor leadership performance is addressed decisively and fairly.",
    ],
  },
  {
    title: "Corporate Training & Leadership Capability",
    subtitle: "Skills, consistency, leadership depth",
    questions: [
      "Our leaders have the skills required for today's business, not just past experience.",
      "Training programs lead to visible behavior change on the job.",
      "New leaders are supported with structured onboarding and coaching.",
      "We have a clear pipeline for developing future leaders.",
      "Training investments are linked to business results, not attendance.",
    ],
  },
  {
    title: "People & Culture",
    subtitle: "Structure, clarity, engagement, retention",
    questions: [
      "Roles, responsibilities, and decision rights are clearly defined.",
      "Our people systems support performance rather than slow it down.",
      "Employee turnover is understood, tracked, and actively managed.",
      "Our service culture is consistent across departments and leaders.",
      "People and culture decisions are aligned with financial and operational goals.",
    ],
  },
];

const scaleLabels = ["Strongly\nDisagree", "Disagree", "Neutral", "Agree", "Strongly\nAgree"];

const routingOptions = [
  { value: "executive",  label: "Appointing the Right Leaders" },
  { value: "training",   label: "Corporate Training & Leadership Capability" },
  { value: "consulting", label: "People & Culture Solutions" },
  { value: "unsure",     label: "Not sure yet" },
];

interface Props { open: boolean; onClose: () => void; }

export default function AssessmentModal({ open, onClose }: Props) {
  const [step, setStep]       = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [routing, setRouting] = useState("");

  const reset = () => { setStep(0); setAnswers({}); setRouting(""); };
  const handleClose = () => { reset(); onClose(); };

  const total         = Object.values(answers).reduce((a, b) => a + b, 0);
  const progress      = step === 0 ? 0 : step === 5 ? 100 : Math.round((step / 5) * 100);

  useEffect(() => {
    if (step !== 5) return;
    fetch("/api/assessment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        totalScore: total,
        scoreBand: getResult().band,
        priority: routing || undefined,
        answers,
      }),
    }).catch(console.error);
  }, [step]);
  

  const currentPillar = step >= 1 && step <= 3 ? pillars[step - 1] : null;
  const pillarDone    = currentPillar
    ? currentPillar.questions.every((_, i) => answers[`p${step}q${i}`] !== undefined)
    : true;

  const getResult = () => {
    if (total >= 60) return {
      band: "Strong Foundation", sub: "Optimization Opportunity",
      body: "Your organization shows a strong people and culture foundation. The next step is fine-tuning systems to unlock additional performance and protect what you've built.",
    };
    if (total >= 45) return {
      band: "Growth Constrained", sub: "By People & Structure",
      body: "Your organization has meaningful capability, but structural and leadership gaps are limiting growth. Targeted intervention can release significant performance upside.",
    };
    return {
      band: "High Risk", sub: "To Performance & Culture",
      body: "Your assessment indicates structural exposure across multiple dimensions. Without intervention, costs will continue to compound. We recommend a diagnostic engagement.",
    };
  };

  if (!open) return null;
  const r           = getResult();
  const recommended = routingOptions.find(o => o.value === routing);

  return (
    <div
      className="fixed inset-0 bg-navy/90 backdrop-blur-md z-[200] flex items-center justify-center p-4"
      onClick={(e) => e.target === e.currentTarget && handleClose()}
    >
      <div className="bg-cream w-full max-w-2xl max-h-[90vh] overflow-y-auto relative">

        {/* Header */}
        <div className="bg-navy px-10 pt-10 pb-8 relative">
          <button
            onClick={handleClose}
            className="absolute top-5 right-6 text-white/50 hover:text-gold text-xl leading-none bg-transparent border-none cursor-pointer"
          >
            ✕
          </button>
          <div className="flex justify-between font-body text-[9px] tracking-[0.25em] uppercase text-white/45 mb-3">
            <span>People & Culture Assessment</span>
            <span className="text-gold">{progress}%</span>
          </div>
          <div className="w-full h-px bg-white/15">
            <div className="h-px bg-gold transition-all duration-500" style={{ width: `${progress}%` }} />
          </div>

          {step > 0 && step < 5 && (
            <div className="mt-8">
              <p className="font-body text-[9px] tracking-[0.3em] uppercase text-gold mb-3">
                {step <= 3 ? `Section ${step} of 3` : "Final Question"}
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-light text-white leading-[1.15]">
                {step <= 3 ? currentPillar?.title : "Which area is your top priority right now?"}
              </h2>
              {step <= 3 && (
                <p className="font-display italic text-base text-white/55 mt-2">{currentPillar?.subtitle}</p>
              )}
            </div>
          )}
          {step === 5 && (
            <div className="mt-8">
              <p className="font-body text-[9px] tracking-[0.3em] uppercase text-gold mb-3">Your Snapshot Is Ready</p>
              <h2 className="font-display text-3xl font-light text-white">{r.band}</h2>
              <p className="font-display italic text-lg text-gold mt-1">{r.sub}</p>
            </div>
          )}
        </div>

        {/* Body */}
        <div className="px-10 py-10">

          {/* Intro */}
          {step === 0 && (
            <div className="text-center py-6">
              <p className="font-body text-[9px] tracking-[0.3em] uppercase text-gold mb-5">
                Sophian International · Diagnostic
              </p>
              <p className="font-body text-sm leading-relaxed text-muted max-w-md mx-auto mb-10">
                Your people and culture don't fail all at once — they weaken in stages.
                This assessment helps you understand where you're strong, where you're
                exposed, and which lever will most improve business performance.
              </p>
              <button
                onClick={() => setStep(1)}
                className="font-body text-[9px] tracking-[0.28em] uppercase bg-navy text-white px-10 py-4 hover:bg-navy2 transition-colors duration-300 inline-flex items-center gap-3 border-none cursor-pointer"
              >
                Begin Assessment →
              </button>
            </div>
          )}

          {/* Questions */}
          {currentPillar && (
            <div>
              <div className="w-8 h-px bg-gold mb-8" />
              {currentPillar.questions.map((q, i) => {
                const key = `p${step}q${i}`;
                return (
                  <div key={key} className="border-b border-gold/20 pb-7 mb-7 last:border-0 last:pb-0 last:mb-0">
                    <p className="font-body text-sm text-[#1a1a1a] mb-5 leading-relaxed">
                      <span className="text-gold mr-2 font-medium">{i + 1}.</span>{q}
                    </p>
                    <div className="flex gap-2">
                      {scaleLabels.map((label, idx) => {
                        const val = idx + 1;
                        const sel = answers[key] === val;
                        return (
                          <button
                            key={val}
                            onClick={() => setAnswers({ ...answers, [key]: val })}
                            className={[
                              "flex-1 text-center py-3 border transition-all duration-200 cursor-pointer",
                              sel
                                ? "bg-navy border-navy"
                                : "bg-white border-gold/25 hover:border-navy/50",
                            ].join(" ")}
                          >
                            <span className={`block font-display text-xl font-light ${sel ? "text-gold" : "text-navy"}`}>
                              {val}
                            </span>
                            <span className={`block font-body text-[8px] leading-tight mt-0.5 ${sel ? "text-white/60" : "text-muted"}`}>
                              {label.replace("\n", " ")}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
              <div className="flex justify-between items-center mt-10">
                <button
                  onClick={() => setStep(step - 1)}
                  className="font-body text-[9px] tracking-[0.25em] uppercase text-muted hover:text-navy transition-colors bg-transparent border-none cursor-pointer"
                >
                  ← Back
                </button>
                <button
                  disabled={!pillarDone}
                  onClick={() => setStep(step + 1)}
                  className="font-body text-[9px] tracking-[0.28em] uppercase bg-navy text-white px-8 py-3.5 hover:bg-navy2 transition-colors disabled:opacity-30 disabled:cursor-not-allowed border-none cursor-pointer inline-flex items-center gap-2.5"
                >
                  Continue →
                </button>
              </div>
            </div>
          )}

          {/* Routing */}
          {step === 4 && (
            <div>
              <div className="w-8 h-px bg-gold mb-8" />
              <div className="flex flex-col gap-3 mb-10">
                {routingOptions.map((opt) => (
                  <div
                    key={opt.value}
                    onClick={() => setRouting(opt.value)}
                    className={[
                      "flex items-center gap-4 border p-5 cursor-pointer transition-all duration-200",
                      routing === opt.value
                        ? "border-navy bg-navy/5"
                        : "border-gold/25 bg-white hover:border-navy/40",
                    ].join(" ")}
                  >
                    <div className={`w-[18px] h-[18px] rounded-full border flex items-center justify-center flex-shrink-0 transition-colors ${routing === opt.value ? "border-navy" : "border-gold/40"}`}>
                      {routing === opt.value && <div className="w-2 h-2 rounded-full bg-navy" />}
                    </div>
                    <span className="font-body text-sm text-[#1a1a1a]">{opt.label}</span>
                  </div>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <button onClick={() => setStep(3)} className="font-body text-[9px] tracking-[0.25em] uppercase text-muted hover:text-navy transition-colors bg-transparent border-none cursor-pointer">
                  ← Back
                </button>
                <button
                  disabled={!routing}
                  onClick={() => setStep(5)}
                  className="font-body text-[9px] tracking-[0.28em] uppercase bg-navy text-white px-8 py-3.5 hover:bg-navy2 transition-colors disabled:opacity-30 disabled:cursor-not-allowed border-none cursor-pointer inline-flex items-center gap-2.5"
                >
                  See My Results →
                </button>
              </div>
            </div>
          )}

          {/* Results */}
          {step === 5 && (
            <div className="text-center">
              <div className="border border-gold/25 bg-white p-8 max-w-[180px] mx-auto mb-8">
                <span className="font-display text-[64px] font-light text-navy leading-none">{total}</span>
                <span className="font-display text-2xl text-muted">/75</span>
                <p className="font-body text-[9px] tracking-[0.25em] uppercase text-muted mt-2">Total Score</p>
              </div>
              <div className="w-12 h-px bg-gold mx-auto mb-7" />
              <p className="font-body text-sm leading-relaxed text-muted max-w-sm mx-auto mb-6">{r.body}</p>
              {recommended && (
                <p className="font-body text-xs text-muted italic mb-8">
                  Based on your priority, we recommend our{" "}
                  <strong className="text-navy not-italic">{recommended.label}</strong> offering.
                </p>
              )}
              <div className="flex flex-wrap gap-3 justify-center">
                <a href="#contact" onClick={handleClose}
                  className="font-body text-[9px] tracking-[0.28em] uppercase bg-navy text-white px-8 py-4 hover:bg-navy2 transition-colors no-underline inline-flex items-center gap-2.5"
                >
                  Request Custom Audit →
                </a>
                <button onClick={handleClose}
                  className="font-body text-[9px] tracking-[0.28em] uppercase border border-navy text-navy px-8 py-4 hover:bg-navy hover:text-white transition-all cursor-pointer bg-transparent"
                >
                  Schedule Discovery Call
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
