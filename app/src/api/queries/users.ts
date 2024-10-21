const festchUsers = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/users");
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData?.message || "Failed to fetch users");
    }
  } catch (error: any) {
    console.error("Error during fetch users:", error.message);
  }
};
