
import { configureStore } from "@reduxjs/toolkit";
import chosenSlice from "./chosen-slice";


const store = configureStore({
  reducer: { chosen: chosenSlice.reducer },
});


export default store;