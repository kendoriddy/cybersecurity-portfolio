import { useEffect, useState } from "react";
import { Menu, Shield, X } from "lucide-react";
import { profile } from "../data/profile";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition duration-300 ${
        scrolled
          ? "border-b border-border/80 bg-bg/90 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <a
          href="#"
          className="group flex items-center gap-2 font-mono text-sm font-semibold text-text"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-accent/30 bg-accent/10 text-accent transition group-hover:bg-accent/20">
            <Shield className="h-4 w-4" aria-hidden />
          </span>
          <span>
            {profile.name.split(" ")[0]}
            <span className="text-accent">.</span>sec
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 font-mono text-xs text-text-muted transition hover:bg-bg-elevated hover:text-accent"
            >
              {link.label}
            </a>
          ))}
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 rounded-lg border border-accent/30 bg-accent/10 px-4 py-2 font-mono text-xs text-accent transition hover:bg-accent/20"
          >
            GitHub
          </a>
        </nav>

        <button
          type="button"
          className="rounded-lg border border-border p-2 text-text-muted md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {menuOpen && (
        <nav
          className="border-t border-border bg-bg/95 px-4 py-4 backdrop-blur-md md:hidden"
          aria-label="Mobile"
        >
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-3 font-mono text-sm text-text-muted transition hover:bg-bg-elevated hover:text-accent"
              >
                {link.label}
              </a>
            ))}
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-lg border border-accent/30 bg-accent/10 px-3 py-3 text-center font-mono text-sm text-accent"
            >
              GitHub
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
