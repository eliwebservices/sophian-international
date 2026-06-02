import ScheduleCallButton from "../ScheduleCallButton";

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
        <div className="text-center mb-20">
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

        <div className="flex flex-col gap-px bg-gold/15">

          {/* ── CLIENTS — image left, text right ── */}
          <div className="grid md:grid-cols-2 min-h-[500px]">

            {/* Image — left */}
            <div className="relative overflow-hidden group min-h-[320px]">
              <img
                src="/images/clients.jpg"
                alt="Executive client consultation"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-navy/20" />
              {/* Label badge */}
              <div className="absolute top-6 left-6 bg-navy/70 backdrop-blur-sm px-4 py-2">
                <p className="font-display text-[9px] font-semibold tracking-[0.3em] uppercase text-gold">
                  Clients
                </p>
              </div>
            </div>

            {/* Text — right */}
            <div className="bg-white p-12 flex flex-col justify-center">
              <h3 className="font-display text-2xl font-light text-navy mb-6">
                We Are Your Ambassador
              </h3>
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
              {/* <a
                href="#contact"
                className="mt-auto font-display text-[9px] md:text-[10px] font-semibold tracking-[0.28em] uppercase border border-navy text-navy px-8 py-4 hover:bg-navy hover:text-white transition-all duration-300 no-underline inline-flex items-center gap-3 self-start"
              >
                Request a Confidential Consultation
              </a> */}
              <ScheduleCallButton
                variant="outline-navy"
                className="mt-auto! self-start! px-8! py-4!"
                label="Request a Confidential Consultation"
              />
            </div>
          </div>

          {/* ── CANDIDATES — text left, image right ── */}
          <div className="grid md:grid-cols-2 min-h-[500px]">

            {/* Text — left */}
            <div className="bg-navy p-12 flex flex-col justify-center">
              <h3 className="font-display text-2xl font-light text-white mb-6">
                We Are Your Career Agent
              </h3>
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
              {/* <a
                href="#contact"
                className="mt-auto font-display text-[9px] md:text-[10px] font-semibold tracking-[0.28em] uppercase border border-white text-white px-8 py-4 hover:bg-gold hover:text-navy transition-all duration-300 no-underline inline-flex items-center gap-3 self-start"
              >
                Explore Our Job Opportunities
              </a> */}
              <ScheduleCallButton
                variant="outline-white"
                className="mt-auto! self-start! inline-flex! px-8! py-4! border-1.5! border-white!"
                label="Explore Our Job Opportunities"
              />
            </div>

            {/* Image — right */}
            <div className="relative overflow-hidden group min-h-[320px]">
              <img
                src="/images/ambassadors.png"
                alt="Hospitality executive candidate"
                className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-navy/25" />
              {/* Label badge */}
              <div className="absolute top-6 right-6 bg-navy/70 backdrop-blur-sm px-4 py-2">
                <p className="font-display text-[9px] font-semibold tracking-[0.3em] uppercase text-gold">
                  Candidates
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
