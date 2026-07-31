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

      const offsetX = (event.clientX - centerX) / centerX;
      const offsetY = (event.clientY - centerY) / centerY;

      element.style.setProperty("--mouse-x", `${event.clientX}px`);
      element.style.setProperty("--mouse-y", `${event.clientY}px`);

      element.style.setProperty("--move-x", `${offsetX * 18}px`);
      element.style.setProperty("--move-y", `${offsetY * 18}px`);

      element.style.setProperty("--move-x-reverse", `${offsetX * -12}px`);
      element.style.setProperty("--move-y-reverse", `${offsetY * -12}px`);
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
      <div className="neon-blob neon-blob-one" />
      <div className="neon-blob neon-blob-two" />
      <div className="neon-blob neon-blob-three" />

      <div className="shape-wrapper shape-wrapper-one">
        <div className="cute-shape heart heart-one">♡</div>
      </div>

      <div className="shape-wrapper shape-wrapper-two">
        <div className="cute-shape heart heart-two">♡</div>
      </div>

      <div className="shape-wrapper shape-wrapper-three">
        <div className="cute-shape star star-one">☆</div>
      </div>

      <div className="shape-wrapper shape-wrapper-four">
        <div className="cute-shape star star-two">✦</div>
      </div>

      <div className="shape-wrapper shape-wrapper-five">
        <div className="cute-shape star star-three">✧</div>
      </div>

      <div className="shape-wrapper shape-wrapper-six">
        <div className="cute-shape circle circle-one" />
      </div>

      <div className="shape-wrapper shape-wrapper-seven">
        <div className="cute-shape circle circle-two" />
      </div>

      <div className="shape-wrapper shape-wrapper-eight">
        <div className="cute-shape circle circle-three" />
      </div>

      <div className="mouse-glow" />
    </div>
  );
}