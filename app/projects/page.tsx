import Navbar from "../../components/Navbar";
import NeonBackground from "../../components/NeonBackground";

const projects = [
  {
    title: "Servco Smart Appraisal",
    category: "Software Engineering",
    description:
      "A mobile-friendly vehicle appraisal experience designed to streamline condition assessments, estimate repair costs, and support smarter purchase decisions.",
    technologies: ["Next.js", "React", "TypeScript", "AI"],
  },
  {
    title: "CCC Dashboard",
    category: "Data Analytics",
    description:
      "A dashboard designed to make operational data easier to understand, monitor, and use for everyday decision-making.",
    technologies: ["Data Visualization", "Analytics", "Dashboard Design"],
  },
  {
    title: "Data Engineering & QA",
    category: "Data Engineering",
    description:
      "Data quality and validation work focused on improving reliability across large datasets, pipelines, and production tables.",
    technologies: ["SQL", "Databricks", "Python", "Data Quality"],
  },
];

export default function ProjectsPage() {
  return (
    <main className="home-page">
      <NeonBackground />
      <Navbar />

      <section className="all-projects-page">
        <div className="all-projects-page-container">
          <a className="projects-back-link" href="/">
            <span aria-hidden="true">←</span>
            Back Home
          </a>

          <div className="all-projects-heading">
            <p className="section-eyebrow">Portfolio</p>

            <h1 className="section-title">
              All <span>Projects</span>
            </h1>

            <p className="section-description">
              A collection of projects exploring data engineering, software
              development, analytics, and creative problem-solving.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.title}>
                <div className="project-card-top">
                  <span className="project-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="project-category">
                    {project.category}
                  </span>
                </div>

                <div className="project-preview">
                  <div className="project-preview-glow" />

                  <div className="project-preview-content">
                    <span>{project.title}</span>
                  </div>
                </div>

                <div className="project-content">
                  <h2>{project.title}</h2>

                  <p>{project.description}</p>

                  <div className="project-technologies">
                    {project.technologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>
                </div>

                <div className="project-card-footer">
                  <button className="project-link" type="button">
                    View Project
                    <span aria-hidden="true">→</span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}