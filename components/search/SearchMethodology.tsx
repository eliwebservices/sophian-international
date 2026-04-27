const phases = [
    { number: "01", title: "Immersive Brief", desc: "We spend time on property and with ownership to understand culture, ambition, and the invisible qualities that make each mandate unique." },
    { number: "02", title: "Targeted Research", desc: "Proactive mapping of global talent — not posting to job boards. We approach the best people, whether or not they're looking." },
    { number: "03", title: "Deep Assessment", desc: "Multi-stage evaluation: behavioural interviews, leadership profiling, reference architecture, and cultural fit immersion." },
    { number: "04", title: "Integration & Guarantee", desc: "We remain engaged through onboarding and the first year — with a 12-month replacement guarantee on every retained mandate." },
  ];
  
  export default function SearchMethodology() {
    return (
      <section className="bg-warm py-28 px-6">
        <div className="max-w-5xl mx-auto">
  
          {/* Header */}
          <div className="text-center mb-20">
            <p className="font-body text-[9px] tracking-[0.35em] uppercase text-gold mb-5">
              Methodology
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-navy leading-[1.12] mb-6">
              How We Work
            </h2>
            <div className="w-12 h-px bg-gold mx-auto mb-8" />
            <p className="font-body text-sm text-muted leading-relaxed max-w-3xl mx-auto">
              The Sophian Precision Strategy is a four-phase executive search framework designed
              specifically for lifestyle and ultra-luxury hospitality mandates. Every step is
              structured to deliver speed without compromise, and quality without noise.
            </p>
          </div>
  
          {/* Phases */}
          <div className="grid md:grid-cols-2 gap-px bg-gold/15 mb-16">
            {phases.map((p) => (
              <div
                key={p.number}
                className="group bg-white p-12 hover:bg-navy transition-colors duration-500"
              >
                <p className="font-display text-[56px] font-light text-navy/10 group-hover:text-white/10 leading-none mb-3 transition-colors duration-500">
                  {p.number}
                </p>
                <h3 className="font-display text-2xl font-light text-navy group-hover:text-white mb-4 transition-colors duration-500">
                  {p.title}
                </h3>
                <div className="w-8 h-px bg-gold mb-5 group-hover:w-14 transition-all duration-500" />
                <p className="font-body text-sm text-muted group-hover:text-white/60 leading-relaxed transition-colors duration-500">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
  
          <div className="text-center">
            <a
              href="#contact"
              className="font-body text-[9px] tracking-[0.28em] uppercase bg-navy text-white px-10 py-4 hover:bg-navy2 transition-colors duration-300 no-underline inline-flex items-center gap-3"
            >
              Request a Confidential Consultation →
            </a>
          </div>
        </div>
      </section>
    );
  }
  