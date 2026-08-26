import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import NeonBackground from "../components/NeonBackground";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <main className="home-page">
      <NeonBackground />
      <Navbar />
      <Hero />
      <Projects />
    </main>
  );
}