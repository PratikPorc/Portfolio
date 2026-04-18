"use client";
import Section from "../ui/Section";
import SectionHeader from "../ui/SectionHeader";
import { hackathons } from "@/lib/data";

const badgeStyles: Record<string, { bg: string; color: string; border: string }> = {
  gold: {
    bg: "rgba(234,179,8,0.15)",
    color: "#fbbf24",
    border: "1px solid rgba(234,179,8,0.3)",
  },
  silver: {
    bg: "rgba(148,163,184,0.1)",
    color: "#94a3b8",
    border: "1px solid rgba(148,163,184,0.2)",
  },
  green: {
    bg: "rgba(16,185,129,0.1)",
    color: "#10b981",
    border: "1px solid rgba(16,185,129,0.2)",
  },
  cyan: {
    bg: "rgba(6,182,212,0.1)",
    color: "var(--accent2)",
    border: "1px solid rgba(6,182,212,0.2)",
  },
};

export default function Hackathons() {
  return (
    <Section id="hackathons">
      <SectionHeader num="08" label="Achievements" title="Wins & Recognition" />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
          gap: "1.5rem",
        }}
      >
        {hackathons.map((h, i) => {
          const badge = badgeStyles[h.badgeClass];
          const isWinner = h.badgeClass === "gold";
          return (
            <div
              key={i}
              style={{
                background: "var(--bg3)",
                border: `1px solid ${isWinner ? "rgba(234,179,8,0.3)" : "var(--border)"}`,
                borderRadius: 12,
                padding: "1.5rem",
                position: "relative",
                overflow: "hidden",
                transition: "transform 0.3s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.transform = "translateY(-3px)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.transform = "")
              }
            >
              {isWinner && (
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(135deg,rgba(234,179,8,0.05),transparent)",
                    pointerEvents: "none",
                  }}
                />
              )}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  padding: "0.25rem 0.75rem",
                  borderRadius: 100,
                  marginBottom: "1rem",
                  fontFamily: "'Space Mono',monospace",
                  background: badge.bg,
                  color: badge.color,
                  border: badge.border,
                }}
              >
                {h.badge}
              </div>
              <div
                style={{
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: "var(--text)",
                  marginBottom: "0.25rem",
                }}
              >
                {h.title}
              </div>
              <div
                style={{
                  fontSize: "0.85rem",
                  color: "var(--accent3)",
                  fontFamily: "'Space Mono',monospace",
                  marginBottom: "0.75rem",
                }}
              >
                {h.position}
              </div>
              <p
                style={{
                  fontSize: "0.83rem",
                  color: "var(--text2)",
                  lineHeight: 1.6,
                }}
              >
                {h.desc}
              </p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}