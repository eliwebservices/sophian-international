export default function HomeHero() {
    return (
      <section className="relative min-h-screen flex items-end justify-center overflow-hidden text-white">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1800&q=85&fit=crop')",
            animation: "kenburns 18s ease-out forwards",
          }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy/20 via-navy/50 to-navy/90" />
  
        {/* Content */}
        <div
          className="relative z-10 w-full max-w-5xl mx-auto px-6 pb-28 text-center"
          style={{ animation: "fadeUp 0.9s 0.2s both" }}
        >
          {/* <p className="font-body text-[9px] tracking-[0.35em] uppercase text-gold2 mb-8">
            Sophian International
          </p> */}
  
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-light leading-[1.08] text-white mb-8">
            Transforming Your People<br />
            and Culture for Purpose<br />
            and Profit in Hospitality
          </h1>
  
          <p className="font-body text-sm md:text-base leading-[1.8] text-white/75 max-w-xl mx-auto mb-12">
            We help you appoint the right leaders, train teams to standard, and advise
            ownership on people strategy and systems.
          </p>
  
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
            <a
              href="#contact"
              className="font-body text-[9px] tracking-[0.28em] uppercase bg-gold text-navy px-10 py-4 hover:bg-gold2 transition-colors duration-300 no-underline inline-flex items-center justify-center gap-3"
            >
              Schedule a Discovery Call →
            </a>
            <a
              href="#services"
              className="font-body text-[9px] tracking-[0.28em] uppercase border border-white/40 text-white px-10 py-4 hover:border-gold hover:text-gold transition-all duration-300 no-underline inline-flex items-center justify-center gap-3"
            >
              Explore Services
            </a>
          </div>
  
          <div className="flex flex-wrap justify-center gap-6 font-body text-[9px] tracking-[0.22em] uppercase text-white/50 mb-14">
            <span>One-on-One Conversations</span>
            <span className="text-gold">·</span>
            <span>Meetings</span>
            <span className="text-gold">·</span>
            <span>Formal Presentations</span>
          </div>
  
          <div className="border-t border-gold/30 pt-8">
            <p className="font-display italic text-lg text-white/85 tracking-wide">
              Engaged Team{" "}
              <span className="text-gold mx-3">·</span>
              Delighted Guests{" "}
              <span className="text-gold mx-3">·</span>
              Booming Business
            </p>
          </div>
        </div>
  
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div className="w-px h-10 bg-gradient-to-b from-gold/70 to-transparent animate-pulse" />
          <span className="font-body text-[8px] tracking-[0.3em] uppercase text-white/40">Scroll</span>
        </div>
      </section>
    );
  }
  