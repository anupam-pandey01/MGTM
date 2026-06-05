import api from "../api";

export const saveUser = async (data) => {
  try {
    const res = await api.post("/save/user", data);
      
    return res.data;
  } catch (err) {
    console.log(err);
    throw err.response.data.message;
  }
};
