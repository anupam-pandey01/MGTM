import styles from "./Faq.module.css";
import { useState } from "react";
import { Plus } from "lucide-react";

import PageHeroSection from "../../component/ui/PageHeroSection/PageHeroSection";
import { Helmet } from "react-helmet-async";

const faqData = [
  {
    question: "What does ‘research driven, not sales driven’ actually mean?",

    answer:
      "We do not earn referral commissions from universities or course providers. Every recommendation is backed by your psychometric profile, your academic record and current market evidence — never by a partnership target.",
  },

  {
    question:
      "Is the psychometric assessment really included in every service?",

    answer:
      "Yes. Whether you come to us for stream selection, career coaching or study abroad guidance, the assessment is the starting point. It's how we make advice specific to you.",
  },

  {
    question: "Why do your public numbers show zero?",

    answer:
      "Because we'd rather show real numbers than impressive ones. Our counters update only when a student journey is verifiably complete. As real engagements close, the numbers will move.",
  },

  {
    question: "Who is the right student for MGTM?",

    answer:
      "Students from Class 9 through early-career professionals who want a structured, evidence-based conversation about their next step — and families who value transparency over speed.",
  },

  {
    question: "How do we get started?",

    answer:
      "Reach out via the Contact page. We'll set up an introductory conversation, walk you through the psychometric assessment, and only then propose a way to work together.",
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <Helmet>
        <title>Frequently Asked Questions | MGTM Consultancy LLP</title>

        <meta
          name="description"
          content="Find answers to common questions about MGTM Consultancy LLP, including psychometric assessments, career guidance, study abroad services, transparency, and how to get started."
        />

        <meta
          name="keywords"
          content="MGTM FAQs, psychometric assessment questions, career guidance FAQs, study abroad FAQs, education consultancy FAQs"
        />

        <meta name="robots" content="index, follow, max-image-preview:large" />

        <meta name="author" content="MGTM Consultancy LLP" />

        <link rel="canonical" href="https://www.mgtmconsultancy.com/faq" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Frequently Asked Questions | MGTM Consultancy LLP"
        />

        <meta
          property="og:description"
          content="Answers to common questions about our career guidance, psychometric assessments, and study abroad services."
        />

        <meta property="og:url" content="https://www.mgtmconsultancy.com/faq" />

        <meta
          property="og:image"
          content="https://www.mgtmconsultancy.com/og-faq.jpg"
        />

        <meta
          property="og:image:alt"
          content="MGTM Consultancy LLP Frequently Asked Questions"
        />

        <meta property="og:type" content="website" />

        <meta property="og:site_name" content="MGTM Consultancy LLP" />

        <meta property="og:locale" content="en_IN" />

        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:title"
          content="Frequently Asked Questions | MGTM Consultancy LLP"
        />

        <meta
          name="twitter:description"
          content="Learn more about our services, transparency, and how MGTM supports students."
        />

        <meta
          name="twitter:image"
          content="https://www.mgtmconsultancy.com/og-faq.jpg"
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqData.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          })}
        </script>
      </Helmet>

      <div className={styles.faqPage}>
        <section className={styles.faqHero}>
          <PageHeroSection
            eyeBrow={"Frequently Asked Questions"}
            pageHeroTitle={"Questions, answered honestly."}
            pageHeroIntro={
              "If something isn't covered here, the Contact page is the best place to ask."
            }
          />
        </section>

        {/* FAQ */}
        <div className={styles.contain}>
          <section className={`${styles.faqSection} container section`}>
            <div className={styles.faqWrapper}>
              {faqData.map((item, index) => (
                <div
                  key={index}
                  className={`${styles.faqItem} ${
                    activeIndex === index ? styles.active : ""
                  }`}
                >
                  <button
                    className={styles.faqQuestion}
                    onClick={() => toggleFaq(index)}
                  >
                    <h3>{item.question}</h3>

                    <span className={styles.faqIcon}>
                      <Plus size={24} />
                    </span>
                  </button>

                  <div className={styles.faqAnswer}>
                    <div className={styles.faqAnswerContent}>
                      <p>{item.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Faq;
