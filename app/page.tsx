import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <main className="home-page">
      <Navbar />
      <Hero />
      <Projects />
    </main>
  );
}