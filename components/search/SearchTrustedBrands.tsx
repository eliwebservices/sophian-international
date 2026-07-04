// const brands = [
//     "Aman", "Rosewood", "Kempinski", "Hilton", "Starwood",
//     "Sheraton", "Sofitel", "Le Méridien", "JW Marriott", "Capella", "1 Hotels",
//   ];

"use client"

  const brands = [
    { name: "Accor", src: "/images/company-logos-colored/accor.png" },
    { name: "IHG", src: "/images/company-logos-colored/ihg.png" },
    { name: "Hilton", src: "/images/company-logos-colored/hilton.png" },
    { name: "Marriott", src: "/images/company-logos-colored/marriott.png" },
    { name: "Rosewood", src: "/images/company-logos-colored/rosewood.png" },
    { name: "Aman", src: "/images/company-logos-colored/aman.png" },
    { name: "Kempinski", src: "/images/company-logos-colored/kempinski.png" },
    { name: "Starwood", src: "/images/company-logos-colored/starwood.png" },
    { name: "SH", src: "/images/company-logos-colored/sh.png" },
    // { name: "one hotel", src: "/images/company-logos-colored/one-hotel.png" },
  ];

  
  export default function SearchTrustedBrands() {
    const doubled = [...brands, ...brands];

    return (
      <section className="bg-navy py-20 pb-1 px-6">
        {/* <div className="max-w-5xl mx-auto">
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
        </div> */}
{/*  */}
        <div className="mb-6">
          <p className="font-display text-[14px] font-semibold tracking-[0.3em] uppercase text-white text-center mb-8">
          Trusted by Leading Properties Across Greater China and Asia Pacific
          </p>
        </div>

        {/* Outer wrapper clips the overflow */}
        <div className="relative overflow-hidden mb-20 border-y border-gold/20 py-8">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-navy to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-navy to-transparent z-10 pointer-events-none" />

          {/* Scrolling track */}
          <div
            className="flex items-center gap-16"
            style={{
              width: "max-content",
              animation: "brandScroll 28s linear infinite",
            }}
          >
            {doubled.map((brand, i) => (
              <div
                key={`${brand.name}-${i}`}
                className="flex items-center justify-center flex-shrink-0 h-10 px-4 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                style={{ minWidth: "120px" }}
              >
                <img
                  src={brand.src}
                  alt={brand.name}
                  className="max-h-10 max-w-[110px] w-auto object-contain"
                  onError={(e) => {
                    // Fallback to text if image fails to load
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                      e.currentTarget.style.display = "none";
                      parent.innerHTML = `<span style="font-family:'DM Sans',sans-serif;font-size:13px;letter-spacing:0.15em;color:#022741;opacity:0.5;text-transform:uppercase;">${brand.name}</span>`;
                    }
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Keyframe for the carousel */}
        <style>{`
          @keyframes brandScroll {
            from { transform: translateX(0); }
            to   { transform: translateX(-50%); }
          }
        `}</style>
      </section>
    );
  }
  