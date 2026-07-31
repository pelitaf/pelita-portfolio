"use client";

import { useEffect, useState } from "react";

const titles = [
  "💾 Data Engineer / Analyst",
  "💻 Web Developer",
  "💡 Creative Thinker",
  "🎨 Curious Creator",
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
      <div className="hero-content">
        <p className="hero-eyebrow">Hello, I’m</p>

        <h1 className="hero-title">
          <span>Pelita</span>
          <span>Felicitas</span>
        </h1>

        <div className="title-carousel" aria-live="polite">
          <div
            className="title-carousel-track"
            style={{
              transform: `translateY(-${activeIndex * 100}%)`,
            }}
          >
            {titles.map((title) => (
              <div className="title-carousel-item" key={title}>
                {title}
              </div>
            ))}
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