"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const LINKS = [
  { href: "/", label: "Início" },
  { href: "/#about", label: "Sobre" },
  { href: "/#gallery", label: "Galeria" },
  { href: "/#contact", label: "Contato" },
];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 flex flex-row h-18 w-full items-center justify-center transition-all duration-300",
        scrolled
          ? "bg-green-primary/70 backdrop-blur-md border-b border-white/10"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <nav
        aria-label="Navegação principal"
        className="flex flex-row h-full w-full max-w-[86vw] 2xl:max-w-[1420px] items-center justify-center px-4"
      >
        <ul className="flex flex-row gap-6 md:gap-16 items-center uppercase">
          {LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="relative text-white font-light font-clean text-xs md:text-sm tracking-[0.18em] hover:text-green-secondary transition-colors after:absolute after:-bottom-1.5 after:left-1/2 after:-translate-x-1/2 after:h-px after:w-0 after:bg-green-secondary after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
