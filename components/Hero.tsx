"use client";

import { useEffect, useState } from "react";

import NeonBackground from "./NeonBackground";

const titles = [
  "💾 Data Engineer",
  "💻 Software Engineer",
  "🎨 Creative Creator",
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((currentIndex) => {
        return (currentIndex + 1) % titles.length;
      });
    }, 2600);

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  return (
    <section id="home" className="hero-section">
      <NeonBackground />

      <div className="hero-content">
        <p className="hero-eyebrow">Hello, I’m</p>

        <h1 className="hero-title">Pelita Felicitas</h1>

        <div className="title-carousel" aria-live="polite">
          <div
            key={activeIndex}
            className="title-carousel-item"
          >
            {titles[activeIndex]}
          </div>
        </div>

        <div className="hero-actions">
          <a className="primary-button" href="#projects">
            View Projects
          </a>

          <a className="secondary-button" href="#contact">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}