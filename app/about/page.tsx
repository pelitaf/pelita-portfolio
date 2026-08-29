import Image from "next/image";

import Navbar from "../../components/Navbar";

import "./about.css";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="about-page">
        <section className="about-hero">
          <div className="about-hero__content">
            <p className="about-eyebrow">ABOUT ME</p>

            <h1 className="about-title">
              Hi, I&apos;m <span>Pelita.</span> 👋
            </h1>

            <p className="about-subtitle">
              Born &amp; raised on Oʻahu.
              <br />
              Baker turned Computer Science grad.
            </p>

            <p className="about-intro">
              My path into tech was definitely not a straight line. It started
              with MySpace layouts, Tumblr themes, and way too many hours spent
              tweaking HTML until everything looked exactly how I wanted it.
            </p>

            <a className="about-story-link" href="#my-story">
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

        <section className="about-story" id="my-story">
          <div className="about-section-heading">
            <p className="about-eyebrow">THE JOURNEY</p>

            <h2>A slightly unconventional route into tech.</h2>

            <p>
              I didn&apos;t always know I wanted to work in technology, but
              looking back, the signs were definitely there.
            </p>
          </div>

          <div className="story-timeline">
            <article className="story-card">
              <div className="story-card__number">01</div>

              <div className="story-card__content">
                <p className="story-card__label">WHERE IT STARTED</p>

                <h3>MySpace, Tumblr &amp; HTML 💿</h3>

                <p>
                  My first introduction to anything remotely related to coding
                  was building out my MySpace page in elementary school.
                </p>

                <p>
                  Why did I have a MySpace page in fifth grade? In my defense,
                  everyone had one.
                </p>

                <p>
                  Then came Tumblr, and pretty much the same situation. I spent
                  endless hours changing layouts, colors, and raw HTML until
                  everything looked just right.
                </p>

                <p>
                  I didn&apos;t know it then, but those little experiments were
                  my first introduction to the world of technology.
                </p>
              </div>
            </article>

            <article className="story-card story-card--reverse">
              <div className="story-card__number">02</div>

              <div className="story-card__content">
                <p className="story-card__label">PLOT TWIST</p>

                <h3>I became a baker. 🧁</h3>

                <p>
                  When it came time to choose a career, tech wasn&apos;t my
                  first choice.
                </p>

                <p>
                  I attended Scottsdale Community College and studied Baking
                  and Pastry Arts before eventually returning home to Hawaiʻi
                  and spending several years working in the food industry.
                </p>

                <p>
                  After a while, I burned out and learned a lesson that ended up
                  changing my direction completely:
                </p>

                <blockquote>
                  Not every hobby has to become your career.
                </blockquote>

                <p>
                  So I decided it was time to try something completely
                  different.
                </p>
              </div>
            </article>

            <article className="story-card">
              <div className="story-card__number">03</div>

              <div className="story-card__content">
                <p className="story-card__label">STARTING OVER</p>

                <h3>Back to school at 25. 💻</h3>

                <p>
                  When I decided to go back to school, I kept thinking about
                  those younger versions of myself spending hours playing with
                  HTML.
                </p>

                <p>
                  So instead of taking the safe route, I decided to give
                  Computer Science a shot.
                </p>

                <p>
                  At 25, I enrolled at the University of Hawaiʻi at Mānoa to
                  pursue my B.S. in Computer Science.
                </p>

                <p>
                  Starting over was intimidating. I felt like I had a lot to
                  prove to myself, and I was learning an entirely new field
                  from the ground up.
                </p>

                <p>
                  But sometimes you just have to take the leap.
                </p>

                <p>
                  In July 2026, I finished my final class and officially earned
                  my Bachelor of Science in Computer Science.
                </p>
              </div>
            </article>

            <article className="story-card story-card--reverse">
              <div className="story-card__number">04</div>

              <div className="story-card__content">
                <p className="story-card__label">WHAT&apos;S NEXT</p>

                <h3>Building things that matter. ✨</h3>

                <p>
                  Today, I&apos;m especially interested in data, software
                  development, and building applications, while also hoping to
                  explore project management as my career grows.
                </p>

                <p>
                  More than anything, I want the work I do to mean something.
                  I&apos;d love to help build technology that solves real
                  problems, supports people, and creates a positive impact
                  beyond the screen.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section className="about-hawaii">
          <div className="about-hawaii__inner">
            <p className="about-eyebrow"></p>

            <h2>
              Building a future in tech from Hawaiʻi.
            </h2>

            <p>
              I want to contribute meaningful work to the community that raised
              me and show that incredible tech talent can come from Hawaiʻi,
              too.
            </p>

            <div className="about-hawaii__flower" aria-hidden="true">
              🌺
            </div>
          </div>
        </section>
      </main>
    </>
  );
}