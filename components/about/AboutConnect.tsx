const careerImages = [
    {
      src: "/images/training-the-team.png",
      alt: "Training session",
    },
    {
      src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=85&fit=crop",
      alt: "Luxury service moment",
    },
    {
      src: "/images/serving-owners-community.png",
      alt: "Owner and community",
    },
  ];
  
  export default function AboutConnect() {
    return (
      <section className="bg-cream py-28 px-6">
        <div className="max-w-5xl mx-auto text-center">
  
          <p className="font-display text-[9px] tracking-[0.35em] uppercase text-gold mb-5">
            Let's Connect
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-navy leading-[1.12] mb-10">
            We Look Forward to<br />
            <span className="italic">Connecting With You</span>
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mb-10" />
  
          <p className="font-body text-sm text-muted leading-relaxed max-w-2xl mx-auto mb-14">
            Ready to transform your hospitality organization's people and culture? Let's start a
            conversation about how we can help you achieve lasting success.
          </p>
  
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-24">
            <a
              href="/#contact"
              className="font-body text-[9px] tracking-[0.28em] uppercase bg-navy text-white px-10 py-4 hover:bg-navy2 transition-colors duration-300 no-underline inline-flex items-center gap-3"
            >
              Get in Touch →
            </a>
            <a
              href="/#contact"
              className="font-body text-[9px] tracking-[0.28em] uppercase border border-navy text-navy px-10 py-4 hover:bg-navy hover:text-white transition-all duration-300 no-underline inline-flex items-center gap-3"
            >
              Schedule a Call
            </a>
          </div>
  
          {/* Sophian tagline */}
          <div className="border-t border-gold/25 pt-14 mb-20">
            <p className="font-display text-[9px] tracking-[0.4em] uppercase text-gold mb-3">
              Sophian International
            </p>
            <p className="font-display italic text-lg text-muted">
              People & Culture Partner for Mission-Driven Hospitality
            </p>
          </div>
  
          {/* Career image strip */}
          <p className="font-display text-[9px] tracking-[0.35em] uppercase text-gold mb-10">
            A Career Built Across World-Class Properties
          </p>
          <div className="grid md:grid-cols-3 gap-px bg-gold/15">
            {careerImages.map((img) => (
              <div key={img.alt} className="relative overflow-hidden aspect-[4/3] group">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-navy/20 group-hover:bg-navy/5 transition-colors duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  