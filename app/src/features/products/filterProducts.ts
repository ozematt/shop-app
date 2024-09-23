import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface filterProductsState {
  filterOption: string;
}

const initialState: filterProductsState = {
  filterOption: "none",
};

const filterProducts = createSlice({
  name: "filterProducts",
  initialState,
  reducers: {
    setFilterProducts(state, action: PayloadAction<string>) {
      state.filterOption = action.payload;
    },
  },
});

export const { setFilterProducts } = filterProducts.actions;
export default filterProducts.reducer;
