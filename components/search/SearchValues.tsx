const values = [
    {
      title: "Excellence",
      desc: "Our standards of performance meet the luxury hospitality high level of requirement. Our processes, methodology and hard skills ensure high standards of quality service.",
    },
    {
      title: "Kindness",
      desc: "We genuinely care for our clients and candidates. By taking full ownership of our missions, we guarantee both client and candidate satisfaction through dedication and empathy.",
    },
    {
      title: "Trust",
      desc: "We cultivate long-term professional relationships grounded in trust. Our clients' and candidates' loyalty is a cornerstone of our success, reflecting the strength of our commitment.",
    },
  ];
  
  export default function SearchValues() {
    return (
      <section className="bg-cream py-28 pt-0 px-6">
        <div className="max-w-5xl mx-auto">
  
          <div className="text-center mb-16">
            <p className="font-display text-[9px] md:text-[14px] font-semibold tracking-[0.35em] uppercase text-gold mb-6">
              Our Values
            </p>
            <div className="w-12 h-px bg-gold mx-auto" />
          </div>
  
          <div className="grid md:grid-cols-3 divide-x divide-gold/25 border border-gold/25">
            {values.map((v) => (
              <div key={v.title} className="bg-white p-12 text-center group hover:bg-navy transition-colors duration-500">
                <h3 className="font-display text-2xl font-light text-navy group-hover:text-white mb-5 transition-colors duration-500">
                  {v.title}
                </h3>
                <div className="w-8 h-px bg-gold mx-auto mb-5" />
                <p className="font-body text-sm text-muted group-hover:text-white/60 leading-relaxed transition-colors duration-500">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  