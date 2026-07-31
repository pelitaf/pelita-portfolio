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
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % titles.length);
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="hero-section">
      <div className="hero-content">

        <p className="hero-intro">
          hello,
        </p>

        <h1 className="hero-title">
          <span className="hero-first">PELITA</span>
          <span className="hero-last">FELICITAS</span>
        </h1>

        <div className="hero-divider" />

        <div className="title-carousel">
          <div
            className="title-carousel-track"
            style={{
              transform: `translateY(-${activeIndex * 100}%)`,
            }}
          >
            {titles.map((title) => (
              <div
                key={title}
                className="title-carousel-item"
              >
                {title}
              </div>
            ))}
          </div>
        </div>

        <p className="hero-description">
          I build thoughtful digital experiences through
          <span> data</span>,
          <span> development</span>,
          and
          <span> design.</span>
        </p>

        <div className="hero-buttons">

          <a
            href="#projects"
            className="primary-button"
          >
            View Projects
            <span className="button-arrow">→</span>
          </a>

          <a
            href="#contact"
            className="secondary-button"
          >
            Let's Connect
          </a>

        </div>

      </div>
    </section>
  );
}