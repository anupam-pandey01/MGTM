import React from "react";
import styles from "./PaymentStep.module.css"

const PaymentStep = ({ servicePrice, handlePayment }) => {
  return (
    <div className={styles.stepBox}>
      <h2>Payment</h2>

      <p className={styles.amount}>Amount: ₹{servicePrice}</p>

      <button className={styles.primaryBtn} onClick={handlePayment}>
        Pay Now
      </button>
    </div>
  );
};

export default PaymentStep;
