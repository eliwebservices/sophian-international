const services = [
    {
      label: "Executive Search",
      description:
        "Identify and recruit exceptional leaders who align with your organization's vision and values. Our network spans the global luxury hospitality sector — partnering top-tier brands and lifestyle restaurant groups with accomplished executives.",
      bullets: [
        "General Manager & Guidance Team Placement",
        "Area and Regional Director Mandates",
        "C-Suite & Functional Leadership Sourcing",
      ],
      href: "executive-search",
    },
    {
      label: "Corporate Training",
      description:
        "Develop high-performing teams through customized programs that build leadership capability and service excellence. We design and execute training that inspires peak performance and drives measurable results.",
      bullets: [
        "Generic Programs for Every Level of Your Organization",
        "Build an Effective Hotel Training System in 5 Days",
        "Leadership Development & Culture Workshops",
      ],
      href: "corporate-training",
    },
    {
      label: "HR Consulting",
      description:
        "Design and advise on people architecture and HR systems that strengthen organizational performance — aligning structure, leadership, and talent strategy with commercial objectives.",
      bullets: [
        "People & Culture Diagnostic",
        "People Strategy & Organizational Systems",
        "Strategic Partnership & Private Advisory Retainer",
      ],
      href: "hr-consulting",
    },
  ];
  
  export default function HomeServices() {
    return (
      <section id="services" className="bg-warm py-28 px-6">
        <div className="max-w-6xl mx-auto">
  
          {/* Header */}
          <div className="text-center mb-20">
            <p className="font-body text-[9px] tracking-[0.35em] uppercase text-gold mb-6">
              Our Services
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-navy leading-[1.12] max-w-3xl mx-auto mb-6">
              Everything You Need to Elevate Your Organization's People Strategy & Operational Excellence
            </h2>
            <div className="w-12 h-px bg-gold mx-auto mb-6" />
            <p className="font-display italic text-lg text-muted">
              Three areas where we partner with clients to grow their businesses.
            </p>
          </div>
  
          {/* Cards */}
          <div className="grid md:grid-cols-3 divide-x divide-gold/25 border border-gold/25">
            {services.map((s, i) => (
              <div key={i} className="group relative bg-white overflow-hidden flex flex-col p-12">
                {/* Navy fill on hover */}
                <div className="absolute inset-0 bg-navy translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]" />
  
                <div className="relative z-10 flex flex-col h-full">
                  <p className="font-display text-[56px] font-light text-navy/10 group-hover:text-white/10 leading-none mb-3 transition-colors duration-500">
                    0{i + 1}
                  </p>
                  <h3 className="font-display text-2xl font-light text-navy group-hover:text-white mb-5 transition-colors duration-500">
                    {s.label}
                  </h3>
                  <div className="w-8 h-px bg-gold mb-5 group-hover:w-14 transition-all duration-500" />
                  <p className="font-body text-sm text-muted group-hover:text-white/65 leading-relaxed mb-6 transition-colors duration-500">
                    {s.description}
                  </p>
                  <ul className="flex flex-col gap-2.5 mb-10 list-none p-0 m-0">
                    {s.bullets.map((b, j) => (
                      <li key={j} className="flex gap-2.5 font-body text-xs text-muted group-hover:text-white/60 leading-relaxed transition-colors duration-500">
                        <span className="text-gold flex-shrink-0">→</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={s.href}
                    className="mt-auto font-body text-[9px] tracking-[0.25em] uppercase text-navy group-hover:text-gold no-underline inline-flex items-center gap-2 group-hover:gap-4 transition-all duration-300"
                  >
                    Learn More →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  