import { useEffect, useState } from "react";
import styles from "./PurchaseModal.module.css";
import Details from "./DetailsStep/Details";
import SuccessStep from "./SuccessStep/SuccessStep";
import PaymentStep from "./PaymentStep/PaymentStep";
import { handleError } from "../../../../utils/handler";
import {
  createOrder,
  verifyPayment,
} from "../../../../services/paymentServices/paymentApi";
import { calculateGst } from "../../../../utils/calculateGst";

const PurchaseModal = ({
  open,
  setOpen,
  productId,
  serviceId,
  price
}) => {
  const [step, setStep] = useState(1);
  const [purchaseId, setPurchaseId] = useState("");
  const [userId, setUserId] = useState("");
  const [paymentMessage, setPaymentMessage] = useState({});
  const [loading, setLoading] = useState(false);

  const GSTAmount = calculateGst(price);
  const totalAmount = Number(price) + Number(GSTAmount);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    education: "",
  });

  if (!open) return null;

  const handlePayment = async () => {
    if (totalAmount == 0) return;

    try {
      setLoading(true);
      const order = await createOrder({
        amount: totalAmount,
        purchaseId,
      });

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: order.totalAmount,
        currency: order.currency,
        order_id: order.id,
        name: "MGTM Consultancy LLP",

        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.phone,
        },

        handler: async function (response) {
          try {
            const data = await verifyPayment(response);

            if (data.success) {
              setPaymentMessage(data);
              setStep(3);
              setLoading(false);
              
              setFormData({
                name: "",
                email: "",
                phone: "",
                education: "",
              });
            } else {
              setPaymentMessage(data);
              setStep(3);

              setFormData({
                name: "",
                email: "",
                phone: "",
                education: "",
              });
            }
          } catch (err) {
            console.log(err);
            handleError(err);
          }
        },
      };

      const razorpay = new window.Razorpay(options);

      razorpay.open();
    } catch (err) {
      handleError(err);
    }
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button
          className={styles.closeBtn}
          onClick={() => {
            setOpen(false);
            setStep(1);
          }}
        >
          ✕
        </button>

        <div className={styles.stepper}>
          <div className={step >= 1 ? styles.active : ""}>1. Details</div>

          {totalAmount == 0 ? (
            <></>
          ) : (
            <div className={step >= 2 ? styles.active : ""}>2. Payment</div>
          )}

          <div
            className={
              step >= 3
                ? paymentMessage?.success
                  ? styles.active
                  : styles.failed
                : ""
            }
          >
            {totalAmount == 0 ? "2." : "3."} Success
          </div>
        </div>

        {step === 1 && (
          <Details
            setFormData={setFormData}
            formData={formData}
            setStep={setStep}
            totalAmount={totalAmount}
            price={price}
            serviceId={serviceId}
            productId={productId}
            setUserId={setUserId}
            setPurchaseId={setPurchaseId}
            setPaymentMessage={setPaymentMessage}
          />
        )}

        {step === 2 && totalAmount != 0 && (
          <PaymentStep
            handlePayment={handlePayment}
            price={price}
            totalAmount={totalAmount}
            GSTAmount={GSTAmount}
            loading={loading}
          />
        )}

        {step === 3 && (
          <SuccessStep
            setOpen={setOpen}
            setStep={setStep}
            setFormData={setFormData}
            paymentMessage={paymentMessage}
          />
        )}
      </div>
    </div>
  );
};

export default PurchaseModal;
