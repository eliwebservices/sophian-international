const pillars = [
    {
      title: "Confidential",
      body: "Nothing discussed leaves the call. No notes are shared, no proposals are circulated without explicit consent.",
    },
    {
      title: "Structured",
      body: "We follow a diagnostic framework — asset context, leadership landscape, commercial reality — to ensure precision, not small talk.",
    },
    {
      title: "Commercially Grounded",
      body: "If the challenge doesn't warrant our involvement, we'll say so. Clarity is more valuable than an engagement.",
    },
  ];
  
  export default function ContactDiscovery() {
    return (
      <section className="bg-white py-28 px-6">
        <div className="max-w-5xl mx-auto text-center">
  
          <p className="font-display text-[9px] md:text-[14px] font-semibold tracking-[0.4em] uppercase text-gold mb-6">
            The Discovery Call
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-navy leading-[1.12] mb-6">
            30 minutes of <span className="italic">structured clarity.</span>
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mb-10" />
          <p className="font-body text-sm md:text-base text-muted leading-relaxed max-w-3xl mx-auto mb-20">
            Every engagement begins with a private, confidential conversation. This is not a sales
            call. It is a diagnostic session designed to determine whether Sophian's involvement
            would create measurable value for your organization.
          </p>
  
          <div className="grid md:grid-cols-3 gap-0 border border-gold/25 mb-16 text-left">
            {pillars.map((p, i) => (
              <div
                key={p.title}
                className={`bg-white p-10 ${i < pillars.length - 1 ? "border-r border-gold/25" : ""}`}
              >
                <div className="w-6 h-px bg-gold mb-6" />
                <h3 className="font-display text-xl font-light text-navy mb-4">{p.title}</h3>
                <p className="font-body text-sm text-muted leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
  
          <a
            href="#inquiry"
            className="font-body text-[9px] tracking-[0.28em] uppercase bg-navy text-white px-10 py-4 hover:bg-navy2 transition-colors duration-300 no-underline inline-flex items-center gap-3"
          >
            Schedule a Private Discussion →
          </a>
        </div>
      </section>
    );
  }
  