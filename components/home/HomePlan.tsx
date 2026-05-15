const steps = [
  { n: "01", title: "Schedule a Call",  body: "In a thirty-minute intake call, we'll discuss what's holding you back and where you want your people and culture to grow. We can also meet in person." },
  { n: "02", title: "Get a Plan",       body: "Together we craft a proven strategy and plan for how we'll grow your business. Transformation is much easier with a plan — and we'll show you yours." },
  { n: "03", title: "Implement & Win",  body: "Execute a plan proven to work. You'll be amazed at how confidence rises and overwhelm subsides. We're with you every step of the way." },
];

export default function HomePlan() {
  return (
    <section className="bg-cream py-28 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-20">
          <p className="font-display text-[9px] md:text-[14px] font-semibold tracking-[0.35em] uppercase text-gold mb-6">
            The Plan
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-navy leading-[1.12] mb-4">
            Working with a Coach is Easy
          </h2>
          <p className="font-body text-xl text-muted mb-6">
            Three Steps to Your People & Culture Success
          </p>
          <div className="w-12 h-px bg-gold mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-gold/15 mb-16">
          {steps.map((s, i) => (
            <div
              key={i}
              className="group bg-white p-14 text-center hover:bg-navy transition-colors duration-500"
            >
              <p className="font-display text-[80px] font-light text-navy/10 group-hover:text-white/10 leading-none mb-6 transition-colors duration-500">
                {s.n}
              </p>
              <h3 className="font-display text-2xl font-light text-navy group-hover:text-white mb-4 transition-colors duration-500">
                {s.title}
              </h3>
              <div className="w-6 h-px bg-gold mx-auto mb-5 group-hover:w-12 transition-all duration-500" />
              <p className="font-display text-sm text-muted group-hover:text-white/60 leading-relaxed transition-colors duration-500">
                {s.body}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#contact"
            className="font-display text-[9px] md:text-[10px] font-semibold tracking-[0.28em] uppercase border border-navy text-navy px-10 py-4 hover:bg-navy hover:text-white transition-all duration-300 no-underline inline-flex items-center gap-3"
          >
            Book Your Discovery Call Now
          </a>
        </div>
      </div>
    </section>
  );
}
