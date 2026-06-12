import styles from "./Articlehero.module.css";

const ArticleHero = ({
  category,
  title,
  author,
  createdAt,
  heroImage,
  publishedAt,
  updatedAt,
}) => {
  const formattedDate =
    publishedAt == null
      ? new Date(createdAt).toLocaleDateString("en-US", {
          month: "short",
          day: "2-digit",
          year: "numeric",
        })
      : new Date(publishedAt).toLocaleDateString("en-US", {
          month: "short",
          day: "2-digit",
          year: "numeric",
        });

  const lastUpated = new Date(updatedAt).toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });

  return (
    <header className={styles.hero}>
      <div className={`${styles.meta} container`}>
        {category && (
          <span className={styles.category}>{category.toUpperCase()}</span>
        )}
        <h1 className={styles.title}>{title}</h1>

        {author && (
          <div className={styles.author}>
            <div className={styles.authorInfo}>
              <span className={styles.authorName}>{author}</span>
              
                <p className={styles.authorRole}>
                  Published At {formattedDate ? ` • ${formattedDate}` : ""}
                </p>
                <p className={styles.authorRole}>Last Update {lastUpated ? ` • ${lastUpated}` : ""}</p>
            </div>
          </div>
        )}
      </div>

      {heroImage && (
        <div className={styles.heroImageWrap}>
          <img src={heroImage} alt={title} className={styles.heroImage} />
        </div>
      )}
    </header>
  );
};

export default ArticleHero;
