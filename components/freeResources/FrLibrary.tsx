"use client";
import { useState } from "react";

type Category = "all" | "search" | "training" | "consulting";

const resources = [
  { id: 1, category: "search",    format: "DOCX", title: "Executive Role Scorecard Template",      desc: "Define the role before you brief anyone. Structured around outcomes, not just experience." },
  { id: 2, category: "search",    format: "PDF",  title: "Culture-Fit Interview Kit",               desc: "Behavioral questions designed to reveal leadership philosophy and brand alignment." },
  { id: 3, category: "search",    format: "XLSX", title: "Candidate Evaluation Matrix",             desc: "Score and compare shortlisted candidates across weighted criteria objectively." },
  { id: 4, category: "search",    format: "PDF",  title: "Offer Checklist",                         desc: "Everything that needs to be in place before an offer is made — and after it's accepted." },
  { id: 5, category: "training",  format: "XLSX", title: "Training Gap Diagnosis Scorecard",        desc: "Identify where your training is weakest before designing a single program." },
  { id: 6, category: "training",  format: "XLSX", title: "Role Skills Matrix + Competency Checklist", desc: "Map what each role requires and where your team currently stands." },
  { id: 7, category: "training",  format: "PDF",  title: "60-Day Training Priority Plan",           desc: "A sequenced plan for what to train first, second, and third — aligned to business impact." },
  { id: 8, category: "training",  format: "XLSX", title: "Training Effectiveness Tracker",          desc: "Prove ROI on training investment with behavior change and business metrics." },
  { id: 9, category: "consulting", format: "PDF", title: "People & Culture Self-Assessment",        desc: "A structured audit of where your people systems are strong — and where they're exposed." },
  { id: 10, category: "consulting", format: "PDF", title: "Compliance Checklist",                   desc: "General guidance on common HR compliance areas. Not legal advice." },
  { id: 11, category: "consulting", format: "XLSX", title: "Turnover Analysis Worksheet",           desc: "Calculate the true cost of turnover and identify the roles most at risk." },
  { id: 12, category: "consulting", format: "DOCX", title: "30/60/90 Plan Template",               desc: "Structure the first three months of any new hire or leadership transition." },
];

const categoryLabels: Record<string, string> = {
  all:        "All Resources",
  search:     "Executive Search",
  training:   "Corporate Training",
  consulting: "HR Consulting",
};

const formatColors: Record<string, string> = {
  PDF:  "bg-gold/10 text-gold",
  XLSX: "bg-navy/10 text-navy",
  DOCX: "bg-cream text-muted border border-gold/20",
};

export default function ResourcesLibrary() {
  const [active, setActive]   = useState<Category>("all");
  const [search, setSearch]   = useState("");

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const filtered = resources.filter((r) => {
    const matchCat    = active === "all" || r.category === active;
    const matchSearch = r.title.toLowerCase().includes(search.toLowerCase()) ||
                        r.desc.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <section id="library" className="bg-cream py-28 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">
          <p className="font-display md:text-[14px] text-[9px] font-semibold tracking-[0.35em] uppercase text-gold mb-5">
            Resource Library
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-navy leading-[1.12] mb-6">
            Browse All Tools
          </h2>
          <div className="w-12 h-px bg-gold mx-auto" />
        </div>

        {/* Filters + search */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-10">
          <div className="flex flex-wrap gap-2">
            {(["all", "search", "training", "consulting"] as Category[]).map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={[
                  "font-display text-[9px] font-semibold tracking-[0.2em] uppercase px-5 py-2.5 transition-all duration-300 cursor-pointer border",
                  active === cat
                    ? "bg-navy text-white border-navy"
                    : "bg-white text-muted border-gold/25 hover:border-navy hover:text-navy",
                ].join(" ")}
              >
                {categoryLabels[cat]}
              </button>
            ))}
          </div>

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search resources..."
            className="font-display text-sm text-navy bg-white border-b border-gold/30 px-0 py-2 outline-none focus:border-navy transition-colors placeholder:text-muted/40 w-full md:w-56"
          />
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-gold/15">
          {filtered.map((r) => (
            <div key={r.id} className="bg-white p-8 flex flex-col group">
              <div className="flex items-center justify-between mb-5">
                <p className="font-display text-[9px] font-semibold tracking-[0.2em] uppercase text-gold">
                  {categoryLabels[r.category]}
                </p>
                <span className={`font-display text-[9px] font-semibold tracking-[0.15em] uppercase px-3 py-1 ${formatColors[r.format]}`}>
                  {r.format}
                </span>
              </div>
              <div className="w-6 h-px bg-gold mb-4" />
              <h3 className="font-display text-base font-light text-navy mb-3 leading-snug">
                {r.title}
              </h3>
              <p className="font-display text-xs text-muted leading-relaxed mb-6 flex-1">
                {r.desc}
              </p>
              <button
                onClick={() => scrollTo("request")}
                className="font-display text-[9px] font-semibold tracking-[0.25em] uppercase border border-gold/30 text-navy px-5 py-3 hover:bg-navy hover:text-white hover:border-navy transition-all duration-300 cursor-pointer bg-transparent mt-auto"
              >
                Unlock →
              </button>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center font-display text-sm text-muted py-16">
            No resources match your search. Try a different keyword.
          </p>
        )}
      </div>
    </section>
  );
}