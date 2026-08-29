import Image from "next/image";

export default function About() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-hero__content">
          <p className="about-eyebrow">
            ABOUT ME
          </p>

          <h2 className="about-title">
            Hi, I&apos;m{" "}
            <span>Pelita.</span>
          </h2>

          <p className="about-subtitle">
            Born &amp; raised on Oʻahu.
            <br />
            Computer Science grad building a
            career in tech.
          </p>

          <p className="about-intro">
            I took an unconventional path into
            technology, but every step taught me
            something about adapting, starting
            over, and being willing to learn.
            Now, I&apos;m ready to turn that
            experience into work that makes an
            impact.
          </p>

          <a
            className="about-story-link"
            href="#my-story"
          >
            <span>My story</span>
            <span aria-hidden="true">↓</span>
          </a>
        </div>

        <div className="about-hero__image-wrap">
          <div className="about-image-glow" />

          <div className="about-hero__image">
            <Image
              src="/about/pelita.jpg"
              alt="Pelita Felicitas"
              fill
              priority
              sizes="(max-width: 900px) 90vw, 42vw"
            />
          </div>
        </div>
      </section>

      <section
        className="about-story"
        id="my-story"
      >
        <div className="about-section-heading">
          <p className="about-eyebrow">
            THE JOURNEY
          </p>

          <h2>
            An unconventional route into tech.
          </h2>

          <p>
            My career didn&apos;t start in
            technology, but taking the chance to
            change directions ultimately led me
            to where I&apos;m meant to be.
          </p>
        </div>

        <div className="story-timeline">
          <article className="story-card">
            <div className="story-card__number">
              01
            </div>

            <div className="story-card__content">
              <p className="story-card__label">
                FINDING MY WAY TO TECH
              </p>

              <h3>
                It started with curiosity.
              </h3>

              <p>
                My first introduction to coding
                came from customizing MySpace
                pages and Tumblr themes, where I
                spent hours experimenting with
                HTML simply because I enjoyed
                figuring out how things worked.
              </p>

              <p>
                Technology wasn&apos;t my first
                career, though. I studied Baking
                and Pastry Arts and spent several
                years working in the food
                industry before realizing I
                wanted something different for
                my future. That decision
                eventually brought me back to
                the curiosity I&apos;d always
                had for technology.
              </p>
            </div>
          </article>

          <article className="story-card">
            <div className="story-card__number">
              02
            </div>

            <div className="story-card__content">
              <p className="story-card__label">
                STARTING OVER
              </p>

              <h3>
                Taking a chance on myself.
              </h3>

              <p>
                At 25, I enrolled at the
                University of Hawaiʻi at Mānoa
                to pursue my B.S. in Computer
                Science. I was entering a new
                field with a lot to learn, but I
                was determined to see where it
                could take me.
              </p>

              <p>
                Over the next several years, I
                went from learning the
                fundamentals of programming to
                building applications, working
                with data, solving technical
                problems, and gaining hands-on
                experience in professional
                technology environments.
              </p>

              <p>
                In July 2026, I finished my
                final class and earned my
                Bachelor of Science in Computer
                Science.
              </p>
            </div>
          </article>

          <article className="story-card">
            <div className="story-card__number">
              03
            </div>

            <div className="story-card__content">
              <p className="story-card__label">
                WHAT&apos;S NEXT
              </p>

              <h3>
                Ready for what comes next.
              </h3>

              <p>
                I&apos;m excited to continue
                building my career in technology,
                with interests in data, software
                development, and creating
                applications that solve real
                problems.
              </p>

              <p>
                I&apos;m ready to keep learning,
                take on new challenges, and
                contribute to teams building
                technology with purpose. As my
                career grows, I&apos;m also
                interested in exploring project
                management and the intersection
                between people, technology, and
                problem-solving.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="about-hawaii">
        <div className="about-hawaii__inner">
          <div className="about-hawaii__content">
            <h2>
              Building a future in tech from
              Hawaiʻi.
            </h2>

            <p>
              I want to contribute meaningful
              work to the community that raised
              me and show that incredible tech
              talent can come from Hawaiʻi, too.
            </p>
          </div>

          <div
            className="about-hawaii__image"
            aria-hidden="true"
          >
            <Image
              src="/about/hawaii2.png"
              alt=""
              fill
              sizes="500px"
            />
          </div>
        </div>
      </section>
    </div>
  );
}