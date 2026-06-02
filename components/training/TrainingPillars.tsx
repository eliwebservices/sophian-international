const pillars = [
  {
    number: "01",
    title: "Organizational Culture",
    desc: "Defining and embedding the core values that align team mindset with brand mission — creating workplaces where purpose drives performance.",
    image: "/images/nick-training-1-hotel.jpg",
    alt: "Team culture and collaboration",
  },
  {
    number: "02",
    title: "Service Culture",
    desc: "Establishing the behavioral non-negotiables that ensure every guest encounters world-class hospitality, consistently and authentically.",
    image: "/images/service-culture.jpg",
    alt: "Luxury hospitality service",
  },
  {
    number: "03",
    title: "Performance & Training Systems",
    desc: "Building the operational infrastructure for excellence — from hotel-wide frameworks to department-level SOPs that turn daily work into continuous learning.",
    image: "/images/home-strip-1.jpg",
    alt: "Team training and development",
  },
  {
    number: "04",
    title: "Talent Development",
    desc: "Identifying, developing, and grooming high-potential team members for sustainable internal succession and leadership continuity.",
    image: "/images/home-strip-5.jpg",
    alt: "Leadership talent development",
  },
];

export default function TrainingPillars() {
  return (
    <section className="bg-white py-28 px-6">
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-16">
          <p className="font-display text-[9px] md:text-[14px] font-semibold tracking-[0.35em] uppercase text-gold mb-5">
            Our Strategic Focus
          </p>
          <div className="w-12 h-px bg-gold mx-auto mb-6" />
          <h2 className="font-display text-4xl md:text-5xl font-light text-navy leading-[1.12] mb-5">
            Four Pillars of a High-Performing Organization
          </h2>
          <p className="font-body text-sm text-muted leading-relaxed max-w-2xl mx-auto">
            Every engagement is structured around four interdependent pillars. Lasting
            transformation requires all four working in concert.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-gold/15">
          {pillars.map((p) => (
            <div
              key={p.number}
              className="group bg-white flex flex-col"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[16/9]">
                <img
                  src={p.image}
                  alt={p.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-navy/20 group-hover:bg-navy/10 transition-colors duration-500" />

                {/* Number badge */}
                {/* <div className="absolute top-5 left-5 bg-navy/70 backdrop-blur-sm px-4 py-2">
                  <p className="font-display text-lg font-light text-gold leading-none">
                    {p.number}
                  </p>
                </div> */}
              </div>

              {/* Content */}
              <div className="p-10 flex flex-col flex-1">
                <h3 className="font-display text-2xl font-light text-navy mb-4">
                  {p.title}
                </h3>
                <div className="w-8 h-px bg-gold mb-5 group-hover:w-14 transition-all duration-500" />
                <p className="font-body text-sm text-muted leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
