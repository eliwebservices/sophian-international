const items = [
    { icon: "🌐", title: "World Class",       desc: "Bringing international standards with lasting impact" },
    { icon: "🎯", title: "Purpose-Driven",    desc: "Training aligned with your culture and business goals" },
    { icon: "✨", title: "Transformative",    desc: "Creating lasting personal, cultural, and leadership change" },
  ];
  
  export default function TrainingDifferentiators() {
    return (
      <section className="bg-navy py-28 px-6">
        <div className="max-w-5xl mx-auto text-center">
  
          <p className="font-body text-[9px] tracking-[0.35em] uppercase text-gold mb-5">
            What Sets Us Apart
          </p>
          <div className="w-12 h-px bg-gold mx-auto mb-16" />
  
          <div className="grid md:grid-cols-3 gap-px bg-gold/10 mb-16">
            {items.map((item, i) => (
              <div
                key={i}
                className="group bg-white/[0.04] p-12 hover:bg-white/[0.08] transition-colors duration-500 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gold scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                <span className="block text-3xl mb-6">{item.icon}</span>
                <h3 className="font-display text-2xl font-light text-white mb-4">{item.title}</h3>
                <div className="w-8 h-px bg-gold/40 mx-auto mb-5" />
                <p className="font-body text-sm text-white/55 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
  
          <p className="font-body text-sm text-white/55 leading-relaxed max-w-2xl mx-auto">
            As your learning partner, we work alongside you to help become the first choice —
            for guests, team members, shareholders, and partners.
          </p>
        </div>
      </section>
    );
  }
  