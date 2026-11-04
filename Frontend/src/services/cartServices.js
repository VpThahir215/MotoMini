import api from "./api";
export const getCart = async () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const response = await api.get(`/cart?userId=${user.id}`);

  return response.data;
};


export const getCartItem = async (productId,userId) => {
  const response = await api.get("/cart");

  return response.data.find(
    (item) => item.productId === productId &&
       item.userId === userId
  );
};

export const addCartItem = async (cartItem) => {
  const response = await api.post("/cart", cartItem);
  return response.data;
};


export const updateCartItem = async (id, updatedItem) => {
  const response = await api.put(`/cart/${id}`, updatedItem);
  return response.data;
};

export const deleteCartItem = async (id) => {
  await api.delete(`/cart/${id}`);
};
