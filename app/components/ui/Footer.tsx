"use client";
import { personalInfo } from "@/lib/data";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        padding: "2.5rem 2rem",
        maxWidth: 1100,
        margin: "0 auto",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "1rem",
      }}
    >
      <p
        style={{
          fontSize: "0.8rem",
          color: "var(--text3)",
          fontFamily: "'Space Mono',monospace",
        }}
      >
        Designed & built by{" "}
        <span style={{ color: "var(--accent1)" }}>Pratik Guha Roy</span> —{" "}
        Kolkata, India © {new Date().getFullYear()}
      </p>
      <div style={{ display: "flex", gap: "1.5rem" }}>
        {Object.entries(personalInfo.social).map(([key, url]) => (
          <a
            key={key}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: "0.75rem",
              color: "var(--text3)",
              textDecoration: "none",
              fontFamily: "'Space Mono',monospace",
              textTransform: "capitalize",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "var(--accent2)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "var(--text3)")
            }
          >
            {key}
          </a>
        ))}
      </div>
    </footer>
  );
}
