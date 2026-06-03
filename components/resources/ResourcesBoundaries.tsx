const notes = [
    "Free support is offered based on personal time and availability",
    "Immediate responses are not guaranteed",
    "Ongoing or in-depth support may be discussed separately",
  ];
  
  export default function ResourcesBoundaries() {
    return (
      <section className="bg-cream py-28 px-6">
        <div className="max-w-3xl mx-auto text-center">
  
          <p className="font-display text-[9px] md:text-[14px] font-semibold tracking-[0.4em] uppercase text-gold mb-6">
            Important Notes
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-navy leading-[1.12] mb-6">
            A few honest boundaries
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mb-14" />
  
          <div className="flex flex-col gap-px bg-gold/15 mb-16 text-left">
            {notes.map((n, i) => (
              <div
                key={i}
                className="bg-white p-6 flex gap-4 hover:bg-cream transition-colors duration-300"
              >
                <span className="text-gold flex-shrink-0 mt-0.5 font-display text-lg">—</span>
                <p className="font-body text-sm text-muted leading-relaxed">{n}</p>
              </div>
            ))}
          </div>
  
          <div className="w-12 h-px bg-gold mx-auto mb-14" />
  
          {/* Closing */}
          <div className="border border-gold/25 bg-white p-12">
            <span className="block font-display text-[72px] leading-[0.75] text-gold/25 mb-5">"</span>
            <p className="font-display text-xl md:text-2xl font-light text-navy leading-relaxed">
              It's a moment of clarity before you move forward.<br />
              If you're looking for honest perspective rather than pressure,<br />
              this page is meant for you.
            </p>
          </div>
        </div>
      </section>
    );
  }
  