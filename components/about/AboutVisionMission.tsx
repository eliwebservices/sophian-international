const items = [
    {
      label: "Our Vision",
      body: "Become a globally respected People & Culture partner for mission-driven hospitality brands.",
      quote: "Where there is no vision, the people perish.",
      cite: "Proverbs 29:18",
    },
    {
      label: "Our Mission",
      body: "Transform people and culture in hospitality — helping organizations hire right leaders, train teams to higher standards, and shape winning cultures.",
      quote: "The mission of leadership is to add value to others.",
      cite: "John C. Maxwell",
    },
    {
      label: "Our Values",
      body: "We deliver the promises of being Purposeful, Authentic, and Transformative.",
      quote: "Be transformed by the renewing of your mind.",
      cite: "Romans 12:2",
    },
  ];
  
  export default function AboutVisionMission() {
    return (
      <section className="bg-cream py-28 px-6 pb-0">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 divide-x divide-gold/25 border border-gold/25">
            {items.map((item) => (
              <div key={item.label} className="bg-white p-12 flex flex-col">
                <p className="font-body text-[14px] tracking-[0.35em] uppercase text-gold mb-5">
                  {item.label}
                </p>
                <div className="w-8 h-px bg-gold mb-6" />
                <p className="font-display text-lg font-light text-navy leading-relaxed mb-8 flex-1">
                  {item.body}
                </p>
                <div className="border-t border-gold/20 pt-6">
                  <blockquote className="font-display italic text-sm text-muted leading-relaxed mb-3">
                    "{item.quote}"
                  </blockquote>
                  <p className="font-body font-bold text-[8px] tracking-[0.3em] uppercase text-gold">
                    — {item.cite}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  