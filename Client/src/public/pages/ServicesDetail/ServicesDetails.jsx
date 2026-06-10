import React, { useEffect, useState } from "react";
import "./ServicesDetail.css";
import PageHeroSection from "../../component/ui/PageHeroSection/PageHeroSection";
import { useOutletContext, useParams } from "react-router";
import { handleError } from "../../../utils/handler";
import { getServicesDetails } from "../../../services/publicServices/servicesApi";
import ProductCard from "../../component/ui/ProductCard/ProductCard";
import CurrencyTicker from "../../component/ui/CurrencyTicker/CurrencyTicker";
import StudyAbroad from "../StudyAbroad/StudyAbroad";
import PurchaseModal from "../../component/ui/PurchaseModal/PurchaseModal";
import { calculateGst } from "../../../utils/calculateGst";
import { Helmet } from "react-helmet-async";

export const ServicesDetail = () => {
  const { openPurchaseModal } = useOutletContext();
  // const [open, setOpen] = useState(false);
  // const [productId, setProductId] = useState("");
  // const [serviceId, setServiceId] = useState("");
  // const [servicePrice, setServicePrice] = useState(0);

  const [serviceData, setServiceData] = useState({});
  const [productData, setProductData] = useState([]);
  const { slug } = useParams();

  useEffect(() => {
    const getServicesDetail = async () => {
      if (slug == "study-abroad" || slug == "liberal-arts") return;
      try {
        const { service, products } = await getServicesDetails(slug);

        setProductData(products);
        setServiceData(service);
      } catch (err) {
        handleError(err);
      }
    };

    getServicesDetail();
  }, [slug]);

  if (slug == "study-abroad") {
    return <StudyAbroad />;
  }

  const pageTitle =
    serviceData?.seo?.metaTitle ||
    `${serviceData?.name || serviceData?.heroSection?.heading} | MGTM Consultancy LLP`;

  const pageDescription =
    serviceData?.seo?.metaDescription ||
    serviceData?.heroSection?.description ||
    "Research-driven career guidance and education services.";

  const canonicalUrl = `https://www.mgtmconsultancy.com/services/${slug}`;

  const ogImage =
    serviceData?.seo?.ogImage ||
    "https://www.mgtmconsultancy.com/og-services-detail.jpg";

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>

        <meta name="description" content={pageDescription} />

        <meta name="robots" content="index, follow, max-image-preview:large" />

        <meta name="author" content="MGTM Consultancy LLP" />

        <link rel="canonical" href={canonicalUrl} />

        <meta property="og:title" content={pageTitle} />

        <meta property="og:description" content={pageDescription} />

        <meta property="og:url" content={canonicalUrl} />

        <meta property="og:image" content={ogImage} />

        <meta property="og:type" content="product" />

        <meta property="og:site_name" content="MGTM Consultancy LLP" />

        <meta property="og:locale" content="en_IN" />

        <meta name="twitter:card" content="summary_large_image" />

        <meta name="twitter:title" content={pageTitle} />

        <meta name="twitter:description" content={pageDescription} />

        <meta name="twitter:image" content={ogImage} />

       
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: serviceData?.name || serviceData?.heroSection?.heading,
            description: pageDescription,
            provider: {
              "@type": "EducationalOrganization",
              name: "MGTM Consultancy LLP",
              url: "https://www.mgtmconsultancy.com",
            },
            areaServed: "India",
            url: canonicalUrl,
            offers:
              productData?.map((product) => ({
                "@type": "Offer",
                name: product.name,
                price: product.price || product.discountedPrice,
                priceCurrency: "INR",
                availability: "https://schema.org/InStock",
              })) || [],
          })}
        </script>
      </Helmet>
      
      <div className="services-detail">
        <PageHeroSection
          eyeBrow={`${serviceData?.heroSection?.eyebrow}`}
          pageHeroTitle={`${serviceData?.heroSection?.heading}`}
          pageHeroIntro={`${serviceData?.heroSection?.description}`}
        />
        <div className="services-product">
          <div className="product-container">
            {productData?.map((product, idx) => (
              <ProductCard
                key={idx}
                product={product}
                idx={idx}
              />
            ))}
          </div>

          <div className="service-upgrade-section">
            <div className="upgrade-intro">
              <h2>Ready to Upgrade Your Journey?</h2>
              <p>
                Students who continue their journey with us receive lower
                upgrade fees. This is our way of appreciating your trust and
                ensuring that growth remains affordable and accessible.
              </p>
            </div>

            {slug !== "study-abroad" && (
              <div className="upgrade-contact">
                <h3>Looking to Upgrade?</h3>
                <p>
                  If you have already enrolled in our service and want to
                  upgrade it to the next service listed, kindly mail us at{" "}
                  <strong>assessment@mgtmconsultancy.com</strong> with your
                  coupon code, name, email address, mobile number (given at the
                  time of registration), and the service you wish to enroll in.
                </p>
                <p>
                  Our team will shortly connect with you to share further
                  information.
                </p>
              </div>
            )}

            <div className="honesty-box">
              <h2>Why Students Upgrade (and Why Some Don't)</h2>

              <div className="honesty-grid">
                <div className="honesty-card">
                  <h3>Why Students Upgrade</h3>
                  <ul>
                    <li>They want deeper clarity</li>
                    <li>They want structured execution</li>
                    <li>They want personalized guidance</li>
                    <li>They want long-term planning</li>
                  </ul>
                </div>

                <div className="honesty-card">
                  <h3>Why Some Don't</h3>
                  <ul>
                    <li>They got what they needed</li>
                    <li>They prefer self-paced growth</li>
                    <li>They want to explore independently</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
