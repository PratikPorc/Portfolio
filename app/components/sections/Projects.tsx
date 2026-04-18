"use client";
import { useState } from "react";
import Section from "../ui/Section";
import SectionHeader from "../ui/SectionHeader";
import { projects, ProjectCategory } from "@/lib/data";

const filters: { label: string; value: ProjectCategory | "all" }[] = [
  { label: "All", value: "all" },
  { label: "AI", value: "ai" },
  { label: "Backend", value: "backend" },
  { label: "ML", value: "ml" },
];

export default function Projects() {
  const [active, setActive] = useState<ProjectCategory | "all">("all");

  const filtered = projects.filter((p) => active === "all" || p.cat === active);

  return (
    <Section id="projects">
      <SectionHeader num="06" label="Projects" title="What I've Built" />

      {/* Filter bar */}
      <div
        style={{
          display: "flex",
          gap: "0.75rem",
          marginBottom: "2.5rem",
          flexWrap: "wrap",
        }}
      >
        {filters.map((f) => (
          <button
            key={f.value}
            onClick={() => setActive(f.value)}
            style={{
              padding: "0.4rem 1rem",
              borderRadius: 100,
              fontSize: "0.75rem",
              fontFamily: "'Space Mono',monospace",
              cursor: "none",
              border: "1px solid",
              borderColor: active === f.value ? "var(--accent1)" : "var(--border2)",
              background: active === f.value ? "var(--accent1)" : "transparent",
              color: active === f.value ? "#fff" : "var(--text2)",
              transition: "all 0.2s",
              letterSpacing: "0.05em",
            }}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill,minmax(320px,1fr))",
          gap: "1.5rem",
        }}
      >
        {filtered.map((p) => (
          <div
            key={p.num}
            style={{
              background: "var(--bg3)",
              border: "1px solid var(--border)",
              borderRadius: 12,
              padding: "1.5rem",
              transition: "all 0.3s",
              cursor: "none",
              position: "relative",
              overflow: "hidden",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.borderColor = "var(--accent2)";
              el.style.transform = "translateY(-4px)";
              el.style.boxShadow = "0 20px 50px rgba(0,0,0,0.5)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.borderColor = "var(--border)";
              el.style.transform = "";
              el.style.boxShadow = "";
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                fontFamily: "'Space Mono',monospace",
                fontSize: "0.7rem",
                color: "var(--text3)",
                marginBottom: "1rem",
              }}
            >
              <span>{p.num} — {p.cat.toUpperCase()}</span>
              {p.date && <span style={{ color: "var(--text3)" }}>{p.date}</span>}
            </div>
            <div
              style={{
                fontSize: "1.1rem",
                fontWeight: 700,
                color: "var(--text)",
                marginBottom: "0.75rem",
              }}
            >
              {p.title}
            </div>
            <p
              style={{
                fontSize: "0.85rem",
                color: "var(--text2)",
                lineHeight: 1.7,
                marginBottom: "1.25rem",
              }}
            >
              {p.desc}
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.4rem",
                marginBottom: "1.25rem",
              }}
            >
              {p.stack.map((t) => (
                <span
                  key={t}
                  style={{
                    fontSize: "0.65rem",
                    padding: "0.15rem 0.5rem",
                    borderRadius: 3,
                    background: "rgba(6,182,212,0.08)",
                    color: "var(--accent2)",
                    border: "1px solid rgba(6,182,212,0.15)",
                    fontFamily: "'Space Mono',monospace",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
            <a
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                fontSize: "0.8rem",
                color: "var(--text3)",
                textDecoration: "none",
                transition: "color 0.2s",
                fontFamily: "'Space Mono',monospace",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "var(--accent2)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "var(--text3)")
              }
            >
              ↗ View on GitHub
            </a>
          </div>
        ))}
      </div>
    </Section>
  );
}