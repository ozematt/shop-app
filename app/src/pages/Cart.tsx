import { Container, Paper, Typography } from "@mui/material";
import emptyCart from "../assets/Empty_cart_image.png";

export const Cart = () => {
  return (
    <>
      <Container maxWidth="xl">
        <Paper>
          <div style={{ margin: "80px 30px 0 0" }}>
            <Typography
              variant="h6"
              sx={{ marginLeft: "15px", padding: "5px" }}
            >
              Your cart is empty
            </Typography>
          </div>
        </Paper>

        <img
          src={emptyCart}
          style={{
            margin: "40px 0 0 30px",
            width: "600px",
            height: "100%",
          }}
        />
      </Container>
    </>
  );
};
