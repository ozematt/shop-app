import { Box, Paper, Typography } from "@mui/material";
import emptyCart from "../assets/Empty_cart_image.png";

export const CartEmpty = () => {
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Paper sx={{ marginTop: "80px" }}>
          <Typography variant="h5" sx={{ padding: "20px" }}>
            Your cart is empty!
          </Typography>
        </Paper>

        <img
          src={emptyCart}
          style={{
            width: "100%",
            maxWidth: "900px",
            margin: "90px auto",
            height: "auto",
            maxHeight: "600px",
            objectFit: "contain",
          }}
        />
      </Box>
    </>
  );
};
