import styles from './Relatedcard.module.css';

const RelatedCard = ({ post }) => {
  const { title, shortDescription, category, featuredImage, slug } = post;
  
  return (
    <article className={styles.card}>
      <a href={`/blog/${slug}`}>
        <div className={styles.imgWrap}>
          {featuredImage?.url
            ? <img src={featuredImage?.url} alt={title} />
            : <div className={styles.imgPlaceholder} />
          }
        </div>
        <div className={styles.body}>
          {category && <span className={styles.category}>{category.toUpperCase()}</span>}
          <h3 className={styles.title}>{title}</h3>
          {shortDescription && <p className={styles.excerpt}>{shortDescription}</p>}
        </div>
      </a>
    </article>
  );
};

export default RelatedCard;