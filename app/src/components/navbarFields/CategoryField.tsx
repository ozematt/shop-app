import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import Divider from "@mui/material/Divider";
import { useCategoryField } from "../../lib/hooks/navbarFields/useCategoryField";

export const CategoryField = () => {
  //
  ////DATA
  const { category, categories, handleCategoryChange } = useCategoryField();

  ////UI
  return (
    <>
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
