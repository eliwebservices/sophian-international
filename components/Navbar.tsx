"use client";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isStuck, setIsStuck] = useState(false);
  const topBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (topBarRef.current) {
        const topBarHeight = topBarRef.current.offsetHeight;
        setIsStuck(window.scrollY > topBarHeight);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "About",            href: "/about" },
    { label: "Executive Search", href: "/executive-search" },
    { label: "Corporate Training",         href: "/corporate-training" },
    { label: "HR Consulting",       href: "/hr-consulting" },
    { label: "Free Resources",        href: "/free-resources" },
    { label: "Contact",          href: "/contact" },
  ];

  return (
    <header className="relative z-50">

      {/* ── TOP BAR — scrolls away with the page ── */}
      <div
        ref={topBarRef}
        className="border-b border-gold/20 px-8 py-3 flex items-center justify-between bg-white"
      >
        {/* Left — tagline */}
        <p className="hidden md:block font-body text-[11px] font-semibold uppercase text-navy/80">
          We Help You Turn Your People and Culture Into Revenue
        </p>

        {/* Centre — Logo */}
        {/* <Link href="/" className="flex flex-col items-center gap-0.5 no-underline absolute left-1/2 -translate-x-1/2">
          <span className="font-display text-xl font-light tracking-[0.15em] text-white leading-none">
            Sophian
          </span>
          <span className="font-display text-[7px] font-semibold tracking-[0.45em] uppercase text-gold">
            International
          </span>
        </Link> */}
        <Link href="/" className="flex items-center gap-0.5 no-underline">
          <Image src="/images/sophian-web-logo.png" width={70} height={70} alt="Sophian International" />
          {/* <div className="flex flex-col gap-0.5 no-underline">
          <span className="font-body text-2xl font-light tracking-widest text-white leading-none">
            Sophian
          </span>
          <span className="font-display text-[7px] font-semibold tracking-[0.45em] uppercase text-gold">
            International
          </span>
          </div> */}
        </Link>

        {/* Right — CTAs */}
        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="hidden md:inline-flex font-body text-[11px] font-semibold uppercase text-navy px-5 py-2 hover:bg-gold2 transition-colors duration-300 no-underline items-center gap-2"
          >
            Schedule a Call
          </Link>
          <Link
            href="/contact"
            className="hidden md:inline-flex font-body text-[11px] font-semibold uppercase text-navy px-5 py-2 hover:bg-gold2 transition-colors duration-300 no-underline items-center gap-2"
          >
            Free Workshop
          </Link>
        </div>
      </div>

      {/* ── BOTTOM BAR — becomes sticky once top bar scrolls out of view ── */}
      <div
        className={[
          "px-8 py-3 flex items-center justify-between transition-all duration-300",
          isStuck
            ? "fixed top-0 left-0 right-0 bg-navy/97 backdrop-blur-md border-b border-gold/15 shadow-lg"
            : "relative bg-navy/90",
        ].join(" ")}
      >
        {/* Left — alternate logo */}
        <Link href="/" className="flex items-center gap-0.5 no-underline">
          <Image src="/images/sophian-logo-white-1.png" width={50} height={50} alt="Sophian International" />
          {/* <div className="flex flex-col gap-0.5 no-underline">
          <span className="font-body text-2xl font-light tracking-widest text-white leading-none">
            Sophian
          </span>
          <span className="font-display text-[7px] tracking-[0.4em] uppercase text-gold">
            International
          </span>
          </div> */}
        </Link>

        {/* Centre — Nav links */}
        <ul className="hidden md:flex items-center gap-7 list-none m-0 p-0">
          {links.map((l) => (
            <li key={l.label}>
              <Link
                href={l.href}
                className="font-display text-[11px] font-medium tracking-[0.18em] uppercase text-white/80 hover:text-gold transition-colors duration-300 no-underline"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right — contact icons */}
        <div className="flex items-center gap-5">
          {/* WeChat */}
          <a
            href="#"
            title="WeChat"
            className="text-white/60 hover:text-gold transition-colors duration-300"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c-.2-.661-.314-1.354-.314-2.066C8.377 10.3 12.57 6.886 17.677 6.886c.568 0 1.126.048 1.668.135C18.172 3.76 13.773.188 8.69.188z"/>
              <path d="M23.98 14.925c0-3.39-3.207-6.135-7.168-6.135-3.963 0-7.17 2.745-7.17 6.135 0 3.389 3.207 6.134 7.17 6.134.887 0 1.739-.14 2.524-.395a.76.76 0 0 1 .635.083l1.687.987a.287.287 0 0 0 .148.048c.141 0 .258-.115.258-.261 0-.063-.025-.123-.042-.186l-.346-1.311a.522.522 0 0 1 .19-.59c1.61-1.2 2.664-2.987 2.664-4.97l.45.46z"/>
            </svg>
          </a>

          {/* Phone */}
          <a
            href="tel:+85363509608"
            title="Call us"
            className="text-white/60 hover:text-gold transition-colors duration-300"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.8a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.93 16l-.01.92z"/>
            </svg>
          </a>

          {/* Email */}
          <a
            href="mailto:YourGuide@sophianinternational.com"
            title="Email us"
            className="text-white/60 hover:text-gold transition-colors duration-300"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
          </a>
        </div>
      </div>

      {/* ── SPACER — prevents content jumping when bottom bar goes fixed ── */}
      {isStuck && (
        <div
          className="bg-navy/90"
          style={{ height: "56px" }}
        />
      )}
    </header>
  );
}



{/* <Link href="/" className="flex items-center gap-0.5 no-underline">
        <Image src="/images/sophian-logo-white-1.png" width={50} height={50} alt=""/>
        <div className="flex flex-col gap-0.5 no-underline">
        <span className="font-body text-2xl font-light tracking-widest text-white leading-none">
          Sophian
        </span>
        <span className="font-display text-[7px] tracking-[0.4em] uppercase text-gold">
          International
        </span>
        </div>
      </Link> */}