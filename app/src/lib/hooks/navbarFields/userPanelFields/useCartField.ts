import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";

export const useCartField = () => {
  //
  ////DATA
  const quantity = useSelector((state: RootState) => state.cart.quantity);

  return { quantity };
};
