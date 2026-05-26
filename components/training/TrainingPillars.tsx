const pillars = [
    { number: "01", title: "Organizational Culture",         desc: "Defining and embedding the core values that align team mindset with brand mission — creating workplaces where purpose drives performance." },
    { number: "02", title: "Service Culture",                desc: "Establishing the behavioral non-negotiables that ensure every guest encounters world-class hospitality, consistently and authentically." },
    { number: "03", title: "Performance & Training Systems", desc: "Building the operational infrastructure for excellence — from hotel-wide frameworks to department-level SOPs that turn daily work into continuous learning." },
    { number: "04", title: "Talent Development",             desc: "Identifying, developing, and grooming high-potential team members for sustainable internal succession and leadership continuity." },
  ];
  
  export default function TrainingPillars() {
    return (
      <section className="bg-warm py-28 px-6">
        <div className="max-w-5xl mx-auto">
  
          <div className="text-center mb-16">
            <p className="font-display text-[9px] md:text-[14px] font-semibold tracking-[0.35em] uppercase text-gold mb-5">
              Our Strategic Focus
            </p>
            <div className="w-12 h-px bg-gold mx-auto mb-6" />
            <h2 className="font-display text-4xl md:text-5xl font-light text-navy leading-[1.12] mb-5">
              Four Pillars of a High-Performing Organization
            </h2>
            <p className="font-body text-sm text-muted leading-relaxed max-w-2xl mx-auto">
              Every engagement is structured around four interdependent pillars. Lasting
              transformation requires all four working in concert.
            </p>
          </div>
  
          <div className="grid md:grid-cols-2 gap-px bg-gold/15">
            {pillars.map((p) => (
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
        </div>
      </section>
    );
  }
  