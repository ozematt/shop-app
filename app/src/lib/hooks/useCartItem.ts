import { useCallback } from "react";
import { removeFromCart, updateCart } from "../../redux/cart/cartSlice";
import { AppDispatch, useAppDispatch } from "../../redux/store";
import { CartProduct } from "../types";

export const useCartItem = () => {
  //
  ////DATA
  const dispatch: AppDispatch = useAppDispatch();

  ////LOGIC
  // increment item quantity
  const handleIncrementItemQuantity = useCallback(
    (item: CartProduct) => {
      dispatch(
        updateCart({
          id: item.id,
          changes: { pieces: item.pieces + 1 },
        })
      );
    },
    [dispatch]
  );

  // decrement item quantity
  const handleDecrementItemQuantity = useCallback(
    (item: CartProduct) => {
      if (item.pieces > 1) {
        dispatch(
          updateCart({
            id: item.id,
            changes: { pieces: item.pieces - 1 },
          })
        );
      } else {
        dispatch(removeFromCart(item.id));
      }
    },
    [dispatch]
  );

  // remove item
  const handleRemoveFromCart = useCallback(
    (itemId: number) => {
      dispatch(removeFromCart(itemId));
    },
    [dispatch]
  );

  return {
    handleIncrementItemQuantity,
    handleDecrementItemQuantity,
    handleRemoveFromCart,
  };
};
