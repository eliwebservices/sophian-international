import {Globe, Sparkles, Target} from "lucide-react"

const items = [
    { icon: <Globe />, title: "World Class",       desc: "Bringing international standards with lasting impact" },
    { icon: <Target />, title: "Purpose-Driven",    desc: "Training aligned with your culture and business goals" },
    { icon: <Sparkles />, title: "Transformative",    desc: "Creating lasting personal, cultural, and leadership change" },
  ];
  
  export default function TrainingDifferentiators() {
    return (
      <section className="bg-cream py-28 px-6">
        <div className="max-w-5xl mx-auto text-center">
  
          <p className="font-display text-[9px] md:text-[14px] font-semibold tracking-[0.35em] uppercase text-gold mb-5">
            What Sets Us Apart
          </p>
          <div className="w-12 h-px bg-gold mx-auto mb-16" />
  
          <div className="grid md:grid-cols-3 gap-px bg-cream mb-16">
            {items.map((item, i) => (
              <div
                key={i}
                className="group bg-white p-12 relative overflow-hidden"
              >
                {/* <div className="absolute top-0 left-0 right-0 h-[2px] bg-gold scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" /> */}
                <span className="text-3xl mb-6 flex justify-center text-gold">{item.icon}</span>
                <h3 className="font-display text-2xl font-light text-navy mb-4">{item.title}</h3>
                <div className="w-8 h-px bg-gold/40 mx-auto mb-5 group-hover:w-14 transition-all duration-500" />
                <p className="font-body text-sm text-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
  
          <p className="font-body text-sm text-muted leading-relaxed max-w-2xl mx-auto">
            As your learning partner, we work alongside you to help become the first choice —
            for guests, team members, shareholders, and partners.
          </p>
        </div>
      </section>
    );
  }
  