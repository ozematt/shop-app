import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../redux/store";
import { Product } from "./productsSlice";

////MEMOIZING SELECTORS

// selector to filter products by category
const productsFilterByCategory = (state: RootState) => {
  const { items, category } = state.products;
  if (category === "none" || category === "") return items; // return original items array
  return items.filter((product) => product.category === category); // filtering by category
};

// selector to sort products
export const selectSortedProducts = createSelector(
  [
    productsFilterByCategory, //
    (state: RootState) => state.products.sortingMethod, // sorting method selector
  ],
  //filteredProducts - result of productsFilterByCategory function,
  //sortingMethod - sorting method form state
  (filteredProducts, sortingMethod) => {
    //working on the copied array [...], good practice
    return [...filteredProducts].sort((a: Product, b: Product) => {
      if (sortingMethod === "desc") {
        return b.price - a.price;
      }
      if (sortingMethod === "asc") {
        return a.price - b.price;
      }
      if (sortingMethod === "rate: highest first") {
        return b.rating.rate - a.rating.rate;
      }
      if (sortingMethod === "rate: lowest first") {
        return a.rating.rate - b.rating.rate;
      }
      if (sortingMethod === "popularity: highest first") {
        return b.rating.count - a.rating.count;
      }
      if (sortingMethod === "popularity: lowest first") {
        return a.rating.count - b.rating.count;
      }
      return 0; // default value if no sorting method matches
    });
  }
);
