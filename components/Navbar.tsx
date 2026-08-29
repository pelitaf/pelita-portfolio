import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="portfolio-nav">
      <Link href="/#home">Home</Link>
      <Link href="/#about">About</Link>
      <Link href="/#projects">Projects</Link>
      <Link href="/#resume">Resume</Link>
      <Link href="/#contact">Contact</Link>
    </nav>
  );
}