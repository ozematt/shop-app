import { configureStore } from "@reduxjs/toolkit";
import productsListReducer from "../features/products/fetchProducts";
import { useDispatch } from "react-redux";

const store = configureStore({
  reducer: {
    productsList: productsListReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
