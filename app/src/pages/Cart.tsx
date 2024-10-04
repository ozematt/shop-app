import { Box, Container, CssBaseline } from "@mui/material";
import { useSelector } from "react-redux";
import { selectAllCart } from "../redux/cart/cartSlice";
import { useNavigate } from "react-router-dom";
import { CartItem } from "../components/CartItem";
import { CartEmpty } from "../components/CartEmpty";
import { TotalPrice } from "../components/TotalPrice";
import { TitleBar } from "../components/TitleBar";

export const Cart = () => {
  //
  ////DATA
  const navigate = useNavigate();
  // cart state
  const cart = useSelector(selectAllCart);

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
            </Box>
            <TotalPrice
              handleButtonClick={handleBuyButton}
              title={"Total price:"}
              buttonText={"Buy"}
            />
          </>
        ) : (
          <CartEmpty />
        )}
      </Container>
    </>
  );
};
