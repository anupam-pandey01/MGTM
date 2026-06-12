import styles from './ArticleTags.module.css';

const ArticleTags = ({ tags = [] }) => {
  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({ title: document.title, url: window.location.href });
    }
  };
 
  return (
    <div className={styles.bar}>
      <div className={styles.tags}>
        {tags.map((tag) => (
          <span key={tag} className={styles.tag}>{tag}</span>
        ))}
      </div>

      <div className={styles.share}>
        <span className={styles.shareLabel}>SHARE THIS PIECE</span>
        <button className={styles.iconBtn} onClick={handleShare} title="Share">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
          </svg>
        </button>
        <button className={styles.iconBtn} onClick={handleCopyLink} title="Copy link">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ArticleTags;