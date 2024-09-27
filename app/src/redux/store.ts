import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./products/productsSlice";
import cartSliceReducer from "./cart/cartSlice";
import { useDispatch } from "react-redux";

const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
