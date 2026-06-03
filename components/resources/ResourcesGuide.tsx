const focus = [
    "Hiring and executive selection",
    "Training and leadership development",
    "Talent evaluation and career progression",
  ];
  
  export default function ResourcesGuide() {
    return (
      <section className="bg-white py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-12 gap-16 items-center">
  
            {/* Image */}
            <div className="md:col-span-5">
              <div className="relative overflow-hidden aspect-[3/4]">
                <img
                  src="/images/nick-green.jpg"
                  alt="Nick Huang — twenty years across international hotel groups"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-navy px-8 py-5">
                  <p className="font-display text-lg font-light text-white">Nick Huang</p>
                  <p className="font-body text-[9px] tracking-[0.25em] uppercase text-gold mt-1">
                    Founder & Managing Director
                  </p>
                </div>
                <div className="absolute -top-4 -left-4 right-4 bottom-4 border border-gold/30 pointer-events-none" />
              </div>
            </div>
  
            {/* Text */}
            <div className="md:col-span-7">
              <p className="font-display text-[9px] md:text-[14px] font-semibold tracking-[0.4em] uppercase text-gold mb-6">
                The Guide
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-light text-navy leading-[1.12] mb-6">
                Two decades inside the world's most demanding hotel groups
              </h2>
              <div className="w-12 h-px bg-gold mb-8" />
              <p className="font-body text-sm text-muted leading-relaxed mb-8">
                I've spent over twenty years working in international hotel groups and the China
                market, closely involved in:
              </p>
  
              <ul className="flex flex-col gap-3 mb-10 list-none p-0 m-0">
                {focus.map((f) => (
                  <li key={f} className="flex items-center gap-3 font-body text-sm text-muted leading-relaxed">
                    <span className="text-gold flex-shrink-0 mt-0.5">—</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
  
              <blockquote className="border-l-2 border-gold/50 pl-6 py-2">
                <p className="font-display text-lg font-light text-muted leading-relaxed">
                  This page is not a sales pitch. It's an offer to provide one-time, free
                  professional clarity, based on real industry experience.
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>
    );
  }
  