import { createSlice } from "@reduxjs/toolkit";

const CartproductSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
    totalcartAmount: 0,
    totalcartqty: 0,
  },
  reducers: {
    addToCart(state, action) {
        const existingIndex = state.cartItems.findIndex(
          (item) => item.id === action.payload.id
        );
  
        if (existingIndex >= 0) {
          state.cartItems[existingIndex] = {
            ...state.cartItems[existingIndex],
            cartQuantity: state.cartItems[existingIndex].cartQuantity + 1,
          };

        } else {
          let tempProductItem = { ...action.payload, cartQuantity: 1 };
          state.cartItems.push(tempProductItem);
        }
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      }
  },
});
export const { addToCart } = CartproductSlice.actions;

export default CartproductSlice.reducer;
