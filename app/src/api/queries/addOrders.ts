import { Orders } from "../../lib/types/ordersTypes";
import supabase from "../../services/supabase";

const addOrders = async (newOrders: Orders[], username: string | null) => {
  // check if user exist
  const { data: existingData, error: fetchError } = await supabase
    .from("usersOrders")
    .select("orders")
    .eq("user", username)
    .single();

  if (fetchError) {
    // when user not exist
    console.error("Error fetching existing orders:", fetchError);
  }

  // add new order
  const currentOrders = existingData?.orders || []; // optional chaining
  const updatedOrders = [...currentOrders, ...newOrders];

  if (existingData) {
    // user exist - update orders
    const { data: updatedData, error: updateError } = await supabase
      .from("usersOrders")
      .update({ orders: updatedOrders })
      .eq("user", username);

    if (updateError) {
      console.error("Error updating orders:", updateError);
    } else {
      console.log("Orders updated successfully:", updatedData);
    }
  } else {
    // user not exist - send new data
    const { data: newUserData, error: insertError } = await supabase
      .from("usersOrders")
      .insert([{ user: username, orders: updatedOrders }])
      .select();

    if (insertError) {
      console.error("Error inserting new user:", insertError);
    } else {
      console.log("New user added successfully:", newUserData);
    }
  }
};

export default addOrders;
