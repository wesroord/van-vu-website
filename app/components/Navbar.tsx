"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = [
    { href: "#agenda", label: "Agenda" },
    { href: "#menu", label: "Menu" },
    { href: "#over-ons", label: "Over ons" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0d0d0d]/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-black text-2xl tracking-tight">
            <span className="text-[#c8102e]">VAN</span>
            <span className="text-white">-</span>
            <span className="text-[#c8102e]">VU</span>
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-white/70 hover:text-white transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="px-4 py-2 bg-[#c8102e] text-white text-sm font-semibold rounded-full hover:bg-[#a00d25] transition-colors"
            >
              Boek ons
            </a>
          </li>
        </ul>

        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu openen"
        >
          <div className="w-5 space-y-1">
            <span
              className={`block h-0.5 bg-white transition-all ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`}
            />
            <span
              className={`block h-0.5 bg-white transition-all ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 bg-white transition-all ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
            />
          </div>
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-[#0d0d0d]/98 border-t border-white/10 px-6 py-4 space-y-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="block text-white/70 hover:text-white py-2 text-sm font-medium"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="block mt-2 px-4 py-2 bg-[#c8102e] text-white text-sm font-semibold rounded-full text-center"
            onClick={() => setMenuOpen(false)}
          >
            Boek ons
          </a>
        </div>
      )}
    </header>
  );
}
