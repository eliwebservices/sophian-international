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
          <div className="grid md:grid-cols-2 gap-px bg-navy/5">
            {pillars.map((p) => (
              // <div
              //   key={p.number}
              //   className="group bg-white p-12 hover:bg-white/[0.08] transition-colors duration-500 relative overflow-hidden"
              // >
              <div
                key={p.number}
                className="group bg-white p-12 relative overflow-hidden"
              >
                {/* <div className="absolute top-0 left-0 right-0 h-[2px] bg-gold scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" /> */}
                <p className="font-display text-[56px] font-light text-navy/15 leading-none mb-3">
                  {p.number}
                </p>
                <h3 className="font-display text-2xl font-light text-navy mb-4">{p.title}</h3>
                <div className="w-8 h-px bg-gold/40 mb-5 group-hover:w-14 transition-all duration-500" />
                <p className="font-body text-sm text-muted leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  