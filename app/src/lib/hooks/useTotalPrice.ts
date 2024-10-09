import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "@mui/material";

export const useTotalPrice = () => {
  const total = useSelector((state: RootState) => state.cart.total);
  const navigate = useNavigate();

  const isSmallScreen = useMediaQuery("(max-width:1100px)");

  return { total, navigate, isSmallScreen };
};
