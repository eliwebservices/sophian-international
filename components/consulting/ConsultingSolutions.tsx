const clientEngagements = [
    "6–12 months from a pre-opening and need to build the leadership structure and operating model before hiring anyone",
    "Just acquired an asset and need to assess whether the existing team can execute the repositioning",
    "Labor costs are disconnected from performance, and the leadership team can't explain why",
    "Preparing for a brand affiliation or franchise agreement and need their people systems audited to international standards",
    "Considering removing a senior leader but need an objective diagnostic first",
  ];
  
  export default function ConsultingSolutions() {
    return (
      <section className="bg-cream py-28 px-6">
        <div className="max-w-4xl mx-auto">
  
          <div className="text-center mb-16">
            <p className="font-display text-[9px] md:text-[14px] font-semibold tracking-[0.4em] uppercase text-gold mb-5">
              Sophian Solutions
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-navy leading-[1.12] mb-5">
              Your People Strategy, Simplified.
            </h2>
            <div className="w-12 h-px bg-gold mx-auto" />
          </div>
  
          <div className="grid md:grid-cols-2 gap-px bg-gold/15">
            {/* Who we are */}
            <div className="bg-white p-12">
              <p className="font-body text-[9px] tracking-[0.3em] uppercase text-gold mb-5">
                Who We Are
              </p>
              <h3 className="font-display text-2xl font-light text-navy mb-6">
                An Ownership<br />Advisory Practice.
              </h3>
              <div className="w-8 h-px bg-gold mb-6" />
              <p className="font-body text-sm text-muted leading-relaxed mb-4">
                We provide international-standard People & Culture (Human Resources) solutions for
                luxury hotels and hospitality brands, offering strategic consulting on leadership,
                direction, and expert guidance across all areas of Human Resources.
              </p>
              <p className="font-body text-sm text-muted leading-relaxed">
                We help luxury hotel owners and general managers make high-stakes organizational
                decisions when the cost of being wrong is measured in millions.
              </p>
            </div>
  
            {/* When clients engage us */}
            <div className="bg-navy p-12">
              <p className="font-body text-[9px] tracking-[0.3em] uppercase text-gold mb-6">
                Our Clients Engage Us When:
              </p>
              <ul className="flex flex-col gap-4 list-none p-0 m-0">
                {clientEngagements.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-gold flex-shrink-0 mt-1">→</span>
                    <span className="font-body text-sm text-white/60 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
  