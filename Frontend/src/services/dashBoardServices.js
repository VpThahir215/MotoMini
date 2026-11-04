import api from "./api";

export const getDashboardData = async () => {
  const [usersResponse, productsResponse, ordersResponse] =
    await Promise.all([
      api.get("/users"),
      api.get("/products"),
      api.get("/orders"),
    ]);

  return {
    users: usersResponse.data,
    products: productsResponse.data,
    orders: ordersResponse.data,
  };
};