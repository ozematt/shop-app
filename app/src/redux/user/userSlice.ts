import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Orders, User } from "../../lib/types/userTypes";

const initialState: User = { userId: null, isLoggedIn: false, orders: [] };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logUser: (state: User, action: PayloadAction<number>) => {
      state.isLoggedIn = true;
      state.userId = action.payload;
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
