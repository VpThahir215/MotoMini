// import api from "./api";

// export const getWishlist = async () => {
//   const response = await api.get("/wishlist");
//   return response.data;
// };

// export const getWishlistItem = async (productId) => {
//   const response = await api.get("/wishlist");

//   return response.data.find(
//     (item) => item.productId === productId
//   );
// };

// export const addWishlistItem = async (wishlistItem) => {
//   const response = await api.post("/wishlist", wishlistItem);
//   return response.data;
// };

// export const updateWishlistItem = async (id, updatedItem) => {
//   const response = await api.put(`/wishlist/${id}`, updatedItem);
//   return response.data;
// };

// export const deleteWishlistItem = async (id) => {
//   await api.delete(`/wishlist/${id}`);
// };

// // Remove all wishlist items (optional)
// export const clearWishlist = async () => {
//   const items = await getWishlist();

//   await Promise.all(
//     items.map((item) => deleteWishlistItem(item.id))
//   );
// };


import api from "./api";

export const getWishlist = async () => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) return [];

  const response = await api.get(`/wishlist?userId=${user.id}`);
  return response.data;
};

export const getWishlistItem = async (productId) => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) return null;

  const response = await api.get(`/wishlist?userId=${user.id}`);

  return response.data.find(
    (item) => item.productId === productId
  );
};

export const addWishlistItem = async (item) => {
  const response = await api.post("/wishlist", item);
  return response.data;
};

export const updateWishlistItem = async (id, item) => {
  const response = await api.put(`/wishlist/${id}`, item);
  return response.data;
};

export const deleteWishlistItem = async (id) => {
  await api.delete(`/wishlist/${id}`);
};