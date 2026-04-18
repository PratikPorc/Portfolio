"use client";
"use client";
import { useEffect, useRef, ReactNode } from "react";

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export default function Section({ id, children, className = "" }: SectionProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("section-visible");
          }
        });
      },
      { threshold: 0.08 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <section
        id={id}
        ref={ref}
        className={`portfolio-section ${className}`}
        style={{
          padding: "6rem 2rem",
          maxWidth: 1100,
          margin: "0 auto",
          opacity: 0,
          transform: "translateY(30px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}
      >
        {children}
      </section>
      <style>{`
        .portfolio-section.section-visible {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        @media (max-width: 768px) {
          .portfolio-section { padding: 4rem 1.25rem !important; }
        }
      `}</style>
    </>
  );
}
