"use client";

import { useEffect, useRef } from "react";

export default function NeonBackground() {
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handlePointerMove(event: PointerEvent) {
      const element = backgroundRef.current;

      if (!element) return;

      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      const x = (event.clientX - centerX) / centerX;
      const y = (event.clientY - centerY) / centerY;

      element.style.setProperty("--mouse-x", `${event.clientX}px`);
      element.style.setProperty("--mouse-y", `${event.clientY}px`);

      element.style.setProperty("--parallax-x", `${x * 20}px`);
      element.style.setProperty("--parallax-y", `${y * 20}px`);
    }

    window.addEventListener("pointermove", handlePointerMove);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return (
    <div
      ref={backgroundRef}
      className="neon-background"
      aria-hidden="true"
    >
      {/* Nebula */}
      <div className="nebula nebula-one" />
      <div className="nebula nebula-two" />
      <div className="nebula nebula-three" />
      <div className="nebula nebula-four" />
      <div className="nebula nebula-five" />
      <div className="nebula nebula-six" />

      {/* Aurora */}
      <div className="aurora aurora-one" />
      <div className="aurora aurora-two" />

      {/* Moon */}
      <div className="background-moon" />

      {/* Stars */}
      <div className="stars">
        {Array.from({ length: 55 }).map((_, index) => (
          <span
            key={index}
            className="star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
              transform: `scale(${0.6 + Math.random() * 1.2})`,
            }}
          />
        ))}
      </div>

      {/* Hearts */}
      <div className="floating-heart heart-1">♡</div>
      <div className="floating-heart heart-2">♡</div>
      <div className="floating-heart heart-3">♡</div>

      {/* Shooting stars */}
      <div className="shooting-star shooting-star-1" />
      <div className="shooting-star shooting-star-2" />

      {/* Mouse glow */}
      <div className="mouse-glow" />
    </div>
  );
}