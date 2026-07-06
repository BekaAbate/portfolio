"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Header() {
  const links = [
    { label: "Home", href: "#home" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm pt-4">
      <div className="flex items-center justify-center px-6 py-4 md:px-12">
        <div className=" items-center gap-8 flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
