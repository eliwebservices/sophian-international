const challenges = [
    { title: "Inconsistent service",    desc: "leading to rising guest complaints" },
    { title: "High turnover driven",    desc: "by poor training and unclear pathways" },
    { title: "Training investment",     desc: "without measurable ROI or behavior change" },
  ];
  
  export default function TrainingChallenge() {
    return (
      <section className="bg-navy py-28 px-6">
        <div className="max-w-5xl mx-auto">
  
          {/* Label + rule */}
          <p className="font-body text-[9px] tracking-[0.35em] uppercase text-gold mb-5">
            The Challenge
          </p>
          <div className="w-12 h-px bg-gold mb-12" />
  
          <h2 className="font-display text-4xl md:text-5xl font-light text-white leading-[1.12] mb-10">
            Most hospitality training fails<br />to deliver lasting change.
          </h2>
  
          <div className="max-w-3xl space-y-5 mb-16">
            <p className="font-body text-sm text-white/60 leading-relaxed">
              Workshops are delivered. Certificates are issued. Everyone feels productive for a week.
              Then guest complaints return. Turnover continues. Leaders wonder why nothing really changed.
            </p>
            <p className="font-body text-sm text-white/60 leading-relaxed">
              The problem is rarely motivation. It is{" "}
              <span className="text-white font-medium">structure</span>.
            </p>
            <p className="font-body text-sm text-white/60 leading-relaxed">
              Training is too often delivered in isolation, separated from culture, daily operations,
              performance standards, and the real demands of each role. Without integration, even
              well-designed programs fade quickly.
            </p>
            <p className="font-body text-sm text-white font-medium">The result is predictable:</p>
          </div>
  
          {/* Challenge cards */}
          <div className="grid md:grid-cols-3 gap-px bg-gold/10 mb-16">
            {challenges.map((c, i) => (
              <div key={i} className="bg-white/[0.04] p-10 text-center hover:bg-white/[0.08] transition-colors duration-300">
                <p className="font-display text-xl font-light text-white mb-3">{c.title}</p>
                <div className="w-6 h-px bg-gold mx-auto mb-3" />
                <p className="font-body text-sm text-white/55 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
  
          <div className="border border-gold/20 p-10 text-center">
            <p className="font-display italic text-xl md:text-2xl text-white/85 leading-relaxed">
              Lasting change requires a learning system, beyond sessions.
            </p>
          </div>
        </div>
      </section>
    );
  }
  