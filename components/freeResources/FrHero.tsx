"use client";
import ScheduleCallButton from "@/components/ScheduleCallButton";
import { ClipboardList, Search } from "lucide-react";

export default function ResourcesHero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">
      {/* Background image */}
      <img
        src="/images/home-strip-8.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/75 to-navy/40" /> */}
      <div className="absolute inset-0 bg-gradient-to-b bg-navy/20" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-28 w-full">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left — main copy */}
          <div>
            <p className="font-display text-[9px] font-semibold tracking-[0.4em] uppercase text-white mb-6 md:text-[11px]">
              Free tools for hotel owners, GMs & HR professionals
            </p>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-white leading-[1.08] mb-6">
              Free Premium HR &<br />
              Training Resources
              <br />
              for Hospitality Excellence
            </h1>

            <div className="w-12 h-px bg-gold mb-6" />

            <p className="font-body text-sm leading-relaxed text-white/65 mb-10 max-w-lg">
              Access our curated library of templates, checklists, and
              frameworks — developed from 20+ years of hospitality experience
              across global international hotels. No cost, no commitment.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-14">
              <button
                onClick={() => scrollTo("request")}
                className="font-display md:text-[10px] text-[9px] border border-white/40 text-white hover:bg-gold hover:text-white font-semibold tracking-[0.28em] uppercase px-8 py-4 transition-colors duration-300 cursor-pointer"
              >
                Get Instant Access
              </button>
              <button
                onClick={() => scrollTo("diagnostic")}
                className="font-display md:text-[10px] text-[9px] font-semibold tracking-[0.28em] uppercase border border-white/40 text-white px-8 py-4 hover:border-gold hover:text-gold transition-all duration-300 cursor-pointer bg-transparent"
              >
                Take the 3-Minute Diagnostic
              </button>
              <button
                onClick={() => scrollTo("library")}
                className="font-display text-[9px] font-semibold tracking-[0.28em] uppercase text-white/50 hover:text-gold transition-colors duration-300 cursor-pointer bg-transparent border-none underline underline-offset-4"
              >
                Browse Library
              </button>
            </div>

            {/* Proof boxes */}
            {/* <div className="flex flex-wrap gap-px bg-gold/20">
              {[
                { num: "20+",                  label: "Years Experience"        },
                { num: "International",         label: "Standard Resources"     },
                { num: "Practical",             label: "Ready-to-Use Tools"     },
              ].map((p) => (
                <div key={p.label} className="bg-navy/60 backdrop-blur-sm px-7 py-5 flex-1 min-w-[120px]">
                  <p className="font-display text-xl font-light text-gold leading-none mb-1">{p.num}</p>
                  <p className="font-display text-[9px] font-semibold tracking-[0.2em] uppercase text-white/50">{p.label}</p>
                </div>
              ))}
            </div> */}
          </div>

          {/* Right — pack preview cards */}
          <div className="hidden md:flex flex-col gap-4">
            {[
              {
                title: "Fast Hire Pack",
                sub: "Executive Search",
                icon: <Search />,
              },
              {
                title: "Learning & Culture Gap",
                sub: "Corporate Training",
                icon: <ClipboardList />,
              },
              { title: "HR Health Check", sub: "HR Consulting", icon: "✦" },
            ].map((pack) => (
              <div
                key={pack.title}
                className="bg-white/[0.08] backdrop-blur-md border border-white/15 px-7 py-6 flex items-center justify-between group hover:bg-white/[0.14] transition-colors duration-300"
              >
                <div className="flex items-center gap-5">
                  <span className="text-white text-2xl">{pack.icon}</span>
                  <div>
                    <p className="font-display text-base font-light text-white">
                      {pack.title}
                    </p>
                    <p className="font-display text-[9px] font-semibold tracking-[0.2em] uppercase text-white/70 mt-0.5">
                      {pack.sub}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => scrollTo("request")}
                  className="font-display text-[9px] font-semibold tracking-[0.2em] uppercase text-white border border-white/40 px-4 py-2 hover:bg-gold hover:text-white transition-all duration-300 cursor-pointer bg-transparent flex-shrink-0"
                >
                  Unlock
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom glass bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-navy/50 backdrop-blur-md border-t border-white/10 py-4 px-10 hidden md:block">
        <div className="max-w-6xl mx-auto flex items-center justify-center gap-12">
          {[
            "Fast Hire Pack",
            "Learning & Culture Gap Pack",
            "HR Health Check Pack",
          ].map((label) => (
            <button
              key={label}
              onClick={() => scrollTo("packs")}
              className="font-display text-[10px] font-semibold tracking-[0.25em] uppercase text-white/60 hover:text-gold transition-colors duration-300 bg-transparent border-none cursor-pointer"
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
