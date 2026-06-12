import PageHeroSection from "../../component/ui/PageHeroSection/PageHeroSection";
import styles from "./TermsAndConditon.module.css";

export default function TermsAndCondition() {
  return (
    <>
      <section className={styles.hero} >
        <div className="container section">
          <h1 className={styles.heroTitle}>Terms & Conditions</h1>
          <p className={styles.heroDesc}>
            These terms and conditions govern your use of the MGTM website and the
            career coaching services provided. By accessing or using our website,
            you agree to be bound by these terms and conditions.
          </p>
        </div>
      </section>

      <div className={styles.contentWrap}>
        <div className={`${styles.policySection} container`}>
          <p className={styles.sectionNum}>Section 01</p>
          <h2>Use of Services</h2>

          <ul className={styles.policyList}>
            <li>
              You must provide accurate, current, and complete information when
              booking counselling sessions or creating an account.
            </li>
            <li>
              Our career counselling services provide guidance and advice. We do
              not guarantee employment, specific salary outcomes, or admission
              to educational institutions.
            </li>
          </ul>
        </div>

        <div className={`${styles.policySection} container`}>
          <p className={styles.sectionNum}>Section 02</p>
          <h2>User Conduct</h2>

          <ul className={styles.policyList}>
            <li>
              You agree to use the website only for lawful purposes.
            </li>
            <li>
              You must not attempt to disrupt the website's security,
              interfere with other users' access, or extract data unethically.
            </li>
          </ul>
        </div>

        <div className={`${styles.policySection} container`}>
          <p className={styles.sectionNum}>Section 03</p>
          <h2>Intellectual Property</h2>

          <p>
            All content, materials, and resources provided on MGTM,
            including text, graphics, and logos, are the property of MGTM
            and are protected by copyright laws. You may not reproduce
            or distribute our materials without explicit permission.
          </p>
        </div>

        <div className={`${styles.policySection} container`}>
          <p className={styles.sectionNum}>Section 04</p>
          <h2>Limitation of Liability</h2>

          <p>
            MGTM Consultancy LLP shall not be liable for any indirect,
            incidental, or consequential damages resulting from your use
            of our services or any decisions made based on the career
            advice provided.
          </p>
        </div>

        <div className={`${styles.policySection} container`}>
          <p className={styles.sectionNum}>Section 05</p>
          <h2>Changes to Terms & Conditions</h2>

          <p>
            We reserve the right to update these Terms & Conditions at any
            time. Continued use of the website after changes constitutes
            your acceptance of the new terms.
          </p>
        </div>
      </div>
    </>
  );
}