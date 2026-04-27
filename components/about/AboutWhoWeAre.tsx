const pillars = [
    {
      num: "01",
      title: "Here to Serve",
      desc: "We are designed to serve all stakeholders with love. We possess full passion for serving people and make authentic connections with every client we engage.",
    },
    {
      num: "02",
      title: "True Partners",
      desc: "We add value in three dimensions: helping you find the right executives, building your team, and shaping your culture. We bring practical, creative solutions to real-world challenges.",
    },
    {
      num: "03",
      title: "Your Game Changer",
      desc: "We enable your people and culture to reach new heights. We strive for excellence, value, and significance — delivering practical wisdom that brings life-changing results.",
    },
  ];
  
  export default function AboutWhoWeAre() {
    return (
      <section className="bg-warm py-28 px-6">
        <div className="max-w-6xl mx-auto">
  
          <div className="text-center mb-16">
            <p className="font-body text-[9px] tracking-[0.35em] uppercase text-gold mb-5">
              Who We Are
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-navy leading-[1.12] mb-6">
              Your People & Culture Partner
            </h2>
            <div className="w-12 h-px bg-gold mx-auto mb-8" />
            <p className="font-body text-sm text-muted leading-relaxed max-w-3xl mx-auto">
              We lead the way in creating people-first experiences, making a difference in where
              you are going and how you get there.
            </p>
          </div>
  
          <div className="grid md:grid-cols-3 gap-px bg-gold/15">
            {pillars.map((p) => (
              <div
                key={p.num}
                className="group bg-white p-12 hover:bg-navy transition-colors duration-500"
              >
                <p className="font-display text-[64px] font-light text-navy/10 group-hover:text-white/10 leading-none mb-3 transition-colors duration-500">
                  {p.num}
                </p>
                <h3 className="font-display text-2xl font-light text-navy group-hover:text-white mb-4 transition-colors duration-500">
                  {p.title}
                </h3>
                <div className="w-8 h-px bg-gold mb-5 group-hover:w-14 transition-all duration-500" />
                <p className="font-body text-sm text-muted group-hover:text-white/60 leading-relaxed transition-colors duration-500">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
  
          <p className="font-body text-[11px] tracking-[0.4em] uppercase text-muted text-center mt-20">
            —— Think Globally, Act Locally ——
          </p>
        </div>
      </section>
    );
  }
  