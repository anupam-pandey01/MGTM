import styles from './Pagination.module.css';

const Pagination = ({ currentPage, totalPages, onPageChange, setCurrentPage }) => (
  <div className={styles.wrap}>
    <button
      className={styles.btn}
      onClick={() => setCurrentPage(currentPage - 1)}
      disabled={currentPage <= 1}
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>

    <span className={styles.info}>Page {currentPage} of {totalPages}</span>

    <button
      className={styles.btn}
      onClick={() => setCurrentPage(currentPage + 1)}
      disabled={currentPage >= totalPages}
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  </div>
);

export default Pagination;