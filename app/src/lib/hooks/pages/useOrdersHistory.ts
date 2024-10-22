import { useSelector } from "react-redux";
import { Orders } from "../../types/ordersTypes";
import { RootState } from "../../../redux/store";
import { useEffect } from "react";
import supabase from "../../../services/supabase";

export const useOrdersHistory = () => {
  //
  ////DATA
  const orders: Orders[] = useSelector((state: RootState) => state.user.orders);

  const username = useSelector((state: RootState) => state.user.username);

  useEffect(() => {
    const fetchOrders = async () => {
      const { data, error } = await supabase
        .from("usersOrders")
        .select()
        .eq("user", username);
      // .single();
      if (data) {
        console.log(data);
      }
      if (error) {
        console.log(error);
      }
    };
    fetchOrders();
  }, [username]);

  return { orders };
};
