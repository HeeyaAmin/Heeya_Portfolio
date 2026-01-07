"use client";

import React, { useEffect, useState } from "react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={[
        "sticky top-0 z-50 w-full border-b transition-all",
        isScrolled ? "bg-white/80 backdrop-blur border-slate-200" : "bg-white border-transparent",
      ].join(" ")}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <button
          onClick={() => scrollToSection("#top")}
          className="font-semibold tracking-tight text-slate-900"
        >
          HA
        </button>

        <nav className="hidden items-center gap-7 text-sm text-slate-600 md:flex">
          {navLinks.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollToSection(item.href)}
              className="hover:text-slate-900"
            >
              {item.name}
            </button>
          ))}
        </nav>

        <button
          onClick={() => scrollToSection("#contact")}
          className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
        >
          Hire Me
        </button>
      </div>
    </header>
  );
}
