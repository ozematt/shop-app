import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../lib/types/userTypes";
import { Orders } from "../../lib/types/ordersTypes";

const initialState: User = { username: null, isLoggedIn: false, orders: [] };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logUser: (state: User, action: PayloadAction<string>) => {
      state.isLoggedIn = true;
      state.username = action.payload;
    },
    logOutUser: (state: User) => {
      state.isLoggedIn = false;
    },
    addOrder: (state: User, action: PayloadAction<Orders>) => {
      state.orders.push(action.payload);
    },
    removeOrders: (state) => {
      state.orders = [];
    },
  },
});
export const { addOrder, logUser, logOutUser, removeOrders } =
  userSlice.actions;
export default userSlice.reducer;
