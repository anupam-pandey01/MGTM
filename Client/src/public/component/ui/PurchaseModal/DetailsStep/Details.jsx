import React, { useState } from "react";
import styles from "./Details.module.css";

import {
  validateEmail,
  validateName,
  validatePhone,
  validateRequired,
} from "../../../../../utils/validation/formValidation";
import { saveUser } from "../../../../../services/publicServices/userApi";
import { handleError, handleSuccess } from "../../../../../utils/handler";

const Details = ({
  setFormData,
  formData,
  setStep,
  totalAmount,
  price,
  serviceId,
  productId,
  setUserId,
  setPurchaseId,
  setPaymentMessage,
}) => {
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleContinue = async () => {
    let newErrors = {};

    const nameError = validateName(formData.name);
    if (nameError) {
      newErrors.name = nameError;
    }

    const emailError = validateEmail(formData.email);
    if (emailError) {
      newErrors.email = emailError;
    }

    const phoneError = validatePhone(formData.phone);
    if (phoneError) {
      newErrors.phone = phoneError;
    }

    const educationError = validateRequired(formData.education, "Education");
    if (educationError) {
      newErrors.education = educationError;
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    try {
      const userData = {
        ...formData,
        service: serviceId,
        product: productId,
        amount: totalAmount,
      };

      const data = await saveUser(userData);
      if (data.success) {
        setUserId(data.userId);
        setPurchaseId(data.purchaseId);
        handleSuccess(data.message)
      }else{
        handleError(data.message)
      }

      console.log(data);

      if (totalAmount === 0) {
        setPaymentMessage({
          success: true,
          message: {
            heading: "Application Submitted",
            msg: "All credentials/details will be sent to your email within 24 hours.",
          },
        });
        setStep(3);
        return;
      }

      setStep(2);
    } catch (err) {
      handleError(err);
    }
  };

  return (
    <div className={styles.stepBox}>
      <h2>Enter Your Details</h2>

      <label>Name</label>
      <input
        type="text"
        name="name"
        placeholder="Full Name"
        value={formData.name}
        onChange={handleChange}
      />
      {errors.name && <span className={styles.error}>{errors.name}</span>}

      <label>Email</label>
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      {errors.email && <span className={styles.error}>{errors.email}</span>}

      <label>Phone No</label>
      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleChange}
      />
      {errors.phone && <span className={styles.error}>{errors.phone}</span>}

      <label>Current Class / Degree</label>

      <input
        type="text"
        name="education"
        placeholder="Current Class / Degree"
        value={formData.education}
        onChange={handleChange}
      />

      {errors.education && (
        <span className={styles.error}>{errors.education}</span>
      )}

      <button className={styles.primaryBtn} onClick={handleContinue}>
        Continue
      </button>
    </div>
  );
};

export default Details;
