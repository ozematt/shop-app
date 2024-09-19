import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import fetchCategories from "../../api/queries/categories";

export const Category: React.FC = () => {
  //DATA
  const [selectedCategories, setSelectedCategories] = useState<string>("");

  const { data: categories } = useQuery<string[]>({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });

  //LOGIC
  const handleChange = (event: SelectChangeEvent<string>) => {
    setSelectedCategories(event.target.value as string);
  };

  //UI
  return (
    <>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel>categories</InputLabel>
        <Select
          labelId="select-category-label"
          id="select-category"
          value={selectedCategories}
          label="Category"
          onChange={handleChange}
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
