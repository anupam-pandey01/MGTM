import styles from "./Founder.module.css";
import founder from "../../../assets/images/founder.jpeg";
import { Helmet } from "react-helmet-async";

export default function FounderAbout() {
  return (
    <>
      <Helmet>
        <title>
          Shivam | Founder & Managing Principal of MGTM Consultancy LLP
        </title>

        <meta
          name="description"
          content="Meet Shivam, Founder and Managing Principal of MGTM Consultancy LLP. Learn about his journey across the education ecosystem and his vision of providing research-driven, ethical, and multidimensional career guidance."
        />

        <meta
          name="keywords"
          content="Shivam MGTM, MGTM founder, Founder of MGTM Consultancy LLP, career coach India, education consultant India, study abroad mentor, ethical career guidance"
        />

        <meta name="robots" content="index, follow, max-image-preview:large" />

        <meta name="author" content="MGTM Consultancy LLP" />

        <link rel="canonical" href="https://www.mgtmconsultancy.com/founder" />

        <meta
          property="og:title"
          content="Shivam | Founder & Managing Principal of MGTM Consultancy LLP"
        />

        <meta
          property="og:description"
          content="Discover Shivam's journey from working across the education ecosystem to building MGTM Consultancy LLP, a purpose-driven consultancy focused on ethical and research-led guidance."
        />

        <meta
          property="og:image"
          content="https://www.mgtmconsultancy.com/images/founder.jpeg"
        />

        <meta
          property="og:image:alt"
          content="Shivam, Founder and Managing Principal of MGTM Consultancy LLP"
        />

        <meta
          property="og:url"
          content="https://www.mgtmconsultancy.com/founder"
        />

        <meta property="og:type" content="profile" />

        <meta property="og:site_name" content="MGTM Consultancy LLP" />

        <meta property="og:locale" content="en_IN" />

        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:title"
          content="Shivam | Founder of MGTM Consultancy LLP"
        />

        <meta
          name="twitter:description"
          content="Learn about Shivam's mission to transform career guidance through honesty, integrity, and research-driven mentorship."
        />

        <meta
          name="twitter:image"
          content="https://www.mgtmconsultancy.com/images/founder.jpeg"
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Shivam",
            jobTitle: "Founder & Managing Principal",
            worksFor: {
              "@type": "EducationalOrganization",
              name: "MGTM Consultancy LLP",
            },
            url: "https://www.mgtmconsultancy.com/founder",
            image: "https://www.mgtmconsultancy.com/images/founder.jpeg",
            description:
              "Founder of MGTM Consultancy LLP with experience across university relations, business development, research, content creation, and ethical career guidance.",
            knowsAbout: [
              "Career Guidance",
              "Study Abroad Counselling",
              "Psychometric Assessments",
              "Student Mentorship",
              "Profile Building",
            ],
          })}
        </script>
      </Helmet>

      <div className={styles.container}>
        <section className={`${styles.hero}`}>
          <div className={`${styles.heroWrapper} container`}>
            <div className={`${styles.heroContent}`}>
              <p className={styles.heroEyebrow}>LEADING WITH PURPOSE</p>
              <h1 className={styles.heroTitle}>
                A 360-Degree Perspective on the Education Ecosystem.
              </h1>
              <p className={styles.heroMission}>
                Shivam’s journey began with more than three years of working
                across multiple verticals in the education ecosystem — business
                development, university relations, research, content creation,
                data refinement, and cross departmental liaison roles. These
                experiences gave him a rare, 360 degrees understanding of how
                students make decisions and how easily those decisions can be
                shaped by incomplete information, external pressure, or
                one-dimensional advice. Working in a fast-paced environment
                defined by cut throat competition, where roles often prioritised
                closures, revenue, and sales skills, Shivam felt a growing
                disconnect between what the system demanded and what students
                truly needed. While the industry pushed for speed, he envisioned
                himself as a career coach who would guide students with
                sincerity, depth, and a genuine commitment to helping them
                achieve their goals. Shivam realised that what students needed
                wasn’t faster answers — it was deeper guidance. They needed
                someone who would evaluate every dimension of their journey with
                honesty, integrity, and transparency. Someone who would help
                them understand themselves before choosing a stream, a career, a
                course, a country, or a university. Someone who would prioritise
                clarity over convenience and ethics over ease.
              </p>
            </div>
            <div className={styles.heroPhotoWrap}>
              <img src={founder} alt="founder-image" />
              <div className={styles.founderBadge}>
                <strong>Shivam</strong>
                <span>Founder & Managing Principal</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── STORY ── */}
        <section className={styles.story}>
          <div className={`${styles.storyWrapper} container `}>
            <div className={styles.quoteCol}>
              <div className={styles.quoteMarks}>"</div>
              <blockquote className={styles.pullQuote}>
                "Born from the belief that career and education choices must be
                multidimensional, not one‑dimensional"
              </blockquote>
            </div>
            <div className={styles.storyCol}>
              <p>
                Over time, he noticed a pattern that troubled him deeply:
                students were making life defining choices based on a single
                factor — a trend, a country, a friend’s influence, while some
                counsellors are turning guidance into a transaction (incentive
                driven!) rather than a thoughtful, student centric process.
                Critical elements like skill gaps, financial realities, ROI,
                long term career alignment, and future readiness were often
                overlooked. The result was a widening gap between a student’s
                aspirations and the path they were placed on. Driven by this
                conviction, Shivam pursued a professional career coaching
                certification to understand the science, psychology, and
                methodology behind career decisions. This wasn’t a career shift
                — it was a commitment to doing things the right way. He
                envisioned a space where students could explore their identity,
                strengths, aspirations, opportunities, and future pathways with
                depth and dignity. This vision became MGTM — Multidimensional
                Growth & Transformation Mentor. A purpose driven consultancy
                built on research, integrity and clarity.
              </p>
            </div>
          </div>
        </section>

        {/* ── PHILOSOPHY ── */}
        <section className={styles.philosophy}>
          <div className="container section">
            <div className={styles.philosophySection}>
              <h2 className={styles.secTitle}>The MGTM Philosophy</h2>
              <div className={styles.secDivider}></div>
              <div className={styles.founderPhilosophy}>
                <p>
                  Today, Shivam stands as a mentor who believes that every
                  student deserves guidance that is honest, multidimensional,
                  and future ready. MGTM is his promise to help students bridge
                  the gap between where they are and what they can become —
                  replacing confusion with clarity, pressure with purpose, and
                  guesswork with guided strategy.
                </p>
                <div>
                  <div>
                    <blockquote className={styles.pullQuote}>
                      "Born from the belief that career and education choices
                      must be multidimensional, not one‑dimensional"
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
