import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store";
import { useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchCategories from "../../../api/queries/categories";
import { SelectChangeEvent } from "@mui/material";
import {
  filterByCategory,
  resetCategory,
} from "../../../redux/products/productsSlice";
import { useCallback, useEffect } from "react";

export const useCategoryField = () => {
  //
  ////DATA
  const dispatch = useDispatch<AppDispatch>();
  const location = useLocation();

  // filter products state
  const { category } = useSelector((state: RootState) => state.products);

  // fetch categories
  const { data: categories } = useQuery<string[]>({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });

  ////LOGIC
  // select category
  const handleCategoryChange = useCallback(
    (event: SelectChangeEvent<string>) => {
      dispatch(filterByCategory(event.target.value as string));
    },
    [dispatch]
  );

  // reset category field
  useEffect(() => {
    dispatch(resetCategory());
  }, [location, dispatch]);

  return { category, categories, handleCategoryChange };
};
