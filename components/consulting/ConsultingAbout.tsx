import Link from "next/link";

const points = [
  "Deep expertise in luxury hospitality operations",
  "Tailored solutions, never one-size-fits-all",
  "Long-term partnerships focused on your success",
  "Data-driven strategies with measurable outcomes",
];

export default function ConsultingAbout() {
  return (
    <section className="bg-cream py-28 px-6">
      <div className="max-w-4xl mx-auto">

        <div className="text-center mb-16">
          <p className="font-display text-[9px] md:text-[14px] tracking-[0.4em] font-semibold uppercase text-gold mb-5">
            About Sophian International
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-navy leading-[1.12] mb-5">
            Your Partner in People Excellence
          </h2>
          <div className="w-12 h-px bg-gold mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-gold/15 mb-16">
          {/* Text */}
          <div className="bg-white p-12">
            <p className="font-body text-sm text-muted leading-relaxed mb-5">
              At Sophian International, we understand that your people are your brand, and
              exceptional hospitality begins with exceptional people. Our consulting practice is
              dedicated exclusively to luxury hotels and hospitality brands seeking to transform
              their people operations.
            </p>
            <p className="font-body text-sm text-muted leading-relaxed mb-8">
              With over 20 years of experience partnering with the world's most distinguished
              properties, we bring an intimate understanding of what it takes to build teams that
              deliver unforgettable guest experiences while driving sustainable business growth.
            </p>
            <ul className="flex flex-col gap-3 mb-8 list-none p-0 m-0">
              {points.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-gold flex-shrink-0 mt-0.5">→</span>
                  <span className="font-body text-sm text-muted leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/about"
              className="font-display font-semibold md:text-[10px] text-[9px] tracking-[0.25em] uppercase text-navy border-b border-navy pb-0.5 hover:text-gold hover:border-gold transition-colors duration-300 no-underline"
            >
              Learn More About Us
            </Link>
          </div>

          {/* Quote + stats */}
          <div className="bg-navy p-12 flex flex-col justify-between">
            <div>
              <span className="block font-display text-[72px] leading-[0.75] text-gold/30 mb-4">"</span>
              <blockquote className="font-display italic text-xl font-light text-white/85 leading-relaxed mb-6">
                Our success is simple: put people first. If you do that, profits will follow.
              </blockquote>
              <div className="w-12 h-px bg-gold mb-4" />
              <p className="font-body text-[9px] tracking-[0.25em] uppercase text-gold">
                — Bill Marriott, Marriott International
              </p>
            </div>

            <div className="border-t border-gold/20 pt-10 mt-10">
              <p className="font-body text-[9px] tracking-[0.4em] uppercase text-gold mb-2">
                Sophian International
              </p>
              <p className="font-body text-sm text-white/45 mb-4">
                Luxury Hotel Ownership Advisory
              </p>
              <div className="flex gap-6">
                {[["13", "Properties"], ["12", "Markets"], ["20", "Years"]].map(([n, l]) => (
                  <div key={l}>
                    <span className="font-display text-3xl font-light text-gold">{n}</span>
                    <p className="font-body text-[9px] uppercase tracking-wide text-white/40 mt-0.5">{l}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
