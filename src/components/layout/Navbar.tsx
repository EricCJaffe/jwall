"use client";

import { useState, useEffect } from "react";
import { NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`bg-warm-white/95 backdrop-blur-[20px] border-b border-light-tan/40 sticky top-0 z-50 transition-shadow duration-400 ease-[var(--ease-custom)] ${
        scrolled ? "shadow-[var(--shadow-soft)]" : ""
      }`}
    >
      <div className="max-w-[1240px] mx-auto px-6 flex justify-between items-center h-20">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3.5 no-underline">
          <div className="w-12 h-12 bg-charcoal rounded-[4px] flex items-center justify-center text-gold font-display text-[1.4rem] font-bold -tracking-[1px] relative overflow-hidden after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[3px] after:bg-gold">
            JW
          </div>
          <div className="flex flex-col leading-[1.15]">
            <strong className="font-display text-[1.35rem] font-bold text-charcoal -tracking-[0.5px]">
              JWALL
            </strong>
            <span className="text-[0.7rem] tracking-[2.5px] uppercase text-warm-gray font-medium">
              Contractor Services
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex list-none gap-1.5 items-center">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[0.88rem] font-medium text-dark-brown no-underline px-4 py-2.5 rounded-[4px] transition-all duration-400 ease-[var(--ease-custom)] tracking-[0.2px] hover:text-gold-dark hover:bg-gold/[0.06]"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="text-[0.88rem] font-semibold text-white no-underline px-7 py-3 rounded-[4px] bg-gold tracking-[0.5px] transition-all duration-400 ease-[var(--ease-custom)] hover:bg-gold-dark hover:-translate-y-px hover:shadow-[0_4px_20px_rgba(184,146,74,0.35)]"
            >
              Free Estimate
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden bg-transparent border-none cursor-pointer p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span className="block w-6 h-0.5 bg-charcoal my-1.5 transition-all duration-400" />
          <span className="block w-6 h-0.5 bg-charcoal my-1.5 transition-all duration-400" />
          <span className="block w-6 h-0.5 bg-charcoal my-1.5 transition-all duration-400" />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-warm-white px-5 py-5 border-b border-light-tan shadow-[var(--shadow-medium)]">
          <ul className="flex flex-col list-none gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block text-[0.88rem] font-medium text-dark-brown no-underline px-4 py-2.5 rounded-[4px] transition-all duration-400 hover:text-gold-dark hover:bg-gold/[0.06]"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="block text-center text-[0.88rem] font-semibold text-white no-underline px-7 py-3 rounded-[4px] bg-gold mt-2 transition-all duration-400 hover:bg-gold-dark"
              >
                Free Estimate
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
