interface SectionHeaderProps {
  num: string;
  label: string;
  title: string;
}

export default function SectionHeader({ num, label, title }: SectionHeaderProps) {
  return (
    <div style={{ marginBottom: "3rem" }}>
      <div
        style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: "0.7rem",
          color: "var(--accent2)",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          marginBottom: "0.75rem",
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
        }}
      >
        {num} — {label}
        <span
          style={{
            flex: 1,
            maxWidth: 60,
            height: 1,
            background: "var(--accent2)",
            opacity: 0.4,
            display: "block",
          }}
        />
      </div>
      <h2
        style={{
          fontSize: "clamp(2rem, 5vw, 3.5rem)",
          fontWeight: 800,
          lineHeight: 1,
          color: "var(--text)",
        }}
      >
        {title}
      </h2>
    </div>
  );
}
