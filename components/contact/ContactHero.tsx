export default function ContactHero() {
    return (
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden text-white">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/images/contact-us-hero.jpg')",
            animation: "kenburns 18s ease-out forwards",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/20 via-navy/55 to-navy/92" />
  
        {/* Content */}
        <div
          className="relative z-10 w-full max-w-4xl mx-auto px-6 pb-28 text-center"
          style={{ animation: "fadeUp 0.9s 0.2s both" }}
        >
          <p className="font-body text-[14px] tracking-[0.4em] uppercase text-gold mb-10">
            Strategic Engagement
          </p>
  
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-light leading-[1.08] text-white mb-10">
            The right conversation,<br />
            at the right moment
          </h1>
  
          <div className="w-12 h-px bg-gold mx-auto mb-10" />
  
          <p className="font-body text-sm md:text-base text-white/80 max-w-2xl mx-auto leading-relaxed mb-6">
            There comes a point in every hospitality organization where the challenge is no longer
            operational — it's structural. A General Manager vacancy that keeps recurring. A team
            that underperforms despite investment. A people strategy that no longer serves the asset.
          </p>
          <p className="font-body text-sm md:text-base text-white/80 max-w-2xl mx-auto leading-relaxed mb-14">
            When you reach that point, the next step isn't a proposal. It's a conversation.
          </p>
  
          <a
            href="#inquiry"
            className="font-body text-[9px] tracking-[0.28em] uppercase bg-gold text-navy px-10 py-4 hover:bg-gold2 transition-colors duration-300 no-underline inline-flex items-center gap-3"
          >
            Schedule a Private Discussion →
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
  