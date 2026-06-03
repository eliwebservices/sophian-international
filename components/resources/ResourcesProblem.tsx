const items = [
    "You work hard, but your next career step feels unclear",
    "Your resume lists a lot of experience, yet doesn't open doors",
    "You're unsure whether to stay, move on, or reposition yourself",
    "You've attended trainings, but none seem tailored to you",
    "You want honest feedback, not generic advice",
  ];
  
  export default function ResourcesProblem() {
    return (
      <section className="bg-white py-28 px-6">
        <div className="max-w-3xl mx-auto">
  
          <div className="text-center mb-14">
            <p className="font-display text-[9px] md:text-[14px] font-semibold tracking-[0.4em] uppercase text-gold mb-6">
              The Problem
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-na leading-[1.12] mb-6">
              If this feels familiar,<br />
              you're in the right place
            </h2>
            <div className="w-12 h-px bg-gold mx-auto mb-8" />
            <p className="font-body text-sm text-muted leading-relaxed">
              If you've been working in the hotel industry for years, you may be feeling stuck
              in ways that are hard to explain.
            </p>
          </div>
  
          {/* Problem list */}
          <div className="flex flex-col gap-px bg-gold/10 mb-14">
            {items.map((item, i) => (
              <div
                key={i}
                className="bg-white/[0.04] p-6 flex items-center gap-4 hover:bg-white/[0.08] transition-colors duration-300"
              >
                <span className="text-gold flex-shrink-0 mt-0.5 font-display text-lg">—</span>
                <p className="font-body text-sm text-muted leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
  
          {/* Closing statement */}
          <div className="border border-gold/20 p-10 text-center">
            <p className="font-display text-xl md:text-2xl font-light text-muted leading-relaxed">
              You're not lacking effort or commitment.<br />
              You're missing <span className="text-gold">clear perspective</span>.
            </p>
          </div>
        </div>
      </section>
    );
  }
  