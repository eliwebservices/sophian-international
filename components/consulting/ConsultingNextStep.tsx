import ScheduleCallButton from "../ScheduleCallButton";

const callSteps = [
  { minutes: "20", title: "You talk, we listen",  desc: "Tell us what's happening, what you've tried, and what outcome you need" },
  { minutes: "25", title: "We diagnose",           desc: "We'll tell you what we think the real problem is — and whether it matches your assumptions" },
  { minutes: "15", title: "We recommend",          desc: "A formal engagement, an internal action, or a referral. We'll tell you what honestly makes sense." },
];

export default function ConsultingNextStep() {
  return (
    <section id="contact" className="relative overflow-hidden">

      {/* Background image */}
      <img
        src="https://www.starwoodhotels.com/sites/default/files/styles/scale_crop_1440x1080/public/brandfolder/p7nb3rrkj45nb9q26pncfjt/1KNSH-credit-Nashville-Guru-94h1280.webp?h=2992ba0a&itok=yLWcma52"
        alt="Luxury hotel consultation"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy/85 via-navy/80 to-navy/90" />
      <div className="absolute top-8 left-8 right-8 bottom-8 border border-gold/15 pointer-events-none hidden md:block" />

      {/* Content */}
      <div className="relative z-10 py-28 px-6">
        <div className="max-w-5xl mx-auto">

          {/* Header */}
          <div className="text-center mb-16">
            <p className="font-display text-[9px] md:text-[14px] font-semibold tracking-[0.4em] uppercase text-gold mb-5">
              Next Step
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-white leading-[1.12] mb-6">
              Book Your 60-Minute<br />Consultation
            </h2>
            <div className="w-12 h-px bg-gold mx-auto mb-6" />
            <p className="font-display text-[9px] md:text-[14px] font-semibold tracking-[0.3em] uppercase text-white/50 mb-2">
              What Happens on the Call
            </p>
          </div>

          {/* Three steps — horizontal on desktop, vertical on mobile */}
          <div className="grid md:grid-cols-3 gap-px bg-gold/15 mb-16">
            {callSteps.map((step, i) => (
              <div key={i} className="bg-white/[0.06] backdrop-blur-sm px-8 py-10 text-center relative">

                {/* Connector line between steps — desktop only */}
                {i < callSteps.length - 1 && (
                  <div className="hidden md:block absolute top-[52px] -right-px w-px h-6 bg-gold/30" />
                )}

                {/* Minutes */}
                <p className="font-display text-5xl font-light text-gold leading-none mb-1">
                  {step.minutes}
                </p>
                <p className="font-display text-[9px] font-semibold tracking-[0.2em] uppercase text-white mb-6">
                  mins
                </p>

                <div className="w-6 h-px bg-gold mx-auto mb-5" />

                <h3 className="font-display text-lg font-medium text-white mb-3">
                  {step.title}
                </h3>
                <p className="font-body text-sm text-white/55 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Footer text + CTA */}
          <div className="text-center">
            <p className="font-body text-base text-white/70 mb-2">
              No pitch. No pressure. No follow-up email sequence.
            </p>
            <p className="font-display text-[9px] font-semibold tracking-[0.2em] uppercase text-white/70 mb-10">
              Complimentary for qualified ownership and executive teams · Limited to 8 per month
            </p>

            <ScheduleCallButton variant="outline-white" label="Book Your Consultation" />

            <p className="font-display text-sm text-gold/60 mt-6">
              info@sophianinternational.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
