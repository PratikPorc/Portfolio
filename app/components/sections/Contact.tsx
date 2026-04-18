"use client";
import React, { useState } from "react";
import Section from "../ui/Section";
import SectionHeader from "../ui/SectionHeader";
import { personalInfo } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, CheckCircle, XCircle } from "lucide-react";

const socialLinks = [
  { icon: "⌥", label: "github.com/PratikPorc", href: personalInfo.social.github },
  { icon: "◈", label: "linkedin.com/in/pratikfromindia", href: personalInfo.social.linkedin },
  { icon: "⌘", label: "leetcode.com/pratikguharoy", href: personalInfo.social.leetcode },
  { icon: "⌃", label: "instagram.com/proooteeek", href: personalInfo.social.instagram },
];

const inputStyle: React.CSSProperties = {
  background: "var(--bg3)",
  border: "1px solid var(--border)",
  borderRadius: 8,
  padding: "0.875rem 1rem",
  color: "var(--text)",
  fontFamily: "'Syne',sans-serif",
  fontSize: "0.9rem",
  outline: "none",
  transition: "border-color 0.2s",
  width: "100%",
};

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "", _honeypot: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "loading") return;

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Unknown error occurred.");
      }

      setStatus("success");
      setFormData({ name: "", email: "", message: "", _honeypot: "" });

      // Auto-hide success message
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err: any) {
      console.error(err);
      setStatus("error");
      setErrorMessage(err.message || "Oh no! Looks like something's off. Please try again.");

      // Auto-hide error message
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <Section id="contact">
      <SectionHeader num="09" label="Contact" title="Let's Connect" />
      <div className="contact-grid">
        {/* Left */}
        <div>
          <h3
            style={{
              fontSize: "1.5rem",
              fontWeight: 700,
              marginBottom: "1rem",
              color: "var(--text)",
            }}
          >
            Got a project in mind?
          </h3>
          <p
            style={{
              color: "var(--text2)",
              lineHeight: 1.8,
              marginBottom: "2rem",
              fontSize: "0.95rem",
            }}
          >
            I'm currently open to backend engineering and AI/ML roles,
            freelance projects, and interesting collaborations. Drop me a
            message and let's build something great.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  padding: "0.875rem 1.25rem",
                  background: "var(--bg3)",
                  border: "1px solid var(--border)",
                  borderRadius: 10,
                  textDecoration: "none",
                  transition: "all 0.2s",
                  color: "var(--text2)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = "var(--accent2)";
                  el.style.color = "var(--accent2)";
                  el.style.transform = "translateX(4px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = "var(--border)";
                  el.style.color = "var(--text2)";
                  el.style.transform = "";
                }}
              >
                <span style={{ fontSize: "1.1rem", width: 24, textAlign: "center" }}>
                  {s.icon}
                </span>
                <span
                  style={{ fontSize: "0.85rem", fontFamily: "'Space Mono',monospace" }}
                >
                  {s.label}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Right — form */}
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
        >
          {/* Honeypot field for spam prevention */}
          <div style={{ display: "none" }}>
            <label htmlFor="_honeypot">Do not fill this out if you are human</label>
            <input
              type="text"
              id="_honeypot"
              value={formData._honeypot}
              onChange={handleChange}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          {[
            { id: "name", label: "Name", type: "text", placeholder: "Your name" },
            { id: "email", label: "Email", type: "email", placeholder: "your@email.com" },
          ].map((field) => (
            <div key={field.id} style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
              <label
                htmlFor={field.id}
                style={{
                  fontSize: "0.75rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--text3)",
                  fontFamily: "'Space Mono',monospace",
                }}
              >
                {field.label}
              </label>
              <input
                id={field.id}
                type={field.type}
                placeholder={field.placeholder}
                value={(formData as any)[field.id]}
                onChange={handleChange}
                required
                disabled={status === "loading"}
                style={{ ...inputStyle, opacity: status === "loading" ? 0.7 : 1 }}
                onFocus={(e) => (e.currentTarget.style.borderColor = "var(--accent2)")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
              />
            </div>
          ))}

          <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
            <label
              htmlFor="message"
              style={{
                fontSize: "0.75rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--text3)",
                fontFamily: "'Space Mono',monospace",
              }}
            >
              Message
            </label>
            <textarea
              id="message"
              placeholder="Tell me about your project..."
              value={formData.message}
              onChange={handleChange}
              required
              disabled={status === "loading"}
              rows={5}
              style={{ ...inputStyle, resize: "none", opacity: status === "loading" ? 0.7 : 1 }}
              onFocus={(e) => (e.currentTarget.style.borderColor = "var(--accent2)")}
              onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            style={{
              padding: "0.875rem",
              background: "linear-gradient(135deg,var(--accent1),var(--accent2))",
              color: "#fff",
              border: "none",
              borderRadius: 8,
              fontFamily: "'Syne',sans-serif",
              fontSize: "0.9rem",
              fontWeight: 700,
              cursor: status === "loading" ? "not-allowed" : "none",
              transition: "all 0.3s",
              letterSpacing: "0.05em",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
              opacity: status === "loading" ? 0.8 : 1,
            }}
            onMouseEnter={(e) => {
              if (status !== "loading") {
                (e.currentTarget as HTMLElement).style.opacity = "0.9";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
              }
            }}
            onMouseLeave={(e) => {
              if (status !== "loading") {
                (e.currentTarget as HTMLElement).style.opacity = "1";
                (e.currentTarget as HTMLElement).style.transform = "";
              }
            }}
          >
            {status === "loading" ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                Sending...
              </>
            ) : (
              "Send Message →"
            )}
          </button>
        </form>
      </div>

      {/* Floating Status Toast Notifications */}
      <AnimatePresence>
        {status === "success" && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, type: "spring", bounce: 0.4 }}
            style={{
              position: "fixed",
              bottom: "2rem",
              right: "2rem",
              zIndex: 9999,
              background: "var(--bg)",
              border: "1px solid #10b981",
              borderRadius: "0.75rem",
              padding: "1rem 1.5rem",
              boxShadow: "0 10px 40px rgba(0,0,0,0.3), 0 0 20px rgba(16, 185, 129, 0.15)",
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
            }}
          >
            <CheckCircle color="#10b981" size={24} />
            <span style={{ fontWeight: 600, fontSize: "0.95rem", color: "var(--text)" }}>
              Hey, I received the message, I'll get back to you soon!
            </span>
          </motion.div>
        )}

        {status === "error" && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, type: "spring", bounce: 0.4 }}
            style={{
              position: "fixed",
              bottom: "2rem",
              right: "2rem",
              zIndex: 9999,
              background: "var(--bg)",
              border: "1px solid #ef4444",
              borderRadius: "0.75rem",
              padding: "1rem 1.5rem",
              boxShadow: "0 10px 40px rgba(0,0,0,0.3), 0 0 20px rgba(239, 68, 68, 0.15)",
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
            }}
          >
            <XCircle color="#ef4444" size={24} />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontWeight: 600, fontSize: "0.95rem", color: "var(--text)" }}>
                Oh no! Looks like something's off. Please try again.
              </span>
              <span style={{ fontSize: "0.8rem", color: "var(--text3)" }}>{errorMessage}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
        }
        .animate-spin {
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @media(max-width:768px){
          .contact-grid { grid-template-columns: 1fr; gap: 2.5rem; }
        }
      `}</style>
    </Section>
  );
}
