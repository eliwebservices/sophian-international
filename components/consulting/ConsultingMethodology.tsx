const steps = [
  { num: "01", title: "Diagnose",    desc: "We spend 1 week inside your operation interviewing leaders, analyzing data, and observing how decisions actually get made" },
  { num: "02", title: "Design",      desc: "We build the organizational architecture — leadership structure, role clarity, compensation logic, decision rights, performance standards" },
  { num: "03", title: "Implement",   desc: "We stay long enough (typically 6–12 months) to ensure your team internalizes the systems and can operate independently" },
];

const stats = [
  { value: "13",     label: "Luxury properties across 13 markets"  },
  { value: "11.4%",  label: "Average labor cost reduction"          },
  { value: "19%",    label: "Highest engagement increase"           },
  { value: "28%",    label: "Highest turnover decrease"             },
  { value: "36 mo",  label: "Avg leadership retention improvement"  },
];

export default function ConsultingMethodology() {
  return (
    <section className="bg-cream py-28 px-6">
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-16">
          <p className="font-display text-[9px] md:text-[14px] font-semibold tracking-[0.4em] uppercase text-gold mb-5">
            How We Work
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-navy leading-[1.12] mb-5">
            A Clear 3-Step Consulting Methodology
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mb-8" />
          <p className="font-body text-sm text-muted leading-relaxed max-w-2xl mx-auto">
            Sophian International helps hospitality organizations see the real people challenges,
            build practical HR systems, and support rollout with your leaders.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-px bg-gold/15 mb-16">
          {steps.map((step) => (
            <div
              key={step.num}
              className="group bg-white p-12 hover:bg-navy transition-colors duration-500"
            >
              <p className="font-display text-[56px] font-light text-navy/10 group-hover:text-white/10 leading-none mb-3 transition-colors duration-500">
                {step.num}
              </p>
              <h3 className="font-display text-2xl font-light text-navy group-hover:text-white mb-4 transition-colors duration-500">
                {step.title}
              </h3>
              <div className="w-8 h-px bg-gold mb-5 group-hover:w-14 transition-all duration-500" />
              <p className="font-body text-sm text-muted group-hover:text-white/60 leading-relaxed transition-colors duration-500">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* ── Full width image banner ── */}
        <div className="relative overflow-hidden h-72 mb-16">
          <img
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1800&q=85&fit=crop"
            alt="Luxury hotel operations"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy/60" />

          {/* Centered quote on image */}
          <div className="absolute inset-0 flex items-center justify-center px-8">
            <div className="text-center max-w-2xl">
              <div className="flex items-center justify-center gap-4 mb-5">
                <div className="w-10 h-px bg-gold/60" />
                <div className="w-1.5 h-1.5 rounded-full bg-gold/60" />
                <div className="w-10 h-px bg-gold/60" />
              </div>
              <p className="font-body text-lg md:text-xl italic text-white/90 leading-relaxed">
                "We're not for everyone. But if you're an owner or general manager who needs
                strategic clarity on people decisions before committing capital, we should talk."
              </p>
              <div className="flex items-center justify-center gap-4 mt-5">
                <div className="w-10 h-px bg-gold/60" />
                <div className="w-1.5 h-1.5 rounded-full bg-gold/60" />
                <div className="w-10 h-px bg-gold/60" />
              </div>
            </div>
          </div>
        </div>

        {/* Track record */}
        <div className="border-t border-gold/25 pt-16">
          <p className="font-display text-[9px] md:text-[14px] font-semibold tracking-[0.3em] uppercase text-gold text-center mb-12">
            Our Track Record
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 divide-x divide-gold/25 border border-gold/25 mb-12">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-white py-10 px-6 text-center">
                <span className="font-display text-4xl font-light text-navy leading-none block mb-3">
                  {stat.value}
                </span>
                <div className="w-5 h-px bg-gold mx-auto mb-3" />
                <p className="font-body text-[9px] text-muted leading-snug">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}