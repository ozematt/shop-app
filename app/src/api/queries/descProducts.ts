import { Product } from "./products";

const fetchDescProducts = async (): Promise<Product[]> => {
  const response = await fetch("https://fakestoreapi.com/products?sort=desc");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const apiResponse: Product[] = await response.json();
  return apiResponse;
};
export default fetchDescProducts;
