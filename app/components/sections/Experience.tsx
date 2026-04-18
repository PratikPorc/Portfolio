"use client";
import Section from "../ui/Section";
import SectionHeader from "../ui/SectionHeader";
import { experiences } from "@/lib/data";

export default function Experience() {
  return (
    <Section id="experience">
      <SectionHeader num="05" label="Experience" title="Career Path" />
      <div
        style={{
          position: "relative",
          paddingLeft: "2rem",
        }}
      >
        {/* Timeline line */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: 1,
            background: "linear-gradient(to bottom,var(--accent1),var(--accent2),transparent)",
          }}
        />
        {experiences.map((exp, i) => (
          <div
            key={i}
            style={{
              position: "relative",
              marginBottom: "3rem",
              paddingLeft: "2rem",
            }}
          >
            {/* Dot */}
            <div
              style={{
                position: "absolute",
                left: "-2.45rem",
                top: "0.5rem",
                width: 10,
                height: 10,
                borderRadius: "50%",
                background: "var(--accent2)",
                boxShadow: "0 0 10px var(--glow2)",
              }}
            />
            <div
              style={{
                background: "var(--bg3)",
                border: "1px solid var(--border)",
                borderRadius: 12,
                padding: "1.5rem",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = "var(--accent1)";
                el.style.transform = "translateX(4px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = "var(--border)";
                el.style.transform = "";
              }}
            >
              <div
                className="exp-header"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: "0.75rem",
                  flexWrap: "wrap",
                  gap: "0.5rem",
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: 700,
                      color: "var(--text)",
                    }}
                  >
                    {exp.role}
                  </div>
                  <div
                    style={{
                      fontSize: "0.85rem",
                      color: "var(--accent2)",
                      fontFamily: "'Space Mono',monospace",
                    }}
                  >
                    {exp.company}
                  </div>
                </div>
                <div
                  style={{
                    fontSize: "0.75rem",
                    color: "var(--text3)",
                    fontFamily: "'Space Mono',monospace",
                    border: "1px solid var(--border2)",
                    padding: "0.2rem 0.6rem",
                    borderRadius: 4,
                    whiteSpace: "nowrap",
                  }}
                >
                  {exp.date}
                </div>
              </div>
              <p
                style={{
                  fontSize: "0.875rem",
                  color: "var(--text2)",
                  lineHeight: 1.7,
                  marginTop: "0.5rem",
                }}
              >
                {exp.desc}
              </p>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.5rem",
                  marginTop: "1rem",
                }}
              >
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: "0.7rem",
                      padding: "0.2rem 0.6rem",
                      borderRadius: 4,
                      background: "rgba(124,58,237,0.1)",
                      color: "var(--accent1)",
                      border: "1px solid rgba(124,58,237,0.2)",
                      fontFamily: "'Space Mono',monospace",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}