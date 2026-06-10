import api from "../api";

export const sendContact = async (formData) => {
  try {
    const res = await api.post("/message", formData);

    return res.data;
  } catch (err) {
    console.log(err);
    throw Error(err.response.data.message);
  }
};