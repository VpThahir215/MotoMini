  import api from "./api";
  export const getCart = async () => {
      const response = await api.get("/cart");

       return response.data.cartItems.map((item) => ({
        ...item.product,
        id: item._id,
        quantity: item.quantity
    }));
  };


  export const getCartItem = async (productId,userId) => {
    const response = await api.get("/cart");

    return response.data.cartItems.find(
      (item) => item.productId === productId &&
        item.userId === userId
    );
  };

  export const addCartItem = async (productId) => {
    const response = await api.post("/cart", {productId});
    return response.data.cartItems;
  };


  export const updateCartItem = async (id, updatedItem) => {
    const response = await api.put(`/cart/${id}`, updatedItem);
    return response.data.cartItems;
  };

  export const deleteCartItem = async (id) => {
    await api.delete(`/cart/${id}`);
  };
