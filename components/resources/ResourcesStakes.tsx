const stakes = [
    { title: "You stay busy",          body: "but not necessarily progressing." },
    { title: "Opportunities appear",   body: "but you hesitate to act." },
    { title: "Time passes",            body: "and decisions get harder, not easier." },
  ];
  
  export default function ResourcesStakes() {
    return (
      <section className="bg-warm py-28 px-6">
        <div className="max-w-6xl mx-auto text-center">
  
          <p className="font-body text-[9px] tracking-[0.4em] uppercase text-gold mb-6">
            The Stakes
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-navy leading-[1.12] mb-6">
            What happens if this <span className="italic">stays unclear</span>
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mb-16" />
  
          <div className="grid md:grid-cols-3 gap-px bg-gold/15 mb-16">
            {stakes.map((s, i) => (
              <div
                key={i}
                className="group bg-white p-12 hover:bg-navy transition-colors duration-500"
              >
                <p className="font-display text-[56px] font-light text-navy/10 group-hover:text-white/10 leading-none mb-4 transition-colors duration-500">
                  0{i + 1}
                </p>
                <h3 className="font-display text-2xl font-light text-navy group-hover:text-white mb-3 transition-colors duration-500">
                  {s.title}
                </h3>
                <div className="w-6 h-px bg-gold mx-auto my-4 group-hover:w-12 transition-all duration-500" />
                <p className="font-body text-sm text-muted group-hover:text-white/60 leading-relaxed transition-colors duration-500">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
  
          <div className="border border-gold/25 bg-white max-w-xl mx-auto p-10">
            <p className="font-display italic text-xl md:text-2xl font-light text-navy leading-relaxed">
              This isn't a capability issue.<br />
              It's a <span className="text-gold">clarity issue</span>.
            </p>
          </div>
        </div>
      </section>
    );
  }
  