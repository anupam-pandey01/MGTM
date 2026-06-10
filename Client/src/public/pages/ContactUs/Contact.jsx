import { useState } from "react";
import PageHeroSection from "../../component/ui/PageHeroSection/PageHeroSection";
import styles from "./Contact.module.css";
import { Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";
import { sendContact } from "../../../services/publicServices/messageApi";
import { handleError, handleSuccess } from "../../../utils/handler";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "individual",
    organizationName: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  // HANDLE INPUT

  const handleChange = (e) => {
    const { name, value } = e.target;

    // PHONE VALIDATION

    if (name === "phone") {
      const numericValue = value.replace(/\D/g, "");

      if (numericValue.length <= 10) {
        setFormData({
          ...formData,
          [name]: numericValue,
        });
      }

      return;
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // VALIDATION

  const validateForm = () => {
    let newErrors = {};

    // NAME

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    }

    // EMAIL

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email address";
    }

    // PHONE

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (formData.phone.length !== 10) {
      newErrors.phone = "Phone number must be 10 digits";
    }

    // MESSAGE

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    if (
      formData.inquiryType === "organization" &&
      !formData.organizationName.trim()
    ) {
      newErrors.organizationName = "Organization name is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      const data = await sendContact(formData);
      if (data.success) {
        handleSuccess(data.message);
      }

      setSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (err) {
      handleError(err.message);
    }
  };

  return (
    <>
      <Helmet>
        <title>
          Contact MGTM Consultancy LLP | Career Guidance & Study Abroad Support
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

        <meta
          property="og:url"
          content="https://www.mgtmconsultancy.com/contact"
        />

        <meta
          property="og:image"
          content="https://www.mgtmconsultancy.com/og-contact.jpg"
        />

        <meta property="og:image:alt" content="Contact MGTM Consultancy LLP" />

        <meta property="og:type" content="website" />

        <meta property="og:site_name" content="MGTM Consultancy LLP" />

        <meta property="og:locale" content="en_IN" />


        <meta name="twitter:card" content="summary_large_image" />

        <meta name="twitter:title" content="Contact MGTM Consultancy LLP" />

        <meta
          name="twitter:description"
          content="Reach out for career guidance and study abroad support."
        />

        <meta
          name="twitter:image"
          content="https://www.mgtmconsultancy.com/og-contact.jpg"
        />

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
        {/* HERO */}

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

                <form className={styles.contactForm} onSubmit={handleSubmit}>
                  <div className={styles.contactField}>
                    <label>Full name</label>

                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                    />

                    {errors.name && (
                      <span className={styles.errorText}>{errors.name}</span>
                    )}
                  </div>

                  {/* EMAIL */}

                  <div className={styles.contactField}>
                    <label>Email</label>

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                    />

                    {errors.email && (
                      <span className={styles.errorText}>{errors.email}</span>
                    )}
                  </div>

                  <div className={styles.contactField}>
                    <label>Phone number</label>

                    <div className={styles.phoneWrapper}>
                      <div className={styles.phonePrefix}>🇮🇳 +91</div>

                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="00000 00000"
                      />
                    </div>

                    {errors.phone && (
                      <span className={styles.errorText}>{errors.phone}</span>
                    )}
                  </div>

                  <div className={styles.contactField}>
                    <label>Inquiry Type</label>

                    <select
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleChange}
                      className={styles.contactSelect}
                    >
                      <option value="individual">Individual</option>

                      <option value="organization">Organization</option>
                    </select>

                    {formData.inquiryType === "organization" && (
                      <div className={styles.contactField}>
                        <label>Organization Name</label>

                        <input
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
                  </div>

                  {/* MESSAGE */}

                  <div className={styles.contactField}>
                    <label>What would you like guidance on?</label>

                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Stream selection, career coaching, study abroad..."
                    />

                    {errors.message && (
                      <span className={styles.errorText}>{errors.message}</span>
                    )}
                  </div>

                  <button type="submit" className={styles.contactBtn}>
                    Send message
                  </button>
                </form>
              </div>

              {/* INFO */}

              <div className={styles.contactInfo}>
                <div className={styles.contactInfoCard}>
                  <div className={styles.contactInfoItem}>
                    <div className={styles.contactInfoIcon}>
                      <Mail size={18} />
                    </div>

                    <div>
                      <h4>Email</h4>

                      <p>assessment@mgtmconsultancy.com</p>
                    </div>
                  </div>

                  <div className={styles.contactInfoItem}>
                    <div className={styles.contactInfoIcon}>
                      <Phone size={18} />
                    </div>

                    <div>
                      <h4>Phone</h4>

                      <p>By appointment</p>
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
