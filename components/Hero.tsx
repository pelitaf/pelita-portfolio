"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import NeonBackground from "./NeonBackground";

const titles = [
  "💾 Data Engineer",
  "💻 Software Engineer",
  "🎨 Creative Creator",
];

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setTitleIndex((currentIndex) => {
        return (currentIndex + 1) % titles.length;
      });
    }, 2600);

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  return (
    <div className="hero-section">
      <NeonBackground />

      <div className="hero-content">
        <p className="hero-eyebrow">HELLO, I&apos;M</p>

        <h1 className="hero-title">
          Pelita
          <br />
          Felicitas
        </h1>

        <div className="title-carousel">
          <div
            key={titles[titleIndex]}
            className="title-carousel-item"
          >
            {titles[titleIndex]}
          </div>
        </div>

        <div className="hero-actions">
          <Link
            href="/#projects"
            className="primary-button"
          >
            View Projects
          </Link>

          <Link
            href="/#about"
            className="secondary-button"
          >
            About Me
          </Link>
        </div>
      </div>
    </div>
  );
}