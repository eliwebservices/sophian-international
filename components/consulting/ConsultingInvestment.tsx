const tiers = [
    {
      title: "Diagnostic",
      subtitle: "Clarity before commitment",
      price: "RMB 10,000 – RMB 50,000",
      duration: "1–5 Days",
      desc: "For owners and general managers who suspect people strategy and system problems but can't diagnose it.",
      deliverables: [
        "1 week on-site: leadership interviews, data analysis, operational observation",
        "Written diagnostic (20–40 pages) identifying root causes",
        "Prioritized action plan with cost/benefit analysis",
        "90-minute executive presentation with Q&A",
        "30 days of follow-up consultation to clarify implementation questions",
      ],
      note: "If we can't identify at least 3 issues costing you more than our fee annually, we'll refund 50%.",
      excludes: null,
      cta: "Inquire Now",
      popular: false,
    },
    {
      title: "Design & Build",
      subtitle: "Strategy clarified and systems engineered correctly",
      price: "RMB 240,000 – RMB 360,000",
      duration: "6–9 Months",
      desc: "For pre-openings, repositioning, or transition to professional operations.",
      deliverables: [
        "Everything from the Diagnostic Engagement, plus:",
        "Custom organizational strategy and design including vision, values and mission",
        "HR operating manual & talent acquisition system",
        "Learning, Culture & Leadership Development System",
        "Leadership competency model and performance management framework",
        "Compensation architecture (market-aligned)",
        "Talent Development and Succession Planning System",
        "On-site implementation (monthly 4-day visits for 6–9 months)",
      ],
      note: null,
      excludes: "Not included: Daily HR administration, payroll, benefits management, high-volume recruitment execution.",
      cta: "Get Started",
      popular: true,
    },
    {
      title: "Strategic Partnership",
      subtitle: "Building an institution",
      price: "RMB 600,000 – RMB 720,000 annually",
      duration: "12 Months Minimum",
      desc: "For ownership groups managing 3+ luxury properties or flagship transformation.",
      deliverables: [
        "Everything from Design & Build, plus:",
        "Direct access for urgent organizational decisions & crisis management",
        "Executive coaching for GM and guidance team",
        "Quarterly talent reviews and succession planning",
        "Monthly executive dashboards and annual strategic planning",
        "3 days per week on-site executive advisory presence",
      ],
      note: "This is not a retainer for HR services. This is ownership-level advisory with operational implementation support.",
      excludes: null,
      cta: "Schedule Consultation",
      popular: false,
    },
  ];
  
  export default function ConsultingInvestment() {
    return (
      <section className="bg-navy py-28 px-6">
        <div className="max-w-6xl mx-auto">
  
          <div className="text-center mb-16">
            <p className="font-display text-[9px] md:text-[14px] font-semibold tracking-[0.4em] uppercase text-gold mb-5">
              Investment Structure
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-white leading-[1.12] mb-5">
              How We Engage
            </h2>
            <div className="w-12 h-px bg-gold mx-auto mb-8" />
            <p className="font-body text-sm text-white/55 leading-relaxed max-w-2xl mx-auto">
              We don't offer packages. Every engagement is structured around your specific
              situation and the commercial outcome you need to achieve. That said, our
              engagements typically fall into three categories:
            </p>
          </div>
  
          <div className="grid md:grid-cols-3 gap-px bg-gold/10">
            {tiers.map((tier) => (
              <div
                key={tier.title}
                className={`relative flex flex-col p-12 ${tier.popular ? "bg-white" : "bg-white/[0.04]"}`}
              >
                {tier.popular && (
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gold" />
                )}
                {tier.popular && (
                  <p className="font-body text-[9px] tracking-[0.2em] uppercase text-gold mb-4">
                    Most Popular
                  </p>
                )}
  
                <h3 className={`font-display text-2xl font-light mb-2 ${tier.popular ? "text-navy" : "text-white"}`}>
                  {tier.title}
                </h3>
                <p className={`font-body text-sm italic mb-6 ${tier.popular ? "text-muted" : "text-white/45"}`}>
                  {tier.subtitle}
                </p>
  
                <p className={`font-display text-xl font-light mb-1 ${tier.popular ? "text-navy" : "text-gold"}`}>
                  {tier.price}
                </p>
                <p className={`font-body text-[9px] tracking-[0.2em] uppercase mb-6 ${tier.popular ? "text-muted" : "text-white/40"}`}>
                  {tier.duration}
                </p>
  
                <p className={`font-body text-sm leading-relaxed mb-6 ${tier.popular ? "text-muted" : "text-white/55"}`}>
                  {tier.desc}
                </p>
  
                <p className={`font-body text-[9px] tracking-[0.2em] uppercase mb-4 ${tier.popular ? "text-muted" : "text-white/35"}`}>
                  What you receive:
                </p>
                <ul className="flex flex-col gap-2.5 mb-6 flex-1 list-none p-0 m-0">
                  {tier.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="text-gold flex-shrink-0 mt-0.5">→</span>
                      <span className={`font-body text-xs leading-relaxed ${tier.popular ? "text-muted" : "text-white/55"}`}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
  
                {tier.note && (
                  <p className={`font-body text-xs italic leading-relaxed mb-6 ${tier.popular ? "text-muted" : "text-white/40"}`}>
                    {tier.note}
                  </p>
                )}
                {tier.excludes && (
                  <p className="font-body text-xs text-muted italic leading-relaxed mb-6">
                    {tier.excludes}
                  </p>
                )}
  
                <a
                  href="#contact"
                  className={[
                    "mt-auto font-body text-[9px] tracking-[0.28em] uppercase px-8 py-4 no-underline inline-flex items-center justify-center gap-3 transition-all duration-300",
                    tier.popular
                      ? "bg-navy text-white hover:bg-navy2"
                      : "border border-gold/40 text-gold hover:bg-gold hover:text-navy",
                  ].join(" ")}
                >
                  {tier.cta} →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  