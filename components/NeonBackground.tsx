export default function NeonBackground() {
  return (
    <div className="neon-background" aria-hidden="true">
      <div className="neon-blob neon-blob-one" />
      <div className="neon-blob neon-blob-two" />
      <div className="neon-blob neon-blob-three" />

      {/* Sparkles */}
      <div className="cute-shape star star-one">✦</div>
      <div className="cute-shape star star-two">✦</div>
      <div className="cute-shape star star-three">✧</div>
      <div className="cute-shape star star-four">✦</div>
      <div className="cute-shape star star-five">✧</div>

      {/* Circles */}
      <div className="cute-shape circle circle-one" />
      <div className="cute-shape circle circle-two" />
      <div className="cute-shape circle circle-three" />
    </div>
  );
}