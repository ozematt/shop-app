import {
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { useSortField } from "../../lib/hooks/navbarFields/useSortField";

export const SortField = () => {
  //
  ////DATA
  const { sortingMethod, handleSortingMethodChange } = useSortField();

  ////UI
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
