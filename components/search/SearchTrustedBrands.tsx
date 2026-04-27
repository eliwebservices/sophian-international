const brands = [
    "Aman", "Rosewood", "Kempinski", "Hilton", "Starwood",
    "Sheraton", "Sofitel", "Le Méridien", "JW Marriott", "Capella", "1 Hotels",
  ];
  
  export default function SearchTrustedBrands() {
    return (
      <section className="bg-cream py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="font-body text-[9px] tracking-[0.3em] uppercase text-muted text-center mb-10">
            Trusted by Leading Properties Across Greater China and Asia Pacific
          </p>
          <div className="flex flex-wrap justify-center border border-gold/25 divide-x divide-gold/25">
            {brands.map((brand) => (
              <div
                key={brand}
                className="px-7 py-5 font-display text-base tracking-wide text-navy/40 hover:text-navy transition-colors duration-300 cursor-default"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  