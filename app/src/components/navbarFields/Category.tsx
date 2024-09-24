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
import {
  setProductCategory,
  setSortingMethod,
} from "../../features/products/filterProducts";
// import { useState } from "react";

export const Category = () => {
  //DATA

  //redux
  const dispatch = useDispatch<AppDispatch>();
  const category = useSelector(
    (state: RootState) => state.filterProducts.category
  );
  const sortingMethod = useSelector(
    (state: RootState) => state.filterProducts.sortingMethod
  );

  // fetch categories
  const { data: categories } = useQuery<string[]>({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });

  //LOGIC
  const handleCategoryChange = (event: SelectChangeEvent<string>) => {
    dispatch(setProductCategory(event.target.value as string));
  };

  //SORTING

  // const [sortingOption, setSortingOption] = useState<string>("none");

  const handleSortingMethodChange = (event: SelectChangeEvent<string>) => {
    dispatch(setSortingMethod(event.target.value));
  };

  // console.log(sortingOption);

  //UI
  return (
    <>
      {/* Category - filter */}
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel>Category</InputLabel>
        <Select
          labelId="select-category-label"
          id="select-category"
          value={category}
          label="Category"
          onChange={handleCategoryChange}
        >
          <MenuItem value="none">
            <em>None</em>
          </MenuItem>
          <Divider component="li" />
          <MenuItem disabled>CATEGORIES</MenuItem>

          {categories?.map((category: string) => (
            <MenuItem key={category} value={category}>
              {category}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {/* Sorted */}
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
          <MenuItem value="popularity: highest first">
            popularity: lowest first
          </MenuItem>
        </Select>
      </FormControl>
    </>
  );
};
