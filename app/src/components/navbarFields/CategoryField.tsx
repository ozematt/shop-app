import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import Divider from "@mui/material/Divider";

import { useQuery } from "@tanstack/react-query";
import fetchCategories from "../../api/queries/categories";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { filterByCategory } from "../../redux/products/productsSlice";

export const CategoryField = () => {
  //DATA
  const dispatch = useDispatch<AppDispatch>();

  //filter products state
  const { category } = useSelector((state: RootState) => state.products);

  // fetch categories
  const { data: categories } = useQuery<string[]>({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });

  //LOGIC
  //select category
  const handleCategoryChange = (event: SelectChangeEvent<string>) => {
    dispatch(filterByCategory(event.target.value as string));
  };

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
    </>
  );
};
