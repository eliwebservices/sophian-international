import ScheduleCallButton from "../ScheduleCallButton";

const phases = [
  { number: "01", title: "Immersive Brief",        desc: "We spend time on property and with ownership to understand culture, ambition, and the invisible qualities that make each mandate unique." },
  { number: "02", title: "Targeted Research",      desc: "Proactive mapping of global talent — not posting to job boards. We approach the best people, whether or not they're looking." },
  { number: "03", title: "Deep Assessment",        desc: "Multi-stage evaluation: behavioural interviews, leadership profiling, reference architecture, and cultural fit immersion." },
  { number: "04", title: "Integration & Guarantee", desc: "We remain engaged through onboarding and the first year — with a 12-month replacement guarantee on every retained mandate." },
];

export default function SearchMethodology() {
  return (
    <section className="bg-white py-28 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20">
          <p className="font-display text-[9px] md:text-[14px] font-semibold tracking-[0.35em] uppercase text-gold mb-5">
            Methodology
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-navy leading-[1.12] mb-6">
            How We Work
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mb-8" />
          <p className="font-body text-sm text-muted leading-relaxed max-w-3xl mx-auto">
            The Sophian Precision Strategy is a four-phase executive search framework designed
            specifically for lifestyle and ultra-luxury hospitality mandates. Every step is
            structured to deliver speed without compromise, and quality without noise.
          </p>
        </div>

        {/* Split — phases left, image right */}
        <div className="grid md:grid-cols-2 gap-px bg-white/15 mb-16">

          {/* Left — 2x2 phase grid */}
          <div className="grid grid-cols-2 gap-px">
            {phases.map((p) => (
              <div key={p.number} className="bg-white p-8 flex flex-col">
                <p className="font-display text-[40px] font-light text-navy/10 leading-none mb-3">
                  {p.number}
                </p>
                <h3 className="font-display text-base font-light text-navy mb-3">
                  {p.title}
                </h3>
                <div className="w-6 h-px bg-gold mb-4" />
                <p className="font-body text-xs text-muted leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Right — image */}
          <div className="relative overflow-hidden min-h-[460px]">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=85&fit=crop"
              alt="Sophian executive search process"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-navy/25" />

            {/* Quote overlay */}
            {/* <div className="absolute bottom-8 left-8 right-8">
              <div className="border-l-2 border-gold pl-5">
                <p className="font-body text-sm italic text-white/85 leading-relaxed">
                  "Speed without compromise. Quality without noise."
                </p>
                <p className="font-display text-[9px] font-semibold tracking-[0.25em] uppercase text-gold mt-3">
                  — The Sophian Precision Strategy
                </p>
              </div>
            </div> */}
          </div>
        </div>

        <div className="text-center">
          {/* <a
            href="#contact"
            className="font-display text-[9px] md:text-[10px] font-semibold tracking-[0.28em] uppercase bg-navy text-white px-10 py-4 hover:bg-navy2 transition-colors duration-300 no-underline inline-flex items-center gap-3"
          >
            Request a Confidential Consultation
          </a> */}
          <ScheduleCallButton variant="navy" className="hover:bg-navy/90!" label="Request a Confidential Consultation"/>
        </div>
      </div>
    </section>
  );
}
