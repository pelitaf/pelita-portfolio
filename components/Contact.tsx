export default function Contact() {
  return (
    <div className="contact-section">
      <div className="contact-container">
        <p className="section-eyebrow">
          CONTACT
        </p>

        <h2 className="contact-title">
          Let&apos;s build something{" "}
          <span>together.</span>
        </h2>

        <p className="contact-description">
          I&apos;m always interested in new
          opportunities, collaborations, and
          conversations about technology.
        </p>

        <div className="contact-actions">
          <a
            href="mailto:YOUR-EMAIL-HERE"
            className="primary-button"
          >
            Email Me
          </a>

          <a
            href="https://www.linkedin.com/in/pelita-felicitas/"
            target="_blank"
            rel="noreferrer"
            className="secondary-button"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}