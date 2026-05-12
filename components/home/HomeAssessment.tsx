"use client";
import { useState } from "react";
import AssessmentModal from "@/components/home/AssessmentModal";

export default function HomeAssessment() {
  const [open, setOpen] = useState(false);

  return (
    <section id="assessment" className="bg-cream py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">

          <div className="relative overflow-hidden aspect-[4/5] w-full">
            <img
              src="/images/assessment-side-image.jpg"
              alt="Professional hospitality consultation"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-navy/10 to-transparent pointer-events-none" />
            <div className="absolute -top-4 -left-4 right-4 bottom-4 border border-gold/30 pointer-events-none" />
          </div>

          <div>
            <p className="font-display text-[14px] font-semibold tracking-[0.35em] uppercase text-gold mb-5">
              Free Assessment
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-navy leading-[1.12] mb-5">
              Take the<br />3-Minute Assessment
            </h2>
            <div className="w-12 h-px bg-gold mb-6" />
            <p className="font-body text-xl text-navy mb-5">
              Get a Custom Audit to Grow Your People and Culture
            </p>
            <p className="font-display text-sm leading-relaxed text-muted mb-8">
              Did you know your people and culture has three pillars — and each must be
              strong for your business to grow? Discover where you're strong, where you're
              exposed, and which lever will most improve performance.
            </p>

            <div className="flex border border-gold/25 mb-10">
              {[
                { num: "3",  sub: "Minutes"   },
                { num: "15", sub: "Questions"  },
                { num: "∞",  sub: "Insight"   },
              ].map((p, i) => (
                <div
                  key={i}
                  className={`flex-1 bg-white text-center py-5 ${i < 2 ? "border-r border-gold/25" : ""}`}
                >
                  <strong className="block font-display text-3xl font-light text-navy">{p.num}</strong>
                  <span className="font-display text-[9px] font-semibold tracking-[0.2em] uppercase text-muted">{p.sub}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => setOpen(true)}
              className="font-display text-[9px] font-semibold tracking-[0.28em] uppercase bg-navy text-white px-10 py-4 hover:bg-navy2 transition-colors duration-300 inline-flex items-center gap-3 border-none cursor-pointer"
            >
              Take the Assessment →
            </button>
          </div>
        </div>
      </div>

      <AssessmentModal open={open} onClose={() => setOpen(false)} />
    </section>
  );
}
