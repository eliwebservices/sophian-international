const steps = [
    {
      number: "01",
      title: "Discover",
      subtitle: "We listen before we recommend.",
      desc: "We meet your leadership team, observe operations, and review your current training materials and performance data. We identify the real gaps — not symptoms, but root causes.",
      deliverable: "Diagnostic Report",
    },
    {
      number: "02",
      title: "Design & Deliver",
      subtitle: "We build and run programs tailored to you.",
      desc: "All content is adapted to your brand, SOPs, and team structure. We facilitate sessions, certify internal trainers, and ensure every program connects directly to your operational reality.",
      deliverable: "Customized Programs",
    },
    {
      number: "03",
      title: "Embed & Sustain",
      subtitle: "We ensure the change sticks.",
      desc: "We put the systems, tools, and recognition structures in place so your team can run and evolve the training culture independently — long after our engagement ends.",
      deliverable: "Sustainability Roadmap",
    },
  ];
  
  export default function TrainingMethodology() {
    return (
      <section className="bg-warm py-28 px-6">
        <div className="max-w-5xl mx-auto">
  
          <div className="text-center mb-20">
            <p className="font-display text-[9px] md:text-[14px] font-semibold tracking-[0.35em] uppercase text-gold mb-5">
              How We Work With You
            </p>
            <div className="w-12 h-px bg-gold mx-auto mb-6" />
            <h2 className="font-display text-4xl md:text-5xl font-light text-navy leading-[1.12] mb-5">
              Our Engagement Methodology
            </h2>
            <p className="font-body text-sm text-muted leading-relaxed max-w-2xl mx-auto">
              Every Sophian engagement follows three clear steps. Simple to understand, rigorous
              in execution.
            </p>
          </div>
  
          <div className="grid md:grid-cols-3 gap-px bg-gold/15">
            {steps.map((step) => (
              <div key={step.number} className="bg-white p-12 text-center group hover:bg-navy transition-colors duration-500">
                <span className="font-display text-[64px] font-light text-navy/15 group-hover:text-white/10 leading-none block mb-4 transition-colors duration-500">
                  {step.number}
                </span>
                <h3 className="font-display text-2xl font-light text-navy group-hover:text-white mb-2 transition-colors duration-500">
                  {step.title}
                </h3>
                <p className="font-body text-sm text-gold italic mb-5">{step.subtitle}</p>
                <p className="font-body text-sm text-muted group-hover:text-white/55 leading-relaxed mb-8 transition-colors duration-500">
                  {step.desc}
                </p>
                <span className="inline-block font-body text-[9px] tracking-[0.2em] uppercase text-gold border border-gold/40 px-4 py-2">
                  ► {step.deliverable}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  