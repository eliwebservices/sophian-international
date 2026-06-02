import ScheduleCallButton from "../ScheduleCallButton";

export default function HomeExplanation() {
  return (
    <section className="bg-white py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">

          <div>
            <p className="font-display text-[9px] md:text-[14px] font-semibold tracking-[0.35em] uppercase text-gold mb-5">
              You Don't Have to Build It Alone
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-navy leading-[1.12] mb-6">
              It's Hard Enough to Build a Strong People and Culture.
            </h2>
            <div className="w-12 h-px bg-gold mb-8" />
            <p className="font-display text-md leading-relaxed text-muted mb-5">
              Building a strong people and culture is challenging. You need to get your
              vision, mission, and values right — then focus on workforce planning, employer
              branding, interviewing and selection, training and development, brand and
              service culture, engagement and recognition, performance management, promotion
              and mobility, resignation processes, and finally, compensation, benefits, and
              talent development.
            </p>
            <p className="font-display text-md leading-relaxed text-muted mb-10">
              Most owners, General Managers, and HR professionals don't fully understand
              the five key experiences needed for successful people and culture — which is
              why many hospitality businesses fail.
            </p>
            {/* <a
              href="#contact"
              className="font-display text-[9px] md:text-[10px] font-semibold tracking-[0.28em] uppercase border border-navy text-navy px-10 py-4 hover:bg-navy hover:text-white transition-all duration-300 no-underline inline-flex items-center gap-3"
            > */}
            {/* <a
              href="#contact"
              className="font-display text-[9px] md:text-[10px] font-semibold tracking-[0.28em] uppercase bg-navy hover:bg-navy/90  text-white px-10 py-4  transition-all duration-300 no-underline inline-flex items-center gap-3"
            >
              Schedule a Discovery Call
            </a> */}
            <ScheduleCallButton variant="navy" className="hover:bg-navy/90!" label="Schedule a Discovery Call"/>
          </div>

          <div className="relative overflow-hidden aspect-[4/5] w-full">
            <img
              src="/images/here-to-serve_.jpg"
              alt="Luxury hotel service excellence"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute top-4 left-4 -right-4 -bottom-4 border border-gold/30 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
