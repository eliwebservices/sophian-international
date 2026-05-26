"use client";
import dynamic from "next/dynamic";

const MapComponent = dynamic(
  () => import("@/components/search/SearchGlobalReachMap"),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-[520px] bg-cream border border-gold/25 flex items-center justify-center">
        <p className="font-display text-[9px] font-semibold tracking-[0.35em] uppercase text-gold animate-pulse">
          Loading Map...
        </p>
      </div>
    ),
  }
);

export const markers = [
  { name: "Beijing",   lng: 116.4, lat: 39.9,  region: "Greater China",  primary: true  },
  { name: "Shanghai",  lng: 121.5, lat: 31.2,  region: "Greater China",  primary: true  },
  { name: "Chengdu",   lng: 104.1, lat: 30.6,  region: "Greater China",  primary: true  },
  { name: "Sanya",     lng: 109.5, lat: 18.2,  region: "Greater China",  primary: true  },
  { name: "Guangzhou", lng: 113.3, lat: 23.1,  region: "Greater China",  primary: true  },
  { name: "Hong Kong", lng: 114.2, lat: 22.3,  region: "Greater China",  primary: true  },
  { name: "Macau",     lng: 113.5, lat: 22.2,  region: "Greater China",  primary: true  },
  { name: "Singapore", lng: 103.8, lat: 1.3,   region: "Asia Pacific",   primary: false },
  { name: "Tokyo",     lng: 139.7, lat: 35.7,  region: "Asia Pacific",   primary: false },
  { name: "Bangkok",   lng: 100.5, lat: 13.8,  region: "Asia Pacific",   primary: false },
  { name: "Bali",      lng: 115.2, lat: -8.3,  region: "Asia Pacific",   primary: false },
  { name: "Dubai",     lng: 55.3,  lat: 25.2,  region: "Middle East",    primary: false },
  { name: "London",    lng: -0.1,  lat: 51.5,  region: "Europe",         primary: false },
];

export type MarkerData = typeof markers[number];

export default function SearchGlobalReach() {
  return (
    <section className="bg-white py-28 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20">
          <p className="font-display text-[9px] md:text-[14px] font-semibold tracking-[0.35em] uppercase text-gold mb-5">
            Global Reach, Local Expertise
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-navy leading-[1.12] mb-6">
            Connecting Top-Tier Talent<br />with Exceptional Opportunities
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mb-8" />
          <p className="font-display text-sm text-muted leading-relaxed max-w-3xl mx-auto">
            Whether you are a hospitality group in search of the ideal candidate, or a
            highly qualified hospitality manager pursuing an executive career on property
            or at corporate level, we are your strategic partner for success.
          </p>
        </div>

        <p className="font-display text-[9px] font-semibold tracking-[0.35em] uppercase text-gold text-center mb-10">
          Our Key Markets
        </p>

        {/* Map — loaded client side only */}
        <MapComponent markers={markers} />

        {/* City tags */}
        {/* <div className="border border-gold/25 border-t-0 bg-white">
          <div className="flex flex-wrap justify-center divide-x divide-gold/25">
            {markers.map((m) => (
              <div
                key={m.name}
                className={[
                  "px-6 py-4 font-display text-sm tracking-wide transition-colors duration-300 cursor-default",
                  m.primary
                    ? "text-gold hover:text-navy font-medium"
                    : "text-navy/45 hover:text-navy",
                ].join(" ")}
              >
                {m.name}
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
}
