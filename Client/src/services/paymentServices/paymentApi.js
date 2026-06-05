import api from "../api";

export const createOrder = async (amount) => {
  try {
    const res = await api.post("/api/payment/create-order", amount );

    return res.data;
  } catch (err) {
    console.error(err);
    throw err?.response?.data?.message;
  }
};

export const verifyPayment = async (response) => {
  try {
    const res = await api.post("/api/payment/verify-payment", response );

    return res.data;
  } catch (err) {
    console.error(err);
    throw err?.response?.data?.message;
  }
};
