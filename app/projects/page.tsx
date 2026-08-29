"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import Navbar from "../../components/Navbar";

import type { Project } from "../../data/projects";

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  const [failedImages, setFailedImages] = useState<
    Record<number, boolean>
  >({});

  useEffect(() => {
    async function loadProjects() {
      try {
        const response = await fetch("/api/projects");

        if (!response.ok) {
          throw new Error(
            "Failed to load projects."
          );
        }

        const data: Project[] =
          await response.json();

        setProjects(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadProjects();
  }, []);

  function handleImageError(projectId: number) {
    setFailedImages((current) => ({
      ...current,
      [projectId]: true,
    }));
  }

  return (
    <main className="home-page">
      <Navbar />

      <section className="all-projects-page">
        <div className="all-projects-page-container">
          <Link
            className="projects-back-link"
            href="/"
          >
            <span aria-hidden="true">
              ←
            </span>

            Back Home
          </Link>

          <div className="all-projects-heading">
            <p className="section-eyebrow">
              Portfolio
            </p>

            <h1 className="section-title">
              All <span>Projects</span>
            </h1>

            <p className="section-description">
              A collection of projects exploring
              data engineering, software
              development, analytics, and creative
              problem-solving.
            </p>
          </div>

          {loading ? (
            <div className="projects-loading">
              Loading projects...
            </div>
          ) : (
            <div className="projects-grid">
              {projects.map(
                (project, index) => {
                  const hasValidImage =
                    project.cardImage &&
                    !failedImages[
                      project.id
                    ];

                  return (
                    <article
                      className="project-card"
                      key={project.id}
                    >
                      <div className="project-card-top">
                        <span className="project-number">
                          {String(
                            index + 1
                          ).padStart(2, "0")}
                        </span>

                        <span className="project-category">
                          {project.category}
                        </span>
                      </div>

                      <div className="project-preview">
                        <div className="project-preview-glow" />

                        {hasValidImage ? (
                          <img
                            src={
                              project.cardImage
                            }
                            alt={`${project.title} preview`}
                            className="project-image"
                            onError={() =>
                              handleImageError(
                                project.id
                              )
                            }
                          />
                        ) : (
                          <div className="project-preview-content">
                            <span>
                              {
                                project.title
                              }
                            </span>
                          </div>
                        )}
                      </div>

                      <div className="project-content">
                        <h2>
                          {project.title}
                        </h2>

                        <p>
                          {
                            project.description
                          }
                        </p>

                        <div className="project-technologies">
                          {project.technologies.map(
                            (
                              technology
                            ) => (
                              <span
                                key={
                                  technology
                                }
                              >
                                {
                                  technology
                                }
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

                          <span aria-hidden="true">
                            →
                          </span>
                        </Link>
                      </div>
                    </article>
                  );
                }
              )}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}