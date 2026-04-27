export default function AboutPhilosophy() {
    return (
      <section className="bg-warm py-28 px-6">
        <div className="max-w-4xl mx-auto text-center">
  
          <p className="font-body text-[9px] tracking-[0.35em] uppercase text-gold mb-5">
            Our Philosophy
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-navy leading-[1.12] mb-4">
            The Star of Wisdom
          </h2>
          <p className="font-body text-sm text-muted italic mb-14">
            Guiding Principles That Shape Our Journey
          </p>
  
          {/* Decorative star */}
          <div className="flex justify-center mb-14">
            <svg width="56" height="56" viewBox="0 0 56 56" fill="none" className="text-gold">
              <path
                d="M28 2 L33 22 L54 22 L37 34 L43 54 L28 41 L13 54 L19 34 L2 22 L23 22 Z"
                stroke="currentColor"
                strokeWidth="0.75"
                fill="none"
              />
              <circle cx="28" cy="28" r="1.5" fill="currentColor" />
            </svg>
          </div>
  
          <blockquote className="font-display italic text-2xl md:text-3xl font-light text-navy leading-relaxed mb-3">
            "Get wisdom, get insights."
          </blockquote>
          <p className="font-body text-[9px] tracking-[0.3em] uppercase text-gold mb-14">
            — Proverbs 4:5
          </p>
  
          <div className="w-12 h-px bg-gold mx-auto mb-14" />
  
          <p className="font-body text-sm text-muted leading-relaxed max-w-2xl mx-auto mb-10">
            We passionately believe in the transformative power of the Star of Wisdom — that brings
            life to people and light to hospitality.
          </p>
  
          <blockquote className="font-display italic text-xl md:text-2xl font-light text-navy/80 mb-3">
            "Be wise and help others to walk in wise ways."
          </blockquote>
          <p className="font-body text-[9px] tracking-[0.3em] uppercase text-muted">— Ross McKay</p>
        </div>
      </section>
    );
  }
  