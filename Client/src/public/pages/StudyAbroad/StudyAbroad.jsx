import styles from "./StudyAbroad.module.css";
import { Link, useOutletContext } from "react-router";
import PageHeroSection from "../../component/ui/PageHeroSection/PageHeroSection";
import CurrencyTicker from "../../component/ui/CurrencyTicker/CurrencyTicker";
import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import { getServicesDetails } from "../../../services/publicServices/servicesApi";

const tracks = [
  {
    icon: "🧭",
    title: "Country Selection",
    desc: "Objective analysis of global destinations based on stay-back options, job markets, and safety.",
  },
  {
    icon: "🎓",
    title: "Course Selection",
    desc: "Mapping your academic strengths and career aspirations to future-ready degrees.",
  },
  {
    icon: "📋",
    title: "Application Processing",
    desc: "Error-free documentation and timeline management for university submissions.",
  },
  {
    icon: "✏️",
    title: "SOPs, LORs & Essay Guidance",
    desc: "Helping you articulate your unique story authentically, without templates or AI-generated fluff.",
  },
  {
    icon: "💳",
    title: "Education Loans",
    desc: "Connecting you with trusted financial partners to secure competitive, hassle-free funding.",
  },
  {
    icon: "✈️",
    title: "Visa Assistance",
    desc: "Thorough preparation, documentation checks, and mock interviews for high success rates.",
  },
  {
    icon: "🏠",
    title: "Accommodation",
    desc: "On-campus, off-campus and homestay options — verified, budgeted and aligned to your lifestyle.",
  },
];

const explores = [
  "We help students explore",
  "Who they are",
  "What they want",
  "What they're good at",
  "What aligns with their long-term goals",
];

const values = [
  {
    icon: "♡",
    title: "We don’t chase numbers.",
    subtitle: "we chase alignment.",
  },
  {
    icon: "🛡",
    title: "We don’t push students into trends.",
    subtitle: "we help them build future-ready careers.",
  },
  {
    icon: "✦",
    title: "We chase alignment.",
    subtitle:
      "We don’t treat students as leads. we treat them as lives in transition.",
  },
];

function StudyAbroad() {
  const { openPurchaseModal } = useOutletContext();
  const [serviceId, setServiceId] = useState("");
  const [product, setProduct] = useState("");

  useEffect(() => {
    async function studyAbroad() {
      try {
        const { service, products } = await getServicesDetails("study-abroad");

        setProduct(products[0]);
        setServiceId(service._id);
      } catch (err) {
        console.log(err?.response?.data?.message);
      }
    }
    studyAbroad();
  }, []);

  const handleBuyNow = () => {
    openPurchaseModal({
      productId: product._id,
      serviceId: serviceId,
      price: product?.pricing?.price
    });
  };

  return (
    <>
      <Helmet>
        <title>Study Abroad Consultancy Services | MGTM Consultancy LLP</title>

        <meta
          name="description"
          content="End-to-end study abroad guidance including university shortlisting, applications, SOPs, scholarships, visas, and pre-departure support."
        />

        <link
          rel="canonical"
          href="https://www.mgtmconsultancy.com/services/study-abroad"
        />

        <meta name="robots" content="index, follow" />
      </Helmet>

      <div className={styles.app}>
        <section className={styles.hero}>
          <PageHeroSection
            eyeBrow={"Study Abroad with MGTM"}
            pageHeroTitle={"Guiding Growth, Not Selling Dreams."}
            pageHeroIntro={
              "Studying abroad is one of the biggest decisions a student will ever make — academically, financially, emotionally, and professionally."
            }
          />
        </section>

        <div className={styles.divider}></div>
        <section className={styles.about}>
          <div className={`${styles.studyAbroadContainer} container`}>
            <p>
              Yet, in today’s market, this critical life choice is too often
              driven by sales pressure, passing trends, or incomplete
              information. At MGTM Consultancy, we do things differently. We
              help students choose the right country, the right course, and the
              right university through a multidimensional, research-driven, and
              student-centric approach. We prioritize clarity over hype and
              purpose over pressure.
            </p>
            <p className={styles.philosophy}>
              <strong>Our Philosophy:</strong> &nbsp; We believe in guiding
              growth, not pushing a product. This philosophy shapes every single
              step of your study-abroad journey.
            </p>
          </div>
        </section>

        <section className={styles.explore}>
          <div className={`${styles.studyAbroadContainer} container`}>
            <span className={styles.sectionLabel}>Beyond the trend</span>
            <h2>A Purpose-Driven Approach</h2>

            <div className={styles.exploreGrid}>
              {explores.map((item) => (
                <div key={item} className={styles.exploreTag}>
                  {item}
                </div>
              ))}
            </div>

            <div className={styles.valuesGrid}>
              {values.map((value) => (
                <div key={value.title} className={styles.valueCard}>
                  <div className={styles.icon}>{value.icon}</div>

                  <h3>{value.title}</h3>

                  <p>{value.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.tracks}>
          <div className={`${styles.studyAbroadContainer} container`}>
            <span className={styles.sectionLabel}>
              End-to-End Study Abroad Guidance
            </span>

            <h2>Seven tracks. One coordinated journey.</h2>

            <div className={styles.tracksGrid}>
              {tracks.map((track) => (
                <div key={track.title} className={styles.trackCard}>
                  <div className={styles.icon}>{track.icon}</div>

                  <h3>{track.title}</h3>

                  <p>{track.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.cta}>
    
        </section>

        {/* CTA */}
        <section className={`${styles.cta} container`}>
          <div className={styles.ctaBox1}>
            <h3>
             Planning your global education means tracking global economies. See how far your investments go
            </h3>
            <CurrencyTicker />
          </div>

          <div className={`${styles.ctaBox2}`}>
            <h2>Start with a conversation, not a brochure.</h2>

            <p>
              Every engagement begins with a psychometric assessment so your
              country, course and university shortlist is built on evidence.
            </p>

            <p className={styles.price}><strong>Sevice Fee:</strong> ₹ 6000 +<i>GST</i></p>

            <div className={styles.button}>
              <Link to={`/contact`}>
                <button className={styles.ctaBtn}>Book Free Session</button>
              </Link>
              <button className={styles.ctaBuynow} onClick={handleBuyNow}>
                Buy Now
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default StudyAbroad;
