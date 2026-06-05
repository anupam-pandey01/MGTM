import React from "react";
import styles from "./purchaseRow.module.css";
import { Eye } from "lucide-react";
import { Pencil } from "lucide-react";
import { Trash } from "lucide-react";

const PurchaseRow = ({ purchase, setSelectedUser }) => {

  return (
    <tr >
      <td>
        <div className={styles.studentInfo}>
          <div>
            <h4>{purchase?.user?.name}</h4>
            
            <p>{purchase?.user?.email}</p>
          </div>
        </div>
      </td>
      <td className={styles.studentId}>MGTM {"-"} {purchase?.user._id.slice(16)}</td>

      <td className={styles.service}>{purchase?.service?.title}</td>
      <td className={styles.product}>{purchase?.product?.title}</td>

      <td>
        <span className={`${styles.statusBadge} ${styles[purchase?.paymentStatus?.toLowerCase()]}`}>
          {purchase?.paymentStatus}
        </span>
      </td>

      <td>{purchase?.amount}</td>

      <td className="action-btn">
        <div className="action-btn-icon">
          <div className="icon" onClick={()=> setSelectedUser(purchase?.user)}>
            <Eye />
          </div>
          <div className="icon">
            <Pencil />
          </div>

          <div className="icon">
            <Trash />
          </div>
        </div>
      </td>
    </tr>
  );
};

export default PurchaseRow;
