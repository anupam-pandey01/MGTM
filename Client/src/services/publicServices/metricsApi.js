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

export const getHomeStats = async () => {
  try {
    const res = await api.get(`/home-page-stats`);
    
    return res.data;
  } catch (err) {
    console.log(err);
    throw Error(err.response.data.message);
  }
};