export default function TrainingWhoWeAre() {
  return (
    <section className="bg-cream py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="font-display text-[9px] md:text-[14px] font-semibold tracking-[0.35em] uppercase text-gold mb-5 text-center">
          Who We Are
        </p>
        <div className="w-12 h-px bg-gold mb-12 mx-auto" />

        <h2 className="font-display text-4xl md:text-5xl font-light text-navy leading-[1.12] mb-10 text-center">
          Empowering Service &<br />
          Leadership Excellence
        </h2>

        {/* Body copy + image side by side */}
        <div className="grid md:grid-cols-2 gap-px bg-gold/15 mb-px">
          {/* Text */}
          <div className="bg-cream p-10 flex flex-col justify-center space-y-5">
            <p className="font-body text-sm text-muted leading-relaxed">
              Sophian International is a specialist hospitality learning and
              culture solutions provider. We partner with hotels and hospitality
              organizations to design and embed training frameworks, service
              standards, and leadership capabilities that translate into
              measurable business performance.
            </p>
            <p className="font-body text-sm text-muted leading-relaxed">
              Our work goes beyond program delivery. We build integrated systems
              — aligning organizational culture, service behaviors, and talent
              development into a coherent whole that operates sustainably long
              after our engagement ends.
            </p>
          </div>

          {/* Image */}
          <div className="relative overflow-hidden min-h-[360px] group">
            <img
              src="/images/nick-training-with-mic.jpg"
              alt="Luxury hotel team excellence"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-navy/20" />
          </div>
        </div>

        {/* Vision / Mission */}
        <div className="grid md:grid-cols-2 gap-px bg-gold/15 mt-5">
          <div className="bg-white p-12">
            <p className="font-display text-[9px] md:text-[14px] font-semibold tracking-[0.35em] uppercase text-gold mb-5">
              Our Vision
            </p>
            <div className="w-8 h-px bg-gold mb-5" />
            <p className="font-body text-sm text-muted leading-relaxed">
              To redefine the standard for people development in hospitality —
              creating environments where every individual has the pathway and
              the power to realize their full potential.
            </p>
          </div>
          <div className="bg-navy p-12">
            <p className="font-display text-[9px] md:text-[14px] font-semibold tracking-[0.35em] uppercase text-gold mb-5">
              Our Mission
            </p>
            <div className="w-8 h-px bg-gold mb-5" />
            <p className="font-body text-sm text-white/60 leading-relaxed">
              We help hospitality teams deliver authentic service by building
              the skills, confidence, and leadership mindset that support both
              personal growth and lasting business success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
