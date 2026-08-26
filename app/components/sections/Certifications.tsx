"use client";
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import Section from "../ui/Section";
import SectionHeader from "../ui/SectionHeader";

const certificates = [
  { id: 1, title: "Calyco Internship", img: "/assets/certificates/cert-1.png" },
  { id: 2, title: "Prompt Engineering by IBM", img: "/assets/certificates/cert-2.png" },
  { id: 3, title: "Machine Learning with Python by IBM", img: "/assets/certificates/cert-3.png" },
  { id: 4, title: "JavaScript Bootcamp by LetsUpgrade", img: "/assets/certificates/cert-4.png" },
  { id: 5, title: "Project based ML & AI by IBM", img: "/assets/certificates/cert-5.png" },
  { id: 6, title: "Postman API fundamentals", img: "/assets/certificates/cert-6.png" },
  { id: 7, title: "Canva Bootcamp by IBM", img: "/assets/certificates/cert-7.png" },
  { id: 8, title: "Deep LEarning with TensorFlow by IBM", img: "/assets/certificates/cert-8.png" },
  { id: 9, title: "ML with Python badge by IBM", img: "/assets/certificates/cert-9.png" },
];

type Certificate = (typeof certificates)[number];

const fallbackSrc =
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600' preserveAspectRatio='none'><rect width='800' height='600' fill='%23222' /><text x='400' y='300' font-family='sans-serif' font-size='32' text-anchor='middle' dominant-baseline='middle' fill='%23555'>Certificate Image</text></svg>";

export default function Certifications() {
  const [selected, setSelected] = useState<Certificate | null>(null);

  useEffect(() => {
    if (!selected) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selected]);

  const openCertificate = (cert: Certificate) => setSelected(cert);

  return (
    <Section id="certifications">
      <SectionHeader num="06" label="Continuous Learning" title="Certifications" />

      <div
        className="carousel-container"
        style={{
          position: "relative",
          width: "100%",
          overflow: "hidden",
          padding: "2rem 0",
          maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        <div className={`carousel-track${selected ? " is-paused" : ""}`}>
          {[...certificates, ...certificates].map((cert, index) => (
            <div
              key={`${cert.id}-${index}`}
              className="carousel-card"
              data-interactive
              role="button"
              tabIndex={0}
              aria-label={`View ${cert.title} certificate`}
              onClick={() => openCertificate(cert)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  openCertificate(cert);
                }
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "4/3",
                  background: "var(--bg2)",
                  overflow: "hidden",
                  borderRadius: "0.5rem",
                }}
              >
                <img
                  loading="lazy"
                  src={cert.img}
                  alt={cert.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  onError={(err) => {
                    (err.target as HTMLImageElement).src = fallbackSrc;
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 40%)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: "1.25rem",
                  }}
                >
                  <div style={{ color: "white", fontWeight: 600, fontSize: "1.1rem" }}>
                    {cert.title}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selected &&
        createPortal(
          <div
            className="cert-modal-backdrop"
            role="dialog"
            aria-modal="true"
            aria-labelledby="cert-modal-title"
            onClick={() => setSelected(null)}
          >
            <div className="cert-modal" onClick={(e) => e.stopPropagation()}>
              <div className="cert-modal-header">
                <h3 id="cert-modal-title">{selected.title}</h3>
                <button
                  type="button"
                  className="cert-modal-close"
                  data-interactive
                  aria-label="Close certificate"
                  onClick={() => setSelected(null)}
                >
                  <X size={20} />
                </button>
              </div>
              <img
                src={selected.img}
                alt={selected.title}
                className="cert-modal-image"
                onError={(err) => {
                  (err.target as HTMLImageElement).src = fallbackSrc;
                }}
              />
            </div>
          </div>,
          document.body
        )}

      <style>{`
        .carousel-track {
          display: flex;
          gap: 2rem;
          width: max-content;
          animation: slide 30s linear infinite;
        }

        .carousel-track:hover,
        .carousel-track.is-paused {
          animation-play-state: paused;
        }

        .carousel-card {
          width: 400px;
          flex-shrink: 0;
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: none;
          border-radius: 1rem;
          border: 1px solid var(--border);
          padding: 0.5rem;
          background: var(--bg3);
        }

        .carousel-card:hover {
          transform: scale(1.05) translateY(-5px);
          border-color: var(--accent2);
          box-shadow: 0 15px 35px rgba(0,0,0,0.3), 0 0 25px var(--glow2);
        }

        .cert-modal-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          width: 100vw;
          height: 100dvh;
          margin: 0;
          z-index: 200;
          background: rgba(3, 7, 18, 0.82);
          backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
          overflow: auto;
          overscroll-behavior: contain;
        }

        .cert-modal {
          position: relative;
          width: min(960px, 100%);
          max-height: 90vh;
          margin: auto;
          background: var(--bg2);
          border: 1px solid var(--border2);
          border-radius: 1rem;
          padding: 1rem 1rem 1.25rem;
          box-shadow: 0 24px 80px rgba(0, 0, 0, 0.55);
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .cert-modal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
        }

        .cert-modal-header h3 {
          margin: 0;
          font-size: 1.05rem;
          color: var(--text);
        }

        .cert-modal-close {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 999px;
          border: 1px solid var(--border2);
          background: var(--bg3);
          color: var(--text);
          cursor: none;
          flex-shrink: 0;
        }

        .cert-modal-close:hover {
          border-color: var(--accent2);
          color: var(--accent2);
        }

        .cert-modal-image {
          width: 100%;
          max-height: calc(90vh - 5.5rem);
          object-fit: contain;
          border-radius: 0.5rem;
          background: var(--bg);
        }

        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-50% - 1rem));
          }
        }

        @media(max-width:768px){
          .carousel-card { width: 300px; }
        }
      `}</style>
    </Section>
  );
}
