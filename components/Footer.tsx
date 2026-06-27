import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  // Dynamic year — updates automatically every year
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy px-6 pt-20 pb-10">
      <div className="max-w-6xl mx-auto">

        <div className="grid md:grid-cols-7 gap-12 lg:gap-16 pb-16 border-b border-gold/15 mb-10">

          <div className="md:col-span-2">
            <p className="font-body text-3xl font-light text-white mb-1">SOPHIAN</p>
            <p className="font-display text-[9px] font-semibold tracking-[0.35em] uppercase text-gold mb-6">
              International · People & Culture Partner
            </p>
            <p className="font-display text-sm leading-relaxed text-white max-w-xs mb-8">
              Empowering mission-driven hotels and hospitality brands to transform their
              growth through People & Culture solutions — creating people-first experiences
              for employees, guests, owners, and the broader community.
            </p>
            <p className="font-body text-base italic text-white/50">
              "When people are developed with clarity, care, and purpose,
              performance follows naturally." <br /> — Nick Huang
            </p>
          </div>

          <div className="md:col-span-2">
            <p className="font-display text-[9px] font-semibold tracking-[0.28em] uppercase text-gold mb-6">Services</p>
            <ul className="flex flex-col gap-3 list-none p-0 m-0">
              {[
                { title: "Executive Search",    slug: "executive-search"    },
                { title: "Corporate Training",  slug: "corporate-training"  },
                { title: "HR Consulting",       slug: "hr-consulting"       },
                { title: "Free Career Clarity", slug: "free-resources"      },
              ].map(s => (
                <li key={s.slug}>
                  <Link
                    href={s.slug}
                    className="font-display text-sm text-white hover:text-gold transition-colors duration-200 no-underline"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="font-display text-[9px] font-semibold tracking-[0.28em] uppercase text-gold mb-6">Contact</p>
            <div className="flex flex-col gap-5">
              {[
                { label: "Email",    val: "yourguide@sophianinternational.com" },
                { label: "Location", val: "Beijing, China"                     },
                { label: "WeChat",   val: ""               },
              ].map(d => (
                <div key={d.label}>
                  <p className="font-display text-[9px] font-semibold tracking-[0.2em] uppercase text-gold/60 mb-1">
                    {d.label}
                  </p>
                  <p className="font-display text-sm text-white">{d.val}</p>
                </div>
              ))}
              <Image
                src="/images/sophian-wechat-qr-code.png"
                width={150}
                height={150}
                alt="sophian-wechat-qr-code"
              />
            </div>
          </div>

          <div>
            <p className="font-display text-[9px] font-semibold tracking-[0.28em] uppercase text-gold mb-6">Terms</p>
            <ul className="flex flex-col gap-3 list-none p-0 m-0">
              {[
                { title: "Cookie Policy",    slug: "/cookie-policy"    },
                { title: "Privacy Policy",  slug: "/privacy-policy"  },
              ].map(s => (
                <li key={s.slug}>
                  <Link
                    href={s.slug}
                    className="font-display text-sm text-white hover:text-gold transition-colors duration-200 no-underline"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── ICP LICENSE BAR ── */}
        <div className="flex items-center justify-between mb-8">
          {/* Left — ICP license */}
          <p className="font-display text-[10px] font-semibold tracking-[0.2em] uppercase text-white/25">
            ICP LICENSE
          </p>

          {/* Centre — Logo */}
          <div className="flex items-center justify-center">
            <Image
              src="/images/sophian-logo-white-1.png"
              width={100}
              height={100}
              alt="Sophian International"
            />
          </div>

          {/* Right — Dynamic year */}
          <p className="font-display text-[10px] font-semibold tracking-[0.2em] uppercase text-white/25">
            Sophian International © 2000 - {currentYear}
          </p>
        </div>

        {/* ── BOTTOM BAR ── */}
        <div className="flex flex-wrap justify-between items-center gap-4">
          {/* <p className="font-display text-xs text-white/25 tracking-wide">
            © 2026 Sophian International. All rights reserved.
          </p> */}
          {/* <ul className="flex gap-8 list-none p-0 m-0">
            {["Privacy Policy", "Terms of Use"].map(l => (
              <li key={l}>
                <Link
                  href="#"
                  className="font-display text-[10px] font-semibold tracking-[0.15em] uppercase text-white/25 hover:text-gold transition-colors no-underline"
                >
                  {l}
                </Link>
              </li>
            ))}
          </ul> */}
        </div>

      </div>
    </footer>
  );
}
