const sectors = [
  {
    number: "01",
    title: "Luxury Hotels & Resorts Groups",
    desc: "Our clients are palaces, 5-star luxury hotels and resorts, small to medium-sized ultra-luxury groups, as well as internationally renowned luxury and ultra-luxury hospitality companies.",
    image: "https://www.starwoodhotels.com/sites/default/files/styles/650x556/public/2024-04/Lobby2_Sasha_Scherg-1201x799-779f864.webp?h=1148e630&itok=VBRFFq-f",
    alt: "Luxury hotel lobby",
  },
  {
    number: "02",
    title: "High-End Lifestyle Standalone Restaurant Groups",
    desc: "We work with high-end lifestyle and fine dining restaurant groups with a footprint in cosmopolitan cities around the world. Leaders in concept creation, they offer an authentic dining experience: innovative approach, strong culinary concepts, outstanding design, and world-famous chefs.",
    image: "https://www.starwoodhotels.com/sites/default/files/2024-02/Rectangle%20134.png",
    alt: "Fine dining restaurant",
  },
];

export default function SearchWhoWeAre() {
  return (
    <section className="bg-white py-28 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-display text-[9px] md:text-[14px] font-semibold tracking-[0.35em] uppercase text-gold mb-5">
            Who We Are
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-navy leading-[1.12] mb-6">
            Luxury Hospitality Executive Search
          </h2>
          <div className="w-12 h-px bg-gold mx-auto" />
        </div>

        {/* Body copy */}
        <div className="max-w-3xl mx-auto text-center space-y-5 mb-20">
          <p className="font-body text-sm text-muted leading-relaxed">
            We are a specialized executive search firm focused on sourcing, identifying, and placing
            exceptional leaders in the luxury and ultra-luxury hospitality market.
          </p>
          <p className="font-body text-sm text-muted leading-relaxed">
            We primarily serve high-end hotel groups and standalone lifestyle restaurant groups that
            demand the best, using our industry experience, global network, and the proven Sophian
            precision strategy to appoint top leaders who truly stand out in key leadership positions.
          </p>
          <p className="font-body text-sm text-muted leading-relaxed">
            Our candidates are hospitality executives with proven track records, holding senior roles
            at prestigious hospitality groups or iconic properties. We excel in identifying leaders
            who align with the unique culture and ethos of our luxury clientele.
          </p>
        </div>

        {/* Sectors */}
        <p className="font-display text-[9px] md:text-[14px] font-semibold tracking-[0.35em] uppercase text-gold text-center mb-10">
          Our Niche Sectors
        </p>

        <div className="grid md:grid-cols-2 gap-px bg-gold/15">
          {sectors.map((s) => (
            <div key={s.number} className="bg-cream flex flex-col group">

              {/* Image */}
              <div className="relative overflow-hidden aspect-[16/9]">
                <img
                  src={s.image}
                  alt={s.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Number overlay on image */}
                <div className="absolute top-5 left-5 bg-navy/70 backdrop-blur-sm px-4 py-2">
                  <p className="font-display text-lg font-light text-gold leading-none">
                    {s.number}
                  </p>
                </div>
                <div className="absolute inset-0 bg-navy/10 group-hover:bg-navy/5 transition-colors duration-500" />
              </div>

              {/* Content */}
              <div className="p-10 flex flex-col flex-1">
                <h3 className="font-display text-2xl font-light text-navy mb-4">{s.title}</h3>
                <div className="w-8 h-px bg-gold mb-5" />
                <p className="font-body text-sm text-muted leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
