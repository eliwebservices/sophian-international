"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "About",   href: "/about" },
    { label: "Executive Search",   href: "/executive-search" },
    { label: "Corporate Training",   href: "/corporate-training" },
    { label: "HR Consulting", href: "/hr-consulting" },
    { label: "Contact",    href: "/#contact" },
  ];

  return (
    <nav
      className={[
        "fixed top-0 left-0 right-0 z-50 flex items-center justify-between transition-all duration-500",
        scrolled
          ? "px-10 py-3 bg-navy/95 backdrop-blur-md border-b border-gold/20"
          : "px-10 py-6 bg-transparent",
      ].join(" ")}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center gap-0.5 no-underline">
        <Image src="/images/sophian-logo-white-1.png" width={50} height={50} alt=""/>
        <div className="flex flex-col gap-0.5 no-underline">
        <span className="font-display text-2xl font-light tracking-widest text-white leading-none">
          Sophian
        </span>
        <span className="font-body text-[7px] tracking-[0.4em] uppercase text-gold">
          International
        </span>
        </div>
      </Link>

      {/* Links */}
      <ul className="hidden md:flex items-center gap-9 list-none m-0 p-0">
        {links.map((l) => (
          <li key={l.label}>
            <Link
              href={l.href}
              className="font-body text-[9px] tracking-[0.25em] uppercase text-white/70 hover:text-gold transition-colors duration-300 no-underline"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Link
        href="/#contact"
        className="hidden md:inline-block font-body text-[9px] tracking-[0.25em] uppercase bg-gold text-navy px-6 py-2.5 hover:bg-gold2 transition-colors duration-300 no-underline"
      >
        Schedule a Call
      </Link>
    </nav>
  );
}
