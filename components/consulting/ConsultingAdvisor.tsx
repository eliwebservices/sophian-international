const advisoryReceives = [
    "Monthly executive advisory session (60–90 minutes)",
    "On-demand access for decisions that can't wait",
    "Leadership behavior and executive alignment guidance",
    "Talent, performance, and culture counsel",
    "Honest perspective on your People & Culture team's effectiveness",
    "Early risk identification — before problems take root",
    "Annual People & Culture planning support",
  ];
  
  const engagementGuide = [
    {
      title: "Diagnostic",
      prefix: "Start with Diagnostic if:",
      items: [
        "You're not sure what the real problem is",
        "You need board/ownership alignment before committing capital",
        "You're considering a leadership change and want objective input",
      ],
    },
    {
      title: "Design & Build",
      prefix: "Go straight to Design & Build if:",
      items: [
        "You know what needs to be fixed (you just need it built correctly)",
        "You're 6–12 months from a pre-opening",
        "You've already diagnosed the issues and need implementation expertise",
      ],
    },
    {
      title: "Strategic Partnership",
      prefix: "Consider Strategic Partnership if:",
      items: [
        "You're managing a portfolio and need centralized expertise",
        "People operations are a strategic priority, not just a cost center",
        "You want to build competitive advantage through organizational capability",
      ],
    },
    {
      title: "Private Advisory Retainer",
      prefix: "Hire a Private Advisory Retainer if:",
      items: [
        "You need strategic counsel, not just execution",
        "You're navigating: people strategy clarity · systems architecture · team effectiveness",
        "Detect risks before they escalate",
      ],
    },
  ];
  
  export default function ConsultingAdvisor() {
    return (
      <section>
        {/* Advisor retainer */}
        <div className="bg-cream py-28 px-6">
          <div className="max-w-4xl mx-auto">
  
            <div className="text-center mb-16">
              <p className="font-display text-[9px] md:text-[14px] tracking-[0.4em] font-semibold uppercase text-gold mb-5">
                The External Chief People & Culture Advisor
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-light text-navy leading-[1.12] mb-5">
                A Private Advisory Retainer for<br />Owners and Executive Leaders
              </h2>
              <div className="w-12 h-px bg-gold mx-auto mb-8" />
              <p className="font-display italic text-xl text-navy/70 max-w-2xl mx-auto leading-relaxed">
                The most expensive people decisions are the ones made without the right counsel.
              </p>
            </div>
  
            <div className="grid md:grid-cols-2 gap-px bg-gold/15">
              {/* Left — what it is */}
              <div className="bg-white p-12">
                <p className="font-display text-[9px] md:text-[14px] tracking-[0.3em] font-semibold uppercase text-gold mb-5">
                  The Advisory
                </p>
                <div className="w-8 h-px bg-gold mb-5" />
                <p className="font-body text-sm text-muted leading-relaxed mb-8">
                  A confidential, ongoing relationship with an experienced Chief People & Culture
                  Advisor. Not a consultant parachuted in for a project. A consistent presence in
                  your executive thinking — one who knows your business, your team, and what
                  you're building.
                </p>
                <p className="font-display text-[9px] md:text-[12px] tracking-[0.3em] font-semibold uppercase text-gold mb-5">
                  What You Receive
                </p>
                <ul className="flex flex-col gap-3 list-none p-0 m-0">
                  {advisoryReceives.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="text-gold flex-shrink-0 mt-0.5">→</span>
                      <span className="font-body text-sm text-muted leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
  
              {/* Right — what it's not + engagement */}
              <div className="bg-navy p-12 flex flex-col">
                <p className="font-display text-[9px] md:text-[14px] tracking-[0.3em] font-semibold uppercase text-gold mb-5">
                  What This Is Not
                </p>
                <div className="w-8 h-px bg-gold mb-5" />
                <p className="font-body text-sm text-white/60 leading-relaxed mb-10">
                  This is a strategic relationship, not an operational role. It does not cover
                  day-to-day HR administration, recruitment practice, high-volume training, or
                  on-site embedded support.
                </p>
  
                <div className="border border-gold/20 p-6 mb-4">
                  <p className="font-display text-[9px] md:text-[12px] tracking-[0.3em] font-semibold uppercase text-gold mb-3">
                    Engagement
                  </p>
                  <p className="font-body text-sm text-white/60 leading-relaxed">
                    Minimum monthly retainer. 6 or 12 months recommended. By application only.
                  </p>
                </div>
                <div className="border border-gold/20 p-6 mb-10">
                  <p className="font-display text-[9px] md:text-[12px] tracking-[0.3em] font-semibold uppercase text-gold mb-3">
                    Investment
                  </p>
                  <p className="font-body text-sm text-white/60 leading-relaxed">
                    Proposal-based. Structured around your organization's size and complexity.
                  </p>
                </div>
  
                <p className="font-display italic text-lg text-white/60 leading-relaxed mb-10">
                  You don't need more reports. You need the right conversation, at the right moment,
                  with someone who understands what's at stake.
                </p>
  
                <a
                  href="#contact"
                  className="mt-auto font-body text-[9px] tracking-[0.28em] uppercase bg-gold text-navy px-8 py-4 hover:bg-gold2 transition-colors duration-300 no-underline inline-flex items-center gap-3 self-start"
                >
                  Schedule Consultation →
                </a>
              </div>
            </div>
          </div>
        </div>
  
        {/* Which engagement guide */}
        <div className="bg-warm py-28 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <p className="font-display text-[9px] md:text-[14px] font-semibold tracking-[0.4em] uppercase text-gold mb-5">
                Which Engagement Is Right for You?
              </p>
              <div className="w-12 h-px bg-gold mx-auto" />
            </div>
  
            <div className="grid md:grid-cols-2 gap-px bg-gold/15">
              {engagementGuide.map((block) => (
                <div key={block.title} className="bg-white p-12 hover:bg-navy group transition-colors duration-500">
                  <h3 className="font-display text-2xl font-light text-navy group-hover:text-white mb-2 transition-colors duration-500">
                    {block.title}
                  </h3>
                  <p className="font-body text-sm text-gold italic mb-6">{block.prefix}</p>
                  <div className="w-8 h-px bg-gold mb-6 group-hover:w-14 transition-all duration-500" />
                  <ul className="flex flex-col gap-3 list-none p-0 m-0">
                    {block.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="text-gold flex-shrink-0 mt-0.5">→</span>
                        <span className="font-body text-sm text-muted group-hover:text-white/60 leading-relaxed transition-colors duration-500">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
  