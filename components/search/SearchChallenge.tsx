const challenges = [
    { title: "Scarcity at the top.", desc: "The talent pool at genuine luxury calibre is small and rarely visible." },
    { title: "The global-local gap.", desc: "Candidates with international pedigree often lack China or APAC market fluency — or vice versa." },
    { title: "Culture fit is invisible until it fails.", desc: "Cultural alignment cannot be assessed through a résumé. Service ethos, leadership philosophy, and brand sensitivity require nuanced evaluation." },
    { title: "Delayed decisions carry compounding costs.", desc: "Prolonged search cycles damage business continuity, erode team confidence, and cost the organisation far more than the search fee." },
    { title: "Process friction is avoidable.", desc: "Legacy hiring structures — slow approvals, multiple stakeholders, unclear ownership — extend timelines unnecessarily." },
    { title: "The best talent will not wait.", desc: "Top candidates are rarely unemployed. Impersonal outreach, poor communication, or extended timelines cause the best people to disengage before an offer is made." },
  ];
  
  export default function SearchChallenge() {
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
  
          {/* Challenge grid */}
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 mb-20">
            {challenges.map((c) => (
              <div key={c.title} className="border-l border-gold/30 pl-6">
                <p className="font-body text-sm text-muted mb-2">
                  <span className="text-gold mr-2">▸</span>
                  <span className="font-medium font-semibold">{c.title}</span>
                </p>
                <p className="font-body text-sm text-muted leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
  
          {/* Closing statement */}
          <div className="border border-gold/20 p-10 md:p-14 text-center mb-14">
            <p className="font-display italic text-xl md:text-2xl text-muted leading-relaxed">
              In a market of genuine scarcity, precision is not a differentiator —
              it is the only approach that works.
            </p>
          </div>
  
          <div className="text-center">
            <a
              href="#contact"
              className="font-display text-[9px] md:text-[10px] font-semibold tracking-[0.28em] uppercase bg-navy text-white px-10 py-4 hover:bg-gold2 transition-colors duration-300 no-underline inline-flex items-center gap-3"
            >
              Request a Confidential Consultation
            </a>
          </div>
        </div>
      </section>
    );
  }
  