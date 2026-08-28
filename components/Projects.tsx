"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { Project } from "../data/projects";

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProjects() {
      try {
        const response = await fetch("/api/projects");

        if (!response.ok) {
          throw new Error("Failed to load projects.");
        }

        const data: Project[] = await response.json();

        const featuredProjects = data
          .filter((project) => project.featured)
          .slice(0, 3);

        setProjects(featuredProjects);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadProjects();
  }, []);

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <div className="section-heading">
          <p className="section-eyebrow">My Work</p>

          <h2 className="section-title">
            Featured <span>Projects</span>
          </h2>

          <p className="section-description">
            A selection of projects that combine data,
            software engineering, problem-solving, and
            thoughtful design.
          </p>
        </div>

        {loading ? (
          <div className="projects-loading">
            Loading projects...
          </div>
        ) : (
          <div className="projects-grid">
            {projects.map((project, index) => (
              <article
                className="project-card"
                key={project.id}
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

                  {project.image ? (
                    <img
                      src={project.image}
                      alt={`${project.title} preview`}
                      className="project-image"
                    />
                  ) : (
                    <div className="project-preview-content">
                      <span>{project.title}</span>
                    </div>
                  )}
                </div>

                <div className="project-content">
                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

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
                    className="project-link"
                    href={`/projects/${project.slug}`}
                  >
                    View Project
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}

        <div className="all-projects-container">
          <Link href="/projects">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}