import BlogCard from '../BlogCard/BlogCard';
import styles from './BlogGrid.module.css';

const BlogGrid = ({ posts = [], loading = true, error = null }) => {
  if (loading) {
    return (
      <div className={styles.grid}>
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className={styles.skeleton}>
            <div className={styles.skeletonImg} />
            <div className={styles.skeletonBody}>
              <div className={styles.skeletonLine} style={{ width: '40%' }} />
              <div className={styles.skeletonLine} style={{ width: '85%', height: '20px' }} />
              <div className={styles.skeletonLine} style={{ width: '70%', height: '20px' }} />
              <div className={styles.skeletonLine} />
              <div className={styles.skeletonLine} style={{ width: '80%' }} />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (error) return <p className={styles.msg}>Failed to load posts.</p>;
  if (!posts.length) return <p className={styles.msg}>No insights found.</p>;

  return (
    <div className={styles.grid}>
      {posts.map((post) => <BlogCard key={post.id} post={post} />)}
    </div>
  );
};

export default BlogGrid;