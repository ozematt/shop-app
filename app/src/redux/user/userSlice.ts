import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface OrdersAddress {
  name: string;
  surname: string;
  street: string;
  houseNumber: number | null;
  apartmentNumber: number | null;
  zipCode: number | null;
  city: string;
  payOnDelivery: boolean | null;
  paymentCard: boolean | null;
}

interface OrdersItem {
  id: number | null;
  title: string;
  image: string;
  price: number;
  pieces: number;
}

export interface Orders {
  id: string | null;
  date: string | null;
  totalPrice: number | null;
  quantity: number | null;
  address: OrdersAddress;
  items: OrdersItem[];
}

interface User {
  isLoggedIn: boolean;
  orders: Orders[];
}

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
