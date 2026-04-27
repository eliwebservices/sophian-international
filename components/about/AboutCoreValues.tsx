const values = [
    {
      title: "Purposeful",
      cn: "意义",
      sub: "Serving with meaning and intention",
      desc: "We serve with clear calling, bringing meaning and intention to every engagement. Like a potter shaping clay, we approach each partnership with deliberate purpose and care.",
    },
    {
      title: "Authentic",
      cn: "本真",
      sub: "Leading with truth, integrity, and real experience",
      desc: "We lead authentically, grounded in truth, integrity, and proven real-world experience. Like clear spring water flowing from high mountains, our counsel is pure, transparent, and trustworthy.",
    },
    {
      title: "Transformative",
      cn: "新生",
      sub: "Creating lasting personal, cultural, and leadership change",
      desc: "We enable lasting transformation across people, leadership, and culture. Like a butterfly emerging from its chrysalis, we guide organizations through meaningful, beautiful change.",
    },
  ];
  
  export default function AboutCoreValues() {
    return (
      <section className="bg-navy py-28 px-6">
        <div className="max-w-6xl mx-auto">
  
          <div className="text-center mb-20">
            <p className="font-body text-[9px] tracking-[0.35em] uppercase text-gold mb-5">
              Core Values
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-white leading-[1.12] mb-6">
              Purposeful. Authentic. Transformative.
            </h2>
            <div className="w-12 h-px bg-gold mx-auto" />
          </div>
  
          <div className="grid md:grid-cols-3 gap-px bg-gold/10">
            {values.map((v) => (
              <article
                key={v.title}
                className="group bg-white/[0.04] p-12 text-center hover:bg-white/[0.08] transition-colors duration-500 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gold scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                <p className="font-display text-[64px] font-light text-gold/30 leading-none mb-4">
                  {v.cn}
                </p>
                <h3 className="font-display text-2xl font-light text-white mb-3">{v.title}</h3>
                <p className="font-body italic text-sm text-gold mb-6">{v.sub}</p>
                <div className="w-8 h-px bg-gold/30 mx-auto mb-6" />
                <p className="font-body text-sm text-white/55 leading-relaxed">{v.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  }
  