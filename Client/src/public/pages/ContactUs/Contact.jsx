import { useState } from "react";
import PageHeroSection from "../../component/ui/PageHeroSection/PageHeroSection";
import styles from "./Contact.module.css";
import { Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";
import { sendContact } from "../../../services/publicServices/messageApi";
import { handleError, handleSuccess } from "../../../utils/handler";
import { Helmet } from "react-helmet-async";

const INITIAL_FORM = {
  inquiryType: "general",  
  name: "",
  organizationName: "",
  serviceName: "",
  email: "",
  phone: "",
  message: "",
  fax_number: "",        
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[6-9]\d{9}$/;

const Contact = () => {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      const numeric = value.replace(/\D/g, "");
      if (numeric.length <= 10) {
        setFormData((prev) => ({ ...prev, phone: numeric }));
      }
      return;
    }

    if (name === "inquiryType") {
      setFormData((prev) => ({
        ...prev,
        inquiryType: value,
        organizationName: "",
        serviceName: "",
        fax_number: "",
      }));
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (formData.fax_number) return false;

    const newErrors = {};

    if (!formData.inquiryType)
      newErrors.inquiryType = "Please select an inquiry type.";

    if (!formData.name.trim())
      newErrors.name = "Please enter your full name.";

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!EMAIL_REGEX.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your phone number.";
    } else if (!PHONE_REGEX.test(formData.phone)) {
      newErrors.phone = "Please enter a valid 10-digit Indian phone number.";
    }

    if (!formData.message.trim())
      newErrors.message = "Please enter your message.";

    if (formData.inquiryType === "partnership" && !formData.organizationName.trim())
      newErrors.organizationName = "Organization name is required.";

    if (formData.inquiryType === "service" && !formData.serviceName.trim())
      newErrors.serviceName = "Service name is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    try {
      const data = await sendContact(formData);

      if (data.success) {
        handleSuccess(data.message);
      }

      setSuccess(true);
      setFormData(INITIAL_FORM);
      setErrors({});
    } catch (err) {
      handleError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>
          Contact MGTM Consultancy LLP | Career Guidance &amp; Study Abroad Support
        </title>
        <meta
          name="description"
          content="Get in touch with MGTM Consultancy LLP for career guidance, psychometric assessments, stream selection counselling, and study abroad support. We usually respond within one working day."
        />
        <meta
          name="keywords"
          content="contact MGTM Consultancy LLP, career guidance contact, study abroad consultation India, psychometric assessment enquiry, education consultancy contact"
        />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="author" content="MGTM Consultancy LLP" />
        <link rel="canonical" href="https://www.mgtmconsultancy.com/contact" />
        <meta property="og:title" content="Contact MGTM Consultancy LLP" />
        <meta
          property="og:description"
          content="Speak with our team about career guidance, psychometric assessments, and study abroad services."
        />
        <meta property="og:url" content="https://www.mgtmconsultancy.com/contact" />
        <meta property="og:image" content="https://www.mgtmconsultancy.com/og-contact.jpg" />
        <meta property="og:image:alt" content="Contact MGTM Consultancy LLP" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="MGTM Consultancy LLP" />
        <meta property="og:locale" content="en_IN" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact MGTM Consultancy LLP" />
        <meta name="twitter:description" content="Reach out for career guidance and study abroad support." />
        <meta name="twitter:image" content="https://www.mgtmconsultancy.com/og-contact.jpg" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            name: "MGTM Consultancy LLP",
            url: "https://www.mgtmconsultancy.com",
            email: "assessment@mgtmconsultancy.com",
            telephone: "+91-8796222355",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+91-8796222355",
              email: "assessment@mgtmconsultancy.com",
              contactType: "customer support",
              areaServed: "IN",
              availableLanguage: ["English", "Hindi"],
            },
          })}
        </script>
      </Helmet>

      <div className={styles.contactPage}>
        <section className={styles.contactHero}>
          <PageHeroSection
            eyeBrow={"CONTACT US"}
            pageHeroTitle={"Start with a conversation."}
            pageHeroIntro={
              "Tell us a little about the student and what you're hoping to figure out. We'll respond personally — usually within one working day."
            }
          />
        </section>

        <section className={styles.contactMain}>
          <div className="page-container- section container">
            <div className={styles.contactLayout}>
              <div className={styles.contactFormCard}>

                {success && (
                  <div className={styles.contactSuccess}>
                    <CheckCircle2 size={18} />
                    <span>Message sent! We'll get back to you shortly.</span>
                  </div>
                )}

                <form className={styles.contactForm} onSubmit={handleSubmit} noValidate>

                  <div
                    style={{
                      position: "absolute",
                      left: "-9999px",
                      top: "auto",
                      width: "1px",
                      height: "1px",
                      overflow: "hidden",
                    }}
                    aria-hidden="true"
                  >
                    <label htmlFor="fax_number">Leave this field empty</label>
                    <input
                      id="fax_number"
                      type="text"
                      name="fax_number"
                      value={formData.fax_number}
                      onChange={handleChange}
                      autoComplete="off"
                      tabIndex={-1}
                    />
                  </div>

                  <div className={styles.contactField}>
                    <label htmlFor="contact-name">Full name</label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      autoComplete="name"
                    />
                    {errors.name && (
                      <span className={styles.errorText}>{errors.name}</span>
                    )}
                  </div>

                  <div className={styles.contactField}>
                    <label htmlFor="contact-email">Email</label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      autoComplete="email"
                    />
                    {errors.email && (
                      <span className={styles.errorText}>{errors.email}</span>
                    )}
                  </div>

  
                  <div className={styles.contactField}>
                    <label htmlFor="contact-phone">Phone number</label>
                    <div className={styles.phoneWrapper}>
                      <div className={styles.phonePrefix}>🇮🇳 +91</div>
                      <input
                        id="contact-phone"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="00000 00000"
                        autoComplete="tel-national"
                        inputMode="numeric"
                      />
                    </div>
                    {errors.phone && (
                      <span className={styles.errorText}>{errors.phone}</span>
                    )}
                  </div>

                  <div className={styles.contactField}>
                    <label htmlFor="contact-inquiry">Inquiry type</label>
                    <select
                      id="contact-inquiry"
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleChange}
                      className={styles.contactSelect}
                    >
                      <option value="general">General Enquiry</option>
                      <option value="partnership">Partnership Enquiry</option>
                      <option value="service">Service Enquiry</option>
                    </select>
                    {errors.inquiryType && (
                      <span className={styles.errorText}>{errors.inquiryType}</span>
                    )}
                  </div>

                  {formData.inquiryType === "partnership" && (
                    <div className={styles.contactField}>
                      <label htmlFor="contact-org">Organization name</label>
                      <input
                        id="contact-org"
                        type="text"
                        name="organizationName"
                        value={formData.organizationName}
                        onChange={handleChange}
                        placeholder="Enter organization name"
                      />
                      {errors.organizationName && (
                        <span className={styles.errorText}>
                          {errors.organizationName}
                        </span>
                      )}
                    </div>
                  )}

                  {formData.inquiryType === "service" && (
                    <div className={styles.contactField}>
                      <label htmlFor="contact-service">Service name</label>
                      <input
                        id="contact-service"
                        type="text"
                        name="serviceName"
                        value={formData.serviceName}
                        onChange={handleChange}
                        placeholder="Enter service name"
                      />
                      {errors.serviceName && (
                        <span className={styles.errorText}>
                          {errors.serviceName}
                        </span>
                      )}
                    </div>
                  )}

                  <div className={styles.contactField}>
                    <label htmlFor="contact-message">
                      What would you like guidance on?
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Stream selection, career coaching, study abroad..."
                    />
                    {errors.message && (
                      <span className={styles.errorText}>{errors.message}</span>
                    )}
                  </div>

                  <button
                    type="submit"
                    className={styles.contactBtn}
                    disabled={loading}
                  >
                    {loading ? "Sending…" : "Send message"}
                  </button>
                </form>
              </div>

              <div className={styles.contactInfo}>
                <div className={styles.contactInfoCard}>
                  <div className={styles.contactInfoItem}>
                    <div className={styles.contactInfoIcon}>
                      <Mail size={18} />
                    </div>
                    <div>
                      <h4>General enquiry</h4>
                      <p>info@mgtmconsultancy.com</p>
                    </div>
                  </div>
                  <div className={styles.contactInfoItem}>
                    <div className={styles.contactInfoIcon}>
                      <Mail size={18} />
                    </div>
                    <div>
                      <h4>Partnership</h4>
                      <p>partnership@mgtmconsultancy.com</p>
                    </div>
                  </div>
                  <div className={styles.contactInfoItem}>
                    <div className={styles.contactInfoIcon}>
                      <Mail size={18} />
                    </div>
                    <div>
                      <h4>Assessment</h4>
                      <p>assessment@mgtmconsultancy.com</p>
                    </div>
                  </div>
                  <div className={styles.contactInfoItem}>
                    <div className={styles.contactInfoIcon}>
                      <Phone size={18} />
                    </div>
                    <div>
                      <h4>Phone</h4>
                      <p>+91 87962 22355</p>
                    </div>
                  </div>
                  <div className={styles.contactInfoItem}>
                    <div className={styles.contactInfoIcon}>
                      <MapPin size={18} />
                    </div>
                    <div>
                      <h4>Office</h4>
                      <p>MGTM Consultancy LLP</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;