import { Box, Paper, Typography } from "@mui/material";
import emptyCart from "../assets/Empty_cart_image.png";

export const CartEmpty = () => {
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Paper sx={{ marginTop: "90px" }}>
          <Typography variant="h5" sx={{ padding: "20px" }}>
            Your cart is empty!
          </Typography>
        </Paper>

        <img
          src={emptyCart}
          style={{
            margin: "90px 0 0 80px",
            height: "600px",
          }}
        />
      </Box>
    </>
  );
};
