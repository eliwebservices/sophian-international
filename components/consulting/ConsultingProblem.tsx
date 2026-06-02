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

      {/* ── PART A — Who we work with ── */}
      <div className="bg-white py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-px bg-gold/15">

            {/* Image — left */}
            <div className="relative overflow-hidden min-h-[480px] group">
              <img
                src="https://www.starwoodhotels.com/sites/default/files/styles/650x556/public/brandfolder/m8kh99t8cqq4cw7876rsfxm/1_Hotel_South_Beach_2021_9h1280.webp?h=1dd3cf61&itok=hCxlolV8"
                alt="Luxury hotel leadership meeting"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-navy/40" />

              {/* Stat overlay */}
              {/* <div className="absolute bottom-8 left-8 right-8">
                <div className="border border-gold/30 p-6 bg-navy/60 backdrop-blur-sm">
                  <p className="font-display text-[9px] font-semibold tracking-[0.3em] uppercase text-gold mb-3">
                    Our Focus
                  </p>
                  <p className="font-body text-base italic text-white/85 leading-relaxed">
                    We've spent 20+ years inside luxury operations — not selling HR software
                    or running recruitment agencies.
                  </p>
                </div>
              </div> */}
            </div>

            {/* Text — right */}
            <div className="bg-cream p-12 flex flex-col justify-center">
              <p className="font-display text-[9px] font-semibold tracking-[0.35em] uppercase text-gold mb-6">
                Who We Work With
              </p>
              <div className="w-8 h-px bg-gold mb-8" />
              <p className="font-body text-sm text-muted leading-relaxed mb-8">
                We work exclusively with luxury hotel owners, general managers and leadership teams
                who need strategic clarity on organizational design, leadership effectiveness, and
                labor economics before committing capital to systems that may not work.
              </p>
              <p className="font-display text-[9px] font-semibold tracking-[0.3em] uppercase text-muted mb-5">
                Our clients hire us not only to improve systems, but because:
              </p>
              <ul className="flex flex-col gap-3 list-none p-0 m-0">
                {clientReasons.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-gold flex-shrink-0 mt-1">—</span>
                    <span className="font-body text-sm text-muted leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="font-body text-sm text-muted leading-relaxed mt-5">
              We've spent 20+ years inside luxury operations — not selling HR software or running
              recruitment agencies. We diagnose what's actually broken, design what will actually
              work, and stay long enough to ensure your team can execute without us.
            </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── PART B — Invisible Cost Structure ── */}
      {/* ── PART B — Invisible Cost Structure ── */}
<div className="bg-cream py-28 px-6">
  <div className="max-w-6xl mx-auto">

    {/* Header */}
    <div className="text-center mb-16">
      <p className="font-display text-[9px] md:text-[14px] font-semibold tracking-[0.4em] uppercase text-gold mb-5">
        The Invisible Cost Structure
      </p>
      <h2 className="font-display text-4xl md:text-5xl font-light text-navy leading-[1.12] mb-6">
        What Ownership Teams<br />Rarely See in Monthly Reports
      </h2>
      <div className="w-12 h-px bg-gold mx-auto mb-8" />
      <p className="font-body text-sm text-muted leading-relaxed max-w-2xl mx-auto">
        A diagnostic review across 14 luxury properties in Asia revealed structural failures
        costing{" "}
        <span className="text-gold font-medium">8–12% annual revenue</span>.
      </p>
    </div>

    {/* Full width image banner */}
    <div className="relative overflow-hidden h-64 mb-px">
      <img
        src="https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1800&q=85&fit=crop"
        alt="Luxury hotel operations"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-navy/60" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center px-8">
          <p className="font-display text-5xl md:text-6xl font-light text-gold leading-none mb-4">
            8–12%
          </p>
          <div className="w-12 h-px bg-gold mx-auto mb-4" />
          <p className="font-display text-[9px] font-semibold tracking-[0.3em] uppercase text-white/70">
            Annual Revenue Lost to Structural People Failures
          </p>
        </div>
      </div>
    </div>

    {/* Two columns */}
    <div className="grid md:grid-cols-2 gap-px bg-gold/15">

      {/* Hidden costs */}
      <div className="bg-white p-12">
        <p className="font-display text-[9px] font-semibold tracking-[0.3em] uppercase text-gold mb-6">
          Hidden Costs
        </p>
        <div className="w-6 h-px bg-gold mb-6" />
        <ul className="flex flex-col gap-4 list-none p-0 m-0">
          {hiddenCosts.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="text-gold flex-shrink-0 mt-1">—</span>
              <span className="font-body text-sm text-muted leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Structural failures */}
      <div className="bg-white p-12 flex flex-col">
        <p className="font-display text-[9px] font-semibold tracking-[0.3em] uppercase text-gold mb-6">
          Structural Failures
        </p>
        <div className="w-6 h-px bg-gold mb-6" />
        <p className="font-body text-sm text-muted leading-relaxed mb-6">
          The highest turnover properties weren't the lowest paying. They were the ones with:
        </p>
        <ul className="flex flex-col gap-4 list-none p-0 m-0 mb-10">
          {structuralFailures.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="text-gold flex-shrink-0 mt-1">—</span>
              <span className="font-body text-sm text-muted leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
        <div className="border-t border-gold/20 pt-8 mt-auto">
          <p className="font-body text-sm text-muted italic leading-relaxed">
            These are structural design failures. The question isn't whether to fix this.
            The question is:{" "}
            <span className="text-gold not-italic font-medium">
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
