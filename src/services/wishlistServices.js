import api from "./api";

export const getWishlist = async () => {
  const response = await api.get("/wishlist");
  return response.data;
};

export const getWishlistItem = async (productId) => {
  const response = await api.get("/wishlist");

  return response.data.find(
    (item) => item.productId === productId
  );
};

export const addWishlistItem = async (wishlistItem) => {
  const response = await api.post("/wishlist", wishlistItem);
  return response.data;
};

export const updateWishlistItem = async (id, updatedItem) => {
  const response = await api.put(`/wishlist/${id}`, updatedItem);
  return response.data;
};

export const deleteWishlistItem = async (id) => {
  await api.delete(`/wishlist/${id}`);
};

// Remove all wishlist items (optional)
export const clearWishlist = async () => {
  const items = await getWishlist();

  await Promise.all(
    items.map((item) => deleteWishlistItem(item.id))
  );
};