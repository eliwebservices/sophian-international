const steps = [
    {
      n: "1",
      title: "We Confirm Receipt",
      body: "You'll get a short confirmation, and a real person reviews your message.",
    },
    {
      n: "2",
      title: "Brief Discovery Call",
      body: "A 30-minute call to clarify scope, urgency, and success criteria.",
    },
    {
      n: "3",
      title: "Clear Next Step",
      body: "We'll recommend the best path — a proposal, a short diagnostic, or a search/training plan.",
    },
  ];
  
  export default function ContactNextSteps() {
    return (
      <section className="bg-white py-28 px-6">
        <div className="max-w-6xl mx-auto">
  
          <div className="text-center mb-16">
            <p className="font-display text-[9px] md:text-[14px] font-semibold tracking-[0.4em] uppercase text-gold mb-6">
              What Happens Next
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-navy leading-[1.12] mb-6">
              After you <span className="italic">reach out</span>
            </h2>
            <div className="w-12 h-px bg-gold mx-auto" />
          </div>
  
          <div className="grid md:grid-cols-3 gap-px bg-gold/15">
            {steps.map((s) => (
              <div
                key={s.n}
                className="group bg-cream p-14 text-center hover:bg-navy transition-colors duration-500"
              >
                <p className="font-display text-[80px] font-light text-navy/10 group-hover:text-white/10 leading-none mb-5 transition-colors duration-500">
                  {s.n}
                </p>
                <h3 className="font-display text-2xl font-light text-navy group-hover:text-white mb-4 transition-colors duration-500">
                  {s.title}
                </h3>
                <div className="w-6 h-px bg-gold mx-auto mb-5" />
                <p className="font-body text-sm text-muted group-hover:text-white/60 leading-relaxed transition-colors duration-500">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  