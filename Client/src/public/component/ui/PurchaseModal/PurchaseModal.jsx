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

const PurchaseModal = ({
  open,
  setOpen,
  productData,
  productId,
  serviceId,
  servicePrice,
}) => {
  const [step, setStep] = useState(1);
  const [purchaseId, setPurchaseId] = useState("");
  const [userId, setUserId] = useState("");
  const [paymentMessage, setPaymentMessage] = useState({});

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    education: "",
  });

  if (!open) return null;

  const handlePayment = async () => {
    
    if (servicePrice == 0) return;

    try {
      const order = await createOrder({
        amount: servicePrice,
        purchaseId,
      });

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: order.amount,
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

  //   useEffect(() => {
  //     setFormData((prev) => ({
  //       ...prev,
  //       serviceName,
  //       price: servicePrice,
  //       productName,
  //     }));
  //   }, [serviceName, servicePrice, productName]);

  //   useEffect(() => {
  //     if (open) {
  //       setStep(1);
  //     }
  //   }, [open]);

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button
          className={styles.closeBtn}
          onClick={() => {
            (setOpen(false), setStep(1));
          }}
        >
          ✕
        </button>

        <div className={styles.stepper}>
          <div className={step >= 1 ? styles.active : ""}>1. Details</div>

          {servicePrice == 0 ? (
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
            3. Success
          </div>
        </div>

        {step === 1 && (
          <Details
            setFormData={setFormData}
            formData={formData}
            setStep={setStep}
            servicePrice={servicePrice}
            serviceId={serviceId}
            productId={productId}
            setUserId={setUserId}
            setPurchaseId={setPurchaseId}
            setPaymentMessage={setPaymentMessage}
          />
        )}

        {step === 2 && servicePrice != 0 && (
          <PaymentStep
            servicePrice={servicePrice}
            handlePayment={handlePayment}
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
