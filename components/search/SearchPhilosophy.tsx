const pillars = [
    { number: "01", title: "Deep Sector Immersion", desc: "Our consultants have lived in the industry — former GMs, F&B directors, and property developers who speak the language of luxury natively." },
    { number: "02", title: "Proprietary Talent Network", desc: "Over 14,000 curated executive profiles across 68 countries, built through direct relationships rather than database scraping." },
    { number: "03", title: "Cultural Alignment", desc: "We assess values, leadership style, and brand affinity — not just competency. The right chemistry transforms a placement into a legacy hire." },
    { number: "04", title: "Retained Partnership", desc: "Every search is exclusive and fully retained, ensuring total commitment and confidentiality from first brief to onboarding and beyond." },
  ];
  
  export default function SearchPhilosophy() {
    return (
      <section className="bg-cream py-28 px-6">
        <div className="max-w-5xl mx-auto">
  
          {/* Header */}
          <div className="text-center mb-16">
            <p className="font-display text-[9px] md:text-[14px] font-semibold tracking-[0.35em] uppercase text-gold mb-5">
              Philosophy
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-navy leading-[1.12] mb-6">
              Beyond Credentials. Character.
            </h2>
            <div className="w-12 h-px bg-gold mx-auto mb-8" />
            <div className="max-w-3xl mx-auto space-y-5">
              <p className="font-body text-sm text-muted leading-relaxed">
                Ultra-luxury hospitality demands a rare genus of leader — one who holds the technical
                rigor of operations alongside the emotional intelligence of a host, the commercial
                acumen of a strategist, and the cultural sensitivity of a diplomat.
              </p>
              <p className="font-body text-sm text-muted leading-relaxed">
                We have spent twenty years mapping this landscape. We know who thrives in
                Michelin-starred environments, who transforms a palace hotel's DNA, and who builds
                teams that guests never forget.
              </p>
            </div>
          </div>
  
          {/* Pillars */}
          <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gold/20">
          {pillars.map((p) => (
            <div key={p.number} className="px-8 first:pl-0 last:pr-0">
              <p className="font-display text-[11px] font-light text-gold/40 mb-3">
                {p.number}
              </p>
              <div className="w-5 h-px bg-gold mb-4" />
              <h3 className="font-display text-base font-light text-navy mb-3 leading-snug">
                {p.title}
              </h3>
              <p className="font-body text-xs text-muted leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
        </div>
      </section>
    );
  }
  