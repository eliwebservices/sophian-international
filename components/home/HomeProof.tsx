"use client";

const stats = [
  { value: "85%",  text: "of hotels saw a 30%+ decrease in voluntary turnover after engaging Nick as their People & Culture leader." },
  { value: "98%+", text: "team member engagement scores achieved — record-breaking milestones at Rosewood Beijing and Starwood Hotels." },
  { value: "100%", text: "of hotels recover their investment in people, with at least a 2× return within a year of his leadership." },
];

// Replace src values with actual brand logo images when ready
const brands = [
  { name: "Accor",     src: "/images/company-logos/accor-logo.png" },
  { name: "IHG",       src: "/images/company-logos/IHG.png" },
  { name: "Hilton",    src: "/images/company-logos/Hilton-Worldwide-Logo.png" },
  { name: "Marriott",  src: "/images/company-logos/Marriott-Logo.png" },
  { name: "Rosewood",  src: "/images/company-logos/Rosewood-logo.png" },
  { name: "Aman",      src: "/images/company-logos/Aman.png" },
  { name: "Kempinski", src: "/images/company-logos/kempinski-Logo.png" },
  { name: "Starwood",  src: "/images/company-logos/Starwood-logo.png" },
  { name: "SH",  src: "/images/company-logos/SH.jpeg" },
];

const highlights = [
  { n: "2",       text: "Successful luxury hotel pre-openings — built and led teams from construction to fully operational, profit-generating properties." },
  { n: "9",       text: "International hotel brands across Asia, Europe, and the United States." },
  { n: "13",      text: "Key cities in China — from remote island resorts (Xiamen, Sanya) to top-tier metros (Beijing, Shanghai, Guangzhou, Chengdu)." },
  { n: "18",      text: "Years of executive leadership in People & Culture, managing teams of 350 to 1,200+ employees." },
  { n: "20",      text: "Years of global hospitality experience across upscale, luxury, and ultra-luxury segments." },
  { n: "30,000+", text: "Team members managed and developed across 12 prestigious hotels." },
];

export default function HomeProof() {
  // Duplicate the brand list so the loop seams seamlessly
  const doubled = [...brands, ...brands];

  return (
    <section className="bg-white py-28 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20">
          <p className="font-display text-[9px] md:text-[14px] font-semibold tracking-[0.35em] uppercase text-gold mb-6">
            Proof of Value
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-navy leading-[1.12] mb-6">
            Grow Your People —<br />Grow Your Business Faster and Stronger
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mb-6" />
          <p className="font-body text-lg leading-relaxed text-muted max-w-2xl mx-auto">
            When we work together, we clarify your mission, optimize your people strategy,
            reset your HR division to reduce voluntary turnover, find the talent that strengthens
            your team, rebuild your training system, and realign your culture.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 divide-x divide-gold/25 border border-gold/25 mb-20">
          {stats.map((s, i) => (
            <div key={i} className="bg-cream py-14 px-10 text-center">
              <p className="font-display text-6xl md:text-7xl font-light text-navy leading-none mb-5">
                {s.value}
              </p>
              <div className="w-7 h-px bg-gold mx-auto mb-5" />
              <p className="font-display text-sm leading-relaxed text-muted max-w-[200px] mx-auto">
                {s.text}
              </p>
            </div>
          ))}
        </div>

        {/* ── INFINITE BRAND CAROUSEL ── */}
        <div className="mb-6">
        <h3 className="font-display text-3xl font-light text-navy text-center mb-12">
          A Foundation of Proven Experience
        </h3>
          <p className="font-display text-[14px] font-semibold tracking-[0.3em] uppercase text-muted text-center mb-8">
            Nick Huang Our Founder Has Served as a People & Culture Leader For
          </p>
        </div>

        {/* Outer wrapper clips the overflow */}
        <div className="relative overflow-hidden mb-20 border-y border-gold/20 py-8">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          {/* Scrolling track */}
          <div
            className="flex items-center gap-16"
            style={{
              width: "max-content",
              animation: "brandScroll 28s linear infinite",
            }}
          >
            {doubled.map((brand, i) => (
              <div
                key={`${brand.name}-${i}`}
                className="flex items-center justify-center flex-shrink-0 h-10 px-4 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                style={{ minWidth: "120px" }}
              >
                <img
                  src={brand.src}
                  alt={brand.name}
                  className="max-h-8 max-w-[110px] w-auto object-contain"
                  onError={(e) => {
                    // Fallback to text if image fails to load
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                      e.currentTarget.style.display = "none";
                      parent.innerHTML = `<span style="font-family:'DM Sans',sans-serif;font-size:13px;letter-spacing:0.15em;color:#022741;opacity:0.5;text-transform:uppercase;">${brand.name}</span>`;
                    }
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Keyframe for the carousel */}
        <style>{`
          @keyframes brandScroll {
            from { transform: translateX(0); }
            to   { transform: translateX(-50%); }
          }
        `}</style>

        {/* Highlights */}
        {/* <h3 className="font-display text-3xl font-light text-navy text-center mb-12">
          A Foundation of Proven Experience
        </h3> */}
        <div className="grid md:grid-cols-2 border border-gold/25 divide-y divide-gold/25 mb-20">
          {highlights.map((h, i) => (
            <div
              key={i}
              className={`flex gap-6 items-start bg-white p-10 hover:bg-cream transition-colors duration-300 ${i % 2 === 0 ? "md:border-r md:border-gold/25" : ""}`}
            >
              <span className="font-display text-5xl font-light text-gold leading-none flex-shrink-0 min-w-[72px]">
                {h.n}
              </span>
              <p className="font-body text-base text-muted leading-relaxed pt-2">{h.text}</p>
            </div>
          ))}
        </div>

        {/* ── TESTIMONIAL + IMAGE ── */}
        <div className="grid md:grid-cols-2 border border-gold/25 overflow-hidden">

          {/* Image — left */}
          <div className="relative overflow-hidden min-h-[400px]">
            <img
              src="https://images.rosewoodhotels.com/is/image/rwhg/rosewood-beijing-jiao-tu-sons-of-dragon-hotel-entrance-2"
              alt="Luxury hospitality scene"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-navy/20" />
          </div>

          {/* Testimonial — right */}
          <div className="relative bg-cream px-14 py-16 flex flex-col justify-center">
            <div className="absolute top-0 left-0 w-1 h-full bg-gold" />
            <span className="block font-body text-[80px] leading-[0.75] text-gold/25 mb-5">"</span>
            <blockquote className="font-body text-xl md:text-2xl italic font-light leading-[1.6] text-navy/80 mb-10">
              Ever since I hired Nick as my People & Culture coach, my life has been more
              exciting and less stressful. Our hotel business is growing, and I have a plan
              to make it grow even more.
            </blockquote>
            <div className="w-12 h-px bg-gold mb-6" />
            <p className="font-display text-[9px] font-semibold tracking-[0.28em] uppercase text-gold">
              Managing Director
            </p>
            <p className="font-body text-sm text-muted mt-1 italic">A Rosewood Hotel</p>
          </div>
        </div>
      </div>
    </section>
  );
}
