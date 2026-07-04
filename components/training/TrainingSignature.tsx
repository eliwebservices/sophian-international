"use client";
import { useState } from "react";
import ScheduleCallButton from "../ScheduleCallButton";

const steps = [
  {
    number: "1",
    title: "Build Your Core Trainer Team",
    subtitle: "Ensure training has clear ownership, delivery capability, and follow-up discipline",
    image: "/images/home-strip-5.jpg",
    bullets: [
      "Department Trainer: Owns the annual training plan, maintains the training matrix, converts SOP updates into executable content",
      "Training Coach: Leads on-the-job training and skills coaching; focuses on observable, measurable performance",
      "Onboarding Advisor: Manages the new hire pathway from Day 1 through 90 days; closes the gap between hire and role readiness",
    ],
  },
  {
    number: "2",
    title: "Develop Trainer Skills",
    subtitle: "Turn your strongest operators into confident facilitators and coaches",
    image: "/images/service-culture.jpg",
    bullets: [
      "Facilitation fundamentals: Course structure, adult learning principles, classroom management",
      "OJT coaching method: Demonstrate → Explain → Practice → Feedback → Re-check",
      "Certification tiers: Level 1: OJT delivery | Level 2: Classroom facilitation | Level 3: Course development & trainer coaching",
    ],
  },
  {
    number: "3",
    title: "Establish Courses & Training Plans",
    subtitle: "Align all training activity directly to business strategy and operational standards",
    image: "/images/home-strip-2.jpg",
    bullets: [
      "Design logic: Vision → Strategy → Org Structure → Job Descriptions → Task Lists → SOPs → Training Plan",
      "Four training categories: Corrective · Compliance · Operational · Talent Development",
      "Three delivery levels: Hotel-wide culture | Department operations | Individual progression (30/60/90 day)",
    ],
  },
  {
    number: "4",
    title: "Evaluate & Recognize Success",
    subtitle: "Prove effectiveness with data; sustain performance with recognition and continuous improvement",
    image: "/images/ambassadors.png",
    bullets: [
      "Completion metrics: Plan completion rate, coverage rate, re-training frequency",
      "Learning metrics: Quiz pass rates, skills certification, role readiness assessments",
      "Behavior change metrics: Spot checks, manager observation, audit score movement",
      "Business impact: Guest complaint trends, turnover, productivity, rework and waste reduction",
    ],
  },
];

export default function TrainingSignature() {
  const [open, setOpen] = useState(0);

  const current = steps[open];

  return (
    <section className="bg-white py-28 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-display text-[9px] md:text-[14px] font-semibold tracking-[0.35em] uppercase text-gold mb-5">
            Signature Solution
          </p>
          <div className="w-12 h-px bg-gold mx-auto mb-6" />
          <h2 className="font-display text-4xl md:text-5xl font-light text-navy leading-[1.12] mb-8">
            Build a Complete Hotel Training System in 5 Days
          </h2>
          <div className="max-w-3xl mx-auto space-y-5">
            <p className="font-body text-sm text-muted leading-relaxed">
              Individual programs deliver value. An integrated Training System delivers transformation.
            </p>
            <p className="font-body text-sm text-muted leading-relaxed">
              The Sophian 5-Day System is our flagship engagement: a complete diagnostic, design,
              and deployment process that installs a fully operational learning infrastructure
              within your hotel. The result is not a workshop — it is a self-sustaining capability
              framework built to last.
            </p>
          </div>
        </div>

        <h3 className="font-display text-2xl font-light text-navy text-center mb-12">
          The 4-Step Framework
        </h3>

        {/* Main layout — accordion left, image right */}
        <div className="grid md:grid-cols-2 gap-px  mb-16">

          {/* Left — accordion */}
          <div className="flex flex-col gap-px ">
            {steps.map((step, i) => (
              <div key={step.number} className="bg-white">

                {/* Trigger */}
                <button
                  onClick={() => setOpen(i)}
                  className="w-full flex items-center gap-5 px-8 py-6 text-left cursor-pointer bg-transparent border-none"
                >
                  <span className="font-display text-2xl font-light text-gold/30 flex-shrink-0 w-6">
                    {step.number}
                  </span>
                  <span className={[
                    "font-display text-base font-light flex-1 transition-colors duration-200",
                    open === i ? "text-gold" : "text-navy",
                  ].join(" ")}>
                    {step.title}
                  </span>
                  <span className={[
                    "font-display text-gold text-xl flex-shrink-0 transition-transform duration-300",
                    open === i ? "rotate-45" : "",
                  ].join(" ")}>
                    +
                  </span>
                </button>

                {/* Expanded content */}
                {open === i && (
                  <div className="px-8 pb-8">
                    <p className="font-display text-[9px] font-semibold tracking-[0.2em] uppercase text-gold mt-5 mb-4">
                      {step.subtitle}
                    </p>
                    <div className="w-6 h-px bg-gold mb-5" />
                    <ul className="flex flex-col gap-3 list-none p-0 m-0">
                      {step.bullets.map((b, j) => (
                        <li key={j} className="flex gap-3 font-body text-sm text-muted leading-relaxed">
                          <span className="text-gold flex-shrink-0 mt-0.5">•</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Image shown inline on mobile only */}
                    <div className="relative overflow-hidden h-52 mt-6 md:hidden">
                      <img
                        src={current.image}
                        alt={current.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-navy/25" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right — persistent image panel, hidden on mobile */}
          <div className="relative overflow-hidden min-h-[500px] hidden md:block">
            <img
              key={open}
              src={current.image}
              alt={current.title}
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
            />
            <div className="absolute inset-0 bg-navy/25" />

            {/* Step label overlay */}
            <div className="absolute top-6 left-6 bg-navy/70 backdrop-blur-sm px-4 py-2">
              <p className="font-display text-[9px] font-semibold tracking-[0.2em] uppercase text-gold">
                Step {current.number}
              </p>
              <p className="font-display text-sm font-light text-white mt-0.5">
                {current.title}
              </p>
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="contact"
            className="font-display md:text-[10px] text-[9px] tracking-[0.28em] uppercase bg-navy text-white px-10 py-4 transition-colors duration-300 no-underline inline-flex items-center gap-3"
          >
            Request a Proposal
          </a>
          {/* <a
            href="#contact"
            className="font-body text-[9px] tracking-[0.28em] uppercase border border-white/30 text-white px-10 py-4 hover:border-gold hover:text-gold transition-all duration-300 no-underline inline-flex items-center gap-3"
          >
            Book a Discovery Call
          </a> */}
          <ScheduleCallButton variant="outline-navy" label="Book a Discovery Call" />
        </div>
      </div>
    </section>
  );
}
