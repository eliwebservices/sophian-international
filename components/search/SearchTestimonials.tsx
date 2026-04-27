const testimonials = [
    {
      quote: "Sophian presented us with three candidates of exceptional calibre within four weeks. All three were appointable. That quality of shortlist is extraordinarily rare in this market.",
      author: "General Manager, Ultra-Luxury Resort, Southeast Asia",
    },
    {
      quote: "What sets Nick apart is the depth of his relationships. He doesn't find candidates — he introduces people he has known and trusted for years. That changes the entire dynamic of a senior search.",
      author: "Regional Vice President, People & Culture, International Luxury Hotel Group, Asia Pacific",
    },
    {
      quote: "Our previous searches through general agencies returned volume, not quality. Working with Sophian was a fundamentally different experience — precise, discreet, and consistently professional.",
      author: "Owner Representative, Private Luxury Property, Greater China",
    },
  ];
  
  export default function SearchTestimonials() {
    return (
      <section className="bg-navy py-28 px-6">
        <div className="max-w-5xl mx-auto">
  
          {/* Header */}
          <div className="text-center mb-20">
            <p className="font-body text-[9px] tracking-[0.35em] uppercase text-gold mb-5">
              Client Perspective
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-white leading-[1.12] mb-6">
              What Our Clients Say
            </h2>
            <div className="w-12 h-px bg-gold mx-auto mb-8" />
            <p className="font-body text-sm text-white/60 leading-relaxed max-w-3xl mx-auto">
              The following represents the calibre of results Sophian International delivers.
              We invite prospective clients to request specific references during the Discovery Briefing.
            </p>
          </div>
  
          {/* Testimonials */}
          <div className="flex flex-col gap-0 border border-gold/20">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="p-12 md:p-16 text-center border-b border-gold/20 last:border-0 hover:bg-white/[0.03] transition-colors duration-300"
              >
                <span className="block font-display text-[64px] leading-[0.75] text-gold/30 mb-4">"</span>
                <blockquote className="font-display italic text-xl md:text-2xl font-light text-white/90 leading-relaxed mb-8">
                  {t.quote}
                </blockquote>
                <div className="w-12 h-px bg-gold mx-auto mb-6" />
                <p className="font-body text-[9px] tracking-[0.25em] uppercase text-gold">
                  {t.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  