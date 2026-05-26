const gains = [
    "Clearer understanding of where you are in your career",
    "More confidence in your next decision",
    "A stronger, more focused resume",
    "Less internal friction, more direction",
  ];
  
  const benefits = [
    "No cost, low risk",
    "Real-world insight, not theory",
    "A chance to pause and assess before making big moves",
  ];
  
  export default function ResourcesGains() {
    return (
      <section className="bg-navy py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-px bg-gold/10">
  
            {/* Success picture */}
            <div className="bg-white/[0.04] p-14">
              <p className="font-body text-[9px] md:text-[12px] font-semibold tracking-[0.4em] uppercase text-gold mb-6">
                Success Picture
              </p>
              <h2 className="font-display text-3xl font-light text-white leading-[1.12] mb-6">
                Sometimes clarity is<br />
                <span className="italic">the real upgrade.</span>
              </h2>
              <div className="w-12 h-px bg-gold mb-8" />
              <p className="font-body text-sm text-white/60 leading-relaxed mb-8">
                This won't solve everything overnight. But you may walk away with:
              </p>
              <ul className="flex flex-col gap-3 list-none p-0 m-0">
                {gains.map((g) => (
                  <li key={g} className="flex gap-3 font-body text-sm text-white/75 leading-relaxed">
                    <span className="text-gold flex-shrink-0 mt-0.5">—</span>
                    <span>{g}</span>
                  </li>
                ))}
              </ul>
            </div>
  
            {/* Benefits */}
            <div className="bg-white/[0.04] p-14">
              <p className="font-body text-[9px] md:text-[12px] font-semibold tracking-[0.4em] uppercase text-gold mb-6">
                Benefits
              </p>
              <h2 className="font-display text-3xl font-light text-white leading-[1.12] mb-6">
                Why this is worth<br />
                <span className="italic">your time</span>
              </h2>
              <div className="w-12 h-px bg-gold mb-8" />
              <ul className="flex flex-col gap-3 mb-10 list-none p-0 m-0">
                {benefits.map((b) => (
                  <li key={b} className="flex gap-3 font-body text-sm text-white/75 leading-relaxed">
                    <span className="text-gold flex-shrink-0 mt-0.5">—</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="border-t border-gold/20 pt-8">
                <p className="font-display italic text-xl font-light text-gold">
                  Think of this as a professional checkpoint.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  