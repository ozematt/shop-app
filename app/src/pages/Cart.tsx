import {
  Box,
  Button,
  Container,
  CssBaseline,
  Paper,
  Typography,
} from "@mui/material";
import emptyCart from "../assets/Empty_cart_image.png";
import { useSelector } from "react-redux";
import {
  removeAllFromCart,
  removeFromCart,
  selectAllCart,
  updateCart,
} from "../redux/cart/cartSlice";

import { AppDispatch, RootState, useAppDispatch } from "../redux/store";
import { CartProduct } from "../types/cartTypes";
import { useNavigate } from "react-router-dom";
import { CartItem } from "../components/CartItem";

// empty cart view
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

export const Cart = () => {
  ////DATA
  const dispatch: AppDispatch = useAppDispatch();
  const navigate = useNavigate();

  //cart state
  const cart = useSelector(selectAllCart);
  //total price
  const total = useSelector((state: RootState) => state.cart.total);

  ////LOGIC
  //increment item quantity
  const handleIncrementItemAmount = (item: CartProduct) => {
    dispatch(
      updateCart({
        id: item.id,
        changes: { pieces: item.pieces + 1 },
      })
    );
  };

  //decrement item quantity
  const handleDecrementItemAmount = (item: CartProduct) => {
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
  };

  //handle finalization view
  const handleBuyButton = () => {
    navigate("/finalization");
  };

  ////UI
  return (
    <>
      <CssBaseline />
      <Container maxWidth="xl">
        <Box sx={{ height: "100vh" }}>
          {cart.length > 0 ? (
            <div style={{ display: "flex" }}>
              {/*  buying stage  */}
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

                {/* cart title */}
                <Paper
                  sx={{
                    marginTop: "20px",
                    width: "100%",
                    maxWidth: "914px",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ marginLeft: "15px", padding: "5px" }}
                  >
                    Your Cart:
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      marginRight: "15px",
                      padding: "5px",
                      color: "red",
                      cursor: "pointer",
                    }}
                    onClick={() => dispatch(removeAllFromCart())}
                  >
                    Delete Cart
                  </Typography>
                </Paper>
                {cart.map((item) => (
                  <CartItem
                    key={item.id}
                    item={item}
                    handleDecrementItemAmount={handleDecrementItemAmount}
                    handleIncrementItemAmount={handleIncrementItemAmount}
                  />
                ))}
              </div>
              {/* price field */}
              <Paper
                sx={{
                  flexGrow: "1",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "357px",
                  marginTop: "114px",
                  position: "relative",
                }}
              >
                <Typography variant="h4" sx={{ marginBottom: "30px" }}>
                  Total Price: {total}
                </Typography>
                <Button
                  variant="contained"
                  onClick={handleBuyButton}
                  sx={{
                    backgroundColor: "#DE7F1F",
                    padding: "20px",
                    width: "300px",
                  }}
                >
                  Buy
                </Button>
              </Paper>
            </div>
          ) : (
            emptyCartView
          )}
        </Box>
      </Container>
    </>
  );
};
