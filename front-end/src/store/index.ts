
import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice";
import chosenSlice from "./chosen-slice";


const store = configureStore({
  reducer: { chosen: chosenSlice.reducer, cart: cartSlice.reducer },
});


export default store;