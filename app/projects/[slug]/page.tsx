import Link from "next/link";
import { notFound } from "next/navigation";

import Navbar from "../../../components/Navbar";

import { projects } from "../../../data/projects";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;

  const project = projects.find(
    (project) => project.slug === slug
  );

  if (!project) {
    notFound();
  }

  const hasExternalLinks =
    project.prototypeUrl ||
    project.repoUrl ||
    project.liveUrl;

  const detailImageCount =
    project.detailImages?.length ?? 0;

  return (
    <main className="home-page">
      <Navbar />

      <section className="project-detail-page">
        <div className="project-detail-container">
          <Link
            className="projects-back-link"
            href="/projects"
          >
            <span aria-hidden="true">←</span>

            All Projects
          </Link>

          <div className="project-detail-heading">
            <p className="section-eyebrow">
              {project.category}
            </p>

            <h1 className="project-detail-title">
              {project.title}
            </h1>

            <p className="project-detail-description">
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

            {hasExternalLinks && (
              <div className="project-detail-actions">
                {project.prototypeUrl && (
                  <a
                    className="project-action-button"
                    href={project.prototypeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Prototype
                    <span aria-hidden="true">↗</span>
                  </a>
                )}

                {project.liveUrl && (
                  <a
                    className="project-action-button"
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Live Site
                    <span aria-hidden="true">↗</span>
                  </a>
                )}

                {project.repoUrl && (
                  <a
                    className="project-action-button project-action-button-secondary"
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Repository
                    <span aria-hidden="true">↗</span>
                  </a>
                )}
              </div>
            )}
          </div>

          {project.detailImages &&
            detailImageCount > 0 && (
              <div
                className={`project-detail-gallery project-detail-gallery-${detailImageCount}`}
              >
                {project.detailImages.map(
                  (image, index) => (
                    <div
                      className="project-detail-image-container"
                      key={image}
                    >
                      <img
                        src={image}
                        alt={`${project.title} screenshot ${
                          index + 1
                        }`}
                        className="project-detail-image"
                      />
                    </div>
                  )
                )}
              </div>
            )}

          <div className="project-detail-content">
            <section className="project-detail-section">
              <p className="section-eyebrow">
                Overview
              </p>

              <h2>About the Project</h2>

              <p>{project.overview}</p>
            </section>

            <section className="project-detail-section">
              <p className="section-eyebrow">
                My Role
              </p>

              <h2>What I Worked On</h2>

              <p>{project.role}</p>
            </section>

            <section className="project-detail-section">
              <p className="section-eyebrow">
                Contributions
              </p>

              <h2>Key Contributions</h2>

              <ul className="project-contributions">
                {project.contributions.map(
                  (contribution) => (
                    <li key={contribution}>
                      {contribution}
                    </li>
                  )
                )}
              </ul>
            </section>

            <section className="project-detail-section">
              <p className="section-eyebrow">
                Outcome
              </p>

              <h2>Project Impact</h2>

              <p>{project.outcome}</p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}