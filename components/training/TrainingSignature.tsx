const steps = [
    {
      number: "1",
      title: "Build Your Core Trainer Team",
      subtitle: "Ensure training has clear ownership, delivery capability, and follow-up discipline",
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
      bullets: [
        "Completion metrics: Plan completion rate, coverage rate, re-training frequency",
        "Learning metrics: Quiz pass rates, skills certification, role readiness assessments",
        "Behavior change metrics: Spot checks, manager observation, audit score movement",
        "Business impact: Guest complaint trends, turnover, productivity, rework and waste reduction",
      ],
    },
  ];
  
  export default function TrainingSignature() {
    return (
      <section className="bg-navy py-28 px-6">
        <div className="max-w-5xl mx-auto">
  
          <div className="text-center mb-16">
            <p className="font-display text-[9px] md:text-[14px] font-semibold tracking-[0.35em] uppercase text-gold mb-5">
              Signature Solution
            </p>
            <div className="w-12 h-px bg-gold mx-auto mb-6" />
            <h2 className="font-display text-4xl md:text-5xl font-light text-white leading-[1.12] mb-8">
              Build a Complete Hotel Training System in 5 Days
            </h2>
            <div className="max-w-3xl mx-auto space-y-5">
              <p className="font-body text-sm text-white/60 leading-relaxed">
                Individual programs deliver value. An integrated Training System delivers transformation.
              </p>
              <p className="font-body text-sm text-white/60 leading-relaxed">
                The Sophian 5-Day System is our flagship engagement: a complete diagnostic, design,
                and deployment process that installs a fully operational learning infrastructure
                within your hotel. The result is not a workshop — it is a self-sustaining capability
                framework built to last.
              </p>
            </div>
          </div>
  
          <h3 className="font-display text-2xl font-light text-white text-center mb-12">
            The 4-Step Framework
          </h3>
  
          {/* Steps */}
          <div className="flex flex-col gap-px bg-gold/10 mb-16">
            {steps.map((step) => (
              <div
                key={step.number}
                className="bg-white/[0.04] p-10 md:p-12 hover:bg-white/[0.07] transition-colors duration-300"
              >
                <div className="flex items-start gap-8">
                  <div className="flex-shrink-0 text-center min-w-[60px]">
                    <span className="font-body text-[9px] tracking-[0.2em] uppercase text-white/35 block mb-1">
                      Step
                    </span>
                    <span className="font-display text-[56px] font-light text-gold/40 leading-none">
                      {step.number}
                    </span>
                  </div>
                  <div className="flex-1 pt-2">
                    <h4 className="font-display text-2xl font-light text-white mb-2">{step.title}</h4>
                    <p className="font-body text-sm text-gold/70 italic mb-5">{step.subtitle}</p>
                    <ul className="flex flex-col gap-2.5 list-none p-0 m-0">
                      {step.bullets.map((b, i) => (
                        <li key={i} className="flex gap-3 font-body text-sm text-white/55 leading-relaxed">
                          <span className="text-gold flex-shrink-0 mt-0.5">·</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
  
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="font-body text-[9px] tracking-[0.28em] uppercase bg-gold text-navy px-10 py-4 hover:bg-gold2 transition-colors duration-300 no-underline inline-flex items-center gap-3"
            >
              Request a Proposal →
            </a>
            <a
              href="#contact"
              className="font-body text-[9px] tracking-[0.28em] uppercase border border-white/30 text-white px-10 py-4 hover:border-gold hover:text-gold transition-all duration-300 no-underline inline-flex items-center gap-3"
            >
              Book a Discovery Call
            </a>
          </div>
        </div>
      </section>
    );
  }
  