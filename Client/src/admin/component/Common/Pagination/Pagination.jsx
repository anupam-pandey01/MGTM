import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./Pagination.module.css";

const Pagination = ({ page, totalPage, setPage }) => {
  return (
    <div className={styles.pagination}>
      <button
        disabled={page === 1}
        onClick={() => setPage((prev) => prev - 1)}
      >
        <ChevronLeft size={16} />
      </button>

      {Array.from({ length: totalPage }, (_, idx) => (
        <button
          key={idx + 1}
          className={page === idx + 1 ? styles.active : ""}
          onClick={() => setPage(idx + 1)}
        >
          {idx + 1}
        </button>
      ))}

      <button
        disabled={page === totalPage}
        onClick={() => setPage((prev) => prev + 1)}
      >
        <ChevronRight size={16} />
      </button>
    </div>
  );
};

export default Pagination;