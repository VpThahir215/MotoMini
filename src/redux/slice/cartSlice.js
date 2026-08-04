import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
       console.log("Reducer called");
 
      const product = action.payload;
const existingProduct = state.items.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
          existingProduct.quantity += 1;
      } else {
        state.items.push({
          ...product,
          quantity: 1,
        });
      }
        state.totalQuantity += 1;
      state.totalPrice += product.price;
      console.log(state.items);
      
    },
  },
});
export const {addToCart}=cartSlice.actions
export default cartSlice.reducer;