import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store";
import { useLocation } from "react-router-dom";
import { useCallback, useEffect } from "react";
import { SelectChangeEvent } from "@mui/material";
import {
  resetSortingMethod,
  setSortingMethod,
} from "../../../redux/products/productsSlice";

export const useSortField = () => {
  //
  //// DATA
  const dispatch = useDispatch<AppDispatch>();
  const location = useLocation();

  // sorting method state
  const sortingMethod = useSelector(
    (state: RootState) => state.products.sortingMethod
  );

  ////LOGIC
  //select sorting method
  const handleSortingMethodChange = useCallback(
    (event: SelectChangeEvent<string>) => {
      dispatch(setSortingMethod(event.target.value as string));
    },
    [dispatch]
  );

  // reset sorting method field
  useEffect(() => {
    dispatch(resetSortingMethod());
  }, [location, dispatch]);

  return { sortingMethod, handleSortingMethodChange };
};
