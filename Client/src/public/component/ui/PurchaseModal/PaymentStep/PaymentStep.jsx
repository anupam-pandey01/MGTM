import React from "react";
import styles from "./PaymentStep.module.css"
import { calculateGst } from "../../../../../utils/calculateGst";

const PaymentStep = ({ handlePayment, price, GSTAmount, totalAmount, loading}) => {



  return (
    <div className={styles.stepBox}>
      <div className={styles.payment}>
      <h2>Confirm Your Payment</h2>

      <div className={styles.amountContainer}>
        <p className={styles.amount}><span>Service Charge</span>  <span>₹{price}</span></p>
        <p className={styles.amount}><span>GST <i>(18%)</i> </span>  <span>₹{GSTAmount}</span> </p>
        <p className={styles.amount}><span>Total </span>  <span>₹{totalAmount}</span> </p>
      </div>
      
      <button className={styles.primaryBtn} disabled={loading} onClick={()=>handlePayment()}>
        {loading ? "...loading" : "Pay Now"}
      </button>
      </div>
    </div>
  );
};

export default PaymentStep;
