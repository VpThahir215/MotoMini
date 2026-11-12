
import api from "./api";

// GET wishlist
export const getWishlist = async () => {
    const response = await api.get("/wishlist");
       console.log("WISHLIST API RESPONSE:", response.data);

    return response.data.wishlistItems.map((item) => ({
        ...item.product,
        id: item._id
    }));
};

// ADD wishlist item
export const addWishlistItem = async (productId) => {
    const response = await api.post("/wishlist", { productId });

    return response.data;
};

// DELETE wishlist item
export const deleteWishlistItem = async (id) => {
    await api.delete(`/wishlist/${id}`);
};
