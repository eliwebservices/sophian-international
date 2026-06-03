import Link from "next/link";

const pathways = [
  {
    num: "01",
    title: "Appointing Senior Leadership",
    body: "You've lost a key leader — or you know the current one isn't right. The role is too senior to get wrong, and the cost of another failed appointment is measured in years, not months.",
    prompts: [
      "Has this role been filled and vacated more than once in three years?",
      "Is there misalignment between owner expectations and operational reality?",
      "Does the brand mandate a profile the market can't supply?",
      "Are you hiring for today's problem or tomorrow's positioning?",
    ],
    closing:
      "Sophian begins with a confidential leadership audit — mapping the role against the asset's trajectory, ownership structure, and market position before a single candidate is considered.",
    href: "/executive-search",
    image: "/images/nick-training-with-mic.jpg",
    alt: "Senior leadership appointment",
  },
  {
    num: "02",
    title: "Training Teams to Standards",
    body: "Standards exist on paper. Delivery falls short in practice. Guest feedback is inconsistent. The gap between brand promise and daily execution widens quietly — until it becomes visible in reviews, revenue, and retention.",
    prompts: [
      "Are service standards documented but not embedded in daily behavior?",
      "Does training happen once, then disappear?",
      "Is middle management equipped to coach, or only to manage tasks?",
      "Do guest complaints cluster around the same failure points?",
    ],
    closing:
      "Sophian conducts a standards gap analysis on-property, then designs role-specific training architectures that integrate into existing operations — not around them.",
    href: "/corporate-training",
    image: "/images/service-culture.jpg",
    alt: "Team training and standards",
  },
  {
    num: "03",
    title: "Shaping People Strategy & Systems",
    body: "The hotel functions. But talent decisions are reactive. There is no succession framework, no structured development pipeline, and no alignment between people investment and commercial outcomes.",
    prompts: [
      "Is your people strategy written — or assumed?",
      "Can you identify your next three internal promotions today?",
      "Does your HR function operate strategically, or administratively?",
    ],
    closing:
      "Sophian builds people infrastructure — from org design and succession planning to performance frameworks — that ties directly to the asset's commercial strategy and ownership objectives.",
    href: "/hr-consulting",
    image: "/images/ambassadors.png",
    alt: "People strategy and systems",
  },
];

export default function ContactPathways() {
  return (
    <section className="bg-white py-28 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-display text-[9px] md:text-[14px] font-semibold tracking-[0.4em] uppercase text-gold mb-6">
            Engagement Pathways
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-navy leading-[1.12] mb-6">
            Three ways we create value
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mb-6" />
          <p className="font-body text-sm text-muted leading-relaxed max-w-2xl mx-auto">
            Each pathway begins with a diagnostic — not a pitch. We determine fit before
            proposing scope.
          </p>
        </div>

        {/* Pathway cards */}
        <div className="flex flex-col gap-px bg-gold/15">
          {pathways.map((p, index) => (
            <article
              key={p.num}
              className={[
                "grid md:grid-cols-2 min-h-[420px]",
                // Alternate: even index = image left, odd = image right
                index % 2 !== 0 ? "md:[direction:rtl]" : "",
              ].join(" ")}
            >
              {/* Image */}
              <div
                className="relative overflow-hidden group min-h-[300px] md:min-h-0"
                style={{ direction: "ltr" }}
              >
                <img
                  src={p.image}
                  alt={p.alt}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-navy/30" />

                {/* Number badge */}
                {/* <div className="absolute top-6 left-6 bg-navy/70 backdrop-blur-sm px-4 py-2">
                  <p className="font-display text-lg font-light text-gold leading-none">
                    {p.num}
                  </p>
                </div> */}

                {/* Title overlay at bottom */}
                {/* <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="font-display text-2xl md:text-3xl font-light text-white leading-snug">
                    {p.title}
                  </h3>
                </div> */}
              </div>

              {/* Content */}
              <div
                className="bg-white p-10 md:p-14 flex flex-col justify-center space-y-6"
                style={{ direction: "ltr" }}
              >
                <h3 className="font-display text-2xl md:text-3xl font-light text-navy">
                  {p.title}
                </h3>
                <p className="font-body text-sm text-muted leading-relaxed">{p.body}</p>

                <div>
                  <p className="font-display text-[9px] font-semibold tracking-[0.35em] uppercase text-gold mb-4">
                    Diagnostic Prompts
                  </p>
                  <ul className="flex flex-col gap-2.5 list-none p-0 m-0">
                    {p.prompts.map((prompt) => (
                      <li
                        key={prompt}
                        className="flex gap-3 font-body text-sm text-[#1a1a1a] leading-relaxed"
                      >
                        <span className="text-gold flex-shrink-0">—</span>
                        <span>{prompt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="font-display italic text-base text-muted leading-relaxed border-l-2 border-gold/40 pl-5">
                  {p.closing}
                </p>

                <Link
                  href={p.href}
                  className="inline-flex items-center gap-2 font-display text-[9px] font-semibold tracking-[0.3em] uppercase text-navy hover:text-gold transition-colors duration-300 no-underline group"
                >
                  Learn More
                  {/* <span className="group-hover:translate-x-1 transition-transform duration-300">→</span> */}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
