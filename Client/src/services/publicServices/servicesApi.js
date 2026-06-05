import api from "../api";

export const getAllServices = async () => {
  try {
    const res = await api.get("/services");

    return res.data;
  } catch (err) {
    console.error(err);
    throw err.response.data.message;
  }
};

export const getServicesDetails = async (slug) => {
  try {
    const res = await api.get(`/services/${slug}`);

    return res.data;
  } catch (err) {
    console.log(err);
    throw Error(err.response.data.message);
  }
};
