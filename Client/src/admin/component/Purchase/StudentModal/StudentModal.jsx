import styles from "./StudentModal.module.css";
import { X } from "lucide-react";

const StudentModal = ({ user, onClose }) => {
  if (!user) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <h2>User Details</h2>
          <button onClick={onClose} className={styles.closeBtn}>
            <X size={20} />
          </button>
        </div>

        <div className={styles.content}>
          <div className={styles.avatar}>
            {user.name?.charAt(0).toUpperCase()}
          </div>

          <div className={styles.info}>
            <div className={styles.row}>
              <span>Name</span>
              <p>{user.name}</p>
            </div>

            <div className={styles.row}>
              <span>Email</span>
              <p>{user.email}</p>
            </div>

            <div className={styles.row}>
              <span>Phone</span>
              <p>{user.phone}</p>
            </div>

            <div className={styles.row}>
              <span>Education</span>
              <p>{user.education}</p>
            </div>

            <div className={styles.row}>
              <span>User ID</span>
              <p>MGTM {"-"} {user._id.slice(16)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentModal;