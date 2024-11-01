import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { saveBet } from "@shared/services";
import { ICart } from "./interfaces";

const { save } = saveBet();

const initialState: ICart = {
  items: [],
  totalQuantity: 0,
  min_cart_value: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          numbers: newItem.numbers,
          color: newItem.color,
          typeGame: newItem.typeGame,
          price: newItem.price,
          typeGameId: newItem.typeGameId,
        });
      }
    },

    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      if (existingItem) {
        state.items = state.items.filter((item) => item.id !== id);
      }
    },

    getMinCartValue(state, action) {
      const value = action.payload;
      state.min_cart_value = value;
    },

    saveBetData(state) {
      (async () => {
        try {
          const saved: any[] = [];
          state.items.forEach((item) => {
            saved.push({
              game_id: item.typeGameId,
              numbers: item.numbers,
            });
          });

          await toast.promise(save({ games: [...saved] }), {
            pending: "Carregando...",
            success: "Apostas cadastradas 👌",
            error: "Erro ao cadastrar apostas 🤯",
          });
        } catch (error) {
          console.log(error);
        }
      })();
      state.items = [];
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
