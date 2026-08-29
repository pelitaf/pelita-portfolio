"use client";

import { useEffect, useRef } from "react";

export default function NeonBackground() {
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handlePointerMove(event: PointerEvent) {
      const element = backgroundRef.current;

      if (!element) {
        return;
      }

      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      const offsetX =
        (event.clientX - centerX) / centerX;

      const offsetY =
        (event.clientY - centerY) / centerY;

      element.style.setProperty(
        "--mouse-x",
        `${event.clientX}px`
      );

      element.style.setProperty(
        "--mouse-y",
        `${event.clientY}px`
      );

      element.style.setProperty(
        "--move-x",
        `${offsetX * 18}px`
      );

      element.style.setProperty(
        "--move-y",
        `${offsetY * 18}px`
      );

      element.style.setProperty(
        "--move-x-reverse",
        `${offsetX * -18}px`
      );

      element.style.setProperty(
        "--move-y-reverse",
        `${offsetY * -18}px`
      );
    }

    window.addEventListener(
      "pointermove",
      handlePointerMove
    );

    return () => {
      window.removeEventListener(
        "pointermove",
        handlePointerMove
      );
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

      <span className="cute-shape star star-one">
        ✦
      </span>

      <span className="cute-shape star star-two">
        ✦
      </span>

      <span className="cute-shape star star-three">
        ✦
      </span>

      <span className="cute-shape star star-four">
        ✦
      </span>

      <span className="cute-shape star star-five">
        ✦
      </span>
    </div>
  );
}