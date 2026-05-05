const pillars = [
  {
    num: "01",
    title: "Here to Serve",
    desc: "We are designed to serve all stakeholders with love. We possess full passion for serving people and make authentic connections with every client we engage.",
    image: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=900&q=85&fit=crop",
    reverse: false,
  },
  {
    num: "02",
    title: "True Partners",
    desc: "We add value in three dimensions: helping you find the right executives, building your team, and shaping your culture. We bring practical, creative solutions to real-world challenges.",
    image: "https://images.unsplash.com/photo-1468276311594-df7cb65d8df6?w=900&q=85&fit=crop",
    reverse: true,
  },
  {
    num: "03",
    title: "Your Game Changer",
    desc: "We enable your people and culture to reach new heights. We strive for excellence, value, and significance — delivering practical wisdom that brings life-changing results.",
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=900&q=85&fit=crop",
    reverse: false,
  },
];

export default function AboutWhoWeAre() {
  return (
    <section className="bg-cream py-28 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-20">
          <p className="font-display text-[9px] font-semibold tracking-[0.35em] uppercase text-gold mb-5">
            Who We Are
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-navy leading-[1.12] mb-6">
            Your People & Culture Partner
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mb-8" />
          <p className="font-display text-sm text-muted leading-relaxed max-w-3xl mx-auto">
            We lead the way in creating people-first experiences, making a difference in where
            you are going and how you get there.
          </p>
        </div>

        <div className="flex flex-col border border-gold/20">
          {pillars.map((p, i) => (
            <div
              key={p.num}
              className={`grid md:grid-cols-2 h-[420px] ${i < pillars.length - 1 ? "border-b border-gold/20" : ""}`}
            >
              {/* Text */}
              <div
                className={[
                  "flex flex-col justify-center px-12 py-10 overflow-hidden",
                  p.reverse ? "md:order-2" : "md:order-1",
                ].join(" ")}
              >
                <p className="font-display text-[64px] font-light text-navy/10 leading-none mb-1 select-none">
                  {p.num}
                </p>
                <h3 className="font-display text-3xl font-light text-navy mb-4">{p.title}</h3>
                <div className="w-10 h-px bg-gold mb-5" />
                <p className="font-body text-lg text-muted leading-relaxed">{p.desc}</p>
              </div>

              {/* Image — same fixed height as the row */}
              <div
                className={[
                  "relative overflow-hidden",
                  p.reverse ? "md:order-1" : "md:order-2",
                ].join(" ")}
              >
                <img
                  src={p.image}
                  alt={p.title}
                  className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-navy/15" />
              </div>
            </div>
          ))}
        </div>

        <p className="font-display text-[11px] font-semibold tracking-[0.4em] uppercase text-muted text-center mt-16">
          —— Think Globally, Act Locally ——
        </p>
      </div>
    </section>
  );
}
