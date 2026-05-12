export default function TrainingHero() {
    return (
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden text-white">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=1800&q=85&fit=crop')",
            animation: "kenburns 18s ease-out forwards",
          }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy/20 via-navy/55 to-navy/92" />
  
        {/* Content */}
        <div
          className="relative z-10 w-full max-w-5xl mx-auto px-6 pb-28 text-center"
          style={{ animation: "fadeUp 0.9s 0.2s both" }}
        >
          {/* <p className="font-body text-[9px] tracking-[0.35em] uppercase text-gold2 mb-4">
            Sophian International
          </p> */}
          <p className="font-body text-[14px] tracking-[0.35em] uppercase text-gold mb-8">
          Corporate Training
          </p>
  
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-light leading-[1.08] text-white mb-8">
          Learning & Culture Solutions for Hospitality
          </h1>
  
          <p className="font-body text-sm md:text-base leading-[1.8] text-white/75 max-w-2xl mx-auto mb-10">
            Train your team for competence in the role. Develop their potential for leadership.
            Build the internal capability that defines a world-class hospitality organization.
          </p>
  
          <div className="w-12 h-px bg-gold mx-auto mb-10" />
  
          {/* <div className="flex flex-col gap-1.5">
            <p className="font-body text-[9px] tracking-[0.3em] uppercase text-gold">
              Corporate Training
            </p>
            <p className="font-body text-[9px] tracking-[0.3em] uppercase text-white/45">
              Capability Development Programme
            </p>
          </div> */}
        </div>
  
        {/* Scroll */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div className="w-px h-10 bg-gradient-to-b from-gold/70 to-transparent animate-pulse" />
          <span className="font-body text-[8px] tracking-[0.3em] uppercase text-white/40">Scroll</span>
        </div>
      </section>
    );
  }
  