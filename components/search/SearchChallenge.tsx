"use client";
import { useState } from "react";
import ScheduleCallButton from "../ScheduleCallButton";

const challenges = [
  { title: "Scarcity at the top.",                       desc: "The talent pool at genuine luxury calibre is small and rarely visible." },
  { title: "The global-local gap.",                      desc: "Candidates with international pedigree often lack China or APAC market fluency — or vice versa." },
  { title: "Culture fit is invisible until it fails.",   desc: "Cultural alignment cannot be assessed through a résumé. Service ethos, leadership philosophy, and brand sensitivity require nuanced evaluation." },
  { title: "Delayed decisions carry compounding costs.", desc: "Prolonged search cycles damage business continuity, erode team confidence, and cost the organisation far more than the search fee." },
  { title: "Process friction is avoidable.",             desc: "Legacy hiring structures — slow approvals, multiple stakeholders, unclear ownership — extend timelines unnecessarily." },
  { title: "The best talent will not wait.",             desc: "Top candidates are rarely unemployed. Impersonal outreach, poor communication, or extended timelines cause the best people to disengage before an offer is made." },
];

export default function SearchChallenge() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-cream py-28 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-display text-[9px] md:text-[14px] font-semibold tracking-[0.35em] uppercase text-gold mb-5">
            The Challenge
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-navy leading-[1.12] mb-6">
            Senior Hiring at This Level<br />Is Genuinely Difficult.
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mb-8" />
          <p className="font-body text-sm leading-relaxed text-muted max-w-3xl mx-auto">
            We understand why. We have spent two decades inside the industry. At the ultra-luxury
            level, the margin for error in a leadership appointment is zero. A poor fit at GM or
            Excom level does not just cost time and money — it affects brand reputation, owner
            confidence, and the careers of everyone beneath that leader.
          </p>
        </div>

        {/* Split — challenges left, image right */}
        <div className="grid md:grid-cols-2 gap-px bg-gold/15 mb-20">

          {/* Challenges — left */}
          <div className="bg-white px-10 py-12 flex flex-col justify-center">
            {challenges.map((c, i) => (
              <div key={c.title}>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-start gap-5 py-5 bg-transparent border-none cursor-pointer text-left"
                >
                  <span className="font-display text-sm text-gold/40 flex-shrink-0 mt-1 w-6">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-4">
                      <p className={[
                        "font-display text-sm font-light leading-snug transition-colors duration-200",
                        open === i ? "text-gold" : "text-navy",
                      ].join(" ")}>
                        {c.title}
                      </p>
                      <span className={[
                        "font-display text-gold text-lg flex-shrink-0 transition-transform duration-300",
                        open === i ? "rotate-45" : "",
                      ].join(" ")}>
                        +
                      </span>
                    </div>

                    {/* Revealed description */}
                    {open === i && (
                      <p className="font-body text-sm text-muted leading-relaxed mt-3 pr-4">
                        {c.desc}
                      </p>
                    )}
                  </div>
                </button>

                {i < challenges.length - 1 && (
                  <div className="h-px bg-gold/15 ml-11" />
                )}
              </div>
            ))}
          </div>

          {/* Image — right */}
          <div className="relative overflow-hidden min-h-[500px]">
            <img
              src="/images/home-strip-7.jpg"
              alt="Executive hospitality leadership"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-navy/35" />

            {/* Quote overlay */}
            {/* <div className="absolute bottom-10 left-8 right-8">
              <div className="border-l-2 border-gold pl-5">
                <p className="font-body text-base italic text-white/85 leading-relaxed">
                  "In a market of genuine scarcity, precision is not a
                  differentiator — it is the only approach that works."
                </p>
                <p className="font-display text-[9px] font-semibold tracking-[0.25em] uppercase text-gold mt-3">
                  — Sophian International
                </p>
              </div>
            </div> */}
          </div>
        </div>

        {/* <div className="text-center"> */}
          {/* <a
            href="#contact"
            className="font-display text-[9px] md:text-[10px] font-semibold tracking-[0.28em] uppercase bg-navy text-white px-10 py-4 hover:bg-gold2 transition-colors duration-300 no-underline inline-flex items-center gap-3"
          >
            Request a Confidential Consultation
          </a> */}
          {/* <ScheduleCallButton variant="navy" className="hover:bg-navy/90!" label="Request a Confidential Consultation"/>
        </div> */}
      </div>
    </section>
  );
}
