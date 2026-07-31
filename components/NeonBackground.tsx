"use client";

import { useEffect, useRef } from "react";

export default function NeonBackground() {
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handlePointerMove(event: PointerEvent) {
      const element = backgroundRef.current;

      if (!element) return;

      element.style.setProperty("--mouse-x", `${event.clientX}px`);
      element.style.setProperty("--mouse-y", `${event.clientY}px`);
    }

    window.addEventListener("pointermove", handlePointerMove);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return (
    <div ref={backgroundRef} className="neon-background" aria-hidden="true">
      <div className="neon-blob neon-blob-one" />
      <div className="neon-blob neon-blob-two" />
      <div className="neon-blob neon-blob-three" />

      <div className="cute-shape heart heart-one">♡</div>
      <div className="cute-shape heart heart-two">♡</div>

      <div className="cute-shape star star-one">☆</div>
      <div className="cute-shape star star-two">✦</div>
      <div className="cute-shape star star-three">✧</div>

      <div className="cute-shape circle circle-one" />
      <div className="cute-shape circle circle-two" />
      <div className="cute-shape circle circle-three" />

      <div className="mouse-glow" />
    </div>
  );
}