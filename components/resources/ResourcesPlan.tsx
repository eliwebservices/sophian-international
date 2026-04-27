const offerings = [
    {
      title: "Industry Resources",
      body: "Selected hospitality industry resources or training references relevant to your situation.",
    },
    {
      title: "Career Direction Feedback",
      body: "Honest perspective on your trajectory, based on your background and the current market.",
    },
    {
      title: "Resume Structure & Positioning",
      body: "A focused review of how your story is currently presented — and where it could be sharper.",
    },
    {
      title: "Your 1–2 Most Pressing Questions",
      body: "Direct answers to the questions weighing on you most — not generic career advice.",
    },
  ];
  
  export default function ResourcesPlan() {
    return (
      <section className="bg-navy py-28 px-6">
        <div className="max-w-6xl mx-auto">
  
          <div className="text-center mb-16">
            <p className="font-body text-[9px] tracking-[0.4em] uppercase text-gold mb-6">
              The Plan
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-white leading-[1.12] mb-6">
              One Free Career<br />
              <span className="italic">Clarity Support Session</span>
            </h2>
            <div className="w-12 h-px bg-gold mx-auto" />
          </div>
  
          <div className="grid md:grid-cols-2 gap-px bg-gold/10 mb-14">
            {offerings.map((o, i) => (
              <div
                key={i}
                className="group bg-white/[0.04] p-12 hover:bg-white/[0.07] transition-colors duration-500 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gold scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                <p className="font-display text-[48px] font-light text-gold/15 leading-none mb-3">
                  0{i + 1}
                </p>
                <h3 className="font-display text-xl font-light text-white mb-4">{o.title}</h3>
                <div className="w-8 h-px bg-gold/40 mb-5" />
                <p className="font-body text-sm text-white/55 leading-relaxed">{o.body}</p>
              </div>
            ))}
          </div>
  
          <div className="border border-gold/20 p-10 text-center">
            <p className="font-display italic text-lg md:text-xl font-light text-white/80 leading-relaxed">
              Not everything at once. Only what is{" "}
              <span className="text-gold">most relevant and useful for you</span>.
            </p>
          </div>
        </div>
      </section>
    );
  }
  