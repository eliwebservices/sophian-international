"use client";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Drawer } from "vaul";
import { usePathname } from "next/navigation";

type NavItem = {
  num: string;
  label: string;
  href: string;
};

const navItems: NavItem[] = [
  { num: "01", label: "About", href: "/about" },
  { num: "02", label: "Executive Search", href: "/executive-search" },
  { num: "03", label: "Corporate Training", href: "/corporate-training" },
  { num: "04", label: "Hr Consulting", href: "/hr-consulting" },
  { num: "05", label: " Free Resources", href: "/free-resources" },
  { num: "07", label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isStuck, setIsStuck] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const topBarRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

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

  const isActive = (href: string) =>
    href !== "/" &&
    href !== "/#assessment" &&
    (pathname === href || pathname.startsWith(href));

  return (
    <header className="relative z-50">
      {/* ── TOP BAR — scrolls away with the page ── */}
      <div
        ref={topBarRef}
        className="border-b border-gold/20 px-8 py-3 hidden md:flex items-center justify-between bg-white"
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
          <Image
            src="/images/sophian-web-logo.png"
            width={70}
            height={70}
            alt="Sophian International"
          />
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
            href="/free-resources"
            className="hidden md:inline-flex font-body text-[11px] font-semibold uppercase text-navy px-5 py-2 hover:bg-gold2 transition-colors duration-300 no-underline items-center gap-2"
          >
            Free Workshop
          </Link>
        </div>
      </div>

      {/* ── BOTTOM BAR — becomes sticky once top bar scrolls out of view ── */}
      <div
        className={[
          "px-6 md:px-8 py-3 flex items-center justify-between transition-all duration-300",
          isStuck
            ? "fixed top-0 left-0 right-0 bg-navy/97 backdrop-blur-md border-b border-gold/15 shadow-lg"
            : "relative bg-navy/90",
        ].join(" ")}
      >
        {/* Left — alternate logo */}
        <Link href="/" className="flex items-center gap-0.5 no-underline">
          <Image
            src="/images/sophian-logo-white-1.png"
            width={50}
            height={50}
            alt="Sophian International"
          />
          {/* <div className="flex flex-col gap-0.5 no-underline">
          <span className="font-body text-2xl font-light tracking-widest text-white leading-none">
            Sophian
          </span>
          <span className="font-display text-[7px] tracking-[0.4em] uppercase text-gold">
            International
          </span>
          </div> */}
        </Link>

        {/* Centre — Desktop nav links (hidden on mobile) */}
        <ul className="hidden md:flex items-center list-none m-0 p-0">
          {navItems.map((l, index) => (
            <li key={l.label} className="flex items-center">
              <Link
                href={l.href}
                className={[
                  "font-display text-[11px] font-medium tracking-[0.18em] uppercase transition-all duration-300 no-underline px-4 py-1 relative group",
                  "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-gold after:transition-all after:duration-300",
                  isActive(l.href)
                    ? "text-gold after:opacity-100"
                    : "text-white/80 hover:text-gold after:opacity-0 hover:after:opacity-100",
                ].join(" ")}
              >
                {l.label}
              </Link>

              {/* Gold dot separator — shown between items, not after the last */}
              {index < navItems.length - 1 && (
                <span className="w-1 h-1 rounded-full bg-gold/60 flex-shrink-0" />
              )}
            </li>
          ))}
        </ul>


        {/* Right — Desktop contact icons + Mobile hamburger */}
        <div className="flex items-center gap-5">
          {/* Desktop icons — hidden on mobile */}
          <div className="hidden md:flex items-center gap-5">
            {/* WeChat */}
            <a
              href="#"
              title="WeChat"
              className="text-white/60 hover:text-gold transition-colors duration-300"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c-.2-.661-.314-1.354-.314-2.066C8.377 10.3 12.57 6.886 17.677 6.886c.568 0 1.126.048 1.668.135C18.172 3.76 13.773.188 8.69.188z" />
                <path d="M23.98 14.925c0-3.39-3.207-6.135-7.168-6.135-3.963 0-7.17 2.745-7.17 6.135 0 3.389 3.207 6.134 7.17 6.134.887 0 1.739-.14 2.524-.395a.76.76 0 0 1 .635.083l1.687.987a.287.287 0 0 0 .148.048c.141 0 .258-.115.258-.261 0-.063-.025-.123-.042-.186l-.346-1.311a.522.522 0 0 1 .19-.59c1.61-1.2 2.664-2.987 2.664-4.97l.45.46z" />
              </svg>
            </a>

            {/* Phone */}
            <a
              href="tel:+85363509608"
              title="Call us"
              className="text-white/60 hover:text-gold transition-colors duration-300"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.8a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.93 16l-.01.92z" />
              </svg>
            </a>

            {/* Email */}
            <a
              href="mailto:YourGuide@sophianinternational.com"
              title="Email us"
              className="text-white/60 hover:text-gold transition-colors duration-300"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </a>
          </div>

          {/* ── MOBILE HAMBURGER (md and below only) ── */}
          <button
            onClick={() => setDrawerOpen(true)}
            className="md:hidden flex flex-col items-end gap-[6px] py-1 group bg-transparent border-none cursor-pointer"
            aria-label="Open navigation"
          >
            <span className="block h-px w-7 bg-gold transition-all duration-300 group-hover:w-8" />
            <span className="block h-px w-5 bg-gold transition-all duration-300 group-hover:w-8" />
            <span className="block h-px w-6 bg-gold transition-all duration-300 group-hover:w-8" />
          </button>
        </div>
      </div>

      {/* ── SPACER — prevents content jumping when bottom bar goes fixed ── */}
      {isStuck && <div className="bg-navy/90" style={{ height: "56px" }} />}

      {/* ── MOBILE DRAWER ── */}
      <Drawer.Root
        open={drawerOpen}
        onOpenChange={setDrawerOpen}
        direction="right"
      >
        <Drawer.Portal>
          {/* Backdrop */}
          <Drawer.Overlay className="fixed inset-0 bg-navy/60 backdrop-blur-sm z-[100]" />

          {/* Panel */}
          <Drawer.Content
            className="fixed top-0 right-0 bottom-0 z-[101] w-[88vw] max-w-sm bg-navy flex flex-col outline-none"
            style={{ boxShadow: "-8px 0 40px rgba(2,39,65,0.4)" }}
          >
            {/* Accessibility title — visually hidden but readable by screen readers */}
            <Drawer.Title className="sr-only">Navigation Menu</Drawer.Title>

            {/* Drawer header */}
            <div className="flex items-center justify-between px-7 pt-8 pb-6 border-b border-gold/20">
              <Link
                href="/"
                onClick={() => setDrawerOpen(false)}
                className="flex items-center gap-2 no-underline"
              >
                <Image
                  src="/images/sophian-logo-white-1.png"
                  width={44}
                  height={44}
                  alt="Sophian International"
                />
              </Link>
              <button
                onClick={() => setDrawerOpen(false)}
                className="font-display text-[10px] font-semibold tracking-[0.25em] uppercase text-white/50 hover:text-gold transition-colors bg-transparent border-none cursor-pointer"
              >
                Close
              </button>
            </div>

            {/* Eyebrow */}
            <div className="px-7 pt-7 pb-2">
              <p className="font-display text-[9px] font-semibold tracking-[0.4em] uppercase text-gold">
                Navigation
              </p>
              <div className="w-8 h-px bg-gold/50 mt-3" />
            </div>

            {/* Nav links */}
            <nav className="flex-1 overflow-y-auto px-7 py-4">
              <ul className="flex flex-col list-none p-0 m-0">
                {navItems.map((item, i) => {
                  const active = isActive(item.href);
                  return (
                    <li
                      key={item.label}
                      style={{
                        animationDelay: `${i * 50}ms`,
                        animationFillMode: "backwards",
                      }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setDrawerOpen(false)}
                        className={[
                          "group flex items-baseline gap-5 py-4 border-l-2 pl-4 -ml-4 transition-all duration-300 no-underline",
                          active
                            ? "border-gold"
                            : "border-transparent hover:border-gold/50",
                        ].join(" ")}
                      >
                        <span className="font-display text-[10px] font-semibold tracking-[0.25em] text-gold/70 w-6 flex-shrink-0">
                          {item.num}
                        </span>
                        <span
                          className={[
                            "font-display text-2xl font-light tracking-wide transition-colors duration-300",
                            active
                              ? "text-gold"
                              : "text-white/80 group-hover:text-white",
                          ].join(" ")}
                        >
                          {item.label}
                        </span>
                      </Link>

                      {/* Subtle divider between items */}
                      {i < navItems.length - 1 && (
                        <div className="h-px bg-white/[0.05] ml-9" />
                      )}
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Drawer footer */}
            <div className="px-7 pb-10 pt-4 border-t border-gold/20">
              <p className="font-body italic text-base text-white/40 leading-relaxed mb-6">
                People & Culture Partner for Mission-Driven Hospitality
              </p>

              {/* Contact icons row */}
              <div className="flex items-center gap-6 mb-6">
                <a
                  href="#"
                  title="WeChat"
                  className="text-white/50 hover:text-gold transition-colors"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c-.2-.661-.314-1.354-.314-2.066C8.377 10.3 12.57 6.886 17.677 6.886c.568 0 1.126.048 1.668.135C18.172 3.76 13.773.188 8.69.188z" />
                    <path d="M23.98 14.925c0-3.39-3.207-6.135-7.168-6.135-3.963 0-7.17 2.745-7.17 6.135 0 3.389 3.207 6.134 7.17 6.134.887 0 1.739-.14 2.524-.395a.76.76 0 0 1 .635.083l1.687.987a.287.287 0 0 0 .148.048c.141 0 .258-.115.258-.261 0-.063-.025-.123-.042-.186l-.346-1.311a.522.522 0 0 1 .19-.59c1.61-1.2 2.664-2.987 2.664-4.97l.45.46z" />
                  </svg>
                </a>
                <a
                  href="tel:+85363509608"
                  title="Call us"
                  className="text-white/50 hover:text-gold transition-colors"
                >
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.8a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.93 16l-.01.92z" />
                  </svg>
                </a>
                <a
                  href="mailto:YourGuide@sophianinternational.com"
                  title="Email us"
                  className="text-white/50 hover:text-gold transition-colors"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </a>
              </div>

              <Link
                href="/contact"
                onClick={() => setDrawerOpen(false)}
                className="inline-flex items-center justify-center w-full border border-gold text-gold hover:bg-gold hover:text-navy font-display text-[10px] font-semibold tracking-[0.3em] uppercase py-4 transition-colors duration-300 no-underline"
              >
                Schedule a Call
              </Link>
            </div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </header>
  );
}
