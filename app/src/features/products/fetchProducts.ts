import { createSlice } from "@reduxjs/toolkit";

// interface Rating {
//   rate: number;
//   count: number;
// }

// interface Product {
//   id: number;
//   title: string;
//   price: number;
//   category: string;
//   description: string;
//   image: string;
//   rating: Rating;
// }

// interface ProductsState {
//   items: Product[];
//   loading: boolean;
//   error: string | null;
// }

// const initialState: ProductsState = {
//   items: [],
//   loading: false,
//   error: null,
// };

const fetchProductsSlice = createSlice({
  name: "productsList",
  initialState: "test2",
  reducers: {},
});

export default fetchProductsSlice.reducer;
