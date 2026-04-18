"use client";
import { useEffect, useState } from "react";
import { typingRoles, personalInfo } from "@/lib/data";

export default function Hero() {
  const [typed, setTyped] = useState("");
  const [roleIdx, setRoleIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = typingRoles[roleIdx];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          setTyped(word.slice(0, charIdx + 1));
          if (charIdx + 1 === word.length) {
            setTimeout(() => setDeleting(true), 1800);
          } else {
            setCharIdx((c) => c + 1);
          }
        } else {
          setTyped(word.slice(0, charIdx - 1));
          if (charIdx - 1 === 0) {
            setDeleting(false);
            setRoleIdx((r) => (r + 1) % typingRoles.length);
            setCharIdx(0);
          } else {
            setCharIdx((c) => c - 1);
          }
        }
      },
      deleting ? 60 : 100
    );
    return () => clearTimeout(timeout);
  }, [typed, charIdx, deleting, roleIdx]);

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        padding: "6rem 2rem 4rem",
      }}
    >
      {/* Grid background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(124,58,237,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(124,58,237,0.03) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse at center,black 30%,transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center,black 30%,transparent 70%)",
        }}
      />
      {/* Orbs */}
      <div
        style={{
          position: "absolute",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: "var(--accent1)",
          top: -200,
          right: -200,
          filter: "blur(80px)",
          opacity: 0.12,
          animation: "orbFloat 8s ease-in-out infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: "var(--accent2)",
          bottom: -100,
          left: -100,
          filter: "blur(80px)",
          opacity: 0.1,
          animation: "orbFloat 10s ease-in-out infinite reverse",
        }}
      />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 1, maxWidth: 900 }}>
        <p
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: "0.75rem",
            color: "var(--accent2)",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            marginBottom: "1.5rem",
            animation: "fadeUp 0.6s 0.2s both",
          }}
        >
          // Available for opportunities
        </p>

        <h1
          style={{
            fontSize: "clamp(3rem,8vw,7rem)",
            fontWeight: 800,
            lineHeight: 0.95,
            marginBottom: "1rem",
            animation: "fadeUp 0.7s 0.4s both",
          }}
        >
          <div style={{ color: "var(--text)" }}>Pratik</div>
          <div className="gradient-text">Guha Roy</div>
        </h1>

        <p
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: "1.1rem",
            color: "var(--text2)",
            marginBottom: "2rem",
            height: "2rem",
            animation: "fadeUp 0.7s 0.6s both",
          }}
        >
          {typed}
          <span className="cursor-blink" />
        </p>

        <p
          style={{
            fontSize: "1rem",
            color: "var(--text2)",
            maxWidth: 520,
            lineHeight: 1.7,
            marginBottom: "3rem",
            animation: "fadeUp 0.7s 0.8s both",
          }}
        >
          Passionate backend developer with strong experience in Go, Node.js,
          and AI/ML systems. Building scalable APIs, AI automation workflows,
          and intelligent systems that matter.
        </p>

        <div
          style={{
            display: "flex",
            gap: "1rem",
            flexWrap: "wrap",
            animation: "fadeUp 0.7s 1s both",
          }}
        >
          <a
            href="#projects"
            style={{
              padding: "0.875rem 2rem",
              background: "linear-gradient(135deg,var(--accent1),var(--accent2))",
              color: "#fff",
              border: "none",
              borderRadius: 6,
              fontFamily: "'Syne',sans-serif",
              fontSize: "0.9rem",
              fontWeight: 600,
              cursor: "none",
              transition: "transform 0.2s,box-shadow 0.2s",
              textDecoration: "none",
              display: "inline-block",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 10px 40px var(--glow1)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "";
              (e.currentTarget as HTMLElement).style.boxShadow = "";
            }}
          >
            View Projects
          </a>
          <a
            href="#contact"
            style={{
              padding: "0.875rem 2rem",
              background: "transparent",
              color: "var(--text)",
              border: "1px solid var(--border2)",
              borderRadius: 6,
              fontFamily: "'Syne',sans-serif",
              fontSize: "0.9rem",
              fontWeight: 600,
              cursor: "none",
              transition: "all 0.2s",
              textDecoration: "none",
              display: "inline-block",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "var(--accent2)";
              (e.currentTarget as HTMLElement).style.color = "var(--accent2)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 20px var(--glow2)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "var(--border2)";
              (e.currentTarget as HTMLElement).style.color = "var(--text)";
              (e.currentTarget as HTMLElement).style.boxShadow = "";
            }}
          >
            Contact Me
          </a>
        </div>
      </div>



      <style>{`
        @keyframes fadeUp { from{opacity:0;transform:translateY(30px)} to{opacity:1;transform:translateY(0)} }
        @keyframes fadeRight { from{opacity:0;transform:translateX(30px)} to{opacity:1;transform:translateX(0)} }
        @media(max-width:768px){ .hero-stats{display:none !important;} }
      `}</style>
    </section>
  );
}
