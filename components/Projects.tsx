import Image from "next/image";
import Link from "next/link";

import { projects } from "../data/projects";

export default function Projects() {
  return (
    <div className="projects-section">
      <div className="projects-container">
        <div className="section-heading">
          <p className="section-eyebrow">
            PROJECTS
          </p>

          <h2 className="section-title">
            Things I&apos;ve <span>built.</span>
          </h2>

          <p className="section-description">
            A collection of projects spanning data, software development,
            dashboards, and application design.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article
              className="project-card"
              key={project.slug}
            >
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

                {project.cardImage ? (
                  <Image
                    src={project.cardImage}
                    alt={`${project.title} preview`}
                    fill
                    className="project-image"
                    style={{
                      objectPosition:
                        project.cardImagePosition ?? "center center",
                      transform:
                        project.cardImageTransform ?? "none",
                    }}
                    sizes="(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 50vw"
                  />
                ) : (
                  <div className="project-preview-content">
                    <span>
                      {project.title}
                    </span>
                  </div>
                )}
              </div>

              <div className="project-content">
                <h3>
                  {project.title}
                </h3>

                <p>
                  {project.description}
                </p>

                <div className="project-technologies">
                  {project.technologies.map(
                    (technology) => (
                      <span key={technology}>
                        {technology}
                      </span>
                    )
                  )}
                </div>
              </div>

              <div className="project-card-footer">
                <Link
                  href={`/projects/${project.slug}`}
                  className="project-link"
                >
                  View Project
                  <span aria-hidden="true">
                    →
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}