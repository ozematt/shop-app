import { Paper, Typography } from "@mui/material";
import { CartItem } from "../cartPage/CartItem";
import { useSummaryProductsToBuy } from "../../lib/hooks/finalizationPageSummary/useSummaryProductsToBuy";

export const SummaryProductsToBuy = () => {
  //
  ////DATA
  const { cart } = useSummaryProductsToBuy();

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
