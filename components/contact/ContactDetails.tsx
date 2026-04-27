export default function ContactDetails() {
    return (
      <section className="bg-cream py-28 px-6">
        <div className="max-w-5xl mx-auto text-center">
  
          <p className="font-body text-[9px] tracking-[0.4em] uppercase text-gold mb-6">
            Connect Sophian International
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-navy leading-[1.12] mb-6">
            Begin with a <span className="italic">conversation.</span>
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mb-8" />
          <p className="font-body text-sm text-muted leading-relaxed max-w-xl mx-auto mb-12">
            If what you've read reflects where you are, the next step is simple.
          </p>
  
          <a
            href="#inquiry"
            className="font-body text-[9px] tracking-[0.28em] uppercase bg-navy text-white px-10 py-4 hover:bg-navy2 transition-colors duration-300 no-underline inline-flex items-center gap-3 mb-20"
          >
            Schedule a Private Discussion →
          </a>
  
          {/* Contact tiles */}
          <div className="grid md:grid-cols-3 gap-px bg-gold/15 mb-10">
            {[
              {
                icon: "✉",
                label: "Email",
                val: "YourGuide@sophianinternational.com",
                href: "mailto:YourGuide@sophianinternational.com",
              },
              {
                icon: "📞",
                label: "Phone",
                val: "+853 6350 9608",
                href: "tel:+85363509608",
              },
              {
                icon: "💬",
                label: "WeChat",
                val: "Add us — available on request",
                href: null,
              },
            ].map((d) => (
              <div key={d.label} className="bg-white p-10 text-left">
                <span className="block text-2xl text-gold mb-4">{d.icon}</span>
                <p className="font-body text-[9px] tracking-[0.3em] uppercase text-muted mb-3">
                  {d.label}
                </p>
                {d.href ? (
                  <a
                    href={d.href}
                    className="font-body text-sm text-[#1a1a1a] hover:text-gold transition-colors no-underline break-all"
                  >
                    {d.val}
                  </a>
                ) : (
                  <p className="font-body text-sm text-[#1a1a1a]">{d.val}</p>
                )}
              </div>
            ))}
          </div>
  
          <p className="font-display italic text-base text-muted">
            Discretion matters. We handle sensitive searches and internal challenges with care.
          </p>
        </div>
      </section>
    );
  }
  