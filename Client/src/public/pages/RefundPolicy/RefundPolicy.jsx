import styles from "./RefundPolicy.module.css";

export default function RefundPolicy() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container section">
          <h1 className={styles.heroTitle}>
            Refund & Cancellation Policy
          </h1>

          <p className={styles.heroDesc}>
            At MGTM Consultancy LLP, we strive to provide the highest quality
            career coaching services. We understand that plans can change,
            and we have established the following policy for cancellations
            and refunds.
          </p>
        </div>
      </section>

      <div className={`${styles.contentWrap} container`}>
        <div className={styles.policySection}>
          <p className={styles.sectionNum}>Section 01</p>
          <h2>Rescheduling Policy</h2>

          <p>
            All counselling sessions may be rescheduled, including missed
            sessions, subject to availability; however, refunds cannot be
            issued under any circumstances.
          </p>
        </div>

        <div className={styles.policySection}>
          <p className={styles.sectionNum}>Section 02</p>
          <h2>Session Changes Initiated by MGTM Consultancy LLP</h2>

          <p>
            If MGTM Consultancy LLP is required to cancel or reschedule a
            session due to unforeseen circumstances, the student will have
            the option to reschedule the session at a convenient time.
          </p>
        </div>

        <div className={styles.policySection}>
          <p className={styles.sectionNum}>Section 03</p>
          <h2>Refund Policy</h2>

          <p>
            Refunds may be processed only where the student cancels the
            purchased service within 24 hours of purchase, subject to the
            condition that the psychometric assessment has not been
            attempted and the student has not registered on or logged into
            the assessment portal.
          </p>
        </div>

        <div className={styles.policySection}>
          <p className={styles.sectionNum}>Section 04</p>
          <h2>Digital Products and Psychometric Assessments</h2>

          <p>
            Downloaded digital resources and psychometric assessments that
            have been attempted, accessed, registered for, or logged into
            are strictly non-refundable.
          </p>
        </div>

        <div className={styles.policySection}>
          <p className={styles.sectionNum}>Section 05</p>
          <h2>Refund Processing</h2>

          <ul className={styles.policyList}>
            <li>
              Approved refunds will be processed back to the original
              method of payment.
            </li>

            <li>
              Please allow 5 to 7 business days for the refunded amount
              to reflect in your bank account.
            </li>
          </ul>
        </div>

        <div className={styles.note}>
          * We reserve the right to modify or update this policy at any
          time without prior notice.
        </div>
      </div>
    </>
  );
}