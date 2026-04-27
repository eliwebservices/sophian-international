"use client";
import { useState } from "react";

const features = [
  { icon: "⚙", title: "Customized Programs",   desc: "Tailored to your specific operational needs" },
  { icon: "👥", title: "Expert Facilitators",   desc: "Experienced hospitality industry professionals" },
  { icon: "📊", title: "Measurable ROI",        desc: "Performance tracking and impact reporting" },
  { icon: "🤝", title: "Ongoing Support",       desc: "Post-training follow-up and continuous coaching" },
];

export default function TrainingCTA() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (!email) return;
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 4000);
  };

  return (
    <section id="contact" className="bg-cream py-28 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="font-display text-4xl md:text-5xl font-light text-navy leading-[1.12] mb-6">
            Ready to Transform Your Training Culture?
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mb-6" />
          <p className="font-body text-sm text-muted leading-relaxed max-w-2xl mx-auto">
            We partner with you to build a learning framework that develops competence, strengthens
            culture, and creates the future-ready leaders your organization requires.
          </p>
        </div>

        {/* Feature icons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gold/15 mb-20">
          {features.map((f, i) => (
            <div key={i} className="bg-white p-8 text-center">
              <span className="block text-2xl mb-4">{f.icon}</span>
              <p className="font-body text-[9px] tracking-[0.15em] uppercase text-[#1a1a1a] font-medium mb-2">
                {f.title}
              </p>
              <p className="font-body text-xs text-muted leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA cards */}
        <div className="grid md:grid-cols-2 gap-px bg-gold/15 mb-20">
          <div className="bg-navy p-12">
            <h3 className="font-display text-2xl font-light text-white mb-5">Request a Proposal</h3>
            <div className="w-8 h-px bg-gold mb-5" />
            <p className="font-body text-sm text-white/60 leading-relaxed mb-8">
              Receive a tailored training proposal scoped to your organization's specific needs,
              goals, and team structure.
            </p>
            <a
              href="mailto:YourGuide@sophianinternational.com"
              className="font-body text-[9px] tracking-[0.28em] uppercase bg-gold text-navy px-8 py-4 hover:bg-gold2 transition-colors duration-300 no-underline inline-flex items-center gap-3"
            >
              Get Started →
            </a>
          </div>
          <div className="bg-white p-12 border border-gold/25">
            <h3 className="font-display text-2xl font-light text-navy mb-5">Book a Discovery Call</h3>
            <div className="w-8 h-px bg-gold mb-5" />
            <p className="font-body text-sm text-muted leading-relaxed mb-8">
              A complimentary 30-minute consultation to discuss your training priorities and how
              we can best support your team.
            </p>
            <a
              href="mailto:YourGuide@sophianinternational.com"
              className="font-body text-[9px] tracking-[0.28em] uppercase border border-navy text-navy px-8 py-4 hover:bg-navy hover:text-white transition-all duration-300 no-underline inline-flex items-center gap-3"
            >
              Schedule Now →
            </a>
          </div>
        </div>

        {/* Contact details */}
        <div className="border-t border-gold/25 pt-16">
          <p className="font-body text-[9px] tracking-[0.35em] uppercase text-gold mb-10 text-center">
            Get in Touch
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-12 mb-16">
            {[
              { icon: "✉", label: "Email", val: "YourGuide@sophianinternational.com", href: "mailto:YourGuide@sophianinternational.com" },
              { icon: "📞", label: "Phone", val: "+86 183 623 756 90", href: "tel:+8618362375690" },
            ].map((d) => (
              <div key={d.label} className="flex items-center gap-4">
                <div className="w-9 h-9 border border-gold/25 flex items-center justify-center text-gold text-sm flex-shrink-0">
                  {d.icon}
                </div>
                <div>
                  <p className="font-body text-[9px] tracking-[0.2em] uppercase text-muted mb-1">{d.label}</p>
                  <a href={d.href} className="font-body text-sm text-[#1a1a1a] hover:text-gold transition-colors no-underline">
                    {d.val}
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Newsletter */}
          <div className="max-w-lg mx-auto text-center">
            <p className="font-body text-sm text-muted leading-relaxed mb-6">
              Stay up to date with the latest in people, talent, and culture for the hospitality
              industry. Subscribe to our newsletter.
            </p>
            <div className="flex gap-0">
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white border border-gold/25 border-r-0 px-4 py-3 font-body text-sm text-[#1a1a1a] placeholder:text-muted outline-none focus:border-navy transition-colors"
              />
              <button
                onClick={handleSubscribe}
                className="font-body text-[9px] tracking-[0.2em] uppercase bg-navy text-white px-6 py-3 hover:bg-navy2 transition-colors duration-300 border-none cursor-pointer whitespace-nowrap"
              >
                Subscribe
              </button>
            </div>
            {subscribed && (
              <p className="font-body text-sm text-gold mt-4">
                Thank you for subscribing.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
