import React, { useEffect, useState } from "react";
import "./ServicesDetail.css";
import PageHeroSection from "../../component/ui/PageHeroSection/PageHeroSection";
import { useParams } from "react-router";
import { handleError } from "../../../utils/handler";
import { getServicesDetails } from "../../../services/publicServices/servicesApi";
import ProductCard from "../../component/ui/ProductCard/ProductCard";
import CurrencyTicker from "../../component/ui/CurrencyTicker/CurrencyTicker";
import StudyAbroad from "../StudyAbroad/StudyAbroad";
import PurchaseModal from "../../component/ui/PurchaseModal/PurchaseModal";

export const ServicesDetail = () => {
  const [open, setOpen] = useState(false);
  const [productId, setProductId] = useState("");
  const [serviceId, setServiceId] = useState("");
  const [servicePrice, setServicePrice] = useState(0);

  const [serviceData, setServiceData] = useState({});
  const [productData, setProductData] = useState([]);
  const { slug } = useParams();

  useEffect(() => {
    const getServicesDetail = async () => {
      if (slug == "study-abroad") return;
      try {
        const { service, products } = await getServicesDetails(slug);

        setProductData(products);
        setServiceData(service);
        setHeroData(service.heroSection);
      } catch (err) {
        handleError(err);
      }
    };

    getServicesDetail();
  }, [slug]);

  if (slug == "study-abroad") {
    return <StudyAbroad />;
  }

  return (
    <div className="services-detail">
      <PurchaseModal
        open={open}
        setOpen={setOpen}
        serviceId={serviceId}
        productId={productId}
        servicePrice={servicePrice}
      />

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
              serviceData={serviceData}
              eyeBrow={serviceData?.heroSection?.eyebrow}
              idx={idx}
              setOpen={setOpen}
              setProductId={setProductId}
              setServicePrice={setServicePrice}
              setServiceId={setServiceId}
            />
          ))}
        </div>

        <div className="service-upgrade-section">
          <div className="upgrade-intro">
            <h2>Ready to Upgrade Your Journey?</h2>
            <p>
              Students who continue their journey with us receive lower upgrade
              fees. This is our way of appreciating your trust and ensuring that
              growth remains affordable and accessible.
            </p>
          </div>

          {slug !== "study-abroad" && (
            <div className="upgrade-contact">
              <h3>Looking to Upgrade?</h3>
              <p>
                If you have already enrolled in our service and want to upgrade
                it to the next service listed, kindly mail us at{" "}
                <strong>info@mgtmconsultancy.com</strong> with your coupon code,
                name, email address, mobile number (given at the time of
                registration), and the service you wish to enroll in.
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
  );
};
