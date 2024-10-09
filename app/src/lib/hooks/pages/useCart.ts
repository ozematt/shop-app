import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectAllCart } from "../../../redux/cart/cartSlice";
import { useMediaQuery } from "@mui/material";

export const useCart = () => {
  //
  ////DATA
  const navigate = useNavigate();
  // cart state
  const cart = useSelector(selectAllCart);
  const isSmallScreen = useMediaQuery("(max-width:1100px)");

  ////LOGIC
  // handle finalization view
  const handleBuyButton = () => {
    navigate("/finalization");
  };

  return { cart, isSmallScreen, handleBuyButton };
};
