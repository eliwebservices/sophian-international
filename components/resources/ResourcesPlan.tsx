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
    <section className="bg-cream py-28 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-display text-[9px] md:text-[14px] font-semibold tracking-[0.4em] uppercase text-gold mb-6">
            The Plan
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-navy leading-[1.12] mb-6">
            One Free Career<br />Clarity Support Session
          </h2>
          <div className="w-12 h-px bg-gold mx-auto" />
        </div>

        {/* Split — image left, offerings right */}
        <div className="grid md:grid-cols-2 gap-px mb-14">

          {/* Image — left */}
          <div className="relative overflow-hidden min-h-[480px]">
            <img
              src="/images/nick-training-1-hotel.jpg"
              alt="Career clarity consultation"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-navy/40" />

            {/* Overlay label */}
            {/* <div className="absolute bottom-8 left-8 right-8">
              <div className="border-l-2 border-gold pl-5">
                <p className="font-display text-[9px] font-semibold tracking-[0.3em] uppercase text-gold mb-2">
                  What's Included
                </p>
                <p className="font-body text-base italic text-white/80 leading-relaxed">
                  Only what is most relevant and useful for you — nothing more.
                </p>
              </div>
            </div> */}
          </div>

          {/* Offerings — right */}
          <div className="flex flex-col">
            {offerings.map((o, i) => (
              <div key={i} className="flex items-start gap-5 px-10 py-8">
                <span className="font-display text-2xl font-light text-gold/25 flex-shrink-0 w-8 mt-1">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="font-display text-base font-light text-navy mb-2">
                    {o.title}
                  </h3>
                  <div className="w-5 h-px bg-gold mb-3" />
                  <p className="font-body text-sm text-muted leading-relaxed">
                    {o.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Closing quote */}
        <div className="border border-gold/20 p-10 text-center">
          <p className="font-display text-lg md:text-xl font-light text-muted leading-relaxed">
            Not everything at once. Only what is{" "}
            <span className="text-gold">most relevant and useful for you</span>.
          </p>
        </div>
      </div>
    </section>
  );
}
