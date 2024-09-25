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
import { setSortingMethod } from "../../features/products/fetchProducts";

export const SortField = () => {
  //DATA
  const dispatch = useDispatch<AppDispatch>();

  //sorting method state
  const { sortingMethod } = useSelector(
    (state: RootState) => state.productsList
  );

  //LOGIC
  //select sorting method
  const handleSortingMethodChange = (event: SelectChangeEvent<string>) => {
    dispatch(setSortingMethod(event.target.value as string));
  };

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
          <MenuItem>
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
