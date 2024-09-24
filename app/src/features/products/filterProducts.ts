import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface filterProductsState {
  category: string;
  sortingMethod: string;
}

const initialState: filterProductsState = {
  category: "",
  sortingMethod: "",
};

const filterProducts = createSlice({
  name: "filterProducts",
  initialState,
  reducers: {
    setProductCategory(state, action: PayloadAction<string>) {
      state.category = action.payload;
    },
    setSortingMethod(state, action: PayloadAction<string>) {
      state.sortingMethod = action.payload;
    },
  },
});

export const { setProductCategory, setSortingMethod } = filterProducts.actions;
export default filterProducts.reducer;
