import { useMediaQuery, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { AppDispatch, useAppDispatch } from "../../redux/store";
import { type Product } from "../types";
import { addToCart } from "../../redux/cart/cartSlice";
import { useCallback } from "react";
import { useAuthorization } from "./pages/useAuthorization";

export const useProductItem = () => {
  //
  ////DATA
  const theme = useTheme();
  const navigate = useNavigate();
  const dispatch: AppDispatch = useAppDispatch();

  const isSmallScreen = useMediaQuery("(max-width:1533px)");
  const isMobile = useMediaQuery("(max-width:700px)");

  // authorization state
  const auth = useAuthorization();

  // item box style
  const productStyle = () => ({
    padding: "10px",
    height: "300px",
    maxWidth: isSmallScreen ? "990px" : "720px",
    width: "100%",
    display: "flex",
    gap: "10px",
    marginTop: "15px",
    marginRight: isSmallScreen ? 0 : "15px",
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

  ////LOGIC
  // add to cart when user is logged in
  const handleAddToCartClick = useCallback(
    (event: React.MouseEvent, item: Product) => {
      event.stopPropagation(); // for bottom use

      auth ? dispatch(addToCart(item)) : navigate("/login");
    },
    [navigate, auth]
  );

  return {
    productStyle,
    handleAddToCartClick,
    navigate,
    isSmallScreen,
    isMobile,
  };
};
