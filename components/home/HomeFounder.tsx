export default function HomeFounder() {
  return (
    <section className="grid md:grid-cols-2">

      {/* Image side */}
      <div className="relative h-[560px] md:h-auto overflow-hidden">
        <img
          src="/images/nick-professional.jpg"
          alt="Nick Huang"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute bottom-8 left-8 bg-white px-6 py-4 border-l-2 border-gold">
          <p className="font-display text-lg font-light text-navy">Nick Huang</p>
          <p className="font-display text-[9px] font-semibold tracking-[0.25em] uppercase text-gold mt-1">
            Founder & Managing Director
          </p>
        </div>
      </div>

      {/* Text side — white instead of navy */}
      <div className="bg-white flex flex-col justify-center px-12 lg:px-20 py-20 border-l border-gold/15">
        <p className="font-display text-[14px] font-semibold tracking-[0.35em] uppercase text-gold mb-8">
          A Word From Our Founder
        </p>

        {/* Large decorative quote mark */}
        <span className="block font-body text-[80px] leading-[0.7] text-gold/20 mb-5">"</span>

        <blockquote className="font-body text-xl lg:text-2xl italic font-light leading-[1.6] text-navy/80 mb-10">
          After more than 20 years in leadership roles across China's ultra-luxury and
          lifestyle hospitality business, I have repeatedly seen hotels face the same
          challenges: hiring the right leaders, training teams to standard, reducing
          costly turnover, and shaping winning cultures.
          <br /><br />
          At Sophian, we offer Executive Search, Corporate Training, and People &
          Culture solutions to help transform your team — so your business, team
          members, and guest experiences will thrive.
        </blockquote>

        <div className="border-t border-gold/25 pt-8">
          <p className="font-display text-xl font-light text-navy">Nick Huang</p>
          <p className="font-display text-[9px] font-semibold tracking-[0.25em] uppercase text-gold mt-2">
            Senior Coach · People & Culture
          </p>
          <p className="font-body text-sm text-muted mt-1 italic">
            Founder & Managing Director, Sophian International
          </p>
          <p className="font-body text-sm text-muted mt-1 italic">
            20+ Years of Global Luxury Hospitality Leadership Experience
          </p>
        </div>
      </div>
    </section>
  );
}
