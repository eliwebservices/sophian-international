export default function HomeFounder() {
    return (
      <section className="grid md:grid-cols-2">
  
        {/* Image — fixed height so it doesn't go gigantic */}
        <div className="relative h-[560px] md:h-auto overflow-hidden">
          <img
            src="/images/nick-professional.jpg"
            alt="Nick Huang"
            className="w-full h-full object-cover object-top"
          />
          {/* Name plate */}
          <div className="absolute bottom-8 left-8 bg-navy px-6 py-4">
            <p className="font-display text-lg font-light tracking-wide text-white">Nick Huang</p>
            <p className="font-body text-[9px] tracking-[0.25em] uppercase text-gold mt-1">
              Founder & Managing Director
            </p>
          </div>
        </div>
  
        {/* Text */}
        <div className="bg-navy flex flex-col justify-center px-12 lg:px-20 py-20">
          <p className="font-body text-[9px] tracking-[0.35em] uppercase text-gold2 mb-8">
            A Word From Our Founder
          </p>
  
          <blockquote className="font-display italic text-xl lg:text-2xl font-light leading-[1.6] text-white/90 mb-10">
            <span className="block font-display text-[72px] leading-[0.7] text-gold/40 mb-5 not-italic">"</span>
            After more than 20 years in leadership roles across China's ultra-luxury and
            lifestyle hospitality business, I have repeatedly seen hotels face the same
            challenges: hiring the right leaders, training teams to standard, reducing
            costly turnover, and shaping winning cultures.
            <br /><br />
            At Sophian, we offer Executive Search, Corporate Training, and People &
            Culture solutions to help transform your team — so your business, team
            members, and guest experiences will thrive.
          </blockquote>
  
          <div className="border-t border-gold/30 pt-8">
            <p className="font-display text-xl font-light text-white">Nick Huang</p>
            <p className="font-body text-[9px] tracking-[0.25em] uppercase text-gold mt-2">
              Senior Coach · People & Culture
            </p>
            <p className="font-body text-xs text-white/45 mt-1 italic">
              Founder & Managing Director, Sophian International
            </p>
            <p className="font-body text-xs text-white/45 mt-1 italic">
              20+ Years of Global Luxury Hospitality Leadership Experience
            </p>
          </div>
        </div>
      </section>
    );
  }
  