"use client";
import { useRef, useEffect, useState } from "react";
import Section from "../ui/Section";
import SectionHeader from "../ui/SectionHeader";
import { skillGroups } from "@/lib/data";

function SkillGroup({ label, skills }: { label: string; skills: { name: string; level: number }[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "var(--bg3)",
        border: `1px solid ${hovered ? "var(--border2)" : "var(--border)"}`,
        borderRadius: 12,
        padding: "1.5rem",
        transition: "border-color 0.3s",
      }}
    >
      <div
        style={{
          fontSize: "0.7rem",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "var(--accent2)",
          marginBottom: "1.25rem",
          fontFamily: "'Space Mono',monospace",
        }}
      >
        // {label}
      </div>
      {skills.map((skill) => (
        <div
          key={skill.name}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "0.875rem",
          }}
        >
          <span style={{ fontSize: "0.875rem", color: "var(--text2)" }}>
            {skill.name}
          </span>
          <div
            style={{
              width: 100,
              height: 3,
              background: "var(--border)",
              borderRadius: 2,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                height: "100%",
                borderRadius: 2,
                background: "linear-gradient(90deg,var(--accent1),var(--accent2))",
                width: `${skill.level}%`,
                transform: hovered ? "scaleX(1)" : "scaleX(0)",
                transformOrigin: "left",
                transition: "transform 0.8s ease",
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Skills() {
  return (
    <Section id="skills">
      <SectionHeader num="02" label="Skills" title="Tech Stack" />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
          gap: "1.5rem",
        }}
      >
        {skillGroups.map((g) => (
          <SkillGroup key={g.label} label={g.label} skills={g.skills} />
        ))}
      </div>
    </Section>
  );
}
