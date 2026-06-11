import ScheduleCallButton from "../ScheduleCallButton";

export default function ResourcesHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden text-white">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/home-strip-7.jpg')",
          animation: "kenburns 18s ease-out forwards",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy/15 via-navy/50 to-navy/92" />

      {/* Content */}
      <div
        className="relative z-10 w-full max-w-6xl mx-auto px-6 pb-24"
        style={{ animation: "fadeUp 0.9s 0.2s both" }}
      >
        <div className="grid lg:grid-cols-12 gap-12 items-end">
          {/* Text */}
          <div className="lg:col-span-12 text-center">
            {/* <p className="font-body text-[9px] tracking-[0.4em] uppercase text-gold mb-5">
                Free Career Clarity Support
              </p> 
              <p className="font-body text-[9px] tracking-[0.35em] uppercase text-white/50 mb-10">
                Turn Career Confusion Into a Clear Next Step
              </p> */}

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-light leading-[1.08] text-white mb-10">
              Feeling Stuck in Your
              <br />
              Hospitality Career?
            </h1>

            <div className="w-12 h-px bg-gold mb-10 mx-auto" />

            <p className="font-body text-sm md:text-base text-white/75 max-w-xl leading-relaxed mb-12 mx-auto">
              Share your situation and receive one free clarity check — career
              direction, resume structure, and answers to your most important
              one or two questions.
            </p>

            <div className="flex flex-wrap gap-4 mb-8 justify-center">
              {/* <a
                  href="#request"
                  className="font-body text-[9px] tracking-[0.28em] uppercase bg-gold text-navy px-10 py-4 hover:bg-gold2 transition-colors duration-300 no-underline inline-flex items-center gap-3"
                >
                  Request Free Support →
                </a> */}
              <ScheduleCallButton
                variant="outline-white"
                className="text-[9px]!"
              />
              <a
                href="#how"
                className="font-display font-semibold text-[9px] tracking-[0.28em] uppercase border border-white/40 text-white px-10 py-4 hover:border-gold hover:text-gold transition-all duration-300 no-underline inline-flex items-center justify-center gap-3"
              >
                Learn How It Works
              </a>
            </div>

            <p className="font-display text-base text-white/45">
              For hospitality professionals seeking direction, confidence, and
              clarity.
            </p>
          </div>

          {/* Portrait card */}
          {/* <div className="hidden lg:block lg:col-span-5">
              <div className="relative">
                <div className="absolute -top-4 -left-4 right-4 bottom-4 border border-gold/30 pointer-events-none" />
                <img
                  src="/images/nick-thumbs-up.jpg"
                  alt="Nick Huang — career clarity for hospitality professionals"
                  className="relative w-full h-[480px] object-cover object-top"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-navy/80 px-6 py-4 backdrop-blur-sm">
                  <p className="font-display text-base font-light text-white">Nick Huang</p>
                  <p className="font-body text-[9px] tracking-[0.25em] uppercase text-gold mt-0.5">
                    Founder & Managing Director · Sophian International
                  </p>
                </div>
              </div>
            </div> */}
        </div>
      </div>

      {/* Scroll */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="w-px h-10 bg-gradient-to-b from-gold/70 to-transparent animate-pulse" />
        <span className="font-body text-[8px] tracking-[0.3em] uppercase text-white/40">
          Scroll
        </span>
      </div>
    </section>
  );
}
