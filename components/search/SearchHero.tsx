export default function SearchHero() {
    return (
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden text-white">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-top"
          style={{
            backgroundImage:
              "url('/images/search-hero-img.jpg')",
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
            Executive Search & Advisory
          </p>
  
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-light leading-[1.08] text-white mb-8">
            Where Exceptional Leaders<br />Find Their Stage
          </h1>
  
          <p className="font-body text-sm md:text-base leading-[1.8] text-white/75 max-w-2xl mx-auto mb-10">
            We appoint exceptional executives at the world's most prestigious ultra-luxury
            hotels, resorts, and lifestyle brands across Asia and beyond.
          </p>
  
          <div className="w-12 h-px bg-gold mx-auto mb-10" />
  
          <a
            href="#contact"
            className="font-body text-[9px] tracking-[0.28em] uppercase border border-white/40 text-white px-10 py-4 hover:bg-gold transition-colors duration-300 no-underline inline-flex items-center justify-center gap-3"
          >
            Request a Confidential Consultation →
          </a>
        </div>
  
        {/* Scroll */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div className="w-px h-10 bg-gradient-to-b from-gold/70 to-transparent animate-pulse" />
          <span className="font-body text-[8px] tracking-[0.3em] uppercase text-white/40">Scroll</span>
        </div>
      </section>
    );
  }
  