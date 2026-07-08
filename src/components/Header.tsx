"use client";
import { navLinks } from "@/data/links";

export function Header() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm">
      <div className="flex items-center justify-center px-6 py-4 md:px-12">
        <div className=" items-center gap-8 flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground hover:font-bold"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
