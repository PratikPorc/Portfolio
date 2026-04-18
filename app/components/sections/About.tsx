"use client";
import React from "react";
import Section from "../ui/Section";
import SectionHeader from "../ui/SectionHeader";
import { personalInfo, strengths } from "@/lib/data";
import { Server, BrainCircuit, Bot } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Server,
  BrainCircuit,
  Bot,
};

export default function About() {
  return (
    <Section id="about">
      <SectionHeader num="01" label="About" title="Who I Am" />
      <div className="about-grid">
        <div>
          <div
            style={{
              fontSize: "1.05rem",
              color: "var(--text2)",
              lineHeight: 1.8,
            }}
          >
            {personalInfo.bio.map((para, i) => (
              <p key={i} style={{ marginBottom: "1.25rem" }}>
                {para}
              </p>
            ))}
          </div>
        </div>
        <div style={{ display: "grid", gap: "1rem" }}>
          {strengths.map((s) => {
            const Icon = iconMap[s.icon];
            return (
              <div
                key={s.title}
                data-interactive
                style={{
                  background: "var(--bg3)",
                  border: "1px solid var(--border)",
                  borderRadius: 12,
                  padding: "1.25rem",
                  transition: "all 0.3s",
                  cursor: "none",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = "var(--accent1)";
                  el.style.boxShadow = "0 0 30px var(--glow1)";
                  el.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = "var(--border)";
                  el.style.boxShadow = "";
                  el.style.transform = "";
                }}
              >
                <div style={{ marginBottom: "0.5rem", color: "var(--accent1)" }}>
                  {Icon ? <Icon size={28} strokeWidth={1.5} /> : null}
                </div>
                <div
                  style={{
                    fontSize: "0.9rem",
                    fontWeight: 700,
                    color: "var(--text)",
                    marginBottom: "0.25rem",
                  }}
                >
                  {s.title}
                </div>
                <div
                  style={{
                    fontSize: "0.8rem",
                    color: "var(--text3)",
                    lineHeight: 1.6,
                  }}
                >
                  {s.desc}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 3rem;
          align-items: start;
        }
        @media(max-width:768px){
          .about-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </Section>
  );
}
