const challenges = [
    { title: "Inconsistent service",    desc: "leading to rising guest complaints" },
    { title: "High turnover driven",    desc: "by poor training and unclear pathways" },
    { title: "Training investment",     desc: "without measurable ROI or behavior change" },
  ];
  
  export default function TrainingChallenge() {
    return (
      <section className="bg-white py-28 px-6">
        <div className="max-w-5xl mx-auto">
  
          {/* Label + rule */}
          <p className="font-display text-[9px] md:text-[14px] font-semibold text-center tracking-[0.35em] uppercase text-gold mb-5">
            The Challenge
          </p>
          <div className="w-12 h-px bg-gold mb-12 mx-auto " />
  
          <h2 className="font-display text-4xl md:text-5xl font-light text-navy leading-[1.12] mb-10 text-center">
            Most hospitality training fails<br />to deliver lasting change.
          </h2>
  
          <div className="max-w-3xl space-y-5 mb-16 mx-auto">
            <p className="font-body text-sm text-muted leading-relaxed text-center">
              Workshops are delivered. Certificates are issued. Everyone feels productive for a week.
              Then guest complaints return. Turnover continues. Leaders wonder why nothing really changed.
            </p>
            <p className="font-body text-sm text-muted leading-relaxed text-center">
              The problem is rarely motivation. It is{" "}
              <span className="text-muted font-medium">structure</span>.
            </p>
            <p className="font-body text-sm text-muted leading-relaxed text-center">
              Training is too often delivered in isolation, separated from culture, daily operations,
              performance standards, and the real demands of each role. Without integration, even
              well-designed programs fade quickly.
            </p>
            <p className="font-body text-sm text-muted font-medium text-center">The result is predictable:</p>
          </div>
  
          {/* Challenge cards */}
          <div className="grid md:grid-cols-3 gap-px bg-gold/10 mb-16">
            {challenges.map((c, i) => (
              <div key={i} className="bg-white/[0.04] p-10 text-center hover:bg-white/[0.08] transition-colors duration-300">
                <p className="font-display text-xl font-light text-navy mb-3">{c.title}</p>
                <div className="w-6 h-px bg-gold mx-auto mb-3" />
                <p className="font-body text-sm text-muted leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
  
          <div className="border border-gold/20 p-10 text-center">
            <p className="font-display italic text-xl md:text-2xl text-muted leading-relaxed">
              Lasting change requires a learning system, beyond sessions.
            </p>
          </div>
        </div>
      </section>
    );
  }
  