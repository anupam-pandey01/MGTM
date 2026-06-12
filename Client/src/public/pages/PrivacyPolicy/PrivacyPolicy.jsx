import styles from "./PrivacyPolicy.module.css";

export default function PrivacyPolicy() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container section">
          <h1 className={styles.heroTitle}>Privacy Policy</h1>

          <p className={styles.heroDesc}>
            MGTM Consultancy LLP is committed to protecting your personal
            information and your right to privacy. This policy outlines how we
            collect, use, and safeguard your data.
          </p>
        </div>
      </section>

      <div className={`${styles.contentWrap} container`}>
        <main className={styles.sections}>
          <p className={styles.introNote}>
            Welcome to <strong>MGTM Consultancy LLP</strong>. We are committed
            to protecting your personal information and your right to privacy.
            This Privacy Policy outlines how we collect, use, and safeguard your
            data when you visit our website and use our career coaching
            services.
          </p>

          <div className={styles.policySection}>
            <p className={styles.sectionNum}>Section 01</p>
            <h2>Information We Collect</h2>

            <p>
              We collect personal information that you voluntarily provide to us
              when you register on the website or contact us.
            </p>

            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <div className={styles.infoCardLabel}>
                  Personal Identification
                </div>
                <div className={styles.infoCardText}>
                  Name, email address, phone number, and location.
                </div>
              </div>

              <div className={styles.infoCard}>
                <div className={styles.infoCardLabel}>
                  Academic & Career Data
                </div>
                <div className={styles.infoCardText}>
                  Educational background, resumes, career interests, and
                  assessment results.
                </div>
              </div>

              <div className={styles.infoCard}>
                <div className={styles.infoCardLabel}>
                  Payment Information
                </div>
                <div className={styles.infoCardText}>
                  Billing details processed through secure payment gateways.
                </div>
              </div>

              <div className={styles.infoCard}>
                <div className={styles.infoCardLabel}>Usage Data</div>
                <div className={styles.infoCardText}>
                  IP address, browser type, and website activity.
                </div>
              </div>
            </div>
          </div>

          <div className={styles.policySection}>
            <p className={styles.sectionNum}>Section 02</p>
            <h2>How We Use Your Information</h2>

            <ul className={styles.policyList}>
              <li>Provide and maintain our services.</li>
              <li>Manage appointments and communication.</li>
              <li>Improve website functionality.</li>
              <li>Process transactions and invoices.</li>
              <li>Provide customer support.</li>
            </ul>
          </div>

          <div className={styles.policySection}>
            <p className={styles.sectionNum}>Section 03</p>
            <h2>Data Sharing and Security</h2>

            <p>
              We do not sell personal information. Data may be shared only with
              trusted service providers where necessary.
            </p>
          </div>

          <div className={styles.policySection}>
            <p className={styles.sectionNum}>Section 04</p>
            <h2>Your Privacy Rights</h2>

            <p>
              You may request access, correction, or deletion of your personal
              information.
            </p>
          </div>

          <div className={styles.policySection}>
            <p className={styles.sectionNum}>Section 05</p>
            <h2>Cookies and Tracking Technologies</h2>

            <p>
              We may use cookies and similar technologies to improve website
              performance and user experience.
            </p>
          </div>

          <div className={styles.policySection}>
            <p className={styles.sectionNum}>Section 06</p>
            <h2>Changes to This Privacy Policy</h2>

            <p>
              We may update this policy from time to time. Please review it
              periodically.
            </p>
          </div>

          <div className={styles.policySection}>
            <p className={styles.sectionNum}>Section 07</p>
            <h2>Contact Us</h2>

            <div className={styles.contactBlock}>
              <div>
                <div className={styles.contactLabel}>Company</div>
                <div className={styles.contactValue}>
                  MGTM Consultancy LLP
                </div>
              </div>

              <div>
                <div className={styles.contactLabel}>Phone</div>
                <div className={styles.contactValue}>
                  +91 87962-22355
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}