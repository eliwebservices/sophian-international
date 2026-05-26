const clientPoints = [
    "We analyse our clients' unique contexts and requirements to approach the perfect candidates",
    "We embody our clients' strategic vision, encouraging candidates to consider the opportunity",
    "Our trusted network allows us to engage passive candidates",
    "Clients gain access to high-quality candidates not actively seeking new opportunities",
  ];
  
  const candidatePoints = [
    "We act as your dedicated career agent, understanding your aspirations",
    "We introduce you to exclusive, confidential opportunities aligned with your goals",
    "We provide interview coaching and support throughout the process",
    "We aim for a lasting relationship, offering guidance even after onboarding",
  ];
  
  export default function SearchApproach() {
    return (
      <section className="bg-cream py-28 px-6">
        <div className="max-w-6xl mx-auto">
  
          {/* Header */}
          <div className="text-center mb-16">
            <p className="font-display text-[9px] md:text-[14px] font-semibold tracking-[0.35em] uppercase text-gold mb-5">
              Our Unique Approach
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-navy leading-[1.12] mb-6">
              Trusted Partner of Both<br />Clients and Candidates
            </h2>
            <div className="w-12 h-px bg-gold mx-auto mb-8" />
            <p className="font-body text-sm text-muted leading-relaxed max-w-3xl mx-auto">
              Our first-hand experience and insider's understanding of the hospitality industry
              establish us as a trustworthy partner for hospitality leaders. Being from the industry
              ourselves, we bring a unique perspective on the skills and expectations required for
              each executive role within luxury and lifestyle hospitality.
            </p>
          </div>
  
          {/* Two columns */}
          <div className="grid md:grid-cols-2 gap-px bg-gold/15">
  
            {/* Clients */}
            <div className="bg-white p-12 flex flex-col">
              <p className="font-display text-[9px] md:text-[10px] font-semibold tracking-[0.3em] uppercase text-gold mb-4">Clients</p>
              <h3 className="font-display text-2xl font-light text-navy mb-6">We Are Your Ambassador</h3>
              <div className="w-8 h-px bg-gold mb-6" />
              <p className="font-body text-sm text-muted leading-relaxed mb-4">
                Our approach goes beyond purely filling positions. We meticulously analyse our clients'
                unique context and requirements. Armed with a profound understanding of your needs, we
                become ambassadors of your strategic vision.
              </p>
              <p className="font-body text-sm text-muted leading-relaxed mb-8">
                Our extensive network comprises executives who place their trust in us, enabling access
                to top-tier candidates who do not actively seek new opportunities.
              </p>
              <ul className="flex flex-col gap-3 mb-10 list-none p-0 m-0">
                {clientPoints.map((p) => (
                  <li key={p} className="flex gap-3 font-body text-sm text-[#1a1a1a]">
                    <span className="text-gold flex-shrink-0 mt-0.5">→</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="mt-auto font-display text-[9px] md:text-[10px] font-semibold tracking-[0.28em] uppercase border border-navy text-navy px-8 py-4 hover:bg-navy hover:text-white transition-all duration-300 no-underline inline-flex items-center gap-3 self-start"
              >
                Request a Confidential Consultation
              </a>
            </div>
  
            {/* Candidates */}
            <div className="bg-navy p-12 flex flex-col">
              <p className="font-display text-[9px] md:text-[10px] font-semibold tracking-[0.3em] uppercase text-gold mb-4">Candidates</p>
              <h3 className="font-display text-2xl font-light text-white mb-6">We Are Your Career Agent</h3>
              <div className="w-8 h-px bg-gold mb-6" />
              <p className="font-body text-sm text-white/60 leading-relaxed mb-4">
                As your dedicated agent, we invest time to truly understand your aspirations and your
                vision for the next step of your career in the hospitality industry.
              </p>
              <p className="font-body text-sm text-white/60 leading-relaxed mb-8">
                We introduce you to exclusive and confidential opportunities, represent you in the best
                possible light, and offer guidance for months after your onboarding.
              </p>
              <ul className="flex flex-col gap-3 mb-10 list-none p-0 m-0">
                {candidatePoints.map((p) => (
                  <li key={p} className="flex gap-3 font-body text-sm text-white/80">
                    <span className="text-gold flex-shrink-0 mt-0.5">→</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="mt-auto font-display text-[9px] md:text-[10px] font-semibold tracking-[0.28em] uppercase border border-white text-white px-8 py-4 hover:bg-gold hover:text-navy transition-all duration-300 no-underline inline-flex items-center gap-3 self-start"
              >
                Explore Our Job Opportunities
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
  