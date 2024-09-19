import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import React, { useEffect, useState } from "react";

export const Category = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string>("");

  const handleChange = (event: SelectChangeEvent<string>) => {
    setSelectedCategories(event.target.value as string);
  };

  useEffect(() => {
    const fetchCategories = async (): Promise<string[]> => {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products/categories"
        );
        const data: string[] = await response.json();
        return data;
      } catch (error) {
        console.error("Mamy problem", error);
        return [];
      }
    };
    const loadCategories = async () => {
      const data: string[] = await fetchCategories();
      setCategories(data);
    };

    loadCategories();
  }, []);

  return (
    <>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel>Kategorie</InputLabel>
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
