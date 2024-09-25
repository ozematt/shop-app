import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../redux/store";

interface Rating {
  rate: number;
  count: number;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  rating: Rating;
}

//lazy loading with createAsyncThunk
export const fetchProducts = createAsyncThunk<
  Product[],
  void,
  { state: RootState }
>("products/fetch", async (_, { getState }) => {
  const { items: productLoaded } = getState().productsList;
  //if products are in state, return state
  if (productLoaded.length > 0) {
    return productLoaded;
  }
  //if not fetch products
  const response = await fetch("https://fakestoreapi.com/products");
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  return await response.json();
});

interface ProductsState {
  items: Product[];
  filteredItems: Product[];
  loading: boolean;
  error: string | null;
  category: string;
  sortingMethod: string;
}

const initialState: ProductsState = {
  items: [],
  filteredItems: [],
  loading: false,
  error: null,
  category: "",
  sortingMethod: "",
};

// Slice
const fetchProductSlice = createSlice({
  name: "productsList",
  initialState,
  reducers: {
    setSortingMethod: (state, action: PayloadAction<string>) => {
      state.sortingMethod = action.payload;
    },
    filterByCategory: (state, action: PayloadAction<string>) => {
      const category = action.payload;
      state.category = category;
      if (category === "none") {
        state.filteredItems = state.items;
      } else {
        state.filteredItems = state.items.filter(
          (product) => product.category === category
        );
      }
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
export const { setProductCategory, setSortingMethod, filterByCategory } =
  fetchProductSlice.actions;
export default fetchProductSlice.reducer;
