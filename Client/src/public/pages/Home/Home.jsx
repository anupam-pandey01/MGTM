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
  UsersRound
} from "lucide-react";

import { Helmet } from "react-helmet-async";
import { Link } from "react-router";
import hero from "../../../assets/images/hero.jpg";
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
    text: "Building clarity, confidence, and a purposeful career direction including profile building.",
  },
  {
    icon: BookOpenCheck,
    title: "End-to-End Study Abroad",
    text: "Complete guidance for admissions, applications, SOPs, visas, and university selection.",
  },
];

const stats = [
  {
    value: "0",
    label: "Students mentored",
    note: "Every number here will grow only when a real student journey is complete.",
  },
  {
    value: "0",
    label: "Successful placements",
    note: "Updated transparently as each career coaching engagement closes.",
  },
  {
    value: "0",
    label: "Universities placed into",
    note: "Counted only after admission letters are in hand.",
  },
  {
    value: "100%",
    label: "Psychometric-first approach",
    note: "From day one — this is the one number we start at full.",
  },
];

const partnershipCards = [
  {
    icon: School,
    tag: "Schools",
    // line: "Empowering schools to offer research driven career clarity and holistic student development.",
  },
  {
    icon: GraduationCap,
    tag: "COLLEGES & UNIVERSITIES",
    // line: "Building transparent pathways between institutions and students through ethical, data backed guidance.",
  },
  {
    icon: BadgeCheck,
    tag: "CERTIFICATION PROVIDERS",
    // line: "Strengthening student profiles with verified, future ready learning experiences.",
  },
  {
    icon: Globe2,
    tag: "TNE Partners",
    // line: "Connecting students to global learning opportunities through trusted academic partnerships.",
  },
  {
    icon: UsersRound,
    tag: "EDUCATORS",
    // line: "Connecting students to global learning opportunities through trusted academic partnerships.",
  },
  {
    icon: Brain,
    tag: "Psychologists",
    // line: "Connecting students to global learning opportunities through trusted academic partnerships.",
  },
  {
    icon: Languages,
    tag: "Language Trainers",
    // line: "Connecting students to global learning opportunities through trusted academic partnerships.",
  },
  {
    icon: MessagesSquare,
    tag: "SOFT SKILL TRAINERS",
    // line: "Connecting students to global learning opportunities through trusted academic partnerships.",
  },
  {
    icon: Lightbulb,
    tag: " Learning Specialists",
    // line: "Connecting students to global learning opportunities through trusted academic partnerships.",
  },
];

const stories = [
  {
    stage: "Stream Selection",
    title: "Your story could start here.",
    body: "A student rediscovers a stream that fits how they actually think.",
  },
  {
    stage: "Career Coaching",
    title: "A career chosen on purpose.",
    body: "Months of structured coaching turn vague ambitions into real direction.",
  },
  {
    stage: "Study Abroad",
    title: "An admit that actually fits.",
    body: "An offer from a university that matches the student, not the brochure.",
  },
];

const Home = () => {
  return (
    <>
      <Helmet>
        <title>MGTM Consultancy LLP | Research Driven Career Guidance</title>

        <meta
          name="description"
          content="MGTM Consultancy LLP offers research-driven stream selection, career coaching and study abroad services."
        />
      </Helmet>

      <div className={styles.homePage}>
        {/* HERO */}
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
                stream, developing a meaningful career plan, and navigating
                study opportunities in India and abroad.
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

        {/* SERVICES */}
        <section className={styles.servicesSection}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <p className={styles.sectionTag}>What we do</p>

              <h2 className={styles.sectionTitle}>
                Various Services. One honest starting point.
              </h2>

              <p className={styles.sectionDescription}>
                Every service starts with a psychometric assessment.
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
            </div>
          </div>
        </section>

        {/* STORIES */}
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

        {/* PARTNERSHIPS */}
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

                  {/* <p>{card.line}</p> */}
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
