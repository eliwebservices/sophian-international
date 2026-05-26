const reasons = [
    { title: "Quality Executive Search", desc: "We work with a pre-qualified network of leaders we have known for 5–15+ years, staying connected as their careers progress — so we can move quickly with trusted talent." },
    { title: "Industry Knowledge", desc: "As a hospitality specialist, we track market movements and maintain direct relationships across the sector — backed by 20+ years of experience." },
    { title: "Regional Expertise", desc: "Founded in Beijing, we cover Greater China end-to-end, supporting hotels and hospitality groups across key markets nationwide." },
    { title: "Global Reach", desc: "While we prioritise Asia experience, our network is globally mobile — enabling international search and cross-border placements." },
    { title: "Local Talent Strength", desc: "Strong access to Chinese-speaking hoteliers, Asia-based leaders, and expatriate executives with proven regional track records." },
  ];
  
  export default function SearchWhySophian() {
    return (
      <section className="bg-cream py-28 px-6">
        <div className="max-w-6xl mx-auto">
  
          {/* Header */}
          <div className="text-center mb-20">
            <p className="font-display text-[9px] md:text-[14px] font-semibold tracking-[0.35em] uppercase text-gold mb-5">
              Why Sophian
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-navy leading-[1.12] mb-6">
              The Sophian Difference
            </h2>
            <div className="w-12 h-px bg-gold mx-auto mb-8" />
            <p className="font-body text-sm text-muted leading-relaxed max-w-3xl mx-auto">
              Sophian International was founded in Beijing with a singular focus: precision executive
              search for the hospitality properties that hold the highest standards in the world.
              Two decades on, that focus has never changed.
            </p>
          </div>
  
          {/* Reasons */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0 border border-gold/15 mb-20">
            {reasons.map((r, i) => (
              <div
                key={r.title}
                className={[
                  "p-10 border-gold/15 hover:bg-white/[0.05] transition-colors duration-300",
                  i < reasons.length - 1 ? "border-b md:border-b-0 md:border-r" : "",
                ].join(" ")}
              >
                <div className="w-6 h-px bg-gold mb-5" />
                <h3 className="font-display text-xl font-light text-navy mb-4">{r.title}</h3>
                <p className="font-body text-sm text-muted leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
  
          {/* Quote */}
          <div className="relative border border-gold/20 p-12 md:p-16 max-w-3xl mx-auto text-center">
            <span className="block font-display text-[72px] leading-[0.75] text-gold/25 mb-4">"</span>
            <p className="font-display italic text-xl md:text-2xl font-light text-muted leading-relaxed mb-6">
              Modernisation of recruitment processes is no longer optional — it's essential for
              attracting and retaining the leaders who will define the future of luxury hospitality.
            </p>
            <div className="w-12 h-px bg-gold mx-auto mb-5" />
            <p className="font-body text-[9px] tracking-[0.25em] uppercase text-gold">
              — Sophian International
            </p>
          </div>
        </div>
      </section>
    );
  }
  