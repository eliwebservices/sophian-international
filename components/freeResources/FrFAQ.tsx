"use client";
import { useState } from "react";

const faqs = [
  {
    q: "What resources are included?",
    a: "The library includes templates, checklists, scorecards, and planning tools across three categories: Executive Search, Corporate Training, and HR Consulting. All tools are developed from real hospitality operations.",
  },
  {
    q: "Is it really free?",
    a: "Yes. All resources are completely free. We ask for your contact details so we can send you the tools and occasionally share relevant insights. No credit card, no commitment, no hidden fees.",
  },
  {
    q: "Do you work only in China?",
    a: "China is our home base and primary market. We support clients across Greater China and Asia Pacific, and our resources are relevant to any luxury or upscale hospitality operation globally.",
  },
  {
    q: "Is the compliance content legal advice?",
    a: "No. All compliance-related resources are provided for general guidance only. They are not legal advice and should not be relied upon as such. Always consult a qualified legal professional for specific legal questions.",
  },
  {
    q: "How will I receive my resources?",
    a: "Once you submit the form, a member of our team will review your request and send the relevant materials to your work email within one business day.",
  },
  {
    q: "Can I request a specific resource not listed?",
    a: "Yes — use the Remarks field in the form to describe what you need. We'll do our best to match you with the most relevant tools or create something tailored if appropriate.",
  },
];

export default function ResourcesFAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-cream py-28 px-6">
      <div className="max-w-3xl mx-auto">

        <div className="text-center mb-16">
          <p className="font-display md:text-[14px] text-[9px] font-semibold tracking-[0.35em] uppercase text-gold mb-5">
            Common Questions
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-navy leading-[1.12] mb-6">
            Frequently Asked Questions
          </h2>
          <div className="w-12 h-px bg-gold mx-auto" />
        </div>

        <div className="flex flex-col gap-px bg-gold/15">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-8 py-6 text-left cursor-pointer bg-transparent border-none group"
              >
                <span className={[
                  "font-display text-base font-light transition-colors duration-300",
                  open === i ? "text-gold" : "text-navy group-hover:text-gold",
                ].join(" ")}>
                  {faq.q}
                </span>
                <span className={[
                  "font-display text-gold text-lg flex-shrink-0 ml-4 transition-transform duration-300",
                  open === i ? "rotate-45" : "",
                ].join(" ")}>
                  +
                </span>
              </button>
              {open === i && (
                <div className="px-8 pb-8 border-t border-gold/15 pt-5">
                  <p className="font-display text-sm text-muted leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}