import React from "react";
import styles from "./SuccessStep.module.css";

const SuccessStep = ({ setOpen, setStep, setFormData, paymentMessage }) => {
  return (
    <div className={styles.successBox}>
      <p>
        {paymentMessage?.success === true && (
          <span className={styles.circleTick}>✓</span>
        )}

        {paymentMessage?.success === false && (
          <span className={styles.circleCross}>✕</span>
        )}
      </p>

      <h2>{paymentMessage?.message?.heading}</h2>

      <p>{paymentMessage?.message?.msg}</p>

      <button
        className={styles.primaryBtn}
        onClick={() => {
          setOpen(false);
          setStep(1);
          setFormData({
            name: "",
            email: "",
            phone: "",
            education: "",
          });
        }}
      >
        Close
      </button>
    </div>
  );
};

export default SuccessStep;
