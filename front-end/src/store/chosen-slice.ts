import { createSlice } from "@reduxjs/toolkit";

export interface IChosen {
  items: any[];
}

const initialState: IChosen = {
  items: [],
};

const chosenSlice = createSlice({
  name: "chosen",
  initialState,
  reducers: {
    addChosenNumbers(state, action) {
      state.items = [];
      const numbers = action.payload;
      state.items.push(...numbers);
    },
  },
});

export const chosenActions = chosenSlice.actions;

export default chosenSlice;
