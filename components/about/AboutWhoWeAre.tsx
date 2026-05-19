const pillars = [
  {
    num: "01",
    title: "Here to Serve",
    desc: "We are designed to serve all stakeholders with love. We possess full passion for serving people and make authentic connections with every client we engage.",
    image: "/images/here-to-serve_.jpg",
    reverse: false,
  },
  {
    num: "02",
    title: "True Partners",
    desc: "We add value in three dimensions: helping you find the right executives, building your team, and shaping your culture. We bring practical, creative solutions to real-world challenges.",
    image: "/images/true-partner.jpg",
    reverse: true,
  },
  {
    num: "03",
    title: "Your Game Changer",
    desc: "We enable your people and culture to reach new heights. We strive for excellence, value, and significance — delivering practical wisdom that brings life-changing results.",
    image: "/images/here-to-serve.jpg",
    reverse: false,
  },
];

export default function AboutWhoWeAre() {
  return (
    <section className="bg-white py-28 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-20">
          <p className="font-display text-[9px] md:text-[14px] font-semibold tracking-[0.35em] uppercase text-gold mb-5">
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

        {/* ── THINK GLOBALLY, ACT LOCALLY ── */}
<div className="relative overflow-hidden mt-16 h-[220px] flex items-center justify-center">

{/* Background image */}
<img
  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1800&q=85&fit=crop"
  alt=""
  className="absolute inset-0 w-full h-full object-cover"
/>

{/* Overlay */}
<div className="absolute inset-0 bg-navy/65" />

{/* Decorative border frame */}
<div className="absolute top-5 left-5 right-5 bottom-5 border border-gold/25 pointer-events-none" />

{/* Content */}
<div className="relative z-10 text-center px-8">

  {/* Top decorative line */}
  <div className="flex items-center justify-center gap-4 mb-5">
    <div className="w-12 h-px bg-gold/60" />
    <div className="w-1.5 h-1.5 rounded-full bg-gold/60" />
    <div className="w-12 h-px bg-gold/60" />
  </div>

  <p className="font-display text-xl md:text-2xl font-light tracking-[0.4em] uppercase text-white">
    Think Globally
  </p>
  <p className="font-body uppercase tracking-[0.4em] italic text-md text-gold my-2">
    Act Locally
  </p>

  {/* Bottom decorative line */}
  <div className="flex items-center justify-center gap-4 mt-5">
    <div className="w-12 h-px bg-gold/60" />
    <div className="w-1.5 h-1.5 rounded-full bg-gold/60" />
    <div className="w-12 h-px bg-gold/60" />
  </div>
</div>
</div>

      </div>
    </section>
  );
}
