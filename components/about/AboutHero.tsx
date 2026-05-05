export default function AboutHero() {
    return (
      <section className="relative min-h-screen flex items-end justify-center overflow-hidden text-white">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1800&q=85&fit=crop')",
            animation: "kenburns 18s ease-out forwards",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/20 via-navy/55 to-navy/92" />
  
        {/* Content */}
        <div
          className="relative z-10 w-full max-w-5xl mx-auto px-6 pb-28 text-center"
          style={{ animation: "fadeUp 0.9s 0.2s both" }}
        >
          {/* <p className="font-body text-[9px] tracking-[0.35em] uppercase text-gold2 mb-3">
            Sophian International
          </p>
          <p className="font-body text-[9px] tracking-[0.3em] uppercase text-gold mb-10">
            People & Culture Partner
          </p> */}
  
          <p className="font-body text-[9px] tracking-[0.35em] uppercase text-gold mb-8">
            Our Culture
          </p>
  
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-light leading-[1.08] text-white mb-10">
            We Help You<br />
            <span className="text-[45px]">Discover</span> <br/>
            Your True Hospitality<br />
            <span className="text-[45px]">Through</span> <br/> 
            The Power of People & Culture
          </h1>
  
          {/* <div className="w-12 h-px bg-gold mx-auto mb-10" /> */}
  
          {/* <p className="font-body text-sm md:text-base text-white/80 max-w-3xl mx-auto leading-relaxed mb-12">
            At Sophian International, we are on a purpose to help individuals and organizations
            discover and embrace their inner calling, fostering environments where everyone feels
            genuinely welcomed, valued, and inspired to thrive.
          </p> */}
  
          {/* <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10 mb-14">
            {["Executive Search", "Corporate Training", "HR Consulting"].map((tag, i) => (
              <span key={tag} className="flex items-center gap-6">
                <span className="font-display italic text-xl font-light text-white/85">{tag}</span>
                {i < 2 && <span className="hidden md:block w-px h-4 bg-gold/30" />}
              </span>
            ))}
          </div> */}
  
          {/* <a
            href="/#contact"
            className="font-body text-[9px] tracking-[0.28em] uppercase bg-gold text-navy px-10 py-4 hover:bg-gold2 transition-colors duration-300 no-underline inline-flex items-center gap-3"
          >
            Schedule a Discovery Call →
          </a> */}
        </div>
  
        {/* Scroll */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div className="w-px h-10 bg-gradient-to-b from-gold/70 to-transparent animate-pulse" />
          <span className="font-body text-[8px] tracking-[0.3em] uppercase text-white/40">Scroll</span>
        </div>
      </section>
    );
  }
  