import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Product, ProductsState } from "../../types/productTypes";

//lazy loading with createAsyncThunk
export const fetchProducts = createAsyncThunk<
  Product[],
  void,
  { state: RootState }
>("products/fetch", async (_, { getState }) => {
  const { items: productLoaded } = getState().products;
  //if products are in state, return state
  if (productLoaded.length > 0) {
    return productLoaded;
  }
  //if not, fetch products
  const response = await fetch("https://fakestoreapi.com/products");
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  return await response.json();
});

const initialState: ProductsState = {
  items: [],
  filteredItems: [],
  loading: false,
  error: null,
  category: "",
  sortingMethod: "",
};

// Slice
const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setSortingMethod: (state, action: PayloadAction<string>) => {
      state.sortingMethod = action.payload;
    },
    filterByCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      //products added to state
      .addCase(
        fetchProducts.fulfilled,
        (state, action: PayloadAction<Product[]>) => {
          state.loading = false;
          state.items = action.payload;
        }
      )
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch products";
      });
  },
});
export const { setSortingMethod, filterByCategory } = productSlice.actions;
export default productSlice.reducer;