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

interface Orders {
  id: number | null;
  date: number | null;
  totalPrice: number | null;
  quantity: number | null;
  address: OrdersAddress;
  items: OrdersItem[];
}

const initialState: Orders[] = [
  {
    id: null,
    date: null,
    totalPrice: null,
    quantity: null,
    address: {
      name: "",
      surname: "",
      street: "",
      houseNumber: null,
      apartmentNumber: null,
      zipCode: null,
      city: "",
      payOnDelivery: null,
      paymentCard: null,
    },
    items: [
      {
        id: null,
        title: "",
        image: "",
        price: 0,
        pieces: 0,
      },
    ],
  },
];

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    addOrder: (state: Orders[], action: PayloadAction<Orders>) => {
      [...state, action.payload];
    },
  },
});
export const { addOrder } = ordersSlice.actions;
export default ordersSlice.reducer;
