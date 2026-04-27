import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy2 px-6 pt-20 pb-10">
      <div className="max-w-6xl mx-auto">

        {/* Top */}
        <div className="grid md:grid-cols-4 gap-12 lg:gap-16 pb-16 border-b border-gold/15 mb-10">

          {/* Brand — spans 2 cols */}
          <div className="md:col-span-2">
            <p className="font-display text-3xl font-light tracking-widest text-white mb-1">Sophian</p>
            <p className="font-body text-[9px] tracking-[0.35em] uppercase text-gold mb-6">
              International · People & Culture Partner
            </p>
            <p className="font-body text-sm leading-relaxed text-white/40 max-w-xs mb-8">
              Empowering mission-driven hotels and hospitality brands to transform their
              growth through People & Culture solutions — creating people-first experiences
              for employees, guests, owners, and the broader community.
            </p>
            <p className="font-display italic text-sm text-white/25">
              "When people are developed with clarity, care, and purpose,<br />
              performance follows naturally." — Nick Huang
            </p>
          </div>

          {/* Services */}
          <div>
            <p className="font-body text-[9px] tracking-[0.28em] uppercase text-gold mb-6">Services</p>
            <ul className="flex flex-col gap-3 list-none p-0 m-0">
              {["Executive Search", "Corporate Training", "HR Consulting", "Free Career Clarity"].map(s => (
                <li key={s}>
                  <Link href="#" className="font-body text-sm text-white/45 hover:text-gold transition-colors duration-200 no-underline">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-body text-[9px] tracking-[0.28em] uppercase text-gold mb-6">Contact</p>
            <div className="flex flex-col gap-5">
              {[
                { label: "Email",    val: "YourGuide@sophianinternational.com" },
                { label: "Location", val: "Beijing, China" },
                { label: "WeChat",   val: "Scan QR Code to Connect on WeChat" },
              ].map(d => (
                <div key={d.label}>
                  <p className="font-body text-[9px] tracking-[0.2em] uppercase text-gold/60 mb-1">{d.label}</p>
                  <p className="font-body text-sm text-white/45">{d.val}</p>
                </div>
              ))}
              <Image src="/images/sophian-wechat-qr-code.png" width={150} height={150} alt="sophian-wechat-qr-code"/>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-wrap justify-between items-center gap-4">
          <p className="font-body text-xs text-white/25 tracking-wide">
            © 2026 Sophian International. All rights reserved.
          </p>
          <ul className="flex gap-8 list-none p-0 m-0">
            {["Privacy Policy", "Terms of Use"].map(l => (
              <li key={l}>
                <Link href="#" className="font-body text-[10px] tracking-[0.15em] uppercase text-white/25 hover:text-gold transition-colors no-underline">
                  {l}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
