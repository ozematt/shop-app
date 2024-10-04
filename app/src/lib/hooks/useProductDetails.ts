import { useNavigate, useParams } from "react-router-dom";
import { AppDispatch, RootState, useAppDispatch } from "../../redux/store";
import { useSelector } from "react-redux";
import { Product } from "../types/productTypes";
import { addToCart } from "../../redux/cart/cartSlice";
import { useCallback } from "react";

export const useProductDetails = () => {
  //
  ////DATA
  const { id } = useParams<{ id: string }>();
  const dispatch: AppDispatch = useAppDispatch();
  const navigate = useNavigate();

  // authorization state
  const auth = useSelector((state: RootState) => state.user.isLoggedIn);

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

  return { product, handleAddToCartClick, navigate };
};
