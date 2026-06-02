const callSteps = [
    { minutes: "20", label: "mins", title: "You talk, we listen",  desc: "Tell us what's happening, what you've tried, and what outcome you need" },
    { minutes: "25", label: "mins", title: "We diagnose",           desc: "We'll tell you what we think the real problem is — and whether it matches your assumptions" },
    { minutes: "15", label: "mins", title: "We recommend",          desc: "A formal engagement, an internal action, or a referral. We'll tell you what honestly makes sense." },
  ];
  
  export default function ConsultingNextStep() {
    return (
      <section id="contact" className="bg-white py-28 px-6">
        <div className="max-w-3xl mx-auto text-center">
  
          <p className="font-display text-[9px] md:text-[14px] font-semibold tracking-[0.4em] uppercase text-gold mb-5">
            Next Step
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-navy leading-[1.12] mb-6">
            Book Your 60-Minute<br />Consultation
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mb-10" />
  
          <p className="font-body text-[9px] md:text-[14px] tracking-[0.3em] uppercase text-muted mb-12">
            What Happens on the Call:
          </p>
  
          {/* Call breakdown */}
          <div className="border border-gold/20 mb-16 text-left">
            {callSteps.map((step, i) => (
              <div
                key={i}
                className={`flex items-start gap-8 p-8 ${i < callSteps.length - 1 ? "border-b border-gold/15" : ""} hover:bg-white/[0.03] transition-colors duration-300`}
              >
                <div className="text-center flex-shrink-0 w-16">
                  <span className="font-display text-4xl font-light text-gold leading-none">{step.minutes}</span>
                  <p className="font-body text-[9px] tracking-[0.15em] uppercase text-navy mt-1">{step.label}</p>
                </div>
                <div className="pt-1">
                  <h3 className="font-display text-xl font-light text-navy mb-2">{step.title}</h3>
                  <p className="font-body text-sm text-muted leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
  
          <p className="font-display italic text-lg text-muted mb-3">
            No pitch. No pressure. No follow-up email sequence.
          </p>
          <p className="font-body text-sm text-muted mb-12">
            Complimentary for qualified ownership and executive teams. Limited to 8 per month.
          </p>
  
          <a
            href="contact"
            className="font-display font-semibold md:text-[10px] text-[9px] tracking-[0.28em] uppercase bg-navy text-white px-10 py-4 hover:bg-navy/90 transition-colors duration-300 no-underline inline-flex items-center gap-3 mb-6"
          >
            Contact Us
          </a>
          <p className="font-body text-sm text-gold mt-4">
            info@sophianinternational.com
          </p>
        </div>
      </section>
    );
  }
  