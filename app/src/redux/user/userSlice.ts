import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { type UserState } from "../../lib/types";
import { type Orders } from "../../lib/types";

const initialState: UserState = { username: null, orders: [] };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logUser: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    logOutUser: (state) => {
      state.username = null;
      state.orders = [];
    },
    addOrder: (state, action: PayloadAction<Orders[]>) => {
      state.orders = [...state.orders, ...action.payload];
    },
  },
});
export const { addOrder, logUser, logOutUser } = userSlice.actions;

export default userSlice.reducer;
