import styles from "./Founder.module.css";

export default function FounderAbout() {
  return (
    <div className={styles.container}>
      {/* ── HERO ── */}
      <section className={`${styles.hero}`}>
        <div className={`${styles.heroWrapper} container`}>
          <div className={`${styles.heroContent}`}>
            <p className={styles.heroEyebrow}>LEADING WITH PURPOSE</p>
            <h1 className={styles.heroTitle}>
              A 360-Degree Perspective on the Education Ecosystem.
            </h1>
            <p className={styles.heroMission}>
              Shivam's mission is built on providing student-centric guidance,
              leveraging years of experience across business development and
              university relations to transform career trajectories.
            </p>
          </div>
          <div className={styles.heroPhotoWrap}>
            <div className={styles.photoPlaceholder}>
              <svg
                viewBox="0 0 24 24"
                width="52"
                height="52"
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="8" r="4" />
                <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
              </svg>
              <span>Founder Photo</span>
            </div>
            <div className={styles.founderBadge}>
              <strong>Shivam</strong>
              <span>Founder & Managing Principal</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── STORY ── */}
      <section className={styles.story}>
        <div className={`${styles.storyWrapper} container section`}>
          <div className={styles.quoteCol}>
            <div className={styles.quoteMarks}>"</div>
            <blockquote className={styles.pullQuote}>
              "What students needed wasn't faster answers — it was deeper
              guidance."
            </blockquote>
          </div>
          <div className={styles.storyCol}>
            <p>
              Shivam observed a troubling industry pattern: counsellors turning
              guidance into a mere transaction. This mechanical approach created
              a widening gap between a student's true aspirations and the path
              they were ultimately placed on.
            </p>
            <p>
              MGTM Consultancy was founded to bridge this gap. Moving away from
              the generic "application processing" model, Shivam integrates his
              deep understanding of university relations and business
              development to provide a multidimensional mentorship that
              prioritizes the student's long-term growth over short-term
              metrics.
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
            <div className={styles.philGrid}>
              <div className={styles.philCard}>
                <div className={styles.philIcon}>
                  <svg viewBox="0 0 24 24">
                    <path d="M9 3h6M9 3v8l-4 9h14l-4-9V3" />
                    <circle
                      cx="10.5"
                      cy="16"
                      r=".8"
                      fill="#0d1b3e"
                      stroke="none"
                    />
                    <circle
                      cx="14"
                      cy="14"
                      r=".6"
                      fill="#0d1b3e"
                      stroke="none"
                    />
                  </svg>
                </div>
                <h3>Scientific Methodology</h3>
                <p>
                  Decisions are backed by research and the psychology of career
                  development, ensuring that every step is purposeful and
                  grounded in evidence.
                </p>
              </div>

              <div className={styles.philCard}>
                <div className={styles.philIcon}>
                  <svg viewBox="0 0 24 24">
                    <path d="M9 17c0-2.5-3-4-3-7a6 6 0 1112 0c0 3-3 4.5-3 7H9z" />
                    <path d="M9 17h6M9.5 21h5M12 21v-4" />
                  </svg>
                </div>
                <h3>Mental Clarity</h3>
                <p>
                  We remove the noise of the industry to reveal the clear,
                  actionable path forward for students, focusing on their unique
                  psychological profile.
                </p>
              </div>

              <div className={styles.philCard}>
                <div className={styles.philIcon}>
                  <svg viewBox="0 0 24 24">
                    <path d="M12 2l7 3v5c0 5-3.5 9.74-7 11-3.5-1.26-7-6-7-11V5l7-3z" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                </div>
                <h3>Unyielding Integrity</h3>
                <p>
                  Guidance must be honest to be effective. We champion a brand
                  of mentorship that values transparency and the student's best
                  interest above all else.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── JOURNEY ── */}
      <section className={styles.journey}>
        <div className="container section">
          <div className={styles.jLeft}>
            <h2 className={styles.jHeading}>The Journey</h2>
            <div className={styles.jDivider}></div>
            <p className={styles.jSub}>
              A journey through the experiences that shaped Shivam's
              multidimensional methodology.
            </p>
          </div>

          <div className={styles.jRight}>
            <div className={styles.jItem}>
              <div className={styles.jMetaCol}>
                <span className={styles.jMetaText}>2021</span>
              </div>
              <div className={styles.jLineCol}>
                <div className={styles.jDot}></div>
                <div className={styles.jLine}></div>
              </div>
              <div className={styles.jBody}>
                <h3 className={styles.jTitle}>
                  Professional Coaching Certification
                </h3>
                <p className={styles.jDesc}>
                  Shivam deepens his commitment to the science and psychology
                  behind career decisions, earning professional certification to
                  bring editorial rigor to student mentorship.
                </p>
              </div>
            </div>

            <div className={styles.jItem}>
              <div className={styles.jMetaCol}>
                <span className={styles.jMetaText}>Vision</span>
              </div>
              <div className={styles.jLineCol}>
                <div className={styles.jDot}></div>
                <div className={styles.jLine}></div>
              </div>
              <div className={styles.jBody}>
                <h3 className={styles.jTitle}>The Birth of MGTM</h3>
                <p className={styles.jDesc}>
                  Multidimensional Growth & Transformation Mentor (MGTM) is
                  launched. A purpose-driven consultancy built on research,
                  integrity, and clarity, bridging the gap between business
                  development and educational guidance.
                </p>
              </div>
            </div>

            <div className={styles.jItem}>
              <div className={styles.jMetaCol}>
                <span className={styles.jMetaText}>Today</span>
              </div>
              <div className={styles.jLineCol}>
                <div className={styles.jDot}></div>
                <div className={styles.jLine}></div>
              </div>
              <div className={styles.jBody}>
                <h3 className={styles.jTitle}>Bridging the Gap</h3>
                <p className={styles.jDesc}>
                  Shivam stands as a mentor helping students bridge the gap
                  between where they are and what they can become, serving a
                  global community with an editorial soul.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
