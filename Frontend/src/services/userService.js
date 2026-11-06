import api from "./api";


export const registerUser = async (userData) => {
  const response = await api.post("/auth/register", userData);
  return response.data;
};

  export const loginUser = async (email,password) => {
    const response = await api.post("/auth/login",{email,password});
    
    
    return response.data;
  };

export const getUserById = async (id) => {
  const response = await api.get(`/users/${id}`);
  return response.data;
};
export const deleteUser=async (id)=>{
 await api.delete(`/users/${id}`)
}
export const editUser=async (id,product)=>{
   const respons=await api.put(`/users/${id}`,product)
   return respons.data
}