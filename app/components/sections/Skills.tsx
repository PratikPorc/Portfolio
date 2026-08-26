"use client";
import { useRef, useState } from "react";
import Section from "../ui/Section";
import SectionHeader from "../ui/SectionHeader";
import LogoLoop from "../ui/LogoLoop";
import { skillGroups } from "@/lib/data";
import {
  SiPython,
  SiGo,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiFastapi,
  SiTensorflow,
  SiPytorch,
  SiGooglegemini,
  SiDocker,
  SiGit,
  SiGithub,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiPostman,
} from "react-icons/si";

const techLogos = [
  { node: <SiPython />, title: "Python", href: "https://www.python.org" },
  { node: <SiGo />, title: "Go", href: "https://go.dev" },
  { node: <SiJavascript />, title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
  { node: <SiExpress />, title: "Express", href: "https://expressjs.com" },
  { node: <SiFastapi />, title: "FastAPI", href: "https://fastapi.tiangolo.com" },
  { node: <SiTensorflow />, title: "TensorFlow", href: "https://www.tensorflow.org" },
  { node: <SiPytorch />, title: "PyTorch", href: "https://pytorch.org" },
  { node: <SiGooglegemini />, title: "Gemini", href: "https://ai.google.dev" },
  { node: <SiDocker />, title: "Docker", href: "https://www.docker.com" },
  { node: <SiGit />, title: "Git", href: "https://git-scm.com" },
  { node: <SiGithub />, title: "GitHub", href: "https://github.com" },
  { node: <SiPostgresql />, title: "PostgreSQL", href: "https://www.postgresql.org" },
  { node: <SiMysql />, title: "MySQL", href: "https://www.mysql.com" },
  { node: <SiMongodb />, title: "MongoDB", href: "https://www.mongodb.com" },
  { node: <SiPostman />, title: "Postman", href: "https://www.postman.com" },
];

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

      <div style={{ marginTop: "3rem" }}>
        <LogoLoop
          logos={techLogos}
          speed={80}
          direction="left"
          logoHeight={42}
          gap={48}
          pauseOnHover
          fadeOut
          fadeOutColor="var(--bg)"
          scaleOnHover
          ariaLabel="Technologies I work with"
        />
      </div>
    </Section>
  );
}
