"use client";
import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Certs" },
  { href: "#hackathons", label: "Achievements" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "1.25rem 2rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        transition: "all 0.4s",
        background: scrolled ? "rgba(3,7,18,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
      }}
    >
      <div
        style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: "1rem",
          color: "var(--accent2)",
          letterSpacing: "-0.02em",
        }}
      >
        PGR<span style={{ color: "var(--accent1)" }}>.</span>
      </div>

      <ul
        style={{
          display: "flex",
          gap: "2rem",
          listStyle: "none",
        }}
        className="nav-links-list"
      >
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              style={{
                fontSize: "0.75rem",
                color: "var(--text2)",
                textDecoration: "none",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                transition: "color 0.2s",
                fontFamily: "'Space Mono', monospace",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "var(--accent2)")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = "var(--text2)")
              }
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <style>{`
        @media (max-width: 768px) {
          .nav-links-list { display: none !important; }
        }
      `}</style>
    </nav>
  );
}