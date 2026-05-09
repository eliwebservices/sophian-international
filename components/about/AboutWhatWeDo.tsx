const scenes = [
    {
      src: "/images/training-the-team.png",
      alt: "Hospitality team in a luxury hotel training session",
      caption: "Training the Team",
    },
    {
      src: "/images/advising-leaders.png",
      alt: "One-on-one executive consulting in a refined office",
      caption: "Advising Leaders",
    },
    {
      src: "/images/elevating-guest-experience.png",
      alt: "Luxury restaurant server delighting a guest",
      caption: "Elevating Guest Experience",
    },
    {
      src: "/images/serving-owners-community.png",
      alt: "Hotel owner with happy team and community",
      caption: "Serving Owners & Community",
    },
  ];
  
  export default function AboutWhatWeDo() {
    return (
      <section className="bg-white py-28 px-6">
        <div className="max-w-6xl mx-auto">
  
          <div className="text-center mb-16">
            <p className="font-display text-[9px] tracking-[0.35em] uppercase text-gold mb-5">
              What We Do
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-navy leading-[1.12] mb-6">
              Empowering Mission-Driven Hospitality
            </h2>
            <div className="w-12 h-px bg-gold mx-auto mb-8" />
            <p className="font-body text-sm text-muted leading-relaxed max-w-3xl mx-auto mb-8">
              We exist to empower mission-driven hotels and restaurants to transform their growth
              through People & Culture solutions — creating people-first experiences for employees,
              guests, owners, and the broader community.
            </p>
            <blockquote className="font-display italic text-xl md:text-2xl text-muted max-w-2xl mx-auto mb-3">
              "Love your neighbor as yourself."
            </blockquote>
            <p className="font-body text-[9px] tracking-[0.3em] uppercase text-gold">
              — Galatians 5:14
            </p>
          </div>
  
          {/* Image grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gold/10">
            {scenes.map((s) => (
              <figure key={s.caption} className="group relative overflow-hidden aspect-[4/3]">
                <img
                  src={s.src}
                  alt={s.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-navy/30 group-hover:bg-navy/10 transition-colors duration-500" />
                <figcaption className="absolute bottom-0 left-0 right-0 bg-navy/70 py-4 px-6">
                  <p className="font-body text-[9px] tracking-[0.3em] uppercase text-white font-bold">
                    {s.caption}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    );
  }
  