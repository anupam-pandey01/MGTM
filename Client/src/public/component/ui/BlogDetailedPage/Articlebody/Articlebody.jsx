import styles from './ArticleBody.module.css';

/**
 * ArticleBody
 * Renders raw HTML from Jodit editor stored in MongoDB.
 * All Jodit-generated tags (h1-h6, p, ul, ol, blockquote, img, table…)
 * are styled via ArticleBody.module.css using the .content wrapper.
 */
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