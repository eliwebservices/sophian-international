const challenges = [
  { title: "Inconsistent service",  desc: "leading to rising guest complaints"                     },
  { title: "High turnover driven",  desc: "by poor training and unclear pathways"                  },
  { title: "Training investment",   desc: "without measurable ROI or behavior change"              },
];

export default function TrainingChallenge() {
  return (
    <section className="bg-white py-28 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Label + rule */}
        <p className="font-display text-[9px] md:text-[14px] font-semibold text-center tracking-[0.35em] uppercase text-gold mb-5">
          The Challenge
        </p>
        <div className="w-12 h-px bg-gold mb-12 mx-auto" />

        <h2 className="font-display text-4xl md:text-5xl font-light text-navy leading-[1.12] mb-16 text-center">
          Most hospitality training fails<br />to deliver lasting change.
        </h2>

        {/* Split — text left, image right */}
        <div className="grid md:grid-cols-2 gap-px bg-gold/15 mb-16">

          {/* Text */}
          <div className="bg-cream px-12 py-14 flex flex-col justify-center space-y-5">
            <p className="font-body text-sm text-muted leading-relaxed">
              Workshops are delivered. Certificates are issued. Everyone feels productive for a week.
              Then guest complaints return. Turnover continues. Leaders wonder why nothing really changed.
            </p>
            <p className="font-body text-sm text-muted leading-relaxed">
              The problem is rarely motivation. It is{" "}
              <span className="text-navy font-medium">structure</span>.
            </p>
            <p className="font-body text-sm text-muted leading-relaxed">
              Training is too often delivered in isolation, separated from culture, daily operations,
              performance standards, and the real demands of each role. Without integration, even
              well-designed programs fade quickly.
            </p>
            <p className="font-body text-sm text-muted font-medium">
              The result is predictable:
            </p>
          </div>

          {/* Image */}
          <div className="relative overflow-hidden min-h-[380px] group">
            <img
              src="https://www.starwoodhotels.com/sites/default/files/styles/650x556/public/brandfolder/4b8np46qpcr6rpqw9fqvnj/Facade_1_Hotel_Central_Park_Photo_Credit_Eric_Laignel-1200x900-e339a72h1440.webp?h=6eb229a4&itok=3w_sejqs"
              alt="Hospitality training session"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-navy/25" />

            {/* Overlay pull quote */}
            {/* <div className="absolute bottom-8 left-8 right-8">
              <div className="border-l-2 border-gold pl-5">
                <p className="font-body text-base italic text-white/90 leading-relaxed">
                  "Without integration, even well-designed programs fade quickly."
                </p>
              </div>
            </div> */}
          </div>
        </div>

        {/* Challenge cards */}
        <div className="grid md:grid-cols-3 gap-px bg-gold/15 mb-16">
            {challenges.map((c, i) => (
              <div key={i} className="bg-cream p-10 text-center">
                <p className="font-display text-xl font-light text-navy mb-3">{c.title}</p>
                <div className="w-6 h-px bg-gold mx-auto mb-3 group-hover:w-14 transition-all duration-500" />
                <p className="font-body text-sm text-muted leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>

        {/* Closing quote */}
        <div className="border border-gold/20 p-10 text-center">
          <p className="font-display italic text-xl md:text-2xl text-muted leading-relaxed">
            Lasting change requires a learning system, beyond sessions.
          </p>
        </div>
      </div>
    </section>
  );
}
