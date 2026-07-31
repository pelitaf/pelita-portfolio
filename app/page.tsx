import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import NeonBackground from "../components/NeonBackground";

export default function Home() {
  return (
    <main className="home-page">
      <NeonBackground />
      <Navbar />
      <Hero />
    </main>
  );
}