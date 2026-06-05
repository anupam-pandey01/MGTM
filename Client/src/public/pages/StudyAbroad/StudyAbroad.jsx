import styles from "./StudyAbroad.module.css";

import PageHeroSection from "../../component/ui/PageHeroSection/PageHeroSection";
import CurrencyTicker from "../../component/ui/CurrencyTicker/CurrencyTicker";

const tracks = [
  {
    icon: "🧭",
    title: "Country Selection",
    desc: "Fit-first, not trend-first. We weigh academics, cost, post-study work rights, safety and your long-term goals.",
  },
  {
    icon: "🎓",
    title: "Course Selection",
    desc: "Programs chosen against your psychometric profile, strengths and the career you actually want.",
  },
  {
    icon: "📋",
    title: "Application Processing",
    desc: "Timelines, document checklists, transcripts, recommendations and submissions — managed end-to-end.",
  },
  {
    icon: "💳",
    title: "Education Loans",
    desc: "Loan structuring guidance across public and private lenders, collateral vs non-collateral options, and timelines.",
  },
  {
    icon: "🏠",
    title: "Accommodation",
    desc: "On-campus, off-campus and homestay options — verified, budgeted and aligned to your lifestyle.",
  },
  {
    icon: "✈️",
    title: "Visa",
    desc: "Documentation, interview prep and country-specific compliance — handled with care and precision.",
  },
  {
    icon: "✏️",
    title: "SOPs, LORs & Essay Guidance",
    desc: "Honest, voice-led writing support — your story, sharpened. No templates. No ghostwritten clichés.",
  },
];

const explores = [
  "Who they are",
  "What they want",
  "What they're good at",
  "What aligns with their long-term goals",
];

const values = [
  {
    icon: "♡",
    title: "We don't treat students as leads.",
    subtitle: "We treat them as lives in transition.",
  },
  {
    icon: "🛡",
    title: "We don't push students into trends.",
    subtitle: "We help them build future-ready careers.",
  },
  {
    icon: "✦",
    title: "We chase alignment.",
    subtitle: "Clarity over hype. Purpose over pressure.",
  },
];

function StudyAbroad() {
  return (
    <div className={styles.app}>
      {/* Hero */}
      <section className={styles.hero}>
        <PageHeroSection
          eyeBrow={"Study Abroad with MGTM"}
          pageHeroTitle={"Guiding Growth, Not Selling Dreams."}
          pageHeroIntro={
            "Studying abroad is one of the biggest decisions a student makes — academically, financially, emotionally and professionally."
          }
        />
      </section>

      <div className={styles.divider}></div>

      {/* About */}
      <section className={styles.about}>
        <div className={`${styles.studyAbroadContainer} container`}>
          <p>
            In today's market, this decision is often influenced by
            sales pressure, trends or incomplete information. At MGTM
            Consultancy LLP, we do things differently. We help students
            choose the right country, right course and right university
            through a multidimensional, research-driven,
            student-centric approach that prioritises clarity over hype
            and purpose over pressure.
          </p>
        </div>
      </section>

      {/* Explore */}
      <section className={styles.explore}>
        <div className={`${styles.studyAbroadContainer} container`}>
          <h2>We help students explore</h2>

          <div className={styles.exploreGrid}>
            {explores.map((item) => (
              <div
                key={item}
                className={styles.exploreTag}
              >
                {item}
              </div>
            ))}
          </div>

          <div className={styles.valuesGrid}>
            {values.map((value) => (
              <div
                key={value.title}
                className={styles.valueCard}
              >
                <div className={styles.icon}>
                  {value.icon}
                </div>

                <h3>{value.title}</h3>

                <p>{value.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tracks */}
      <section className={styles.tracks}>
        <div className={`${styles.studyAbroadContainer} container`}>
          <span className={styles.sectionLabel}>
            End-to-End Study Abroad Guidance
          </span>

          <h2>
            Seven tracks. One coordinated journey.
          </h2>

          <div className={styles.tracksGrid}>
            {tracks.map((track) => (
              <div
                key={track.title}
                className={styles.trackCard}
              >
                <div className={styles.icon}>
                  {track.icon}
                </div>

                <h3>{track.title}</h3>

                <p>{track.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CurrencyTicker />

      {/* CTA */}
      <section className={styles.cta}>
        <div className={`${styles.ctaBox} container` }>
          <h2>
            Start with a conversation, not a brochure.
          </h2>

          <p>
            Every engagement begins with a psychometric
            assessment so your country, course and
            university shortlist is built on evidence.
          </p>

          <button className={styles.ctaBtn}>
            Explore the Track →
          </button>
        </div>
      </section>
    </div>
  );
}

export default StudyAbroad;