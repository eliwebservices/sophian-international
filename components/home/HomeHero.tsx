import Image from "next/image";

export default function HomeHero() {
    return (
      <section className="relative min-h-screen flex items-end justify-center overflow-hidden text-white">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/images/sophian-hero-bg.jpg')",
            animation: "kenburns 18s ease-out forwards",
            paddingTop: "150px"
          }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy/20 via-navy/50 to-navy/90" />
  
        {/* Content */}
        <div
          className="relative z-10 w-full max-w-5xl mx-auto px-6 pb-18 text-center"
          style={{ animation: "fadeUp 0.9s 0.2s both" }}
        >
          {/* <p className="font-body text-[9px] tracking-[0.35em] uppercase text-gold2 mb-8">
            Sophian International
          </p> */}
  
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-light leading-[1.08] text-white mb-8">
            Transforming Your People and<br />
             Culture for Purpose and Profit
          </h1>
  
          <p className="font-display text-sm md:text-base leading-[1.8] text-white/75 max-w-xl mx-auto mb-12">
            We help you appoint the right leaders, train teams to higher standards, and advise
            ownership on people strategy and systems in hospitality.
          </p>

          <div className="flex justify-center mb-14">
            <div className="flex flex-col gap-3">
              {["One-on-One Conversations", "Meetings", "Formal Presentations"].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  {/* Circle with check icon */}
                  <div className="w-4 h-4 rounded-full border border-white flex items-center justify-center flex-shrink-0">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 12 12"
                      fill="none"
                      stroke="#ffffff"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="2,6 5,9 10,3" />
                    </svg>
                  </div>
                  <span className="font-display text-[11px] font-medium tracking-[0.22em] uppercase text-white">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>


  
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
            <a
              href="#contact"
              className="font-body text-[9px] tracking-[0.28em] uppercase border border-white/40 text-white px-10 py-4 hover:bg-gold transition-colors duration-300 no-underline inline-flex items-center justify-center gap-3"
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

        </div>
        <div className="hidden md:block w-full absolute bottom-0 left-0 right-0 bg-black/30 backdrop-blur-md border-t border-white/10 py-5 px-10">
            <div className="max-w-5xl mx-auto flex items-center justify-between">
              {["Engaged Team", "Delighted Guests", "Booming Business"].map((phrase) => (
                <div key={phrase} className="flex items-center gap-3">
                  {/* Sophian compass/diamond icon */}
                  <Image
                    src="/images/sophian-logo-white-1.png"
                    width={20}
                    height={20}
                    alt=""
                  />
                  <span className="font-display text-[11px] font-medium tracking-[0.28em] uppercase text-white/90">
                    {phrase}
                  </span>
                </div>
              ))}
            </div>
          </div>
  
        {/* Scroll indicator */}
        {/* <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div className="w-px h-10 bg-gradient-to-b from-gold/70 to-transparent animate-pulse" />
          <span className="font-body text-[8px] tracking-[0.3em] uppercase text-white/40">Scroll</span>
        </div> */}
      </section>
    );
  }
  