const fetchProducts = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData?.message || "Failed to fetch products");
    }
    return await response.json();
  } catch (error: any) {
    console.error("Error during fetch products:", error.message);
    throw error;
  }
};

export default fetchProducts;
