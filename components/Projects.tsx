const projects = [
  {
    title: "Servco Smart Appraisal",
    category: "Software Engineering",
    description:
      "A mobile-friendly vehicle appraisal experience designed to streamline condition assessments, estimate repair costs, and support smarter purchase decisions.",
    technologies: ["Next.js", "React", "TypeScript", "AI"],
    featured: true,
  },
  {
    title: "CCC Dashboard",
    category: "Data Analytics",
    description:
      "A dashboard designed to make operational data easier to understand, monitor, and use for everyday decision-making.",
    technologies: ["Data Visualization", "Analytics", "Dashboard Design"],
    featured: true,
  },
  {
    title: "Data Engineering & QA",
    category: "Data Engineering",
    description:
      "Data quality and validation work focused on improving reliability across large datasets, pipelines, and production tables.",
    technologies: ["SQL", "Databricks", "Python", "Data Quality"],
    featured: true,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <div className="section-heading">
          <p className="section-eyebrow">My Work</p>

          <h2 className="section-title">
            Featured <span>Projects</span>
          </h2>

          <p className="section-description">
            A selection of projects that combine data, software engineering,
            problem-solving, and thoughtful design.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={project.title}>
              <div className="project-card-top">
                <span className="project-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="project-category">{project.category}</span>
              </div>

              <div className="project-preview">
                <div className="project-preview-glow" />

                <div className="project-preview-content">
                  <span>{project.title}</span>
                </div>
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>

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

        <div className="all-projects-container">
          <a className="all-projects-button" href="/projects">
            View All Projects
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}