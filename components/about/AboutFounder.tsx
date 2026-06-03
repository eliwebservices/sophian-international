const stats = [
    { value: "20+",   label: "Years Exp." },
    { value: "30,000+", label: "Team Members" },
    { value: "4.2B+", label: "RMB Rev. Supported" },
  ];
  
  const bio = [
    "Nick Huang is an international People & Culture leader with over 20 years of experience in lifestyle, luxury, and ultra-luxury hospitality across Mainland China. He has held senior leadership roles with globally respected brands including Starwood, Rosewood, Aman, Marriott, Hilton, IHG, and Sofitel — supporting hotels from pre-opening through stabilization and award-winning operations.",
    "Across his career, Nick has led People & Culture functions for properties ranging from 280 to over 470 rooms, managing workforces of 250 to more than 1,200 team members. He has successfully supported two major luxury hotel pre-openings, built high-performing leadership teams, and partnered closely with owners and general managers to align people strategy with commercial outcomes.",
    "Nick's work has contributed directly to measurable business results, including significant reductions in turnover, industry-leading engagement scores, and recognition from Forbes Travel Guide, Michelin Key, and Travel + Leisure. Collectively, the hotels he has supported have generated over RMB 4.2 billion in revenue, driven in part by disciplined People & Culture systems that connect leadership capability, service culture, and operational performance.",
    "What distinguishes Nick is his ability to operate across five critical dimensions of leadership: operational experience, culture building, collaboration with owners and executives, innovation in talent and learning systems, and long-term career development for leaders and teams. He combines hands-on hotel experience with a deep understanding of global brand standards and local China market realities.",
    "In 2020, Nick founded Sophian International Consulting to support hotel owners and hospitality leaders facing the same challenges he had seen repeatedly throughout his career: hiring the right leaders, developing capable teams, reducing costly turnover, and building service cultures that are both human and commercially sustainable.",
    "Nick is a frequent guest speaker at hospitality universities, industry forums, and executive leadership programs across Asia Pacific. He holds formal training from Harvard and eCornell executive programs and is currently pursuing advanced studies in Organizational Development.",
  ];
  
  export default function AboutFounder() {
    return (
      <section className="bg-cream py-28 px-6">
        <div className="max-w-6xl mx-auto">
  
          <div className="text-center mb-16">
            <p className="font-display text-[9px] md:text-[14px] tracking-[0.35em] uppercase text-gold mb-5">
              Your Guide
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-navy leading-[1.12] mb-3">
              Nick Huang
            </h2>
            {/* <p className="font-body text-[9px] tracking-[0.3em] uppercase text-muted mb-6">
              Founder & Managing Director
            </p> */}
            <div className="w-12 h-px bg-gold mx-auto" />
          </div>
  
          <div className="grid md:grid-cols-5 gap-16 items-start">

  {/* Bio */}
  <div className="md:col-span-3">
              <div className="space-y-5 mb-10">
                {bio.map((p, i) => (
                  <p key={i} className="font-body text-sm text-muted leading-relaxed">{p}</p>
                ))}
              </div>
  
              <blockquote className="border-l-2 border-gold pl-6 py-2">
                <p className="font-display text-xl md:text-2xl font-light text-navy leading-relaxed">
                  "When people are developed with clarity, care, and purpose, performance follows
                  naturally."
                </p>
                <p className="font-body text-[9px] tracking-[0.25em] uppercase text-gold mt-4">
                  — Nick Huang
                </p>
              </blockquote>
            </div>
            {/* Portrait + stats */}
            <div className="md:col-span-2">
              <div className="relative overflow-hidden aspect-[3/4] mb-8">
                <img
                  src="/images/nick-professional.jpg"
                  alt="Nick Huang, Founder & Managing Director of Sophian International"
                  className="w-full h-full object-cover object-top scale-x-[-1]"
                />
                {/* Name plate */}
                <div className="absolute bottom-0 left-0 right-0 bg-navy px-8 py-5">
                  <p className="font-display text-lg font-light text-white">Nick Huang</p>
                  <p className="font-body text-[9px] tracking-[0.25em] uppercase text-gold mt-1">
                    Founder & Managing Director
                  </p>
                </div>
              </div>
  
              {/* Stats */}
              <div className="grid grid-cols-3 gap-px bg-gold/15">
                {stats.map((s) => (
                  <div key={s.label} className="bg-white py-8 px-4 text-center">
                    <p className="font-display text-2xl font-light text-navy leading-none mb-2">
                      {s.value}
                    </p>
                    <div className="w-4 h-px bg-gold mx-auto mb-2" />
                    <p className="font-body text-[8px] tracking-[0.2em] uppercase text-muted leading-tight">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
  
              {/* Brands */}
              <div className="bg-navy p-8 mt-px">
                <p className="font-body text-[9px] tracking-[0.35em] uppercase text-gold mb-4">
                  Key Brands Served
                </p>
                <p className="font-display text-sm text-white/70 tracking-[0.1em] leading-relaxed">
                  Starwood · Rosewood · Aman · Marriott · Hilton
                </p>
              </div>
            </div>
  
            
          </div>
        </div>
      </section>
    );
  }
  