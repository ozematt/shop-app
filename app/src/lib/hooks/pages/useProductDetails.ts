import { useNavigate, useParams } from "react-router-dom";
import { AppDispatch, RootState, useAppDispatch } from "../../../redux/store";
import { useSelector } from "react-redux";
import { type Product } from "../../types";
import { addToCart } from "../../../redux/cart/cartSlice";
import { useCallback } from "react";
import { useMediaQuery } from "@mui/material";

export const useProductDetails = () => {
  //
  ////DATA
  const { id } = useParams<{ id: string }>();
  const dispatch: AppDispatch = useAppDispatch();
  const navigate = useNavigate();
  const isSmallScreen = useMediaQuery("(max-width:1100px)");
  const isSmallerScreen = useMediaQuery("(max-width:875px)");

  // authorization state
  const username = useSelector((state: RootState) => state.user.username);
  const auth = !!username;

  // selected product
  const product = useSelector((state: RootState) =>
    state.products.items.find((item) => item.id === Number(id))
  );

  ////LOGIC
  const handleAddToCartClick = useCallback(
    (item: Product) => {
      auth ? dispatch(addToCart(item)) : navigate("/login");
    },
    [navigate, auth, dispatch]
  );

  return {
    product,
    handleAddToCartClick,
    isSmallScreen,
    isSmallerScreen,
    navigate,
  };
};
