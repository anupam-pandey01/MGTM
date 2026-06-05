import styles from "./About.module.css";
import { Helmet } from "react-helmet-async";
import {
  ShieldCheck,
  Brain,
  Users,
  BadgeCheck,
} from "lucide-react";

const principles = [
  {
    icon: Brain,
    title: "Research First",
    text: "Every recommendation cites a reason.",
  },
  {
    icon: ShieldCheck,
    title: "Transparency by Default",
    text: "Our public numbers are real, even when they're small.",
  },
  {
    icon: Users,
    title: "Student-led, Family-aware",
    text: "The student decides; the family is informed.",
  },
  {
    icon: BadgeCheck,
    title: "One Honest No",
    text: "Is worth more than ten convenient yeses.",
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
            MGTM Consultancy LLP exists for one reason: to give
            students and families honest, evidence-based guidance at
            the moments that matter most — choosing a stream,
            choosing a career, and choosing where in the world to
            study.
          </p>
        </header>

        {/* INTRO */}
        <section className={styles.fullIntroSection}>
          <section className={`section container ${styles.aboutMgtm}`}>
            <div className={styles.introContent}>
              <p>
                MGTM (Multidimensional Growth & Transformation
                Mentor) is a purpose driven career coaching
                consultancy committed to helping students make
                informed, future proof decisions.
              </p>

              <p>
                In a world where studying abroad or choosing a career
                is often reduced to a sales pitch, MGTM stands as an
                ethical, research driven alternative that prioritises
                clarity, self awareness, and long term growth.
              </p>

              <p>
                Our multidimensional approach ensures that every
                student understands not just where to go, but why
                they are going, what they will learn, and how it
                aligns with their long term goals.
              </p>

              <p>
                MGTM is not a sales driven consultancy. MGTM is a
                trusted career coach, a holistic education navigation
                partner, and a mentor for multidimensional growth and
                transformation.
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
                  To build a world where every student makes
                  confident, informed, multidimensional education and
                  career decisions — grounded in self awareness,
                  future readiness, and ethical guidance.
                </p>
              </div>
            </section>

            {/* MISSION */}
            <section className={styles.missionSection}>
              <div className={styles.sectionHeading}>
                <p>Our Mission</p>

                <h2>What Drives MGTM</h2>
              </div>

              <div className={styles.missionGrid}>
                <div className={styles.missionCard}>
                  <h3>Research Driven Guidance</h3>

                  <p>
                    Helping students choose the right stream,
                    course, university, and country through
                    evidence-based analysis.
                  </p>
                </div>

                <div className={styles.missionCard}>
                  <h3>Ethical Mentorship</h3>

                  <p>
                    Transparent and student-first guidance without
                    sales pressure.
                  </p>
                </div>

                <div className={styles.missionCard}>
                  <h3>Skill Gap Analysis</h3>

                  <p>
                    Mapping strengths, weaknesses, and future
                    readiness for better decisions.
                  </p>
                </div>

                <div className={styles.missionCard}>
                  <h3>Holistic Growth</h3>

                  <p>
                    Supporting multidimensional development beyond
                    academics.
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
                    <div
                      className={styles.principleCard}
                      key={idx}
                    >
                      <div className={styles.cardIcon}>
                        <Icon size={28} />
                      </div>

                      <h3>{item.title}</h3>

                      <span>{item.text}</span>
                    </div>
                  );
                })}
              </div>
            </section>
          </section>
        </section>
      </main>
    </>
  );
};

export default About;