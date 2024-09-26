import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

const cartAdapter = createEntityAdapter({
  selectId: (product) => product.id,
});

const initialState = cartAdapter.getInitialState({});

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: cartAdapter.addOne,
    updateCart: cartAdapter.updateOne,
    removeFromCart: cartAdapter.removeOne,
  },
});

export const { addToCart, updateCart, removeFromCart } = cartSlice.actions;
