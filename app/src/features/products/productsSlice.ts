import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProductsState {
  selectedProductId: number;
}

const initialState: ProductsState = {
  selectedProductId: 0,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProductId(state, action: PayloadAction<number>) {
      state.selectedProductId = action.payload;
    },
  },
});

export const { setProductId } = productSlice.actions;
export default productSlice.reducer;
