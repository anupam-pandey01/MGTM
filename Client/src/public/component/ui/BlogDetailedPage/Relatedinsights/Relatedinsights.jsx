import RelatedCard from '../Relatedcard/Releatedcard';
import styles from './Relatedinsights.module.css';

const RelatedInsights = ({ posts = [] }) => {
  if (!posts.length) return null;

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <div>
            <h2 className={styles.heading}>Related Insights</h2>
            <p className={styles.sub}>Further reading for the strategic mind.</p>
          </div>
          <a href="/insights" className={styles.viewAll}>
            VIEW ALL Article
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </a>
        </div>

        <div className={styles.grid}>
          {posts.slice(0, 3).map((post) => (
            <RelatedCard key={post._id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedInsights;