import { Box, Container, CssBaseline, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import { selectAllCart } from "../redux/cart/cartSlice";
import { useNavigate } from "react-router-dom";
import { CartItem } from "../components/cartPage/CartItem";
import { CartEmpty } from "../components/cartPage/CartEmpty";
import { TotalPrice } from "../components/TotalPrice";
import { TitleBar } from "../components/TitleBar";

export const Cart = () => {
  //
  ////DATA
  const navigate = useNavigate();
  // cart state
  const cart = useSelector(selectAllCart);
  const isSmallScreen = useMediaQuery("(max-width:1100px)");

  ////LOGIC
  // handle finalization view
  const handleBuyButton = () => {
    navigate("/finalization");
  };

  ////UI
  return (
    <>
      <CssBaseline />
      <Container maxWidth="xl" sx={{ display: "flex" }}>
        {cart.length > 0 ? (
          <>
            <Box sx={{ width: "100%" }}>
              <TitleBar title={"Your Cart:"} buttonShow={true} />
              {cart.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
              {isSmallScreen ? (
                <TotalPrice
                  handleButtonClick={handleBuyButton}
                  title={"Total price:"}
                  buttonText={"Buy"}
                />
              ) : null}
            </Box>
            {isSmallScreen ? null : (
              <TotalPrice
                handleButtonClick={handleBuyButton}
                title={"Total price:"}
                buttonText={"Buy"}
              />
            )}
          </>
        ) : (
          <CartEmpty />
        )}
      </Container>
    </>
  );
};
