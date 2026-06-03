const steps = [
    {
      n: "01",
      title: "Reach Out",
      body: "Contact me via email, WeChat, or the form below — whichever feels easiest.",
    },
    {
      n: "02",
      title: "Share Briefly",
      body: "A short note about your background and the current challenge you're sitting with.",
    },
    {
      n: "03",
      title: "Receive Guidance",
      body: "Within my availability, I'll provide feedback, resources, or perspective tailored to you.",
    },
  ];
  
  export default function ResourcesSteps() {
    return (
      <section id="how" className="bg-white py-28 px-6">
        <div className="max-w-6xl mx-auto">
  
          <div className="text-center mb-16">
            <p className="font-display text-[9px] md:text-[14px] font-semibold tracking-[0.4em] uppercase text-gold mb-6">
              Clear Steps
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-navy leading-[1.12] mb-6">
              How it works
            </h2>
            <div className="w-12 h-px bg-gold mx-auto" />
          </div>
  
          <div className="grid md:grid-cols-3 gap-px bg-gold/15">
            {steps.map((s) => (
              <div
                key={s.n}
                className="group bg-cream p-14 text-center"
              >
                <p className="font-display text-[80px] font-light text-navy/10 leading-none mb-5">
                  {s.n}
                </p>
                <h3 className="font-display text-2xl font-light text-navy mb-4">
                  {s.title}
                </h3>
                <div className="w-6 h-px bg-gold mx-auto mb-5 group-hover:w-12 transition-all duration-500" />
                <p className="font-body text-sm text-muted leading-relaxed">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  