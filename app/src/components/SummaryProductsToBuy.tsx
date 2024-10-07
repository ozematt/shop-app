import { Paper, Typography } from "@mui/material";
import { CartItem } from "./CartItem";
import { useSelector } from "react-redux";
import { selectAllCart } from "../redux/cart/cartSlice";

export const SummaryProductsToBuy = () => {
  //
  ////DATA
  const cart = useSelector(selectAllCart);

  ////UI
  return (
    <>
      <Paper
        sx={{
          margin: "10px 0 10px 0",
          padding: "20px 0 30px 20px",
          width: "100%",
          maxWidth: "950px",
        }}
      >
        <Typography variant="h5" sx={{ padding: "20px 0 0 20px" }}>
          3. Products to buy:
        </Typography>
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </Paper>
    </>
  );
};
