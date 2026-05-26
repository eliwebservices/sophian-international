const gains = [
    "Access to passive senior talent",
    "Shortlists of genuine calibre",
    "Reduced hiring risk",
    "Accelerated time-to-performance",
  ];
  
  const stats = [
    { value: "20+",    label: "Years Industry Experience" },
    { value: "97%",    label: "Retention at 24 Months" },
    { value: "100+",   label: "Executive Placements" },
    { value: "14,000+", label: "Executive Profiles Globally" },
  ];
  
  export default function SearchClientGains() {
    return (
      <section className="bg-white py-28 px-6">
        <div className="max-w-6xl mx-auto">
  
          {/* Header */}
          <div className="text-center mb-16">
            <p className="font-display text-[9px] md:text-[14px] font-semibold tracking-[0.35em] uppercase text-gold mb-5">
              The Sophian Advantage
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-navy leading-[1.12] mb-6">
              What Our Clients Gain
            </h2>
            <div className="w-12 h-px bg-gold mx-auto" />
          </div>
  
          {/* Gains */}
          <div className="grid sm:grid-cols-2 gap-x-16 gap-y-6 max-w-2xl mx-auto mb-20">
            {gains.map((g) => (
              <div key={g} className="flex items-start gap-4">
                <span className="text-gold text-lg leading-none mt-0.5 flex-shrink-0">✦</span>
                <p className="font-body text-sm text-[#1a1a1a] leading-relaxed">{g}</p>
              </div>
            ))}
          </div>
  
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gold/25 border border-gold/25">
            {stats.map((s) => (
              <div key={s.label} className="bg-white py-14 px-6 text-center">
                <p className="font-display text-5xl md:text-6xl font-light text-navy leading-none mb-4">
                  {s.value}
                </p>
                <div className="w-6 h-px bg-gold mx-auto mb-4" />
                <p className="font-body text-[9px] tracking-[0.25em] uppercase text-muted">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  