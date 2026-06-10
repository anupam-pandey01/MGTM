import styles from "./About.module.css";
import { Helmet } from "react-helmet-async";
import { ShieldCheck, Brain, Users, BadgeCheck } from "lucide-react";

const principles = [
  {
    icon: Brain,
    title: "Research Led Guidance",
    text: "Our advice begins with understanding the student and ends with evidence. From skill gap mapping to long term career viability, every recommendation is backed by data that protects the student’s future.",
  },
  {
    icon: ShieldCheck,
    title: "Transparency by Default",
    text: "Our numbers stay public and honest, even when they are small. The data is real, visible and never inflated.",
  },
  {
    icon: Users,
    title: "Student-centric",
    text: "We follow student-centric approach that helps students to make informed decisions.",
  },
  {
    icon: BadgeCheck,
    title: "Honesty and Integrity as practice",
    text: "We choose clarity over convenience and truth over trends — ensuring every decision serves the student’s long term growth. Because one ‘no’ is worth more than convenient ‘yeses’.",
  },
];

const About = () => {
  return (
    <>
      <Helmet>
        <title>
          About MGTM Consultancy LLP | Study Abroad & Career Guidance
        </title>

        <meta
          name="description"
          content="Learn about MGTM Consultancy LLP - a research-driven study abroad consultancy offering honest guidance for career planning, stream selection, and overseas education."
        />

        <meta
          name="keywords"
          content="study abroad consultancy, career guidance India, overseas education consultant, MGTM consultancy"
        />

        <meta property="og:title" content="About MGTM Consultancy LLP" />

        <meta
          property="og:description"
          content="A research-driven consultancy for honest career and study abroad guidance."
        />

        <meta property="og:type" content="website" />
      </Helmet>

      <main className={styles.aboutPage}>
        {/* HERO */}
        <header className={`section container`}>
          <p className={styles.eyebrow}>About Us</p>

          <h1 className={styles.aboutTitle}>
            A consultancy built on research, not quotas.
          </h1>

          <p className={styles.aboutIntro}>
            MGTM Consultancy LLP exists for one reason: to give students and
            families honest, evidence-based guidance at the moments that matter
            most — choosing a stream, choosing a career, and choosing where in
            the world to study.
          </p>
        </header>

        {/* INTRO */}
        <section className={styles.fullIntroSection}>
          <section className={`section container ${styles.aboutMgtm}`}>
            <div className={styles.introContent}>
              <p>
                <strong>
                  MGTM (Multidimensional Growth & Transformation Mentor)
                </strong>{" "}
                is a purpose driven career coaching consultancy committed to
                helping students make informed, future proof decisions. In a
                world where studying abroad or choosing a career is often
                reduced to a sales pitch, MGTM stands as an ethical, research
                driven alternative that prioritises clarity, self awareness, and
                long term growth. Most students make decisions based on a single
                factor — a country, a course, a trend, or a friend’s influence.
                At MGTM, we believe growth should never be unidimensional. We
                help students explore the full spectrum of who they are: their
                <strong>interests, passions, skills, academic strengths, financial
                realities, and future opportunities.</strong> Our multidimensional approach ensures that every student
                understands not just where to go, but why they are going, what
                they will learn, and how it aligns with their long term goals.
                We work closely with <strong>students, parents, schools, and corporates</strong> 
                to build a holistic ecosystem of informed decision making — one
                that replaces confusion with clarity, pressure with purpose, and
                guesswork with guided strategy. MGTM is not a sales driven
                consultancy. MGTM is a <strong>  trusted career coach, a holistic
                education navigation partner, and a mentor for multidimensional
                growth and transformation.  </strong>

              </p>
            </div>

            {/* VISION */}
            <section className={styles.visionSection}>
              <div className={styles.sectionHeading}>
                <p>Our Vision</p>

                <h2>Building Future Ready Students</h2>
              </div>

              <div className={styles.visionCard}>
                <p>
                  To build a world where every student makes confident,
                  informed, multidimensional education and career decisions —
                  grounded in self awareness, future readiness, and ethical
                  guidance — creating a generation that grows with purpose,
                  clarity, and impact.
                </p>
              </div>
            </section>

            {/* MISSION */}
            <section className={styles.missionSection}>
              <div className={styles.sectionHeading}>
                <p>Our Mission</p>

                <h2>
                  To guide students through stream, career, course, country, and
                  university selection using a research driven, student centric
                  approach.
                </h2>
              </div>

              <div className={styles.missionGrid}>
                <div className={styles.missionCard}>
                  <h3>Research Driven Guidance</h3>

                  <p>
                    To empower students to navigate dynamic education landscapes
                    with confidence, clarity, and long term vision.
                  </p>
                </div>

                <div className={styles.missionCard}>
                  <h3>Ethical Mentorship</h3>

                  <p>
                    To provide ethical, transparent, and non sales driven
                    mentorship that prioritises student well being over
                    conversions.
                  </p>
                </div>

                <div className={styles.missionCard}>
                  <h3>Skill Gap Analysis</h3>

                  <p>
                    To conduct skill gap analysis, profile evaluation, ROI
                    assessment, and future readiness mapping so students choose
                    pathways aligned with their strengths and aspirations.
                  </p>
                </div>

                <div className={styles.missionCard}>
                  <h3>Holistic Growth</h3>

                  <p>
                    To collaborate with schools, parents, corporates, TNE
                    providers, faculties, teachers, trainers and learning and
                    development professionals in building an ecosystem that
                    supports multidimensional growth.
                  </p>
                </div>
              </div>
            </section>

            {/* PRINCIPLES */}
            <section className={styles.principlesSection}>
              <div className={styles.sectionHeading}>
                <p>Core Principles</p>

                <h2>Values We Stand By</h2>
              </div>

              <div className={styles.principlesContainer}>
                {principles.map((item, idx) => {
                  const Icon = item.icon;

                  return (
                    <div className={styles.principleCard} key={idx}>
                      <div className={styles.cardIcon}>
                        <Icon size={28} />
                      </div>

                      <h3>{item.title}</h3>

                      <span>{item.text}</span>
                    </div>
                  );
                })}
              </div>
              <div className={styles.principleCardLast}>
                <h3>Multidimensional growth as guiding standards</h3>
                <span>
                  We drive multidimensional growth by helping students develop
                  every dimension of themselves - skills, academic, interest,
                  passion, etc. We thrive for making their educational journey
                  as transformative as the future they are working towards.
                </span>
              </div>
            </section>
          </section>
        </section>
      </main>
    </>
  );
};

export default About;
