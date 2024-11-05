import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Product, ProductsState } from "../../lib/types";

const initialState: ProductsState = {
  items: [],
  filteredItems: [],
  category: "",
  sortingMethod: "",
};

// Slice
const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProducts: (state, action: PayloadAction<Product[]>) => {
      state.items = action.payload;
    },
    setSortingMethod: (state, action: PayloadAction<string>) => {
      state.sortingMethod = action.payload;
    },
    filterByCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
    resetCategory: (state) => {
      state.category = "";
    },
    resetSortingMethod: (state) => {
      state.sortingMethod = "";
    },
  },
});

export const {
  setSortingMethod,
  filterByCategory,
  resetCategory,
  resetSortingMethod,
  addProducts,
} = productSlice.actions;

export default productSlice.reducer;
