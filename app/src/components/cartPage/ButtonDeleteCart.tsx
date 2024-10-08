import { Button } from "@mui/material";
import { AppDispatch, useAppDispatch } from "../../redux/store";
import { removeAllFromCart } from "../../redux/cart/cartSlice";

export const ButtonDeleteCart = () => {
  //
  ////DATA
  const dispatch: AppDispatch = useAppDispatch();

  ////UI
  return (
    <>
      <Button
        variant="text"
        sx={{
          padding: "20px",
          color: "red",
          cursor: "pointer",
        }}
        onClick={() => dispatch(removeAllFromCart())}
      >
        Delete Cart
      </Button>
    </>
  );
};
