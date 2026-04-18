"use client";
import { useState, useRef, useEffect } from "react";
import { Play, Pause, Music } from "lucide-react";

export default function MediaPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.addEventListener("ended", () => {
        // with loop={true} this might not fire, but good for manual reset if needed
      });
    }
  }, []);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        background: "rgba(255, 255, 255, 0.03)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(10px)",
        borderRadius: "16px",
        padding: "0.75rem 1.25rem",
        width: "100%",
        maxWidth: "350px",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
        transition: "transform 0.3s ease, border-color 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-2px)";
        e.currentTarget.style.borderColor = "var(--accent2)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
      }}
    >
      <audio
        ref={audioRef}
        src="/assets/popular-snippet.mp3"
        loop
        preload="auto"
      />

      <button
        onClick={togglePlay}
        style={{
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, var(--accent1), var(--accent2))",
          border: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          cursor: "pointer",
          flexShrink: 0,
          boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
          transition: "transform 0.2s ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        aria-label="Play or pause music"
      >
        {isPlaying ? <Pause size={18} fill="currentColor" /> : <Play size={18} fill="currentColor" style={{ marginLeft: "2px" }} />}
      </button>

      <div style={{ flex: 1, overflow: "hidden" }}>
        <p
          style={{
            fontSize: "0.65rem",
            color: "var(--accent2)",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            marginBottom: "0.15rem",
            display: "flex",
            alignItems: "center",
            gap: "0.25rem",
            fontWeight: 600,
          }}
        >
          {isPlaying ? (
            <span style={{ display: "flex", gap: "2px", alignItems: "flex-end", height: "10px" }}>
              {[1, 2, 3].map((i) => (
                <span
                  key={i}
                  style={{
                    width: "2px",
                    background: "var(--accent2)",
                    animation: `equalizer 1s infinite alternate ease-in-out`,
                    animationDelay: `${i * 0.2}s`,
                  }}
                />
              ))}
            </span>
          ) : (
            <Music size={10} />
          )}
          Now Playing
        </p>

        <div
          style={{
            width: "100%",
            whiteSpace: "nowrap",
            overflow: "hidden",
            position: "relative",
          }}
        >
          {/* Marquee effect if playing */}
          <div
            className={isPlaying ? "marquee-text" : ""}
            style={{
              fontSize: "0.85rem",
              color: "white",
              fontWeight: 500,
              display: "inline-block",
            }}
          >
            The Weeknd, Madonna, Playboi Carti - Popular 
            {isPlaying && <span style={{ paddingLeft: "2rem" }}>The Weeknd, Madonna, Playboi Carti - Popular</span>}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes equalizer {
          0% { height: 2px; }
          100% { height: 10px; }
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-text {
          animation: marquee 10s linear infinite;
        }
      `}</style>
    </div>
  );
}
