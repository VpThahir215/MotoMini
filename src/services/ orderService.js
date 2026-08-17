// import api from "./api";

// export const placeOrder = async (order) => {
//   const response = await api.post("/orders", order);
//   return response.data;
// };

// export const getOrders = async () => {
//   const response = await api.get("/orders");
//   return response.data;
// };

import api from "./api";

export const placeOrder = async (order) => {
  const response = await api.post("/orders", order);
  return response.data;
};

export const getOrders = async () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const response = await api.get(`/orders?userId=${user.id}`);

  return response.data;
};
export const getOredersAdmin=async ()=>{
  const respons=await api.get('/orders')
  return respons.data
}
export const UpdateOrder=async (id,status)=>{
const respons =  await api.patch(`/orders/${id}`,{status:status});
   return {
  status: status
};
}
export const deleteOrder=async (id)=>{
  await api.delete(`/orders/${id}`)
}