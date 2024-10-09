import { Box, Container, CssBaseline } from "@mui/material";
import { CartItem } from "../components/cartPage/CartItem";
import { CartEmpty } from "../components/cartPage/CartEmpty";
import { TotalPrice } from "../components/TotalPrice";
import { TitleBar } from "../components/TitleBar";
import { useCart } from "../lib/hooks/pages/useCart";

export const Cart = () => {
  //
  ////DATA
  const { cart, isSmallScreen, handleBuyButton } = useCart();

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
