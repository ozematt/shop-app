import {
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import {
  resetSortingMethod,
  setSortingMethod,
} from "../../redux/products/productsSlice";
import { useCallback, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const SortField = () => {
  //DATA
  const dispatch = useDispatch<AppDispatch>();
  const location = useLocation();

  //sorting method from global state
  const sortingMethod = useSelector(
    (state: RootState) => state.products.sortingMethod
  );

  //LOGIC
  //select sorting method
  const handleSortingMethodChange = useCallback(
    (event: SelectChangeEvent<string>) => {
      dispatch(setSortingMethod(event.target.value as string));
    },
    [dispatch]
  );

  useEffect(() => {
    dispatch(resetSortingMethod()); // Akcja do resetu kategorii
  }, [location, dispatch]);

  //UI
  return (
    <>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel>Sort</InputLabel>
        <Select
          labelId="select-filter-label"
          id="select-filter"
          value={sortingMethod}
          label="Filter"
          onChange={handleSortingMethodChange}
        >
          <MenuItem value="none">
            <em>None</em>
          </MenuItem>

          <MenuItem disabled>PRICE</MenuItem>
          <MenuItem value="desc">price: highest first</MenuItem>
          <MenuItem value="asc">price: lowest first</MenuItem>
          <Divider component="li" />

          <MenuItem disabled>RATE</MenuItem>
          <MenuItem value="rate: highest first">rate: highest first</MenuItem>
          <MenuItem value="rate: lowest first">rate: lowest first</MenuItem>
          <Divider component="li" />

          <MenuItem disabled>POPULARITY</MenuItem>
          <MenuItem value="popularity: highest first">
            popularity: highest first
          </MenuItem>
          <MenuItem value="popularity: lowest first">
            popularity: lowest first
          </MenuItem>
        </Select>
      </FormControl>
    </>
  );
};
