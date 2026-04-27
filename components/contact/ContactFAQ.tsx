"use client";
import { useState } from "react";

const faqs = [
  {
    q: "What types of roles do you search for?",
    a: "Senior hotel and corporate leadership, including General Managers, department heads, and specialist executive positions.",
  },
  {
    q: "Is executive search confidential?",
    a: "Yes. We treat all searches as confidential unless you instruct otherwise. Candidate names and client details are never disclosed without permission.",
  },
  {
    q: "Do you work only in China?",
    a: "China is our home base, and we support searches and projects across APAC depending on the role and requirements.",
  },
  {
    q: "How quickly can you start?",
    a: "We can start with a discovery call right away. Timelines depend on role complexity, approval speed, and market availability.",
  },
  {
    q: "Can you deliver in English and Chinese?",
    a: "Yes. Communication and key documents can be bilingual when needed.",
  },
  {
    q: "What information should I prepare before contacting you?",
    a: "Role objectives, reporting line, location, timeline, and what 'success in 12 months' looks like. If you don't have this yet, we'll help you shape it.",
  },
];

export default function ContactFAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-cream py-28 px-6">
      <div className="max-w-3xl mx-auto">

        <div className="text-center mb-16">
          <p className="font-body text-[9px] tracking-[0.4em] uppercase text-gold mb-6">
            Frequently Asked Questions
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-navy leading-[1.12] mb-6">
            Common <span className="italic">Questions</span>
          </h2>
          <div className="w-12 h-px bg-gold mx-auto" />
        </div>

        <div className="border-t border-gold/25">
          {faqs.map((f, i) => (
            <div key={i} className="border-b border-gold/25">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-6 py-6 text-left bg-transparent border-none cursor-pointer group"
              >
                <span className="font-display text-lg md:text-xl font-light text-navy group-hover:text-gold transition-colors duration-300">
                  {f.q}
                </span>
                <span
                  className={`font-display text-2xl font-light text-gold flex-shrink-0 transition-transform duration-300 ${open === i ? "rotate-45" : ""}`}
                >
                  +
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ${open === i ? "max-h-48 pb-6" : "max-h-0"}`}
              >
                <p className="font-body text-sm text-muted leading-relaxed">{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
