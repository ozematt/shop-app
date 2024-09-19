import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { SyntheticEvent, useState } from "react";
import fetchCategories from "../../api/queries/categories";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { setCategory } from "../../features/categories/categorySlice";

export const Category: React.FC = () => {
  //DATA
  //redux
  const dispatch = useDispatch<AppDispatch>();
  const selectedCategory = useSelector(
    (state: RootState) => state.category.selectedCategory
  );
  // tanstack-query
  const { data: categories } = useQuery<string[]>({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });

  //LOGIC
  const handleCategoryChange = (event: SelectChangeEvent<string>) => {
    dispatch(setCategory(event.target.value as string));
  };

  //UI
  return (
    <>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel>categories</InputLabel>
        <Select
          labelId="select-category-label"
          id="select-category"
          value={selectedCategory}
          label="Category"
          onChange={handleCategoryChange}
        >
          <MenuItem value="none">
            <em>None</em>
          </MenuItem>
          {categories?.map((category: string) => (
            <MenuItem key={category} value={category}>
              {category}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};
