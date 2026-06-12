import styles from './ArticleBody.module.css';

const ArticleBody = ({ content }) => {
  if (!content) return null;

  return (
    <section className={`${styles.wrap} container`}>
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </section>
  );
};

export default ArticleBody;