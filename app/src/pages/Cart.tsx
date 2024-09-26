import { Box, Container, CssBaseline, Paper, Typography } from "@mui/material";
import emptyCart from "../assets/Empty_cart_image.png";
import { useSelector } from "react-redux";
import { selectAllCart } from "../features/cart/cartSlice";

export const Cart = () => {
  //when cart is empty
  const emptyCartView = (
    <>
      <Paper sx={{ margin: "80px 30px 0 0" }}>
        <Typography variant="h6" sx={{ marginLeft: "15px", padding: "5px" }}>
          Your cart is empty
        </Typography>
      </Paper>

      <img
        src={emptyCart}
        style={{
          margin: "120px 0 0 80px",
          width: "900px",
          height: "700px",
        }}
      />
    </>
  );

  const cart = useSelector(selectAllCart);
  console.log(cart.length);

  return (
    <>
      <CssBaseline />
      <Container maxWidth="xl">
        <Box sx={{ height: "100vh" }}>
          {cart.length > 0 ? (
            <div>
              <div
                style={{
                  margin: "90px 30px 0 0",
                  display: "flex",
                  gap: "7px",
                }}
              >
                <Box
                  sx={{
                    width: "300px",
                    height: "5px",
                    backgroundColor: "#DE7F1F",
                  }}
                />
                <Box
                  sx={{
                    width: "300px",
                    height: "5px",
                    backgroundColor: "#DE7F1F",
                  }}
                />
                <Box
                  sx={{
                    width: "300px",
                    height: "5px",
                    backgroundColor: "#DE7F1F",
                  }}
                />
              </div>
              <Paper sx={{ marginTop: "20px" }}>
                <Typography
                  variant="h6"
                  sx={{ marginLeft: "15px", padding: "5px" }}
                >
                  Your Cart:
                </Typography>
              </Paper>
              <div style={{ display: "flex", gap: "7px" }}>
                <Paper
                  sx={{
                    flexGrow: "2",
                    height: "200px",
                    width: "100%",
                    maxWidth: "900px",
                    margin: "14px 7px 0 0",
                  }}
                ></Paper>
                <Paper
                  sx={{ flexGrow: "1", minWidth: "100px", marginTop: "14px" }}
                ></Paper>
              </div>
            </div>
          ) : (
            emptyCartView
          )}
        </Box>
      </Container>
    </>
  );
};
