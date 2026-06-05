import api from "../interceptors"

export const login = async (userData)=>{
    try{
        const res = await api.post("/api/admin/login", userData);
        
        return res.data
    }catch(err){
        console.error(err)
        throw err.response.data.message
    }
}


export const getDashboard = async()=>{
    try{
        const res = await api.get("/api/admin/dashboard");

        return res.data
    }catch(err){
        throw err.response.data.message
    }
}

export const purchase = async (
  page,
  debouncedSearch,
  paymentStatus,
  service
) => {
  const { data } = await api.get("api/admin/student", {
    params: {
      page,
      search: debouncedSearch,
      paymentStatus,
      service,
    },
  });

  return data;
};


export const exportPurchases = async () => {
  const res = await api.get(
    "/api/admin/purchases/export",
    {
      responseType: "blob",
    }
  );

  return res.data;
};


export const createBlog = async (formData) => {
  const res = await api.post("/api/admin/blog", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return res.data;
};


export const AllBlog = async (page) => {
  const res = await api.get("/api/admin/blog", {
    params: {
      page,
    },
  });

  return res.data;
};

export const getBlogById = async (id)=>{
  const res = await api.get(`/api/admin/blog/${id}`);

  return res.data;
}