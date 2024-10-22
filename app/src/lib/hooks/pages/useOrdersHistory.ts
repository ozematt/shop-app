import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { useEffect, useState } from "react";
import supabase from "../../../services/supabase";

export const useOrdersHistory = () => {
  //
  ////DATA
  const [orders, setOrders] = useState([]);

  const username = useSelector((state: RootState) => state.user.username);

  useEffect(() => {
    const fetchOrders = async () => {
      const { data, error } = await supabase
        .from("usersOrders")
        .select()
        .eq("user", username)
        .single();
      if (data) {
        setOrders(data.orders);
      }
      if (error) {
        console.log(error);
      }
    };
    fetchOrders();
  }, [username]);

  return { orders };
};
