import {
  Box,
  Button,
  Container,
  CssBaseline,
  Paper,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";
import {
  removeAllFromCart,
  removeFromCart,
  selectAllCart,
  updateCart,
} from "../redux/cart/cartSlice";

import { AppDispatch, RootState, useAppDispatch } from "../redux/store";
import { CartProduct } from "../lib/types/cartTypes";
import { useNavigate } from "react-router-dom";
import { CartItem } from "../components/CartItem";
import { CartEmpty } from "../components/CartEmpty";
import { TotalPrice } from "../components/TotalPrice";

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
            <Box sx={{ display: "flex" }}>
              {/*  buying stage  */}
              <Box>
                {/* CART TITLE */}
                <Paper
                  elevation={3}
                  sx={{
                    margin: "90px 0 10px 0",
                    width: "100%",
                    maxWidth: "914px",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography variant="h5" sx={{ padding: "20px" }}>
                    Your Cart:
                  </Typography>

                  {/* DELETE BUTTON */}
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
                </Paper>

                {cart.map((item) => (
                  <CartItem
                    key={item.id}
                    item={item}
                    handleDecrementItemAmount={handleDecrementItemAmount}
                    handleIncrementItemAmount={handleIncrementItemAmount}
                  />
                ))}
              </Box>

              {/* TOTAL PRICE */}
              <TotalPrice
                handleButtonClick={handleBuyButton}
                title={"Total price:"}
                buttonText={"Buy"}
              />
            </Box>
          ) : (
            <CartEmpty />
          )}
        </Box>
      </Container>
    </>
  );
};
