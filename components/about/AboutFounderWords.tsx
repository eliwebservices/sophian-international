const paragraphs = [
    "After more than 20 years in lifestyle and ultra-luxury hospitality leadership roles across Mainland China — including Sanya, Chengdu, Guangzhou, Shanghai, and Beijing, Bangkok and Tokyo — I have seen the same people challenges arise again and again: hire the right leaders, train teams to higher standard, and reduce costly turnover that quietly increases labor costs while eroding performance and service standards.",
    "As a hospitality insider who genuinely cares about this industry, I have built strong relationships with senior executive decision-makers and a practical understanding of what owners, guests, team members, and the business truly need. This has become a personal calling — a natural transition in my career: to connect exceptional executives, empower leaders and organizations to grow forward, and strengthen People & Culture across hospitality.",
    "I firmly believe that organizations thrive when their people grow — professionally and personally.",
    "That is why I founded Sophian International. We combine deep industry experience, a trusted network, and international-standard People & Culture expertise to help hotels and hospitality groups build strong teams, develop capable leaders, and sustain a service culture that lasts.",
    "Sophian International delivers Hospitality Executive Search, Corporate Training, and HR Consulting to elevate team member engagement, strengthen guest experience, and improve long-term business performance.",
  ];
  
  export default function AboutFounderWords() {
    return (
      <section className="bg-white py-28 px-6">
        <div className="max-w-3xl mx-auto">
  
          <div className="text-center mb-16">
            <p className="font-display text-[9px] md:text-[14px] tracking-[0.35em] uppercase text-gold mb-5">
              A Few Words From the Founder
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-navy leading-[1.12] mb-6">
              Hospitality Leadership Insights
            </h2>
            <div className="w-12 h-px bg-gold mx-auto" />
          </div>
  
          {/* Opening quote mark */}
          <span className="block font-display text-[96px] leading-[0.75] text-gold/25 mb-6">"</span>
  
          <div className="space-y-6 mb-16">
            {paragraphs.map((p, i) => (
              <p
                key={i}
                className={`font-body text-md leading-relaxed ${i === 2 ? "font-display text-xl text-muted not-font-body" : "text-muted"}`}
              >
                {p}
              </p>
            ))}
          </div>
  
          <div className="border-t border-gold/25 pt-10">
            <p className="font-display text-2xl font-light text-navy">Nick Huang</p>
            <p className="font-display text-[9px] tracking-[0.3em] uppercase text-gold mt-2">
              Founder & Managing Director, Sophian International
            </p>
          </div>
        </div>
      </section>
    );
  }
  