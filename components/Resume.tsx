import Link from "next/link";

export default function Resume() {
  return (
    <div className="resume-section">
      <div className="resume-container">
        <div className="section-heading">
          <p className="section-eyebrow">
            RESUME
          </p>

          <h2 className="section-title">
            Experience &amp;{" "}
            <span>education.</span>
          </h2>

          <p className="section-description">
            My experience spans data engineering,
            software development, technical
            problem-solving, and customer-focused
            work.
          </p>
        </div>

        <div className="resume-preview-card">
          <div>
            <p className="resume-card-label">
              WANT THE DETAILS?
            </p>

            <h3>
              Take a look at my full resume.
            </h3>

            <p>
              Explore my education, technical
              experience, skills, and the work
              that has shaped my journey into
              technology.
            </p>
          </div>

          <Link
            href="/resume"
            className="primary-button"
          >
            View Resume
          </Link>
        </div>
      </div>
    </div>
  );
}