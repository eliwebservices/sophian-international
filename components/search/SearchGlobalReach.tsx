const cities = [
    "Beijing", "Shanghai", "Hong Kong", "Macau", "Sanya", "Chengdu",
    "Singapore", "Tokyo", "Bangkok", "Bali", "Dubai", "London",
  ];
  
  export default function SearchGlobalReach() {
    return (
      <section className="bg-cream py-28 px-6">
        <div className="max-w-5xl mx-auto">
  
          {/* Header */}
          <div className="text-center mb-20">
            <p className="font-body text-[9px] tracking-[0.35em] uppercase text-gold mb-5">
              Global Reach, Local Expertise
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-navy leading-[1.12] mb-6">
              Connecting Top-Tier Talent<br />with Exceptional Opportunities
            </h2>
            <div className="w-12 h-px bg-gold mx-auto mb-8" />
            <p className="font-body text-sm text-muted leading-relaxed max-w-3xl mx-auto">
              Whether you are a hospitality group in search of the ideal candidate, or a highly
              qualified hospitality manager pursuing an executive career on property or at corporate
              level, we are your strategic partner for success.
            </p>
          </div>
  
          {/* Map placeholder + cities */}
          <p className="font-body text-[9px] tracking-[0.35em] uppercase text-gold text-center mb-10">
            Our Key Markets
          </p>
  
          <div className="relative overflow-hidden mb-8">
            {/* Background image representing global reach */}
            <div
              className="h-64 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80&fit=crop')",
              }}
            >
              <div className="absolute inset-0 bg-navy/70" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="font-body text-[9px] tracking-[0.3em] uppercase text-gold/80 text-center">
                Greater China · Asia Pacific · Global Network
              </p>
            </div>
          </div>
  
          <div className="border border-gold/25 bg-white">
            <div className="flex flex-wrap justify-center divide-x divide-gold/25">
              {cities.map((c) => (
                <div
                  key={c}
                  className="px-8 py-5 font-display text-base tracking-wide text-navy/50 hover:text-navy transition-colors duration-300 cursor-default"
                >
                  {c}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
  