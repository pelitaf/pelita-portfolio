import MoonLogo from "./MoonLogo";

const navigationLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <nav className="portfolio-nav" aria-label="Main navigation">
      <a
        className="portfolio-logo"
        href="#home"
        aria-label="Return to the home section"
      >
        <MoonLogo />
      </a>

      <div className="portfolio-nav-links">
        {navigationLinks.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}