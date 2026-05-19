"use client";
import { useState } from "react";

const scenes = [
  {
    src: "/images/training-the-team.png",
    alt: "Hospitality team in a luxury hotel training session",
    caption: "Training the Team",
  },
  {
    src: "/images/advising-leaders.png",
    alt: "One-on-one executive consulting in a refined office",
    caption: "Advising Leaders",
  },
  {
    src: "/images/elevating-guest-experience.png",
    alt: "Luxury restaurant server delighting a guest",
    caption: "Elevating Guest Experience",
  },
  {
    src: "/images/serving-owners-community.png",
    alt: "Hotel owner with happy team and community",
    caption: "Serving Owners & Community",
  },
];

// Each photo's rotation, horizontal offset, and vertical offset
const layout = [
  { rotate: "-6deg",  x: "0%",    y: "0%",    z: 10 },
  { rotate: "3deg",   x: "20%",   y: "-4%",   z: 20 },
  { rotate: "-2deg",  x: "40%",   y: "3%",    z: 30 },
  { rotate: "5deg",   x: "58%",   y: "-2%",   z: 40 },
];

export default function AboutWhatWeDo() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="bg-white py-28 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">
          <p className="font-display text-[9px] md:text-[14px] tracking-[0.35em] font-semibold uppercase text-gold mb-5">
            What We Do
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-navy leading-[1.12] mb-6">
            Empowering Mission-Driven Hospitality
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mb-8" />
          <p className="font-body text-sm text-muted leading-relaxed max-w-3xl mx-auto mb-8">
            We exist to empower mission-driven hotels and restaurants to transform their growth
            through People & Culture solutions — creating people-first experiences for employees,
            guests, owners, and the broader community.
          </p>
          <blockquote className="font-display italic text-md md:text-lg text-muted max-w-2xl mx-auto mb-3">
            "Love your neighbor as yourself."
          </blockquote>
          <p className="font-body text-[9px] tracking-[0.3em] uppercase text-gold">
            — Galatians 5:14
          </p>
        </div>

        {/* ── OVERLAPPING PHOTOS — desktop ── */}
        <div className="hidden md:block">

          {/* Outer wrapper sets the stage height */}
          <div className="relative w-full" style={{ height: "480px" }}>
            {scenes.map((s, i) => {
              const pos = layout[i];
              const isHovered = hovered === i;

              return (
                <div
                  key={s.caption}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  className="absolute cursor-pointer"
                  style={{
                    left: pos.x,
                    top: pos.y,
                    width: "340px",
                    zIndex: isHovered ? 50 : pos.z,
                    transform: `rotate(${isHovered ? "0deg" : pos.rotate}) ${isHovered ? "scale(1.05)" : "scale(1)"}`,
                    transition: "transform 0.4s cubic-bezier(0.4,0,0.2,1), z-index 0s",
                    transformOrigin: "center center",
                  }}
                >
                  {/* Photo frame — white border like a physical print */}
                  <div
                    className="bg-white shadow-2xl"
                    style={{ padding: "10px 10px 40px 10px" }}
                  >
                    {/* Image */}
                    <div className="overflow-hidden" style={{ height: "280px" }}>
                      <img
                        src={s.src}
                        alt={s.alt}
                        className="w-full h-full object-cover"
                        style={{
                          transition: "transform 0.5s ease",
                          transform: isHovered ? "scale(1.05)" : "scale(1)",
                        }}
                      />
                    </div>

                    {/* Caption area — like the white space at the bottom of a print */}
                    <div className="pt-3 px-1">
                      <p className="font-display text-[9px] font-semibold tracking-[0.25em] uppercase text-navy/60 text-center">
                        {s.caption}
                      </p>
                    </div>
                  </div>

                  {/* Gold accent line at bottom of frame */}
                  <div className="absolute bottom-0 left-3 right-3 h-[2px] bg-gold/40" />
                </div>
              );
            })}
          </div>

          {/* Caption hint */}
          <p className="text-center font-display text-[9px] tracking-[0.25em] uppercase text-muted mt-8">
            Hover to explore
          </p>
        </div>

        {/* ── MOBILE FALLBACK — simple 2x2 grid ── */}
        <div className="grid grid-cols-2 gap-3 md:hidden">
          {scenes.map((s) => (
            <figure key={s.caption} className="group relative overflow-hidden aspect-[4/3]">
              <img
                src={s.src}
                alt={s.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-navy/30 group-hover:bg-navy/10 transition-colors duration-500" />
              <figcaption className="absolute bottom-0 left-0 right-0 bg-navy/70 py-3 px-4">
                <p className="font-body text-[8px] tracking-[0.2em] uppercase text-white font-bold">
                  {s.caption}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}