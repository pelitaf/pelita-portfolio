import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Resume from "../components/Resume";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="home-page">
        <section id="home" className="home-scroll-section">
          <Hero />
        </section>

        <section id="about" className="home-scroll-section">
          <About />
        </section>

        <section id="projects" className="home-scroll-section">
          <Projects />
        </section>

        <section id="resume" className="home-scroll-section">
          <Resume />
        </section>

        <section id="contact" className="home-scroll-section">
          <Contact />
        </section>
      </main>
    </>
  );
}