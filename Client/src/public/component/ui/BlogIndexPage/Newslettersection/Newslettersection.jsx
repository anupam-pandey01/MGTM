import { useState } from 'react';
import styles from './NewsletterSection.module.css';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');

  return (
    <section className={styles.section}>
      <span className={styles.eyebrow}>THE WEEKLY DIGEST</span>
      <h2 className={styles.heading}>
        Expert perspectives delivered<br />
        <em>directly to your inbox.</em>
      </h2>
      <p className={styles.sub}>
        Join 15,000+ industry leaders who receive our curated editorial insights on
        strategy and management every Tuesday.
      </p>
      <div className={styles.row}>
        <input
          type="email"
          className={styles.input}
          placeholder="Your professional email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className={styles.btn}>SUBSCRIBE</button>
      </div>
      <p className={styles.legal}>By subscribing, you agree to our Privacy Policy and Terms of Service.</p>
    </section>
  );
};

export default NewsletterSection;