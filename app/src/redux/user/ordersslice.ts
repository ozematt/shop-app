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

const initialState: Orders[] = [];

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    addOrder: (state: Orders[], action: PayloadAction<Orders>) => {
      state.push(action.payload);
    },
  },
});
export const { addOrder } = ordersSlice.actions;
export default ordersSlice.reducer;
