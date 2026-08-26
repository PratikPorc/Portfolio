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
  const [activeHref, setActiveHref] = useState("");

  useEffect(() => {
    const update = () => {
      setScrolled(window.scrollY > 50);

      const offset = 140;
      let current = "";
      for (const link of links) {
        const el = document.getElementById(link.href.slice(1));
        if (!el) continue;
        if (el.getBoundingClientRect().top <= offset) {
          current = link.href;
        }
      }
      setActiveHref(current);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
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
        {links.map((link) => {
          const isActive = activeHref === link.href;
          return (
            <li key={link.href}>
              <a
                href={link.href}
                className={`nav-link${isActive ? " is-active" : ""}`}
                aria-current={isActive ? "location" : undefined}
              >
                {link.label}
              </a>
            </li>
          );
        })}
      </ul>

      <style>{`
        .nav-link {
          font-size: 0.75rem;
          color: var(--text2);
          text-decoration: none;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          transition: color 0.2s;
          font-family: 'Space Mono', monospace;
          position: relative;
          padding-bottom: 0.3rem;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 1.5px;
          background: var(--accent2);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.2s ease;
        }
        .nav-link:hover {
          color: var(--accent2);
        }
        .nav-link.is-active {
          color: var(--accent2);
        }
        .nav-link.is-active::after {
          transform: scaleX(1);
        }
        @media (max-width: 768px) {
          .nav-links-list { display: none !important; }
        }
      `}</style>
    </nav>
  );
}
