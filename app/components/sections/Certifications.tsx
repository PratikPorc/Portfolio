"use client";
import React from "react";
import Section from "../ui/Section";
import SectionHeader from "../ui/SectionHeader";

const certificates = [
  { id: 1, title: "AWS Solutions Architect", img: "/assets/certificates/cert-1.png" },
  { id: 2, title: "Google Cloud Professional Developer", img: "/assets/certificates/cert-2.png" },
  { id: 3, title: "Certified Kubernetes Administrator", img: "/assets/certificates/cert-3.png" },
  { id: 4, title: "Machine Learning Core", img: "/assets/certificates/cert-1.png" },
];

export default function Certifications() {
  return (
    <Section id="certifications">
      <SectionHeader num="07" label="Continuous Learning" title="Certifications" />
      
      {/* 
         CERTIFICATE PLACEHOLDER SYSTEM
         Replace these images with actual files in `public/assets/certificates/`.
         Recommended resolution: High-res PNG with standard certificate aspect ratio (e.g., 4:3 or A4 landscape).
      */}
      <div 
        className="carousel-container" 
        style={{
          position: "relative",
          width: "100%",
          overflow: "hidden",
          padding: "2rem 0",
          maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)"
        }}
      >
        <div className="carousel-track">
           {/* Duplicate the array to create the infinite loop effect seamlessly. */}
           {[...certificates, ...certificates].map((cert, index) => (
             <div 
               key={`${cert.id}-${index}`}
               className="carousel-card"
               data-interactive
             >
                <div style={{ position: "relative", width: "100%", aspectRatio: "4/3", background: "var(--bg2)", overflow: "hidden", borderRadius: "0.5rem" }}>
                  <img 
                    loading="lazy"
                    src={cert.img} 
                    alt={cert.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    onError={(err) => {
                      (err.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600" preserveAspectRatio="none"><rect width="800" height="600" fill="%23222" /><text x="400" y="300" font-family="sans-serif" font-size="32" text-anchor="middle" dominant-baseline="middle" fill="%23555">Certificate Image</text></svg>';
                    }}
                  />
                  {/* Subtle Gradient Overlay */}
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 40%)" }} />
                  
                  {/* Title Overlay */}
                  <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "1.25rem" }}>
                    <div style={{ color: "white", fontWeight: 600, fontSize: "1.1rem" }}>
                      {cert.title}
                    </div>
                  </div>
                </div>
             </div>
           ))}
        </div>
      </div>

      <style>{`
        .carousel-track {
          display: flex;
          gap: 2rem;
          width: max-content;
          animation: slide 30s linear infinite;
        }

        .carousel-track:hover {
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

        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            /* Move exactly half the track length including the gap */
            transform: translateX(calc(-50% - 1rem));
          }
        }

        @media(max-width:768px){
          .carousel-card { width: 300px; }
          @keyframes slide {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-50% - 1rem)); }
          }
        }
      `}</style>
    </Section>
  );
}
