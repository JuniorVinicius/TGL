import { createSlice } from "@reduxjs/toolkit";

interface Items {
  id: number;
  numbers: string;
  price: number;
  color: string;
  typeGame: string;
  //quantity?: number;
  //totalPrice?: number;
}

interface ICart {
  items: Items[];
  //totalQuantity: number;
}

const initialState: ICart = {
  items: [],
  //totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      //state.totalQuantity++;
        if (!existingItem) {
            state.items.push({
                id: newItem.id,
                numbers: newItem.numbers,
                color: newItem.color,
                typeGame: newItem.typeGame,
                price: newItem.price,
              });
        }

    },

  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
