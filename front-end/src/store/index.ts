
import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice";
import showUpdateSlice from "./showUpdate-slice";
const store = configureStore({
  reducer: { cart: cartSlice.reducer, showUpdate: showUpdateSlice.reducer },
});


export default store;