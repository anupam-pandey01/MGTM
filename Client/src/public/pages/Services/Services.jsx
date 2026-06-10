import styles from "./Services.module.css";
import { Microscope } from "lucide-react";
import ServicesCard from "../../component/ui/ServicesCard";
import Note from "../../component/ui/Note";
import { useEffect, useState } from "react";
import { getAllServices } from "../../../services/publicServices/servicesApi";
import { handleError } from "../../../utils/handler";
import { Helmet } from "react-helmet-async";

const Services = () => {
  const [servicesData, setServicesData] = useState([]);

  useEffect(() => {
    async function services() {
      try {
        const data = await getAllServices();
        console.log(data.services)

        setServicesData(data.services);
      } catch (err) {
        handleError(err);
      }
    }

    services();
  }, []);

  return (
    <>
      <Helmet>
        <title>
          Services | Career Guidance, Study Abroad & Psychometric Assessments |
          MGTM Consultancy LLP
        </title>

        <meta
          name="description"
          content="Explore MGTM Consultancy LLP's services including psychometric assessments, stream selection counselling, career coaching, profile building, and end-to-end study abroad guidance."
        />

        <meta
          name="keywords"
          content="career guidance services, study abroad consultancy India, psychometric assessment for students, stream selection counselling, career coaching India, overseas education services, profile building"
        />

        <meta name="robots" content="index, follow, max-image-preview:large" />

        <meta name="author" content="MGTM Consultancy LLP" />

        <link rel="canonical" href="https://www.mgtmconsultancy.com/services" />


        <meta property="og:title" content="Services | MGTM Consultancy LLP" />

        <meta
          property="og:description"
          content="Research-driven career guidance, psychometric assessments, and study abroad services designed to help students make informed decisions."
        />

        <meta
          property="og:url"
          content="https://www.mgtmconsultancy.com/services"
        />

        <meta
          property="og:image"
          content="https://www.mgtmconsultancy.com/og-services.jpg"
        />

        <meta property="og:image:alt" content="MGTM Consultancy LLP Services" />

        <meta property="og:type" content="website" />

        <meta property="og:site_name" content="MGTM Consultancy LLP" />

        <meta property="og:locale" content="en_IN" />

        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:title"
          content="Career Guidance & Study Abroad Services | MGTM Consultancy LLP"
        />

        <meta
          name="twitter:description"
          content="Discover MGTM's services including stream selection, psychometric assessments, career coaching, and study abroad guidance."
        />

        <meta
          name="twitter:image"
          content="https://www.mgtmconsultancy.com/og-services.jpg"
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Career Guidance and Study Abroad Consultancy",
            provider: {
              "@type": "EducationalOrganization",
              name: "MGTM Consultancy LLP",
              url: "https://www.mgtmconsultancy.com",
            },
            areaServed: "India",
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "MGTM Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Psychometric Assessments",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Stream Selection Counselling",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Career Coaching",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Study Abroad Guidance",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Profile Building",
                  },
                },
              ],
            },
          })}
        </script>
      </Helmet>
      <section className={`${styles.services}`}>
        <div>
          <div className={`${styles.servicesTop} section container`}>
            <p className={styles.servicesLabel}>Services Offered</p>

            <h1 className={styles.servicesTitle}>
              Various Services. One honest starting point – Psychometric
              Assessment
            </h1>

            <p className={styles.servicesIntro}>
              Every engagement begins with a psychometric assessment. The result
              is not a label — it is the foundation for the work we do together.
            </p>
          </div>

          {/* GRID */}
          <div className={`${styles.servicesContainer} `}>
            <ServicesCard servicesData={servicesData} />

            <div className={styles.servicesNoteContainer}>
              <Note
                icon={<Microscope className={styles.servicesNoteIcon} />}
                boldText={"Psychometric assessment is included"}
                paraText={
                  "with every service. It's how research-driven advice actually begins."
                }
                className={`${styles.servicesNote} section container`}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
