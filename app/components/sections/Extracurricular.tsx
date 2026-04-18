"use client";
import React from "react";
import Section from "../ui/Section";
import SectionHeader from "../ui/SectionHeader";
import { extracurriculars } from "@/lib/data";
import { Mic, Clapperboard, Music, Gamepad2, Palette, Megaphone } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Mic,
  Clapperboard,
  Music,
  Gamepad2,
  Palette,
  Megaphone,
};

export default function Extracurricular() {
  return (
    <Section id="extra">
      <SectionHeader num="08" label="Beyond Code" title="What Else I Do" />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "2rem",
        }}
      >
        {extracurriculars.map((e, index) => {
          const Icon = iconMap[e.icon];
          return (
            <div
              key={e.name}
              data-interactive
              style={{
                background: "var(--bg3)",
                border: "1px solid var(--border)",
                borderRadius: "1rem",
                overflow: "hidden",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                cursor: "none",
                display: "flex",
                flexDirection: "column",
                position: "relative",
              }}
              onMouseEnter={(el) => {
                const t = el.currentTarget as HTMLElement;
                t.style.borderColor = "var(--accent2)";
                t.style.transform = "scale(1.03) translateY(-5px)";
                t.style.boxShadow = "0 15px 35px rgba(0,0,0,0.3), 0 0 25px var(--glow2)";
              }}
              onMouseLeave={(el) => {
                const t = el.currentTarget as HTMLElement;
                t.style.borderColor = "var(--border)";
                t.style.transform = "";
                t.style.boxShadow = "";
              }}
            >
              {/*
                IMAGE PLACEHOLDER SYSTEM
                Replace these images with actual files in `public/assets/placeholders/`.
                Recommended resolution: 800x800 pixels (1:1 aspect ratio) for best quality.
              */}
              <div style={{ position: "relative", width: "100%", aspectRatio: "1/1", background: "var(--bg2)" }}>
                <img
                  loading="lazy"
                  src={`/assets/placeholders/activity-${index + 1}.png`}
                  alt={e.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  onError={(err) => {
                    (err.target as HTMLImageElement).src =
                      'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" viewBox="0 0 800 800" preserveAspectRatio="none"><rect width="800" height="800" fill="%23222" /><text x="400" y="400" font-family="sans-serif" font-size="48" text-anchor="middle" dominant-baseline="middle" fill="%23555">Image Placeholder (800x800)</text></svg>';
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, var(--bg3) 0%, transparent 60%)",
                  }}
                />
              </div>

              <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.5rem" }}>
                  {Icon && (
                    <span style={{ color: "var(--accent2)" }}>
                      <Icon size={24} strokeWidth={1.5} />
                    </span>
                  )}
                  <div style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--text)" }}>
                    {e.name}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}