import styles from "./Partnerships.module.css";
import { Link } from "react-router";
import {
  School,
  GraduationCap,
  BadgeCheck,
  Building2,
  Globe2,
  Users,
  Sparkles,
} from "lucide-react";

const helpStudents = [
  {
    icon: School,
    tag: "SCHOOLS",
    title:
      "Empowering schools to offer research driven career clarity and holistic student development",
    body: "Schools are the first touchpoint in a student’s academic journey. They provide access to students, parents, and teachers, enabling us to deliver workshops, psychometric assessments, and help students in their long term development pathways. Schools become the foundation for early clarity, emotional resilience, and informed decision making",
    // perks: [
    //   "School-wide career discovery sessions",
    //   "Counsellor enablement & toolkits",
    //   "Annual cohort insight report",
    // ],
  },

  {
    icon: GraduationCap,
    tag: "Colleges (India & Abroad)",
    title:
      "Building transparent pathways between institutions and students through ethical, data backed guidance.",
    body: "Colleges enrich the ecosystem by offering authentic, updated, and transparent information about programs, admissions, scholarships, and campus life. They help MGTM create realistic, research driven pathways for students by sharing insights into industry alignment, global opportunities, and employability outcomes. Their participation ensures students receive clarity without sales pressure, maintaining our ethical stance.",
  },

  {
    icon: GraduationCap,
    tag: "TNE Providers",
    title:
      "Connecting students to global learning opportunities through trusted, academically aligned transnational education partners.",
    body: "TNE providers bring international exposure into the ecosystem. They offer dual degrees, pathway programs, and global mobility options. Their role is to ensure that students access quality international education that is academically sound, financially transparent, and aligned with long term career goals. They help us build global academic bridges without compromising integrity.",
  },

  {
    icon: GraduationCap,
    tag: "Micro Credential, Credential & ODL Course Providers",
    title:
      "Strengthening student profiles with verified, future ready learning experiences that enhance employability.",
    body: "These partners provide short, impactful, industry aligned learning modules that help students build skills, portfolios, and credibility. They support our mission by offering flexible, affordable, and recognized learning pathways in areas like AI, communication, design, business, and more. Their courses help students stand out in admissions, internships, and placements.",
  },

  {
    icon: GraduationCap,
    tag: "Teachers / Faculties",
    title:
      "Enabling educators to contribute expertise and shape a student centric, growth oriented learning ecosystem.",
    body: "Teachers bring subject expertise, mentorship, and classroom insights. They help us identify student strengths, learning patterns, and academic gaps (all on ground level). Faculty members can also contribute as mentors, workshop facilitators, evaluators, and content collaborators. Their involvement ensures that our guidance remains academically grounded and contextually relevant.",
  },

  {
    icon: GraduationCap,
    tag: "Language Trainers",
    title:
      "Enhancing global readiness through language proficiency and communication confidence.",
    body: "Language trainers help students build fluency, confidence, and cultural adaptability. They support preparation for IELTS, TOEFL, PTE, Duolingo, German Language Proficiency, French Language Proficiency and also help with spoken English, academic writing, and interview preparation. Their contribution strengthens students’ global mobility and academic success.",
  },

  {
    icon: GraduationCap,
    tag: "Soft Skill Trainers",
    title:
      "Developing essential human skills that prepare students for academic, professional, and personal success.",
    body: "Soft skill trainers help students build leadership, teamwork, critical thinking, communication, and problem solving abilities. They support our mission by preparing students for interviews, internships, group discussions, and real world challenges. Their work ensures students grow into confident, adaptable, and employable individuals.",
  },

  {
    icon: GraduationCap,
    tag: "Learning & Development Specialists",
    title:
      "Designing structured, impactful learning journeys that align with evolving industry and academic needs.",
    body: "L&D specialists help us create curriculums, workshops, learning pathways, and skill development frameworks for individuals, school and colleges. They bring expertise in instructional design, competency mapping, and outcome based learning.",
  },
];

const buildProfiles = [
  {
    icon: BadgeCheck,
    tag: "CERTIFICATION PROVIDERS",
    title: "Skills that strengthen the story",
    body: "We collaborate with credible certification providers so students can layer recognised, mentor-reviewed credentials on top of their academic profile — without chasing badges.",
    perks: [
      "Curated free starter certifications",
      "Paid deep-skill tracks",
      "Profile-aligned learning paths",
    ],
  },

  {
    icon: Building2,
    tag: "UNIVERSITIES",
    title: "Direct pathways, honest fit",
    body: "Partnerships with universities give students transparent admission pathways, scholarship visibility and authentic insight into programs — selected on fit, never on incentive.",
    perks: [
      "Verified program information",
      "Scholarship & funding visibility",
      "Direct admissions conversations",
    ],
  },

  {
    icon: Globe2,
    tag: "TNE PROVIDERS",
    title: "Global learning, local launchpads",
    body: "Transnational education partners open up dual degrees, pathway programs and global exposure — letting students build internationally-credible profiles before they ever board a flight.",
    perks: [
      "Pathway & articulation programs",
      "Dual & joint qualifications",
      "Global exposure, local cost",
    ],
  },
];

function Card({ item }) {
  const Icon = item.icon;

  return (
    <div className={styles.partnerCard}>
      <div className={styles.partnerTag}>
        <Icon size={15} />
        <span>{item.tag}</span>
      </div>

      <h3>{item.title}</h3>

      <p>{item.body}</p>

      {/* <ul>
        {item.perks.map((perk) => (
          <li key={perk}>
            <Sparkles size={14} />
            {perk}
          </li>
        ))}
      </ul> */}
    </div>
  );
}

export default function Partnerships() {
  return (
    <div className={styles.partnershipsPage}>
      {/* HERO */}
      <section className={`${styles.partnershipsHero} container section`}>
        <div className={styles.partnershipsContainer}>
          <p className={styles.sectionLabel}>PARTNERSHIPS</p>

          <h1>
            Partners who help students discover direction — and build profiles
            that go further.
          </h1>

          <p className={styles.heroText}>
            Our partnerships exist for one reason: better student outcomes.
            Schools and colleges help us reach students early and guide them
            well. Certification providers, universities and TNE partners help
            those same students build credible, globally-relevant profiles —
            research-led, never sales-led.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className={styles.partnershipsContent}>
        <div className={`${styles.partnershipsContainer} container section`}>
          {/* SECTION 1 */}
          <div className={styles.groupBlock}>
            <p className={styles.chapter}>REACHING STUDENTS</p>

            <h2>Helping students, with schools & colleges.</h2>

            <p className={styles.groupText}>
              The earliest, most honest conversations happen inside classrooms.
              We partner with institutions to bring research-driven guidance to
              where students already are.
            </p>

            <div className={styles.cardsGrid}>
              {helpStudents.map((item) => (
                <Card key={item.title} item={item} />
              ))}
            </div>
          </div>

          <div className="">
            <div className={styles.psychologistsCard}>
              <div className={styles.psychologistsTag}>
                {/* <Icon size={15} /> */}
                <span>Psychologists</span>
              </div>

              <h3>Integrating psychological insights to support student well being, decision making, and emotional resilience.</h3>

              <p>Teenagers today are navigating pressure, comparison, confusion, and constant noise—often without the emotional tools to understand what they truly want. Psychologists bring a safe, non judgmental space where students can slow down, breathe, and make sense of themselves.</p>

              <h3>They help teens mangage</h3>
              <ul>
                <li>Academic stress and performance pressure</li>
                <li>Identity confusion and self doubt</li>
                <li>Identity confusion and self doubt</li>
                <li>Identity confusion and self doubt</li>
                <li>Identity confusion and self doubt</li>
              </ul>
            </div>
          </div>
          {/* SECTION 2 */}
          {/* <div className={styles.groupBlock}>
            <p className={styles.chapter}>
              02 — BUILDING PROFILES
            </p>

            <h2>
              Credentials, universities & global pathways.
            </h2>

            <p className={styles.groupText}>
              A great profile isn't built by accident. We work with certification
              providers, universities and TNE partners so students can add depth,
              credibility and global breadth to their journey.
            </p>

            <div className={styles.cardsGrid}>
              {buildProfiles.map((item) => (
                <Card key={item.title} item={item} />
              ))}
            </div>
          </div> */}

          {/* CTA */}
          <div className={styles.partnershipCta}>
            <div className={styles.ctaTop}>
              <Users size={18} />

              <h3>A community, not a funnel.</h3>
            </div>

            <p>
              Every partner — school, college, certification body, university or
              TNE provider — is evaluated on one question: does this help the
              student? Incentives never outrank evidence. If it doesn't help a
              student make a better decision, it doesn't ship.
            </p>

            <Link to="/contact">Start a partnership conversation</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
