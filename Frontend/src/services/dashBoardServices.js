import api from "./api";

export const getDashboardData = async () => {
  const [usersResponse, productsResponse, ordersResponse] =
    await Promise.all([
      api.get("/auth/admin"),
      api.get("/products/"),
      api.get("/orders/admin"),
    ]);

  return {
    users: usersResponse.data.users,
    products: productsResponse.data.products,
    orders: ordersResponse.data.orders,
  };
};