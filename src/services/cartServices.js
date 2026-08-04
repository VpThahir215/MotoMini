import api from "./api";
export const getCart = async () => {
  const response = await api.get("/cart");
  return response.data;
};


export const getCartItem = async (productId) => {
  const response = await api.get("/cart");

  return response.data.find(
    (item) => item.productId === productId
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
