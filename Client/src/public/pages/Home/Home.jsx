import styles from "./Home.module.css";

import {
  ArrowRight,
  BookOpenCheck,
  Compass,
  GraduationCap,
  Microscope,
  School,
  BadgeCheck,
  Globe2,
  Users,
  Quote,
  Sparkles,
  Brain,
  Languages,
  MessagesSquare,
  Lightbulb,
  UsersRound,
} from "lucide-react";

import { Helmet } from "react-helmet-async";
import { Link } from "react-router";
import hero from "../../../assets/images/hero-image-removebg-preview.png";
import Note from "../../component/ui/Note";

const services = [
  {
    icon: Compass,
    title: "Stream & Subject Selection (Classes 8–10)",
    text: "Helping students choose subjects aligned with their strengths",
  },
  {
    icon: GraduationCap,
    title: "Career Coaching for Classes 10, 11 & 12",
    text: "building clarity, confidence, and a purposeful career direction  include profile building.",
  },
  {
    icon: BookOpenCheck,
    title: "End-to-End Study Abroad",
    text: "End to end support for students exploring global education — from university shortlisting and applications to SOPs, LORs, visas, accommodation, and pre departure.",
  },
];

const stats = [
  {
    value: "Growing daily",
    label: "Stream & Subject Selection (Classes 8–10)",
    note: "Students enrolled to explore subject combinations and build a strong academic foundation.",
  },
  {
    value: "Growing daily",
    label: "Career Coaching for Classes 10, 11 & 12",
    note: "Students guided through career planning, profile building, and future pathway decisions.",
  },
  {
    value: "Growing daily",
    label: "End-to-End Study Abroad",
    note: "Students supported through university applications, admissions, and international education planning.",
  },
];

const partnershipCards = [
  {
    icon: School,
    tag: "Schools",
  },
  {
    icon: GraduationCap,
    tag: "COLLEGES & UNIVERSITIES",
  },
  {
    icon: BadgeCheck,
    tag: "CERTIFICATION PROVIDERS",
  },
  {
    icon: Globe2,
    tag: "TNE Partners",

  },
  {
    icon: UsersRound,
    tag: "EDUCATORS",
  },
  {
    icon: Brain,
    tag: "Psychologists",
  },
  {
    icon: Languages,
    tag: "Language Trainers",
  },
  {
    icon: MessagesSquare,
    tag: "SOFT SKILL TRAINERS",
  },
  {
    icon: Lightbulb,
    tag: "Learning & Development Specialists",
  },
];

const stories = [
  {
    stage: "Stream Selection",
    title: "Your story could start here.",
    body: "A student rediscovers a stream that fits how they actually think - backed by a psychometric report, not a huch",
  },
  {
    stage: "Career Coaching",
    title: "A career chosen on purpose.",
    body: "Months of structured coaching turn vague ambitions into a concrete, evidence-backed career path.",
  },
  {
    stage: "Study Abroad",
    title: "An admit that actually fits.",
    body: "Shortlist, applications, SOPs, visa - and and offer from a university that matches the student, not the brochure.",
  },
];

const Home = () => {
  return (
    <>
      <Helmet>
        <title>
          MGTM Consultancy LLP | Study Abroad & Career Guidance in India
        </title>

        <meta
          name="description"
          content="MGTM Consultancy LLP provides research-driven career guidance, stream selection, psychometric assessments, profile building, and study abroad counselling to help students make informed decisions."
        />

        <meta
          name="keywords"
          content="study abroad consultant India, career guidance, psychometric assessment, stream selection, career coaching, overseas education consultant, profile building, MGTM Consultancy LLP"
        />

        <meta name="robots" content="index, follow" />

        <meta name="author" content="MGTM Consultancy LLP" />

        <link rel="canonical" href="https://www.mgtmconsultancy.com/" />

        <meta
          property="og:title"
          content="MGTM Consultancy LLP | Research-Driven Career Guidance"
        />

        <meta
          property="og:description"
          content="Helping students choose the right stream, build meaningful careers, and navigate study opportunities in India and abroad through evidence-based guidance."
        />

        <meta
          property="og:image"
          content="https://www.mgtmconsultancy.com/og-home.jpg"
        />

        <meta property="og:url" content="https://www.mgtmconsultancy.com/" />

        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:title"
          content="MGTM Consultancy LLP | Research-Driven Career Guidance"
        />

        <meta
          name="twitter:description"
          content="Research-driven career guidance, psychometric assessments, and study abroad counselling."
        />

        <meta
          name="twitter:image"
          content="https://www.mgtmconsultancy.com/og-home.jpg"
        />
      </Helmet>

      <div className={styles.homePage}>
        <section className={styles.heroSection}>
          <div className={`container ${styles.heroContainer}`}>
            <div className={styles.heroContent}>
              <div className={styles.heroBadge}>
                <span className={styles.badgeDot}></span>
                Research Driven, Not Sales Driven
              </div>

              <h1 className={styles.heroTitle}>
                Decisions about your future deserve
                <span> evidence</span>, not a sales pitch.
              </h1>

              <p className={styles.heroDescription}>
                MGTM Consultancy LLP guides students in choosing the right
                stream, developing a meaningful career plan, and building a
                standout profile, navigating study opportunities in India and
                abroad — all beginning with a comprehensive psychometric
                assessment.
              </p>

              <div className={styles.heroButtons}>
                <Link to="/services" className={styles.primaryBtn}>
                  Explore our services
                  <ArrowRight size={18} />
                </Link>

                <Link to="/contact" className={styles.secondaryBtn}>
                  Book a conversation
                </Link>
              </div>
            </div>

            <div className={styles.heroImageWrapper}>
              <div className={styles.heroImageBlur}></div>

              <img
                src={hero}
                alt="Student guidance"
                className={styles.heroImage}
              />
            </div>
          </div>
        </section>

        <section className={styles.servicesSection}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <p className={styles.sectionTag}>What we do</p>

              <h2 className={styles.sectionTitle}>
                Various Services. One honest starting point – Psychometric
                Assessment
              </h2>

              <p className={styles.sectionDescription}>
                Every service — stream selection for Classes 8–10, career
                coaching for Classes 11–12, and higher‑education guidance in
                India or abroad for Class 12 and college students — starts with
                a psychometric assessment. We provide structured guidance across
                key milestones.
              </p>
            </div>

            <div className={styles.servicesGrid}>
              {services.map((service) => (
                <div className={styles.serviceCard} key={service.title}>
                  <service.icon className={styles.serviceIcon} />

                  <h3>{service.title}</h3>

                  <p>{service.text}</p>
                </div>
              ))}
            </div>

            <div className={styles.homeNoteContainer}>
              <Note
                icon={<Microscope className={styles.assessmentIcon} />}
                boldText={"All services include a psychometric assessment."}
                className={styles.assessmentBox}
                paraText={"The result shapes every recommendation we make."}
              />
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className={styles.statsSection}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <p className={styles.sectionTag}>Transparency</p>

              <h2 className={styles.sectionTitle}>
                We'd rather start at zero than start with a story.
              </h2>
            </div>

            <div className={styles.statsGrid}>
              {stats.map((item) => (
                <div className={styles.statsCard} key={item.label}>
                  <h3>{item.value}</h3>

                  <h4>{item.label}</h4>

                  <p>{item.note}</p>
                </div>
              ))}
              <Link to={`/real-metrics`} className={styles.realMatrics}>
                View Real Metrics
              </Link>
            </div>
          </div>
        </section>

        <section className={styles.storiesSection}>
          <div className="container">
            <div className={styles.storiesTop}>
              <div className={styles.sectionHeader}>
                <p className={styles.sectionTag}>Success Stories</p>

                <h2 className={styles.sectionTitle}>
                  The first chapter is still being written.
                </h2>
              </div>

              <div className={styles.storiesBadge}>
                <Sparkles size={14} />
                First stories publishing soon
              </div>
            </div>

            <div className={styles.storiesGrid}>
              {stories.map((story) => (
                <div className={styles.storyCard} key={story.stage}>
                  <Quote className={styles.storyQuote} />

                  <span>{story.stage}</span>

                  <h3>{story.title}</h3>

                  <p>{story.body}</p>

                  <small>Awaiting first published story</small>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.partnershipSection}>
          <div className={`container ${styles.partnershipContainer}`}>
            <div className={styles.partnershipContent}>
              <p className={styles.sectionTag}>Partnerships</p>

              <h2 className={styles.sectionTitle}>
                Partners who help students discover direction — and build
                profiles that go further.
              </h2>

              <p className={styles.sectionDescription}>
                Schools and colleges help us reach students early with honest,
                research led guidance. Certification bodies, universities, and
                TNE partners strengthen their global readiness with credible
                pathways and opportunities. Educators, trainers, and L&D
                specialists add skills, mentorship, and real world exposure —
                completing a unified ecosystem of support around every learner.
                My vision is a collaborative ecosystem where every partner
                contributes meaningfully to a student’s academic, emotional,
                professional, and global growth.
              </p>
            </div>

            <div className={styles.partnershipGrid}>
              {partnershipCards.map((card) => (
                <div className={styles.partnershipCard} key={card.tag}>
                  <card.icon className={styles.partnershipIcon} />

                  <div className={styles.partnershipContent}>
                    <span>{card.tag}</span>
                  </div>
                </div>
              ))}

              <div className={styles.partnershipBottomBox}>
                <Users className={styles.partnershipUsersIcon} />

                <p>
                  One ecosystem focused on student growth, direction, and
                  opportunity.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
