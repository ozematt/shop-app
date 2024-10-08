import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Orders, User } from "../../lib/types/userTypes";

const initialState: User = { isLoggedIn: false, orders: [] };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logUser: (state: User) => {
      state.isLoggedIn = true;
    },
    logOutUser: (state: User) => {
      state.isLoggedIn = false;
    },
    addOrder: (state: User, action: PayloadAction<Orders>) => {
      state.orders.push(action.payload);
    },
  },
});
export const { addOrder, logUser, logOutUser } = userSlice.actions;
export default userSlice.reducer;
