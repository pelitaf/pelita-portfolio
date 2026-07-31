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
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id="moonGradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="50%" stopColor="#D6EEFF" />
          <stop offset="100%" stopColor="#B8C9FF" />
        </linearGradient>
      </defs>

      <path
        className="moon-outline"
        d="
        M40.5 49
        C28 52 16.8 44.3 14.2 31.8
        C11.8 20.4 18.5 9.2 29.4 5.8
        C24.5 11.4 22.8 19.5 25.8 27.3
        C29.8 37.8 40.7 43.8 51 41
        C48.8 44.6 45.2 47.5 40.5 49Z
        "
        fill="none"
        stroke="url(#moonGradient)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <circle className="moon-star star1" cx="49" cy="15" r="1.8" />
      <circle className="moon-star star2" cx="56" cy="25" r="1.2" />

      <path
        className="moon-sparkle"
        d="
          M42 22
          L43.2 25.2
          L46.4 26.4
          L43.2 27.6
          L42 31
          L40.8 27.6
          L37.6 26.4
          L40.8 25.2
          Z
        "
      />
    </svg>
  );
}