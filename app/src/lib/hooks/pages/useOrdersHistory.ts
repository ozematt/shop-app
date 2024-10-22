import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

export const useOrdersHistory = () => {
  //
  ////DATA
  const orders = useSelector((state: RootState) => state.user.orders);

  return { orders };
};
