import styles from './UpgradeChart.module.css';



export default function UpgradeChart({steps}) {
  return (
    <div className={styles.wrapper}>
      <div className={`${styles.track}`}>
        {steps.map((step, i) => (
          <div key={i} className={styles.step}>
            <div className={styles.bubble}>
              <span className={styles.pct}>{step.pct}%</span>
            </div>
            {i < steps.length - 1 && (
              <div className={styles.connector}>
                <div className={styles.line} />
                <svg className={styles.arrow} width="8" height="12" viewBox="0 0 8 12">
                  <path d="M1 1l6 5-6 5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className={styles.labels}>
        {steps.map((step, i) => (
          <div key={i} className={styles.labelGroup}>
            <span className={styles.labelTitle}>{step.label}</span>
            {/* <span className={styles.labelSub}>{step.sub}</span> */}
          </div>
        ))}
      </div>
    </div>
  );
}