type MoonLogoProps = {
  className?: string;
};

export default function MoonLogo({
  className = "",
}: MoonLogoProps) {
  return (
    <svg
      className={`moon-logo ${className}`}
      viewBox="0 0 64 64"
      role="img"
      aria-label="Pelita Felicitas portfolio home"
    >
      <defs>
        <linearGradient
          id="moon-gradient"
          x1="10"
          y1="8"
          x2="52"
          y2="56"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="45%" stopColor="#d8edff" />
          <stop offset="100%" stopColor="#b9a7ff" />
        </linearGradient>
      </defs>

      <path
        className="moon-logo-path"
        d="
          M45.5 47.5
          C34 51.8 21.2 46 16.8 34.4
          C12.4 22.8 18 9.8 29.6 5.5
          C24.7 11.2 22.8 19 25.6 26.3
          C29.5 36.5 40.3 42.4 50.7 39.9
          C49.5 43 47.8 45.5 45.5 47.5
          Z
        "
        fill="none"
        stroke="url(#moon-gradient)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <circle
        className="moon-logo-star moon-logo-star-one"
        cx="48"
        cy="15"
        r="1.8"
      />

      <circle
        className="moon-logo-star moon-logo-star-two"
        cx="55"
        cy="26"
        r="1.2"
      />

      <path
        className="moon-logo-sparkle"
        d="M43 23 L44.2 26.2 L47.5 27.5 L44.2 28.8 L43 32 L41.8 28.8 L38.5 27.5 L41.8 26.2 Z"
      />
    </svg>
  );
}