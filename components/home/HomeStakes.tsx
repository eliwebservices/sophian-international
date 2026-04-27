const stakes = [
    {
      title: "Hire Wrongly",
      items: [
        "Poor workforce planning and scheduling",
        "Ineffective HR marketing and weak employer branding",
        "Difficulty finding and hiring the right executives",
      ],
    },
    {
      title: "Train Wrongly",
      items: [
        "Lack of structured training system and development",
        "Inability to build a hotel brand and service culture",
        "Failure in talent development",
      ],
    },
    {
      title: "Retain Wrongly",
      items: [
        "High employee turnover and poor retention strategies",
        "Neglect of competitive compensation and benefits",
        "Failure to boost team and employee morale",
        "Poor employee engagement, recognition and wellbeing",
      ],
    },
  ];
  
  export default function HomeStakes() {
    return (
      <section className="bg-navy py-28 px-6">
        <div className="max-w-6xl mx-auto">
  
          {/* Header */}
          <div className="text-center mb-20">
            <p className="font-body text-[9px] tracking-[0.35em] uppercase text-gold mb-6">
              The Stakes
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-white leading-[1.12] max-w-2xl mx-auto mb-6">
              An Unclear People Strategy That Does Not Drive the Team
            </h2>
            <div className="w-12 h-px bg-gold mx-auto mb-7" />
            <p className="font-body text-sm leading-relaxed text-white/60 max-w-xl mx-auto">
              People and culture in the hospitality business often fail for one of three
              reasons. You can avoid these pitfalls.
            </p>
          </div>
  
          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-px bg-gold/10 mb-20">
            {stakes.map((s, i) => (
              <div
                key={i}
                className="group relative bg-white/[0.04] p-12 overflow-hidden hover:bg-white/[0.08] transition-colors duration-500"
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gold scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                <p className="font-display text-[64px] font-light text-gold/15 leading-none mb-4">
                  0{i + 1}
                </p>
                <p className="font-display text-2xl font-light text-gold mb-6">{s.title}</p>
                <div className="w-8 h-px bg-gold/40 mb-6" />
                <ul className="flex flex-col gap-3 list-none p-0 m-0">
                  {s.items.map((item, j) => (
                    <li key={j} className="flex gap-3 font-body text-sm text-white/60 leading-relaxed">
                      <span className="text-gold mt-0.5 flex-shrink-0">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
  
          {/* Footer CTA */}
          <div className="text-center">
            <p className="font-display italic text-lg text-white/50 max-w-lg mx-auto mb-10">
              These three issues are the root causes of most business disasters. Coaching
              will help you professionalize your operation as your business grows.
            </p>
            <a
              href="#contact"
              className="font-body text-[9px] tracking-[0.28em] uppercase border border-white/30 text-white px-10 py-4 hover:border-gold hover:text-gold transition-all duration-300 no-underline inline-flex items-center gap-3"
            >
              Schedule a Discovery Call →
            </a>
          </div>
        </div>
      </section>
    );
  }
  