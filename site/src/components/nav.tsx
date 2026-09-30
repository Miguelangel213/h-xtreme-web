"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { href: "#coleccion", label: "Hombre" },
  { href: "#coleccion", label: "Mujer" },
  { href: "#taller", label: "Custom" },
  { href: "#producto", label: "Ofertas" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="relative px-5 pt-6 md:px-14">
      <nav aria-label="Principal" className="flex items-center justify-between">
        <a href="#top" className="font-display text-base tracking-tight">
          H<span className="text-primary">-</span>XTREME
        </a>
        <ul className="hidden items-center gap-16 md:flex">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="text-sm font-medium transition-colors duration-150 hover:text-primary"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex size-11 items-center justify-center md:hidden"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <ul className="absolute inset-x-3 top-16 z-20 rounded-2xl bg-white p-4 shadow-xl md:hidden">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-display block py-3 text-2xl"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
