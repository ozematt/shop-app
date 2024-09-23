import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "../features/categories/categorySlice";
import filterProductsReducer from "../features/products/filterProducts";

const store = configureStore({
  reducer: {
    category: categoryReducer,
    filterProducts: filterProductsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
