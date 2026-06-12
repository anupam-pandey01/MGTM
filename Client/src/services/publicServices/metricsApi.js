import api from "../api"


export const getMetrics = async (slug) => {
  try {
    const res = await api.get(`/metrics`);

    return res;
  } catch (err) {
    console.log(err);
    throw Error(err.response.data.message);
  }
};