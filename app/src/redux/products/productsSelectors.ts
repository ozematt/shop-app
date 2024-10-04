import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Product } from "../../lib/types/productTypes";

////MEMOIZING FILTER SELECTORS

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
  //filteredProducts - result of productsFilterByCategory function
  (filteredProducts, sortingMethod) => {
    //working on the copied array [...], good practice
    return [...filteredProducts].sort((a: Product, b: Product) => {
      switch (sortingMethod) {
        case "desc":
          return b.price - a.price;
        case "asc":
          return a.price - b.price;
        case "rate: highest first":
          return b.rating.rate - a.rating.rate;
        case "rate: lowest first":
          return a.rating.rate - b.rating.rate;
        case "popularity: highest first":
          return b.rating.count - a.rating.count;
        case "popularity: lowest first":
          return a.rating.count - b.rating.count;
        default:
          return 0; // default value if no sorting method matches
      }
    });
  }
);
