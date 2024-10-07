import { CATEGORIES } from "../constant";

const fetchCategories = async (): Promise<string[]> => {
  const response = await fetch(CATEGORIES);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const apiResponse: string[] = await response.json();
  return apiResponse;
};
export default fetchCategories;
