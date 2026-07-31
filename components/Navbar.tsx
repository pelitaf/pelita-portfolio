import MoonLogo from "./MoonLogo";

const links = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Resume",
    href: "#resume",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export default function Navbar() {
  return (
    <header className="navbar-wrapper">
      <nav className="portfolio-nav">
        <a
          href="#home"
          className="portfolio-logo"
          aria-label="Back to top"
        >
          <MoonLogo />
        </a>

        <div className="portfolio-nav-links">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}