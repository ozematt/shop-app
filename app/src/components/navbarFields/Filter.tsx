import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import Divider from "@mui/material/Divider";
// import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import fetchCategories from "../../api/queries/categories";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { setFilterProducts } from "../../features/products/filterProducts";

export const Filter = () => {
  //DATA

  //redux
  const dispatch = useDispatch<AppDispatch>();
  const filterProducts = useSelector(
    (state: RootState) => state.filterProducts.filterOption
  );

  console.log(filterProducts);

  // fetch categories
  const { data: categories } = useQuery<string[]>({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });

  //LOGIC
  const handleFilterChange = (event: SelectChangeEvent<string>) => {
    dispatch(setFilterProducts(event.target.value as string));
  };

  //UI
  return (
    <>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel>Filter</InputLabel>
        <Select
          labelId="select-filter-label"
          id="select-filter"
          value={filterProducts}
          label="Filter"
          onChange={handleFilterChange}
        >
          <MenuItem value="none">
            <em>None</em>
          </MenuItem>
          <Divider component="li" />
          <MenuItem>CATEGORIES</MenuItem>

          {categories?.map((category: string) => (
            <MenuItem key={category} value={category}>
              {category}
            </MenuItem>
          ))}
          <Divider component="li" />
          <MenuItem>PRICE</MenuItem>

          <MenuItem value="price: highest first">price: highest first</MenuItem>
          <MenuItem value="price: lowest first">price: lowest first</MenuItem>
          <Divider component="li" />
          <MenuItem>RATE</MenuItem>

          <MenuItem value="rate: highest first">rate: highest first</MenuItem>
          <MenuItem value="rate: lowest first">rate: lowest first</MenuItem>
          <Divider component="li" />
          <MenuItem>POPULARITY</MenuItem>

          <MenuItem value="popularity: highest first">
            popularity: highest first
          </MenuItem>
          <MenuItem value="popularity: highest first">
            popularity: lowest first
          </MenuItem>
        </Select>
      </FormControl>
    </>
  );
};
