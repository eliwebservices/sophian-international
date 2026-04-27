const stats = [
    { value: "85%",  text: "of hotels saw a 30%+ decrease in voluntary turnover after engaging Nick as their People & Culture leader." },
    { value: "98%+", text: "team member engagement scores achieved — record-breaking milestones at Rosewood Beijing and Starwood Hotels." },
    { value: "100%", text: "of hotels recover their investment in people, with at least a 2× return within a year of his leadership." },
  ];
  
  const brands = ["Accor", "IHG", "Hilton", "Starwood", "Kempinski", "Marriott", "Rosewood", "Aman"];
  
  const highlights = [
    { n: "2",       text: "Successful luxury hotel pre-openings — built and led teams from construction to fully operational, profit-generating properties." },
    { n: "9",       text: "International hotel brands across Asia, Europe, and the United States." },
    { n: "13",      text: "Key cities in China — from remote island resorts (Xiamen, Sanya) to top-tier metros (Beijing, Shanghai, Guangzhou, Chengdu)." },
    { n: "18",      text: "Years of executive leadership in People & Culture, managing teams of 350 to 1,200+ employees." },
    { n: "20",      text: "Years of global hospitality experience across upscale, luxury, and ultra-luxury segments." },
    { n: "30,000+", text: "Team members managed and developed across 12 prestigious hotels." },
  ];
  
  export default function HomeProof() {
    return (
      <section className="bg-cream py-28 px-6">
        <div className="max-w-6xl mx-auto">
  
          {/* Header */}
          <div className="text-center mb-20">
            <p className="font-body text-[9px] tracking-[0.35em] uppercase text-gold mb-6">Proof of Value</p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-navy leading-[1.12] mb-6">
              Grow Your People —<br />Grow Your Business Faster and Stronger
            </h2>
            <div className="w-12 h-px bg-gold mx-auto mb-6" />
            <p className="font-body text-sm leading-relaxed text-muted max-w-2xl mx-auto">
              When we work together, we clarify your mission, optimize your people strategy,
              reset your HR division to reduce voluntary turnover, find the talent that strengthens
              your team, rebuild your training system, and realign your culture.
            </p>
          </div>
  
          {/* Stats */}
          <div className="grid md:grid-cols-3 divide-x divide-gold/25 border border-gold/25 mb-20">
            {stats.map((s, i) => (
              <div key={i} className="bg-white py-14 px-10 text-center">
                <p className="font-display text-6xl md:text-7xl font-light text-navy leading-none mb-5">{s.value}</p>
                <div className="w-7 h-px bg-gold mx-auto mb-5" />
                <p className="font-body text-xs leading-relaxed text-muted max-w-[200px] mx-auto">{s.text}</p>
              </div>
            ))}
          </div>
  
          {/* Brands */}
          <p className="font-body text-[9px] tracking-[0.3em] uppercase text-muted text-center mb-5">
            Nick Huang Has Served as a People & Culture Leader For
          </p>
          <div className="flex flex-wrap justify-center border border-gold/25 divide-x divide-gold/25 mb-20">
            {brands.map((b, i) => (
              <div key={i} className="px-8 py-5 font-display text-base tracking-wide text-navy/40 hover:text-navy transition-colors duration-300 cursor-default">
                {b}
              </div>
            ))}
          </div>
  
          {/* Highlights */}
          <h3 className="font-display text-3xl font-light text-navy text-center mb-12">
            A Foundation of Proven Experience
          </h3>
          <div className="grid md:grid-cols-2 border border-gold/25 divide-y divide-gold/25 mb-20">
            {highlights.map((h, i) => (
              <div
                key={i}
                className={`flex gap-6 items-start bg-white p-10 hover:bg-warm transition-colors duration-300 ${i % 2 === 0 ? "md:border-r md:border-gold/25" : ""}`}
              >
                <span className="font-display text-5xl font-light text-gold leading-none flex-shrink-0 min-w-[72px]">{h.n}</span>
                <p className="font-body text-sm text-muted leading-relaxed pt-2">{h.text}</p>
              </div>
            ))}
          </div>
  
          {/* Testimonial */}
          <div className="relative bg-navy max-w-3xl mx-auto px-16 py-20 text-center text-white">
            <div className="absolute -top-3 -left-3 right-3 bottom-3 border border-gold/25 pointer-events-none" />
            <span className="block font-display text-[96px] leading-[0.75] text-gold/30 mb-6">"</span>
            <blockquote className="font-display italic text-xl md:text-2xl font-light leading-[1.6] text-white/90 mb-10">
              Ever since I hired Nick as my People & Culture coach, my life has been more
              exciting and less stressful. Our hotel business is growing, and I have a plan
              to make it grow even more.
            </blockquote>
            <div className="w-12 h-px bg-gold mx-auto mb-6" />
            <p className="font-body text-[9px] tracking-[0.28em] uppercase text-gold">Managing Director</p>
            <p className="font-body text-xs text-white/40 mt-1 italic">A Rosewood Hotel</p>
          </div>
        </div>
      </section>
    );
  }
  