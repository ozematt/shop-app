import { useSelector } from "react-redux";
import { Orders } from "../../types/ordersTypes";
import { RootState } from "../../../redux/store";

export const useOrdersHistory = () => {
  //
  ////DATA
  const orders: Orders[] = useSelector((state: RootState) => state.user.orders);
  return { orders };
};
