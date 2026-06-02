const stats = [
    { value: "40%",    label: "Reduction in Guest Complaints", desc: "Reported by partner properties after full-system implementation" },
    { value: "5 Days", label: "Complete Training System Build",  desc: "From diagnosis to operational framework deployment" },
    { value: "3-Tier", label: "Trainer Certification Architecture", desc: "Department Trainer · Training Coach · Onboarding Advisor" },
  ];
  
  const testimonials = [
    {
      quote: "Sophian International transformed our service culture. Their systematic approach reduced guest complaints by 40% and significantly improved team morale.",
      name: "Maria Santos",
      title: "Director of People & Culture",
    },
    {
      quote: "The 5-Day Training System was exactly what we needed. We now have a sustainable framework that develops talent internally and meaningfully reduces turnover.",
      name: "Emma Ahmed",
      title: "General Manager",
    },
    {
      quote: "Their Train-the-Trainer program created a genuine multiplier effect across our properties. Internal facilitators now deliver consistent, high-quality development programs.",
      name: "Elena Li",
      title: "VP Human Resources, Asia Pacific",
    },
  ];
  
  export default function TrainingImpact() {
    return (
      <section className="bg-white py-28 px-6">
        <div className="max-w-5xl mx-auto">
  
          <div className="text-center mb-16">
            <p className="font-display text-[9px] md:text-[14px] font-semibold tracking-[0.35em] uppercase text-gold mb-5">
              Demonstrated Impact
            </p>
            <div className="w-12 h-px bg-gold mx-auto" />
          </div>
  
          {/* Stats */}
          <div className="grid md:grid-cols-3 divide-x divide-gold/25 border border-gold/25 mb-20">
            {stats.map((s, i) => (
              <div key={i} className="bg-white py-14 px-10 text-center">
                <p className="font-display text-5xl md:text-6xl font-light text-navy leading-none mb-4">
                  {s.value}
                </p>
                <div className="w-6 h-px bg-gold mx-auto mb-4" />
                <p className="font-body text-[9px] tracking-[0.15em] uppercase text-[#1a1a1a] mb-3">
                  {s.label}
                </p>
                <p className="font-body text-xs text-muted leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
  
          {/* Testimonials */}
          <div className="grid md:grid-cols-3 gap-0 border border-gold/25">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={`bg-white p-10 ${i < testimonials.length - 1 ? "border-r border-gold/25" : ""}`}
              >
                <div className="w-6 h-px bg-gold mb-6" />
                <p className="font-display italic text-base text-muted leading-relaxed mb-6">
                  "{t.quote}"
                </p>
                <p className="font-display text-lg font-light text-navy">{t.name}</p>
                <p className="font-body text-[9px] tracking-[0.15em] uppercase text-muted mt-1">
                  {t.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  