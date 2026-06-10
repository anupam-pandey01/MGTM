import styles from './BlogCard.module.css';

const CATEGORY_COLORS = {
  strategy: '#1a1a2e',
  management: '#16213e',
  'editorial insights': '#0f3460',
  education: '#533483',
};

const BlogCard = ({ post }) => {
  const { title, shortDescription, publishedAt, category, featuredImage, slug } = post;


  const badgeColor = CATEGORY_COLORS[category?.toLowerCase()] || '#1a1a2e';

  const formattedDate = publishedAt
    ? new Date(publishedAt).toLocaleDateString('en-US', { month: 'long', day: '2-digit', year: 'numeric' }).toUpperCase()
    : '';

  return (
    <article className={styles.card}>
      <a href={`/blog/${slug}`}>
        <div className={styles.imgWrap}>
          {featuredImage
            ? <img src={featuredImage.url} alt={title} />
            : <div className={styles.imgPlaceholder} />
          }
          <span className={styles.badge} style={{ background: badgeColor }}>
            {category?.toUpperCase()}
          </span>
        </div>
        <div className={styles.body}>
          {formattedDate && <time className={styles.date}>{formattedDate}</time>}
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.excerpt}>{shortDescription}</p>
        </div>
      </a>
    </article>
  );
};

export default BlogCard;