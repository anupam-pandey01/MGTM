import { Helmet } from "react-helmet-async";
import ProgramCard from "../../component/ui/ImpactPage/ProgramCard/ProgramCard";
import SectionHeader from "../../component/ui/ImpactPage/SectionHeader/SectionHeader";
import UpgradeChart from "../../component/ui/ImpactPage/UpgradeChart/UpgradeChart";
import PageHeroSection from "../../component/ui/PageHeroSection/PageHeroSection";
import styles from "./ImpactPage.module.css";

const programs = [
  {
    tier: "foundation",
    badge: "Foundation",
    icon: "ignite",
    name: "Ignite",
    tagline: "Early-stage orientation",
    enrollment: 0,
  },
  {
    tier: "core",
    badge: "Core",
    icon: "propel",
    name: "Propel",
    tagline: "Career acceleration",
    enrollment: 0,
  },
  {
    tier: "strategic",
    badge: "Strategic",
    icon: "accelerate",
    name: "Accelerate",
    tagline: "Global leadership",
    enrollment: 0,
  },
  {
    tier: "elite",
    badge: "Elite",
    icon: "captains",
    name: "Captains Club",
    tagline: "Executive network",
    enrollment: 0,
  },
];

const StudyAbroad = [
  {
    // tier: "foundation",
    // badge: "Foundation",
    // icon: "ignite",
    enrollmentTag: "Total Enrollment",
    name: "Students Enrolled",
    tagline: "Real students who trusted us — no inflated numbers",
    enrollment: 0,
  },
  {
    // tier: "core",
    // badge: "Core",
    // icon: "propel",
    enrollmentTag: "Total Submission",
    name: "Applications Submitted",
    tagline:
      "Applications submitted by our team — Total no of application across countries or courses.",
    enrollment: 0,
  },
  {
    // tier: "strategic",
    // badge: "Strategic",
    // icon: "accelerate",
    enrollmentTag: "Total Visa Submission",
    name: "Visa Files Submitted",
    tagline: "Visa files submitted with complete documentation",
    enrollment: 0,
  },
  {
    // tier: "elite",
    // badge: "Elite",
    // icon: "captains",
    enrollmentTag: "Total Approval",
    name: "Visa Approvals",
    tagline: "Approved visas — updated only after official confirmation",
    enrollment: 0,
  },
  {
    // tier: "elite",
    // badge: "Elite",
    // icon: "captains",
    enrollmentTag: "Total Rejection",
    name: "Visa Rejections",
    tagline: "We show rejections too (if any) — because honesty matters",
    enrollment: 0,
  },
  {
    // tier: "elite",
    // badge: "Elite",
    // icon: "captains",
    name: "Success Rate",
    enrollmentTag: "Rate",
    tagline: "Auto Calculated",
    enrollment: 0,
  },
];

const steps = [
  { label: "IGNITE TO PROPEL", sub: "Retention: High", pct: 0 },
  { label: "PROPEL TO ACCELERATE", sub: "Target Met", pct: 0 },
  { label: "ACCELERATE TO CAPTAINS", sub: "Exclusive Growth", pct: 0 },
];

const stepsFoundation = [
  { label: "IGNITE TO PROPEL", sub: "Retention: High", pct: 0 },
  { label: "PROPEL TO ACCELERATE", sub: "Target Met", pct: 0 },
  //   { label: 'ACCELERATE TO CAPTAINS', sub: 'Exclusive Growth', pct: 12 },
];

const programsFoundation = [
  {
    tier: "foundation",
    badge: "Foundation",
    icon: "ignite",
    name: "Ignite",
    tagline: "Early-stage orientation",
    enrollment: 0,
  },
  {
    tier: "core",
    badge: "Core",
    icon: "propel",
    name: "Propel",
    tagline: "Career acceleration",
    enrollment: 0,
  },
  {
    tier: "strategic",
    badge: "Strategic",
    icon: "accelerate",
    name: "Accelerate",
    tagline: "Global leadership",
    enrollment: 0,
  },
];

export default function ImpactPage() {
  return (
    <>
      <Helmet>
        <title>Real Metrics & Impact | MGTM Consultancy LLP</title>

        <meta
          name="description"
          content="Explore MGTM Consultancy LLP's real numbers, student impact, study abroad outcomes, visa approvals, and career guidance metrics. No inflated claims. No manipulated statistics."
        />

        <meta
          name="keywords"
          content="MGTM real metrics, study abroad success rate, visa approval statistics, career counselling outcomes, transparent education consultancy, student impact report"
        />

        <meta name="robots" content="index, follow, max-image-preview:large" />

        <meta name="author" content="MGTM Consultancy LLP" />

        <link
          rel="canonical"
          href="https://www.mgtmconsultancy.com/real-metrics"
        />

        <meta
          property="og:title"
          content="Real Metrics & Student Impact | MGTM Consultancy LLP"
        />

        <meta
          property="og:description"
          content="Our numbers start at zero and grow only through real work. Discover authentic student outcomes, study abroad metrics, and transparent reporting."
        />

        <meta
          property="og:url"
          content="https://www.mgtmconsultancy.com/real-metrics"
        />

        <meta
          property="og:image"
          content="https://www.mgtmconsultancy.com/og-impact.jpg"
        />

        <meta
          property="og:image:alt"
          content="MGTM Consultancy LLP Real Metrics and Student Impact"
        />

        <meta property="og:type" content="website" />

        <meta property="og:site_name" content="MGTM Consultancy LLP" />

        <meta property="og:locale" content="en_IN" />

        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:title"
          content="Real Metrics & Impact | MGTM Consultancy LLP"
        />

        <meta
          name="twitter:description"
          content="Transparent reporting of student outcomes, visa approvals, and education impact."
        />

        <meta
          name="twitter:image"
          content="https://www.mgtmconsultancy.com/og-impact.jpg"
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Report",
            name: "MGTM Consultancy LLP Real Metrics",
            description:
              "Publicly available student impact and outcome metrics published by MGTM Consultancy LLP.",
            publisher: {
              "@type": "EducationalOrganization",
              name: "MGTM Consultancy LLP",
              url: "https://www.mgtmconsultancy.com",
            },
            url: "https://www.mgtmconsultancy.com/real-metrics",
            inLanguage: "en-IN",
          })}
        </script>
      </Helmet>
      <main className={styles.page}>
        <div className={styles.container}>
          <div className={styles.heroContainer}>
            <PageHeroSection
              eyeBrow={"Transparency"}
              pageHeroTitle={
                "Our Real Numbers — Updated Live. No Inflation. No Manipulation"
              }
              pageHeroIntro={
                "We believe students deserve honesty. These numbers start from zero and grow only when real work is done. No fake claims. No marketing tricks."
              }
            />
          </div>

          <section className={`${styles.section} container`}>
            <span className={styles.serviceNum}>SERVICE - 1</span>
            <SectionHeader
              title="Stream Selection (for Class 8 & 9)"
              description="Early, low-pressure self-discovery. A 4-dimensional stream assessment, career content and optional 1:1 counselling — built to help students explore before they commit."
            />
            <div className={styles.cardGrid}>
              {programsFoundation.map((p) => (
                <ProgramCard key={p.tier} {...p} />
              ))}
            </div>
          </section>

          <section className={`${styles.section} container`}>
            <SectionHeader title="Upgrade Performance" />
            <UpgradeChart steps={stepsFoundation} />
          </section>

          <section className={`${styles.section} container`}>
            <span className={styles.serviceNum}>SERVICE - 1</span>
            <SectionHeader
              title="Career Coaching (for Class 10, 11 & 12)"
              description="Decision-stage coaching. A 5-dimensional career assessment, a detailed 34-page report, certified counsellors and a dedicated mentor track for sustained support."
            />
            <div className={styles.cardGrid}>
              {programs.map((p) => (
                <ProgramCard key={p.tier} {...p} />
              ))}
            </div>
          </section>

          <section className={`${styles.section} container`}>
            <SectionHeader title="Upgrade Performance" />
            <UpgradeChart steps={steps} />
          </section>

          <section className={`${styles.section} container`}>
            <span className={styles.serviceNum}>SERVICE - 3</span>
            <SectionHeader
              title="Study Abroad"
              description="University research and shortlisting, application strategy, SOPs and essays, scholarship guidance, visa preparation and pre-departure support — handled in one place."
            />
            <div className={styles.cardGrid}>
              {StudyAbroad.map((s) => (
                <ProgramCard key={s.name} {...s} />
              ))}
            </div>
          </section>

          <section className={`${styles.section} container`}>
            <SectionHeader title="Why We Show Our Numbers Publicly" />
            <ul className={styles.pointData}>
              <li>Because students deserve transparency</li>
              <li>Because inflated numbers mislead families</li>
              <li>Because every student matters</li>
              <li>Because we measure impact, not sales</li>
              <li>Because honesty builds trust</li>
            </ul>
          </section>
        </div>
      </main>
    </>
  );
}
