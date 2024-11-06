import { Orders } from "../../lib/types";
import supabase from "../../services/supabase";

const addOrders = async (newOrders: Orders[], username: string | null) => {
  if (!username) {
    console.error("Username cannot be null or undefined.");
    return;
  }

  // fetching data if user exist in database
  const { data: existingData, error: fetchError } = await supabase
    .from("usersOrders")
    .select("orders")
    .eq("user", username)
    .single();

  if (fetchError) {
    console.error("Error fetching existing orders:", fetchError);
  }

  // update user data if exist, if not add new data
  const currentOrders = existingData?.orders || [];
  const updatedOrders = [...currentOrders, ...newOrders];

  //use upsert, combine of update and insert
  const { data, error } = await supabase
    .from("usersOrders")
    .upsert({ user: username, orders: updatedOrders }, { onConflict: "user" })
    .select();
  if (data) {
    console.log("User orders successfully added or updated:", data);
  }
  if (error) {
    console.error("Error adding/updating user orders:", error);
  }
};

export default addOrders;
