interface Program {
    name: string;
    description: string;
    duration: string;
  }
  
  interface ProgramCategory {
    title: string;
    subtitle: string;
    programs: Program[];
  }
  
  const categories: ProgramCategory[] = [
    {
      title: "For All Team Members",
      subtitle: "Building a foundation of excellence and brand pride across frontline teams",
      programs: [
        { name: "Attitude & Appearance",                    description: "Aligning personal presentation with brand standards",                 duration: "4 hours" },
        { name: "Service Excellence",                        description: "Mastering the art of authentic, consistent service",                  duration: "4 hours" },
        { name: "Brand Immersion & Orientation",             description: "A deep dive into your unique brand and culture",                      duration: "3 days"  },
        { name: "90-Day Onboarding & Immersion",             description: "Structured transition from hire to full role readiness",              duration: "3 days"  },
        { name: "Managing Departmental Training",            description: "Planning and executing training with consistency",                    duration: "2 days"  },
        { name: "Becoming a World-Class Brand Ambassador",   description: "Representing your brand with peak professionalism",                   duration: "4 days"  },
      ],
    },
    {
      title: "For Supervisors & Above",
      subtitle: "Developing the frontline leaders who drive daily operations and team culture",
      programs: [
        { name: "Leadership Essentials",             description: "Foundational skills for the modern supervisor",                              duration: "4 days" },
        { name: "Management Awareness Program",      description: "",                                                                            duration: "4 days" },
        { name: "Leadership Behaviors",              description: "Defining the actions that drive team performance",                            duration: "1 day"  },
        { name: "Train-the-Trainer Certification",   description: "Facilitating and coaching others with confidence",                            duration: "2 days" },
        { name: "Managing Learning & Development",   description: "Strategic oversight of departmental growth through training",                 duration: "1 day"  },
        { name: "Coaching & Feedback Skills",        description: "Correcting performance while keeping morale and confidence high",             duration: "1 day"  },
      ],
    },
    {
      title: "For Managers & Above",
      subtitle: "Strategic leadership programs for senior executives and department heads",
      programs: [
        { name: "Hiring for Excellence",             description: "Behavioral interviewing to identify the right talent",                       duration: "1 day" },
        { name: "Performance Management",            description: "Driving accountability and measurable results",                              duration: "1 day" },
        { name: "Progressive Discipline",            description: "Navigating corrective actions with professional standards",                  duration: "1 day" },
        { name: "Leadership Development Program",    description: "Advanced growth for managers and executives",                               duration: "4 days" },
        { name: "Mentoring & Coaching",              description: "Cultivating the next generation of leadership talent",                      duration: "1 day" },
        { name: "Talent & Succession Planning",      description: "Building a pipeline of future internal leaders",                            duration: "1 day" },
        { name: "Commercial & Financial Acumen",     description: "Understanding the business drivers of hospitality performance",             duration: "1 day" },
      ],
    },
  ];
  
  function ProgramTable({ category }: { category: ProgramCategory }) {
    return (
      <div className="mb-16 last:mb-0">
        <h3 className="font-display text-2xl font-light text-navy mb-2">{category.title}</h3>
        <p className="font-body text-sm text-muted mb-8">{category.subtitle}</p>
  
        <div className="border border-gold/25">
          {/* Header row */}
          <div className="grid grid-cols-[1fr_auto] bg-navy px-6 py-4">
            <span className="font-body text-[9px] tracking-[0.2em] uppercase text-gold">Program</span>
            <span className="font-body text-[9px] tracking-[0.2em] uppercase text-gold">Duration</span>
          </div>
          {/* Rows */}
          {category.programs.map((p, i) => (
            <div
              key={i}
              className={`grid grid-cols-[1fr_auto] px-6 py-5 border-t border-gold/15 hover:bg-warm transition-colors duration-200 ${i % 2 === 1 ? "bg-warm/50" : "bg-white"}`}
            >
              <div>
                <p className="font-body text-sm text-[#1a1a1a]">{p.name}</p>
                {p.description && (
                  <p className="font-body text-xs text-muted mt-1">{p.description}</p>
                )}
              </div>
              <span className="font-body text-sm text-muted whitespace-nowrap pl-10">
                {p.duration}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default function TrainingPrograms() {
    return (
      <section className="bg-cream py-28 px-6">
        <div className="max-w-5xl mx-auto">
  
          <div className="text-center mb-16">
            <p className="font-body text-[9px] tracking-[0.35em] uppercase text-gold mb-5">
              Training Programs
            </p>
            <div className="w-12 h-px bg-gold mx-auto mb-6" />
            <h2 className="font-display text-4xl md:text-5xl font-light text-navy leading-[1.12] mb-5">
              Designed for Every Level<br />of Your Organization
            </h2>
            <p className="font-body text-sm text-muted leading-relaxed max-w-3xl mx-auto">
              All programs are delivered in-house, tailored to your brand standards, and adapted
              to your operational context. Our curriculum spans the full organizational hierarchy
              — from frontline associates through to senior executives. Our content blends theory,
              interactive discussions, and hands-on activities to ensure a dynamic learning experience.
            </p>
          </div>
  
          {categories.map((cat, i) => (
            <ProgramTable key={i} category={cat} />
          ))}
        </div>
      </section>
    );
  }
  