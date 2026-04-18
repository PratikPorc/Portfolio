"use client";
import { useEffect, useRef } from "react";

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mx = useRef(0);
  const my = useRef(0);
  const rx = useRef(0);
  const ry = useRef(0);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mx.current = e.clientX;
      my.current = e.clientY;
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${mx.current - 6}px,${my.current - 6}px)`;
      }
    };

    const animRing = () => {
      rx.current += (mx.current - rx.current - 20) * 0.12;
      ry.current += (my.current - ry.current - 20) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${rx.current}px,${ry.current}px)`;
      }
      requestAnimationFrame(animRing);
    };

    document.addEventListener("mousemove", move);
    const rafId = requestAnimationFrame(animRing);

    const interactives = document.querySelectorAll(
      "a, button, [data-interactive]"
    );
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        if (cursorRef.current)
          cursorRef.current.style.transform = `translate(${mx.current - 6}px,${my.current - 6}px) scale(2.5)`;
        if (ringRef.current) ringRef.current.style.opacity = "0";
      });
      el.addEventListener("mouseleave", () => {
        if (cursorRef.current)
          cursorRef.current.style.transform = `translate(${mx.current - 6}px,${my.current - 6}px) scale(1)`;
        if (ringRef.current) ringRef.current.style.opacity = "1";
      });
    });

    return () => {
      document.removeEventListener("mousemove", move);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        style={{
          position: "fixed",
          width: 12,
          height: 12,
          background: "var(--accent2)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 9999,
          transition: "transform 0.1s, opacity 0.3s",
          mixBlendMode: "screen",
        }}
      />
      <div
        ref={ringRef}
        style={{
          position: "fixed",
          width: 40,
          height: 40,
          border: "1px solid rgba(6,182,212,0.4)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 9998,
          transition: "opacity 0.3s",
        }}
      />
    </>
  );
}
