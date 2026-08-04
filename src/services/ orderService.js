import api from "./api";

export const placeOrder = async (order) => {
  const response = await api.post("/orders", order);
  return response.data;
};

export const getOrders = async () => {
  const response = await api.get("/orders");
  return response.data;
};