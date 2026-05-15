const stakes = [
  {
    title: "Wrongly Hire",
    items: [
      "Poor workforce planning and scheduling",
      "Ineffective HR marketing and weak employer branding",
      "Difficulty finding and hiring the right executives",
    ],
    color: "bg-muted/50"
  },
  {
    title: "Wrongly Train ",
    items: [
      "Lack of structured training system and development",
      "Inability to build a hotel brand and service culture",
      "Failure in talent development",
    ],
    color: "bg-navy"
  },
  {
    title: "Wrongly Retain",
    items: [
      "High employee turnover and poor retention strategies",
      "Neglect of competitive compensation and benefits",
      "Failure to boost team and employee morale",
      "Poor employee engagement, recognition and wellbeing",
    ],
    color: "bg-gold"
  },
];

export default function HomeStakes() {
  return (
    <section className="bg-white py-28 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-20">
          <p className="font-display text-[9px] md:text-[14px] font-semibold tracking-[0.35em] uppercase text-gold mb-6">
            The Stakes
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-navy leading-[1.12] max-w-2xl mx-auto mb-6">
          People And Culture in the Hospitality Business Often Fail For One of Three
            Reasons. You Can Avoid These Pitfalls.
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mb-7" />
          <p className="font-body text-lg leading-relaxed text-muted max-w-xl mx-auto">
          An Unclear People Strategy That Does Not Drive the Team
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-gold/15 mb-20">
          {stakes.map((s, i) => (
            <div
              key={i}
              className="group bg-cream p-12 overflow-hidden relative hover:bg-navy transition-colors duration-500"
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gold scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
              <div className="w-full text-center flex justify-center rounded-full">
              <p className={`font-display text-[44px] font-light text-white/50 group-hover:text-white group-hover:border group-hover:border-white group-hover:bg-navy leading-none mb-4 transition-colors duration-500 text-center ${s.color} w-18 h-18 flex items-center justify-center rounded-full`}>
                0{i + 1}
              </p>
              </div>
              <p className="font-display text-2xl font-light text-navy group-hover:text-gold mb-6 transition-colors duration-500">
                {s.title}
              </p>
              <div className="w-8 h-px bg-gold/40 mb-6" />
              <ul className="flex flex-col gap-3 list-none p-0 m-0">
                {s.items.map((item, j) => (
                  <li key={j} className="flex gap-3 font-body text-base text-muted group-hover:text-white/70 leading-relaxed transition-colors duration-500">
                    <span className="text-gold flex-shrink-0 mt-0.5">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="font-body text-lg italic text-muted mb-9 max-w-lg mx-auto">
            These three issues are the root causes of most business disasters. Coaching
            will help you professionalize your operation as your business grows.
          </p>
          <a
            href="#contact"
            className="font-display text-[9px] md:text-[10px] font-semibold tracking-[0.28em] uppercase border border-navy text-navy px-10 py-4 hover:bg-navy hover:text-white transition-all duration-300 no-underline inline-flex items-center gap-3"
          >
            Schedule a Discovery Call
          </a>
        </div>
      </div>
    </section>
  );
}
