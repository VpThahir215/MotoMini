import api from "./api";


export const registerUser = async (userData) => {
  const response = await api.post("/auth/register", userData);
  return response.data;
};
export const verifyEmailOtp = async (email, otp) => {
  const response = await api.post("/auth/verify-email", {
    email,
    otp
  });

  return response.data;
};

  export const loginUser = async (email,password) => {
    const response = await api.post("/auth/login",{email,password});
    
    
    return response.data;
  };
  export const logoutUser = async () => {
    const response = await api.post("/auth/logout");
    return response.data;
};

export const getUserById = async (id) => {
  const response = await api.get(`/auth/admin/${id}`);
  return response.data;
};
export const deleteUser=async (id)=>{
 await api.delete(`/users/${id}`)
}
export const editUser = async (id, userData) => {
  const response = await api.put(`/auth/admin/${id}`, userData);
  return response.data.user
};
export const getUsersAdmin=async ()=>{
  const respons=await api.get('/auth/admin')
  return respons.data.users
}
