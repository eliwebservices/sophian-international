"use client";
import { useState, useEffect, useRef } from "react";

const values = [
  {
    title: "Purposeful",
    cn: "意义",
    sub: "Serving with meaning and intention",
    desc: "We serve with clear calling, bringing meaning and intention to every engagement. Like a potter shaping clay, we approach each partnership with deliberate purpose and care.",
    image: "/images/potters-clay.png",
  },
  {
    title: "Authentic",
    cn: "本真",
    sub: "Leading with truth, integrity, and real experience",
    desc: "We lead authentically, grounded in truth, integrity, and proven real-world experience. Like clear spring water flowing from high mountains, our counsel is pure, transparent, and trustworthy.",
    image: "/images/waterfalls.png",
  },
  {
    title: "Transformative",
    cn: "新生",
    sub: "Creating lasting personal, cultural, and leadership change",
    desc: "We enable lasting transformation across people, leadership, and culture. Like a butterfly emerging from its chrysalis, we guide organizations through meaningful, beautiful change.",
    image: "/images/butterfly-transform.png",
  },
];

const INTERVAL = 4000;

export default function AboutCoreValues() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [fadeIn, setFadeIn] = useState(true);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = (index: number) => {
    setFadeIn(false);
    setTimeout(() => {
      setActive(index);
      setFadeIn(true);
    }, 180);
  };

  const next = () => goTo((active + 1) % values.length);

  // Auto-advance
  useEffect(() => {
    if (paused) return;
    intervalRef.current = setInterval(next, INTERVAL);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [active, paused]);

  const current = values[active];

  return (
    <section className="bg-cream py-28 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-display text-[9px] font-semibold tracking-[0.35em] uppercase text-gold mb-5">
            Core Values
          </p>
          {/* <h2 className="font-display text-4xl md:text-5xl font-light text-navy leading-[1.12] mb-6">
            Purposeful. Authentic. Transformative.
          </h2> */}
          <div className="w-12 h-px bg-gold mx-auto" />
        </div>

        {/* Tab bar */}
        <div className="flex border border-gold/25">
          {values.map((v, i) => (
            <button
              key={v.title}
              onClick={() => {
                goTo(i);
                setPaused(true);
                // Resume auto-slide after 8s of inactivity
                setTimeout(() => setPaused(false), 8000);
              }}
              className={[
                "flex-1 py-4 font-display text-[10px] font-semibold tracking-[0.25em] uppercase transition-all duration-300 border-none cursor-pointer",
                i < values.length - 1 ? "border-r border-gold/25" : "",
                active === i
                  ? "bg-navy text-gold"
                  : "bg-white text-muted hover:bg-warm",
              ].join(" ")}
            >
              {v.title}
            </button>
          ))}
        </div>

        {/* Slide */}
        <div
          className="grid md:grid-cols-2 border border-gold/25 border-t-0 overflow-hidden h-[440px]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Text — left */}
          <div
            className={[
              "flex flex-col justify-center px-12 md:px-16 py-10 bg-white transition-opacity duration-300",
              fadeIn ? "opacity-100" : "opacity-0",
            ].join(" ")}
          >
            <p className="font-body text-[64px] italic text-gold/25 leading-none mb-3 select-none">
              {current.cn}
            </p>
            <h3 className="font-display text-3xl font-light text-navy mb-3">
              {current.title}
            </h3>
            <p className="font-display text-[10px] font-semibold tracking-[0.15em] uppercase text-gold mb-6">
              {current.sub}
            </p>
            <div className="w-12 h-px bg-gold mb-7" />
            <p className="font-body text-lg text-muted leading-relaxed">
              {current.desc}
            </p>
          </div>

          {/* Image — right */}
          <div className="relative overflow-hidden">
            <img
              key={active}
              src={current.image}
              alt={current.title}
              className={[
                "absolute inset-0 w-full h-full object-cover transition-all duration-500",
                fadeIn ? "opacity-100 scale-100" : "opacity-0 scale-105",
              ].join(" ")}
            />
            <div className="absolute inset-0 bg-navy/15" />

            {/* Progress bar */}
            <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-white/20">
              {!paused && (
                <div
                  key={active}
                  className="h-full bg-gold"
                  style={{
                    animation: `progress ${INTERVAL}ms linear forwards`,
                  }}
                />
              )}
            </div>

            {/* Counter */}
            <div className="absolute bottom-6 right-6 bg-navy/70 backdrop-blur-sm px-4 py-2">
              <p className="font-display text-[9px] font-semibold tracking-[0.25em] uppercase text-gold">
                {String(active + 1).padStart(2, "0")} / {String(values.length).padStart(2, "0")}
              </p>
            </div>
          </div>
        </div>

        {/* Dot navigation */}
        <div className="flex justify-center gap-3 mt-6">
          {values.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                goTo(i);
                setPaused(true);
                setTimeout(() => setPaused(false), 8000);
              }}
              className={[
                "transition-all duration-300 border-none cursor-pointer rounded-none",
                active === i
                  ? "w-8 h-[3px] bg-gold"
                  : "w-4 h-[3px] bg-gold/30 hover:bg-gold/60",
              ].join(" ")}
            />
          ))}
        </div>
      </div>

      {/* Progress keyframe */}
      <style>{`
        @keyframes progress {
          from { width: 0%; }
          to   { width: 100%; }
        }
      `}</style>
    </section>
  );
}
