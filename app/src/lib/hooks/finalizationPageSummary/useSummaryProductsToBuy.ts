import { useSelector } from "react-redux";
import { selectAllCart } from "../../../redux/cart/cartSlice";

export const useSummaryProductsToBuy = () => {
  //
  ////DATA
  const cart = useSelector(selectAllCart);

  return { cart };
};
