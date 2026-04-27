const steps = [
    { n: "01", title: "Schedule a Call",  body: "In a thirty-minute intake call, we'll discuss what's holding you back and where you want your people and culture to grow. We can also meet in person." },
    { n: "02", title: "Get a Plan",       body: "Together we craft a proven strategy and plan for how we'll grow your business. Transformation is much easier with a plan — and we'll show you yours." },
    { n: "03", title: "Implement & Win",  body: "Execute a plan proven to work. You'll be amazed at how confidence rises and overwhelm subsides. We're with you every step of the way." },
  ];
  
  export default function HomePlan() {
    return (
      <section className="bg-navy py-28 px-6">
        <div className="max-w-6xl mx-auto">
  
          <div className="text-center mb-20">
            <p className="font-body text-[9px] tracking-[0.35em] uppercase text-gold2 mb-6">The Plan</p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-white leading-[1.12] mb-4">
              Working with a Coach is Easy
            </h2>
            <p className="font-display italic text-xl text-white/55 mb-6">
              Three Steps to Your People & Culture Success
            </p>
            <div className="w-12 h-px bg-gold mx-auto" />
          </div>
  
          <div className="grid md:grid-cols-3 gap-px bg-gold/10 mb-16">
            {steps.map((s, i) => (
              <div key={i} className="bg-white/[0.04] p-14 text-center hover:bg-white/[0.08] transition-colors duration-500">
                <p className="font-display text-[80px] font-light text-gold/15 leading-none mb-6">{s.n}</p>
                <h3 className="font-display text-2xl font-light text-white mb-4">{s.title}</h3>
                <div className="w-6 h-px bg-gold mx-auto mb-5" />
                <p className="font-body text-sm text-white/50 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
  
          <div className="text-center">
            <a
              href="#contact"
              className="font-body text-[9px] tracking-[0.28em] uppercase bg-gold text-navy px-10 py-4 hover:bg-gold2 transition-colors duration-300 no-underline inline-flex items-center gap-3"
            >
              Book Your Free Discovery Call →
            </a>
          </div>
        </div>
      </section>
    );
  }
  