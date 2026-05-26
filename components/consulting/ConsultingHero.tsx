export default function ConsultingHero() {
    return (
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden text-white">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-top"
          style={{
            backgroundImage:
              "url('/images/consulting-hero-img.jpg')",
            animation: "kenburns 18s ease-out forwards",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/25 via-navy/60 to-navy/95" />
  
        {/* Content */}
        <div
          className="relative z-10 w-full max-w-5xl mx-auto px-6 pb-24 text-center"
          style={{ animation: "fadeUp 0.9s 0.2s both" }}
        >
          {/* <p className="font-body text-[9px] tracking-[0.35em] uppercase text-gold2 mb-4">
            Sophian International
          </p>
          <p className="font-body text-[9px] tracking-[0.3em] uppercase text-gold/70 mb-10">
            Luxury Hotel Ownership Advisory
          </p> */}
  
          {/* Three pillars */}
          {/* <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10 mb-10">
            {["People Strategy", "Leadership Architecture", "Operating Discipline"].map((tag, i) => (
              <span key={tag} className="flex items-center gap-4">
                <span className="font-display italic text-xl md:text-2xl font-light text-white/90">
                  {tag}
                </span>
                {i < 2 && <span className="hidden md:block w-px h-5 bg-gold/30" />}
              </span>
            ))}
          </div> */}
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-light leading-[1.08] text-white mb-8">
          People Strategy <br/> Leadership Architecture <br/>Operating Discipline
          </h1>
  
          {/* <p className="font-body text-sm md:text-base leading-[1.8] text-white/75 max-w-2xl mx-auto mb-10">
          We transform people challenges into your greatest competitive advantage in the world
            of exceptional service. When your property's EBITDA is being eroded by people problems you can't diagnose —
            and your leadership team can't fix — we isolate the root cause and engineer the solution.
          </p> */}
  
          <div className="w-12 h-px bg-gold mx-auto mb-10" />
  
          <p className="font-body text-sm md:text-base text-white/85 leading-relaxed max-w-3xl mx-auto mb-5">
          We transform people challenges into your greatest competitive advantage in the world
            of exceptional service. When your property's EBITDA is being eroded by people problems you can't diagnose —
            and your leadership team can't fix — we isolate the root cause and engineer the solution.
          </p>
          {/* <p className="font-body text-sm text-white/55 leading-relaxed max-w-3xl mx-auto mb-14">
            When your property's EBITDA is being eroded by people problems you can't diagnose —
            and your leadership team can't fix — we isolate the root cause and engineer the solution.
          </p> */}
  
          <a
            href="#contact"
            className="font-body text-[9px] tracking-[0.28em] uppercase bg-gold text-navy px-10 py-4 hover:bg-gold2 transition-colors duration-300 no-underline inline-flex items-center gap-3 mb-16"
          >
            Schedule Consultation →
          </a>
  
          {/* 3-Step path */}
          {/* <div className="border border-gold/20 p-8 md:p-10 max-w-3xl mx-auto mb-12">
            <p className="font-body text-[9px] tracking-[0.3em] uppercase text-gold mb-8">
              Your Path to Results: The 3-Step Experience
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
              {[
                { num: "1", label: "Diagnose",   desc: "See the truth on the ground" },
                { num: "2", label: "Design",     desc: "Turn insights into systems" },
                { num: "3", label: "Implement",  desc: "Ensure lasting impact" },
              ].map((step, i) => (
                <div key={step.num} className="flex items-center gap-4">
                  <div className="text-center">
                    <div className="flex items-baseline gap-1 justify-center">
                      <span className="font-display text-3xl font-light text-gold">{step.num}</span>
                      <span className="font-display text-xl text-gold/50">.</span>
                      <span className="font-display text-lg font-light text-white ml-1">{step.label}</span>
                    </div>
                    <p className="font-body text-[9px] tracking-[0.1em] text-white/45 mt-1">{step.desc}</p>
                  </div>
                  {i < 2 && (
                    <span className="hidden md:block text-gold/40 text-xl font-light">→</span>
                  )}
                </div>
              ))}
            </div>
          </div> */}
  
          {/* Bottom labels */}
          <div className="flex flex-wrap items-center justify-center gap-8">
            {["Strategic Partnership", "Industry Expertise", "Tailored Solutions"].map((label, i) => (
              <span key={label} className="flex items-center gap-8">
                <span className="font-body text-[9px] tracking-[0.25em] uppercase text-white/40">
                  {label}
                </span>
                {i < 2 && <span className="w-px h-3 bg-gold/25" />}
              </span>
            ))}
          </div>
        </div>
  
        {/* Scroll */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div className="w-px h-10 bg-gradient-to-b from-gold/70 to-transparent animate-pulse" />
          <span className="font-body text-[8px] tracking-[0.3em] uppercase text-white/40">Scroll</span>
        </div>
      </section>
    );
  }
  