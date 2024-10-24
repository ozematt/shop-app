import { AUTHORIZATION } from "../constant";

const userCheck = async (userData: { username: string; password: string }) => {
  try {
    const response = await fetch(AUTHORIZATION, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: userData.username,
        password: userData.password,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData?.message || "Login failed");
    }
    const result = response.json();
    return await result;
  } catch (error: any) {
    console.error("Error during login:", error.message);
    throw error;
  }
};

export default userCheck;
