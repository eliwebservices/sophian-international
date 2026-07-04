const gains = [
  "Access to passive senior talent",
  "Shortlists of genuine calibre",
  "Reduced hiring risk",
  "Accelerated time-to-performance",
];

const stats = [
  { value: "20+",     label: "Years Industry Experience"  },
  { value: "97%",     label: "Retention at 24 Months"     },
  { value: "100+",    label: "Executive Placements"        },
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

        {/* Full-bleed image with gradient overlay and gains on top */}
        <div className="relative overflow-hidden min-h-[520px] mb-20 group">

          {/* Background image */}
          <img
            src="/images/here-to-serve_.jpg"
            alt="Executive hospitality leadership"
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />

          {/* Gradient — transparent right, dark navy left */}
          <div className="absolute inset-0 bg-gradient-to-r from-navy/92 via-navy/70 to-navy/10" />

          {/* Decorative inset border frame */}
          <div className="absolute top-6 left-6 bottom-6 right-6 border border-gold/15 pointer-events-none" />

          {/* Content sits on the left over the image */}
          <div className="relative z-10 h-full flex items-center">
            <div className="px-14 md:px-20 py-16 max-w-xl">

              <p className="font-display text-[9px] md:text-[11px] font-semibold tracking-[0.35em] uppercase text-gold mb-8">
                What You Get
              </p>

              <div className="flex flex-col gap-7">
                {gains.map((g, i) => (
                  <div key={g} className="flex items-start gap-5">
                    {/* Number */}
                    <span className="font-display text-3xl font-light text-gold leading-none flex-shrink-0 w-8">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="pt-1">
                      <div className="w-6 h-px bg-gold mb-3" />
                      <p className="font-display text-base font-light text-white/90 leading-relaxed">
                        {g}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pull quote at bottom */}
              <div className="mt-12 border-l-2 border-gold pl-5">
                <p className="font-body text-sm italic text-white/60 leading-relaxed">
                  "In a market of genuine scarcity, precision is not a
                  differentiator — it is the only approach that works."
                </p>
                <p className="font-display text-[9px] font-semibold tracking-[0.25em] uppercase text-gold mt-3">
                  — Sophian International
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gold/25 border border-gold/25">
          {stats.map((s) => (
            <div key={s.label} className="bg-cream py-14 px-6 text-center">
              <p className="font-display text-5xl md:text-6xl font-light text-navy leading-none mb-4">
                {s.value}
              </p>
              <div className="w-6 h-px bg-gold mx-auto mb-4" />
              <p className="font-display text-[9px] font-semibold tracking-[0.25em] uppercase text-muted">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
