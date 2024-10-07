import { AUTHORIZATION } from "../constant";

const userCheck = async (userData: { username: string; password: string }) => {
  try {
    const response = await fetch(AUTHORIZATION, {
      method: "POST",
      body: JSON.stringify({
        username: userData.username,
        password: userData.password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData?.message || "Login failed");
    }
    return await response.json();
  } catch (error: any) {
    console.error("Error during login:", error.message);
    throw error;
  }
};

export default userCheck;
