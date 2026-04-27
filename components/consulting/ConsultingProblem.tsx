const hiddenCosts = [
    "Labor costs are running well above market — and the gap keeps widening",
    "Replacing one division head costs tens of thousands when you factor in lost productivity and recruitment",
    "Leadership team tenure has more than halved in recent years — and continues to fall",
    "New hires take nearly five months to perform at full capacity",
    "Poor performers cost hundreds of thousands annually — a silent drain most owners never see on a P&L",
  ];
  
  const structuralFailures = [
    "Misaligned expectations between owners and the leadership team",
    "No succession planning for critical roles",
    "Outdated compensation structures",
    "Failed performance management systems",
  ];
  
  const clientReasons = [
    "Labor costs are 45% of revenue and climbing",
    "Leadership turnover is destroying institutional knowledge",
    "Guest satisfaction scores are declining despite training investment",
    "The leadership team blames the market but you suspect it's something structural",
  ];
  
  export default function ConsultingProblem() {
    return (
      <section>
        {/* Part A — Who we work with */}
        <div className="bg-warm py-28 px-6">
          <div className="max-w-4xl mx-auto">
            <p className="font-body text-sm text-[#1a1a1a] leading-relaxed mb-8">
              We work exclusively with luxury hotel owners, general managers and leadership teams
              who need strategic clarity on organizational design, leadership effectiveness, and
              labor economics before committing capital to systems that may not work.
            </p>
            <p className="font-body text-[9px] tracking-[0.3em] uppercase text-muted mb-5">
              Our clients hire us not only to improve systems, but because:
            </p>
            <ul className="flex flex-col gap-3 mb-10 list-none p-0 m-0">
              {clientReasons.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-gold flex-shrink-0 mt-1">—</span>
                  <span className="font-body text-sm text-muted leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <p className="font-body text-sm text-muted leading-relaxed italic border-l border-gold/40 pl-6">
              We've spent 20+ years inside luxury operations — not selling HR software or running
              recruitment agencies. We diagnose what's actually broken, design what will actually
              work, and stay long enough to ensure your team can execute without us.
            </p>
          </div>
        </div>
  
        {/* Part B — Invisible Cost Structure */}
        <div className="bg-navy py-28 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <p className="font-body text-[9px] tracking-[0.4em] uppercase text-gold mb-5">
                The Invisible Cost Structure
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-light text-white leading-[1.12] mb-6">
                What Ownership Teams<br />Rarely See in Monthly Reports
              </h2>
              <div className="w-12 h-px bg-gold mx-auto mb-8" />
              <p className="font-body text-sm text-white/60 leading-relaxed max-w-2xl mx-auto">
                A diagnostic review across 14 luxury properties in Asia revealed structural failures
                costing{" "}
                <span className="text-gold font-medium">8–12% annual revenue</span>.
              </p>
            </div>
  
            <div className="grid md:grid-cols-2 gap-px bg-gold/10">
              {/* Hidden costs */}
              <div className="bg-white/[0.04] p-12">
                <p className="font-body text-[9px] tracking-[0.3em] uppercase text-gold mb-6">
                  Hidden Costs
                </p>
                <ul className="flex flex-col gap-4 list-none p-0 m-0">
                  {hiddenCosts.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="text-gold flex-shrink-0 mt-1">—</span>
                      <span className="font-body text-sm text-white/60 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
  
              {/* Structural failures */}
              <div className="bg-white/[0.04] p-12">
                <p className="font-body text-[9px] tracking-[0.3em] uppercase text-gold mb-6">
                  The highest turnover properties weren't the lowest paying. They were the ones with:
                </p>
                <ul className="flex flex-col gap-4 list-none p-0 m-0 mb-10">
                  {structuralFailures.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="text-gold flex-shrink-0 mt-1">—</span>
                      <span className="font-body text-sm text-white/60 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="border-t border-gold/20 pt-8">
                  <p className="font-body text-sm text-white/70 italic leading-relaxed">
                    These are structural design failures. The question isn't whether to fix this.
                    The question is:{" "}
                    <span className="text-gold not-italic">
                      Do you have the organizational architecture to execute a fix?
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  