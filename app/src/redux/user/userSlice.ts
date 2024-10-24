import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../lib/types/userTypes";
import { Orders } from "../../lib/types/ordersTypes";

const initialState: User = { username: null, orders: [] };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logUser: (state: User, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    logOutUser: (state: User) => {
      state.username = null;
      state.orders = [];
    },
    addOrder: (state: User, action: PayloadAction<Orders[]>) => {
      state.orders = [...state.orders, ...action.payload];
    },
  },
});
export const { addOrder, logUser, logOutUser } = userSlice.actions;

export default userSlice.reducer;
