"use client";
import { useState } from "react";
import ScheduleCallButton from "../ScheduleCallButton";

const onProperty = [
  ["General Manager / Managing Director", "Strategic visionaries who define brand culture and drive operational excellence across ultra-luxury properties."],
  ["Hotel Manager", "Senior operational leaders ensuring seamless guest experiences and day-to-day property performance."],
  ["Director of Sales & Marketing", "Commercial architects who build brand visibility and drive revenue in competitive luxury markets."],
  ["Director of Revenue Management", "Data-informed strategists who optimise yield and maximise asset performance."],
  ["Director of Marketing & Communications", "Brand storytellers who shape positioning and narrative for luxury hospitality properties."],
  ["Director of Rooms", "Guest experience leaders overseeing front office, housekeeping, and rooms operations to the highest standard."],
  ["Director of Food & Beverage", "Culinary visionaries orchestrating exceptional dining experiences across all outlets."],
  ["Director of Culinary / Executive Chef", "Chefs of distinction — with Michelin-calibre pedigree — who craft signature culinary programmes."],
  ["Director of Engineering", "Technical leaders maintaining impeccable infrastructure and property standards."],
  ["Director of Finance", "Financial stewards ensuring fiscal discipline and sustainable growth of luxury operations."],
  ["Director of People & Culture", "Talent architects who attract, develop, and retain world-class hospitality professionals."],
  ["Director of Learning & Development", "Culture builders who cultivate service excellence and translate brand standards into daily practice."],
  ["Regional Leadership", "Multi-property executives driving group-wide excellence, brand standards, and ownership alignment."],
  ["Owner Representatives", "Trusted advisors bridging ownership interests with operational reality across luxury and lifestyle assets."],
];

const cSuite = [
  "Chief Operating Officer (COO)",
  "Chief Financial Officer (CFO)",
  "Chief Marketing Officer (CMO)",
  "Chief of Asset Management",
  "Chief of Development",
  "Chief People Officer (CPO)",
  "Chief Sustainability Officer (CSO)",
];

const vp = [
  "VP of Hotel Operations",
  "VP of F&B Operations",
  "VP of Sales and Marketing",
  "VP of Human Resources",
  "VP of Finance",
  "VP of Hotel Development",
  "VP of Wellness",
];

export default function SearchMandates() {
  const [onPropertyOpen, setOnPropertyOpen] = useState(false);
  const [corporateOpen, setCorporateOpen]   = useState(false);

  return (
    <section className="bg-white py-28 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20">
          <p className="font-display text-[9px] md:text-[14px] font-semibold tracking-[0.35em] uppercase text-gold mb-5">
            Mandates We Lead
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-navy leading-[1.12] mb-6">
            The Roles We Place
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mb-8" />
          <p className="font-body text-sm text-muted leading-relaxed max-w-2xl mx-auto">
            Executive Committee and senior specialist roles across pre-opening and operational
            luxury properties.
          </p>
        </div>

        {/* ── ON-PROPERTY & REGIONAL ── */}
        <div className="mb-6">

          {/* Collapsible trigger */}
          <button
            onClick={() => setOnPropertyOpen(!onPropertyOpen)}
            className="w-full flex items-center justify-between px-0 py-6 border-t border-b border-gold/25 cursor-pointer bg-transparent text-left"
          >
            <div>
              <h3 className="font-display text-3xl font-light text-navy mb-1">
                On-Property & Regional Roles
              </h3>
              <p className="font-body text-sm text-muted">
                GMs, department heads, regional and specialist leadership
              </p>
            </div>
            <span className={[
              "font-display text-gold text-2xl flex-shrink-0 ml-6 transition-transform duration-300",
              onPropertyOpen ? "rotate-45" : "",
            ].join(" ")}>
              +
            </span>
          </button>

          {/* Collapsible content */}
          {onPropertyOpen && (
            <div className="border-b border-gold/25">
              <p className="font-body text-sm text-muted leading-relaxed max-w-3xl py-8">
                We identify and place exceptional leadership talent for the world's most prestigious
                palaces, luxury hotels, resorts, fine dining destinations, and high-end lifestyle
                hospitality brands across global markets.
              </p>
              <div className="border-t border-gold/15">
                {onProperty.map(([role, desc]) => (
                  <div
                    key={role}
                    className="grid md:grid-cols-[1fr_2fr] gap-6 py-6 border-b border-gold/15 px-4 -mx-4"
                  >
                    <p className="font-display text-lg font-light text-navy">{role}</p>
                    <p className="font-body text-sm text-muted leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* ── CORPORATE-LEVEL ── */}
        <div className="mb-16">

          {/* Collapsible trigger */}
          <button
            onClick={() => setCorporateOpen(!corporateOpen)}
            className="w-full flex items-center justify-between px-0 py-6 border-b border-gold/25 cursor-pointer bg-transparent text-left"
          >
            <div>
              <h3 className="font-display text-3xl font-light text-navy mb-1">
                Corporate-Level Roles
              </h3>
              <p className="font-body text-sm text-muted">
                C-Suite and Vice President positions across hospitality groups
              </p>
            </div>
            <span className={[
              "font-display text-gold text-2xl flex-shrink-0 ml-6 transition-transform duration-300",
              corporateOpen ? "rotate-45" : "",
            ].join(" ")}>
              +
            </span>
          </button>

          {/* Collapsible content */}
          {corporateOpen && (
            <div className="border-b border-gold/25">
              <p className="font-body text-sm text-muted leading-relaxed max-w-3xl py-8">
                We partner with hospitality groups at the corporate level to identify, assess, and
                secure exceptional leadership talent for luxury hotel brands and high-end lifestyle
                restaurant portfolios worldwide.
              </p>
              <div className="grid md:grid-cols-2 gap-px bg-gold/15 mb-8">
                <div className="bg-white p-12">
                  <p className="font-display text-[9px] font-semibold tracking-[0.3em] uppercase text-gold mb-6">
                    C-Suite Positions
                  </p>
                  <ul className="flex flex-col gap-3 list-none p-0 m-0">
                    {cSuite.map((r) => (
                      <li key={r} className="font-body text-sm text-[#1a1a1a] flex gap-3">
                        <span className="text-gold flex-shrink-0">—</span>
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white p-12">
                  <p className="font-display text-[9px] font-semibold tracking-[0.3em] uppercase text-gold mb-6">
                    Vice President Positions
                  </p>
                  <ul className="flex flex-col gap-3 list-none p-0 m-0">
                    {vp.map((r) => (
                      <li key={r} className="font-body text-sm text-[#1a1a1a] flex gap-3">
                        <span className="text-gold flex-shrink-0">—</span>
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="text-center">
          {/* <a
            href="#contact"
            className="font-display text-[9px] md:text-[10px] font-semibold tracking-[0.28em] uppercase bg-navy text-white px-10 py-4 hover:bg-navy2 transition-colors duration-300 no-underline inline-flex items-center gap-3"
          >
            Request a Confidential Consultation
          </a> */}
          <ScheduleCallButton variant="navy" className="hover:bg-navy/90!" label="Request a Confidential Consultation"/>
        </div>
      </div>
    </section>
  );
}
