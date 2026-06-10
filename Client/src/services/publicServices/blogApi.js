import api from "../api"
export const blog = async (page, category) => {
  try {
    const res = await api.get(`/api/blogs`,{
        params:{
            page,
            category
        }
    });

    return res.data;
  } catch (err) {
    console.log(err);
    throw Error(err.response.data.message);
  }
};


export const blogBySlug = async (slug) => {
  try {
    const res = await api.get(`/api/blog/${slug}`);

    return res.data;
  } catch (err) {
    console.log(err);
    throw Error(err.response.data.message);
  }
};