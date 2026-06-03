const primary = [
    { value: "20+",  label: "Years in luxury & ultra-luxury hospitality People & Culture" },
    { value: "100+", label: "Executive placements & searches delivered" },
    { value: "13+",  label: "Global hotel brands partnered across APAC" },
  ];
  
  const secondary = [
    { value: "10,000+", label: "Training Hours Delivered" },
    { value: "5,000+",  label: "Participants Trained" },
    { value: "30%+",    label: "Turnover Reduced" },
    { value: "40%+",    label: "Engagement Increased" },
    { value: "38%+",    label: "Guest Scores Improved" },
  ];
  
  export default function ContactCredibility() {
    return (
      <section className="bg-white py-28 px-6">
        <div className="max-w-6xl mx-auto">
  
          {/* Primary stats */}
          <div className="grid md:grid-cols-3 divide-x divide-gold/20 border border-gold/20 mb-16">
            {primary.map((s) => (
              <div key={s.label} className="py-14 px-10 text-center">
                <p className="font-display text-6xl md:text-7xl font-light text-navy leading-none mb-5">
                  {s.value}
                </p>
                <div className="w-6 h-px bg-gold mx-auto mb-5" />
                <p className="font-body text-[9px] tracking-[0.2em] uppercase text-muted leading-relaxed">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
  
          {/* Secondary stats */}
          <div className="grid grid-cols-2 md:grid-cols-5 divide-x divide-gold/15 border border-gold/15 mb-16">
            {secondary.map((s) => (
              <div key={s.label} className="py-10 px-6 text-center">
                <p className="font-display text-3xl font-light text-gold leading-none mb-3">
                  {s.value}
                </p>
                <p className="font-body text-[9px] tracking-[0.15em] uppercase text-muted leading-snug">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
  
          <p className="font-display italic text-base text-muted text-center mb-20">
            Experience across brands such as Accor, IHG, Hilton, Marriott, Rosewood, Aman, and
            Starwood Hotels
          </p>
  
          {/* Testimonial */}
          <div className="relative max-w-3xl mx-auto bg-warm/[0.5] border border-gold/20 p-12 md:p-16 text-center text-white">
            <div className="absolute -top-3 -left-3 right-3 bottom-3 border border-gold/10 pointer-events-none" />
            <span className="block font-display text-[80px] leading-[0.75] text-gold/30 mb-5">"</span>
            <blockquote className="font-display text-xl md:text-2xl font-light text-navy leading-relaxed mb-10">
              They filled our General Manager vacancy in three weeks, revamped our leadership
              training program, and redesigned our HR policies — all running in parallel without a
              single disruption. It felt like having an elite internal team we didn't have to build.
            </blockquote>
            <div className="w-12 h-px bg-gold mx-auto mb-6" />
            <p className="font-body text-[9px] tracking-[0.3em] uppercase text-gold">
              Rachel Drummond · Board Chair, Caliber Industries
            </p>
          </div>
        </div>
      </section>
    );
  }
  