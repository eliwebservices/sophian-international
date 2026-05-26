export default function TrainingWhoWeAre() {
    return (
      <section className="bg-cream py-28 px-6">
        <div className="max-w-5xl mx-auto">
  
          <p className="font-display text-[9px] md:text-[14px] font-semibold tracking-[0.35em] uppercase text-gold mb-5 text-center">
            Who We Are
          </p>
          <div className="w-12 h-px bg-gold mb-12 mx-auto" />
  
          <h2 className="font-display text-4xl md:text-5xl font-light text-navy leading-[1.12] mb-10 text-center">
            Empowering Service &<br />Leadership Excellence
          </h2>
  
          <div className="max-w-3xl space-y-5 mb-16 mx-auto">
            <p className="font-body text-sm text-muted leading-relaxed">
              Sophian International is a specialist hospitality learning and culture solutions
              provider. We partner with hotels and hospitality organizations to design and embed
              training frameworks, service standards, and leadership capabilities that translate
              into measurable business performance.
            </p>
            <p className="font-body text-sm text-muted leading-relaxed">
              Our work goes beyond program delivery. We build integrated systems — aligning
              organizational culture, service behaviors, and talent development into a coherent
              whole that operates sustainably long after our engagement ends.
            </p>
          </div>
  
          {/* Vision / Mission */}
          <div className="grid md:grid-cols-2 gap-px bg-gold/15">
            <div className="bg-white p-12">
              <p className="font-display text-[9px] md:text-[14px] font-semibold tracking-[0.35em] uppercase text-gold mb-5">
                Our Vision
              </p>
              <div className="w-8 h-px bg-gold mb-5" />
              <p className="font-body text-sm text-muted leading-relaxed">
                To redefine the standard for people development in hospitality — creating
                environments where every individual has the pathway and the power to realize
                their full potential.
              </p>
            </div>
            <div className="bg-navy p-12">
              <p className="font-display text-[9px] md:text-[14px] font-semibold tracking-[0.35em] uppercase text-gold mb-5">
                Our Mission
              </p>
              <div className="w-8 h-px bg-gold mb-5" />
              <p className="font-body text-sm text-white/60 leading-relaxed">
                We help hospitality teams deliver authentic service by building the skills,
                confidence, and leadership mindset that support both personal growth and lasting
                business success.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  