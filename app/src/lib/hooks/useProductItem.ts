import { useMediaQuery, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { AppDispatch, RootState, useAppDispatch } from "../../redux/store";
import { useSelector } from "react-redux";
import { Product } from "../types/productTypes";
import { addToCart } from "../../redux/cart/cartSlice";
import { useCallback } from "react";

export const useProductItem = () => {
  //
  ////DATA
  const theme = useTheme();
  const navigate = useNavigate();
  const dispatch: AppDispatch = useAppDispatch();
  const isSmallScreen = useMediaQuery("(max-width:1533px)");

  // authorization state
  const auth = useSelector((state: RootState) => state.user.isLoggedIn);

  // item box style
  const productStyle = () => ({
    padding: "10px",
    height: "300px",
    maxWidth: isSmallScreen ? "990px" : "720px",
    width: "100%",
    display: "flex",
    gap: isSmallScreen ? "50px" : "10px",
    margin: "15px 15px 0 0",
    // border: "none",
    borderRight: "0.5px solid #424242",
    borderBottom: "0.5px solid #424242",
    borderRadius: "8px",
    position: "relative",
    "&:hover": {
      backgroundColor:
        theme.palette.mode === "dark" ? "rgba(255,255,255, 0.05)" : "none",
      boxShadow: 10,
    },
  });

  // add to cart when user is logged in
  const handleAddToCartClick = useCallback(
    (event: React.MouseEvent, item: Product) => {
      event.stopPropagation(); // for bottom use
      auth ? dispatch(addToCart(item)) : navigate("/login");
    },
    [navigate, auth, dispatch]
  );

  return { productStyle, handleAddToCartClick, navigate, isSmallScreen };
};
