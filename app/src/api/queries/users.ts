import { USERS } from "../constant";

const usersFetch = async () => {
  try {
    const response = await fetch(USERS);
    if (!response.ok) {
      throw new Error("Network response was not ok" + response.statusText);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("There has been a problem with fetch", error);
  }
};

export default usersFetch;
