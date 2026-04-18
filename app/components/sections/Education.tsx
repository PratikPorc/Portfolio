"use client";
import Section from "../ui/Section";
import SectionHeader from "../ui/SectionHeader";
import { education } from "@/lib/data";

export default function Education() {
    return (
        <Section id="education">
            <SectionHeader num="04" label="Education" title="Academic Path" />
            <div style={{ display: "grid", gap: "1.25rem" }}>
                {education.map((e, i) => (
                    <div
                        key={i}
                        style={{
                            background: "var(--bg3)",
                            border: "1px solid var(--border)",
                            borderRadius: 12,
                            padding: "1.5rem",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "flex-start",
                            flexWrap: "wrap",
                            gap: "1rem",
                            transition: "all 0.3s",
                        }}
                        onMouseEnter={(e) => {
                            const el = e.currentTarget;
                            el.style.borderColor = "var(--accent2)";
                            el.style.transform = "translateX(4px)";
                        }}
                        onMouseLeave={(e) => {
                            const el = e.currentTarget;
                            el.style.borderColor = "var(--border)";
                            el.style.transform = "";
                        }}
                    >
                        <div>
                            <div
                                style={{
                                    fontSize: "1rem",
                                    fontWeight: 700,
                                    color: "var(--text)",
                                    marginBottom: "0.3rem",
                                }}
                            >
                                {e.degree}
                            </div>
                            <div
                                style={{
                                    fontSize: "0.85rem",
                                    color: "var(--accent2)",
                                    fontFamily: "'Space Mono',monospace",
                                }}
                            >
                                {e.institution}
                            </div>
                        </div>
                        <div style={{ textAlign: "right", flexShrink: 0 }}>
                            <div
                                style={{
                                    fontSize: "0.75rem",
                                    color: "var(--text3)",
                                    fontFamily: "'Space Mono',monospace",
                                    border: "1px solid var(--border2)",
                                    padding: "0.2rem 0.6rem",
                                    borderRadius: 4,
                                    marginBottom: e.score ? "0.4rem" : 0,
                                    display: "inline-block",
                                }}
                            >
                                {e.year}
                            </div>
                            {e.score && (
                                <div
                                    style={{
                                        fontSize: "0.8rem",
                                        fontFamily: "'Space Mono',monospace",
                                        fontWeight: 700,
                                        background: "linear-gradient(135deg,var(--accent1),var(--accent2))",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                        display: "block",
                                    }}
                                >
                                    {e.score}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}