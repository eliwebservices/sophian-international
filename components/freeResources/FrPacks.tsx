"use client";

const packs = [
  {
    id: "search",
    label: "Pack A",
    title: "Fast Hire Pack",
    sub: "Executive Search",
    image: "/images/home-strip-7.jpg",
    items: [
      "Hiring Brief / Role Scorecard",
      "Behavioral Interview Kit",
      "Candidate Scoring Matrix",
      "Offer Checklist",
    ],
  },
  {
    id: "training",
    label: "Pack B",
    title: "Learning & Culture Gap Pack",
    sub: "Corporate Training",
    image: "/images/home-strip-2.jpg",
    items: [
      "Training Gap Diagnosis Scorecard",
      "Role Skills Matrix + Competency Checklist",
      "60-Day Training Priority Plan",
      "Training Effectiveness Tracker",
    ],
  },
  {
    id: "consulting",
    label: "Pack C",
    title: "HR Health Check Pack",
    sub: "HR Consulting",
    image: "/images/home-strip-5.jpg",
    items: [
      "People & Culture Self-Assessment",
      "Compliance Checklist (General Guidance)",
      "Turnover Analysis Worksheet",
      "30/60/90 Plan Template",
    ],
  },
];

export default function ResourcesPacks() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="packs" className="bg-cream py-28 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-20">
          <p className="font-display md:text-[14px] text-[9px] font-semibold tracking-[0.35em] uppercase text-gold mb-5">
            Featured Resource Packs
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-navy leading-[1.12] mb-6">
            Three Packs. One Purpose.
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mb-6" />
          <p className="font-display text-sm text-muted leading-relaxed max-w-2xl mx-auto">
            Each pack is a curated bundle of professional tools developed from real-world
            hospitality experience — ready to use, immediately practical.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-gold/15">
          {packs.map((pack) => (
            <div key={pack.id} className="bg-white flex flex-col group">

              {/* Image */}
              <div className="relative overflow-hidden h-52">
                <img
                  src={pack.image}
                  alt={pack.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-navy/35" />
                <div className="absolute top-5 left-5 bg-navy/70 backdrop-blur-sm px-3 py-1.5">
                  <p className="font-display text-[9px] font-semibold tracking-[0.2em] uppercase text-gold">
                    {pack.label}
                  </p>
                </div>
                <div className="absolute bottom-5 left-5">
                  <p className="font-display text-[9px] font-semibold tracking-[0.2em] uppercase text-gold/80 mb-1">
                    {pack.sub}
                  </p>
                  <h3 className="font-display text-xl font-light text-white">{pack.title}</h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-10 flex flex-col flex-1">
                <div className="w-8 h-px bg-gold mb-6" />
                <ul className="flex flex-col gap-3 mb-8 list-none p-0 m-0 flex-1">
                  {pack.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="text-gold flex-shrink-0 mt-0.5">→</span>
                      <span className="font-display text-sm text-muted">{item}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => scrollTo("request")}
                  className="w-full font-display text-[9px] font-semibold tracking-[0.28em] uppercase bg-navy text-white py-4 hover:bg-gold hover:text-navy transition-all duration-300 cursor-pointer border-none mt-auto"
                >
                  Get Pack Free →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}