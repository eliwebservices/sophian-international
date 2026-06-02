"use client";
import { useState, useEffect, useRef } from "react";

const testimonials = [
  {
    quote: "Sophian presented us with three candidates of exceptional calibre within four weeks. All three were appointable. That quality of shortlist is extraordinarily rare in this market.",
    author: "General Manager, Ultra-Luxury Resort, Southeast Asia",
  },
  {
    quote: "What sets Nick apart is the depth of his relationships. He doesn't find candidates — he introduces people he has known and trusted for years. That changes the entire dynamic of a senior search.",
    author: "Regional Vice President, People & Culture, International Luxury Hotel Group, Asia Pacific",
  },
  {
    quote: "Our previous searches through general agencies returned volume, not quality. Working with Sophian was a fundamentally different experience — precise, discreet, and consistently professional.",
    author: "Owner Representative, Private Luxury Property, Greater China",
  },
];

const INTERVAL = 5000;

export default function SearchTestimonials() {
  const [active, setActive]   = useState(0);
  const [paused, setPaused]   = useState(false);
  const [fadeIn, setFadeIn]   = useState(true);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = (index: number) => {
    setFadeIn(false);
    setTimeout(() => {
      setActive(index);
      setFadeIn(true);
    }, 200);
  };

  const next = () => goTo((active + 1) % testimonials.length);
  const prev = () => goTo((active - 1 + testimonials.length) % testimonials.length);

  // Auto-advance
  useEffect(() => {
    if (paused) return;
    intervalRef.current = setInterval(next, INTERVAL);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [active, paused]);

  const current = testimonials[active];

  return (
    <section className="bg-white py-28 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20">
          <p className="font-display text-[9px] md:text-[14px] font-semibold tracking-[0.35em] uppercase text-gold mb-5">
            Client Perspective
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-navy leading-[1.12] mb-6">
            What Our Clients Say
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mb-8" />
          <p className="font-body text-sm text-muted leading-relaxed max-w-3xl mx-auto">
            The following represents the calibre of results Sophian International delivers.
            We invite prospective clients to request specific references during the Discovery Briefing.
          </p>
        </div>

        {/* Slider */}
        <div
          className="relative border border-gold/20 overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Progress bar */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gold/15">
            {!paused && (
              <div
                key={active}
                className="h-full bg-gold"
                style={{ animation: `progress ${INTERVAL}ms linear forwards` }}
              />
            )}
          </div>

          {/* Testimonial content */}
          <div
            className={[
              "px-12 md:px-20 py-16 md:py-20 text-center transition-opacity duration-300",
              fadeIn ? "opacity-100" : "opacity-0",
            ].join(" ")}
          >
            {/* Large quote mark */}
            <span className="block font-body text-[96px] leading-[0.75] text-gold/20 mb-6 select-none">
              "
            </span>

            <blockquote className="font-body text-xl md:text-2xl italic font-light text-navy/80 leading-relaxed mb-10 max-w-3xl mx-auto">
              {current.quote}
            </blockquote>

            <div className="w-12 h-px bg-gold mx-auto mb-6" />

            <p className="font-display text-[9px] font-semibold tracking-[0.25em] uppercase text-gold">
              {current.author}
            </p>
          </div>

          {/* Prev / Next arrows */}
          <button
            onClick={() => { prev(); setPaused(true); setTimeout(() => setPaused(false), 8000); }}
            className="absolute left-5 top-1/2 -translate-y-1/2 w-10 h-10 border border-gold/25 flex items-center justify-center text-gold hover:bg-gold hover:text-navy transition-all duration-300 bg-white/80 backdrop-blur-sm cursor-pointer"
            aria-label="Previous testimonial"
          >
            ←
          </button>
          <button
            onClick={() => { next(); setPaused(true); setTimeout(() => setPaused(false), 8000); }}
            className="absolute right-5 top-1/2 -translate-y-1/2 w-10 h-10 border border-gold/25 flex items-center justify-center text-gold hover:bg-gold hover:text-navy transition-all duration-300 bg-white/80 backdrop-blur-sm cursor-pointer"
            aria-label="Next testimonial"
          >
            →
          </button>
        </div>

        {/* Dot navigation */}
        <div className="flex justify-center gap-3 mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => { goTo(i); setPaused(true); setTimeout(() => setPaused(false), 8000); }}
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

      <style>{`
        @keyframes progress {
          from { width: 0%; }
          to   { width: 100%; }
        }
      `}</style>
    </section>
  );
}
