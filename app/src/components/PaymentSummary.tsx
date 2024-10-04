import { Box, Button, Paper, Typography } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { Address } from "../lib/types/addressTypes";
import { useSelector } from "react-redux";
// import { AppDispatch, useAppDispatch } from "../redux/store";
import { CartItem } from "./CartItem";
import { selectAllCart } from "../redux/cart/cartSlice";

// import { useNavigate } from "react-router-dom";
import { TotalPrice } from "./TotalPrice";

//props type
interface PaymentSummaryProps {
  handleSummaryView: () => void;
}

export const PaymentSummary: React.FC<PaymentSummaryProps> = ({
  handleSummaryView,
}) => {
  const { getValues } = useFormContext<Address>();

  const cart = useSelector(selectAllCart);

  ////LOGIC
  //increment item quantity

  return (
    <>
      <Paper
        sx={{
          marginTop: "90px",
        }}
      >
        {" "}
        <Typography variant="h5" sx={{ padding: "20px" }}>
          PAYMENT SUMMERY:
        </Typography>
      </Paper>
      <Box sx={{ display: "flex" }}>
        <Box>
          {/* SHIPPING DETAILS */}
          <Paper
            sx={{
              margin: "10px 10px 0 0",
              paddingBottom: "20px",
            }}
          >
            <Box>
              {" "}
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography variant="h5" sx={{ padding: "20px 0 0 20px" }}>
                  1. Shipping details:
                </Typography>{" "}
                <Button
                  onClick={handleSummaryView}
                  variant="outlined"
                  sx={{ margin: "20px 0 0 20px" }}
                >
                  Edit
                </Button>
              </Box>
              <Box sx={{ padding: "10px 0 0 49px" }}>
                {/* ADDRESS SUMMARY */}
                <Box sx={{ marginTop: "15px" }}>
                  <p> Name and surname:</p>
                  <Typography variant="h5">
                    {" "}
                    {getValues().name} {getValues().surname}
                  </Typography>
                </Box>
                <Box sx={{ marginTop: "15px" }}>
                  <p>Delivery address:</p>{" "}
                  <Typography variant="h5">
                    {getValues().street} {getValues().houseNumber}
                    {getValues().apartmentNumber &&
                      "/" + getValues().apartmentNumber}
                  </Typography>
                  <Typography variant="h5">
                    {" "}
                    {getValues().zipCode} {getValues().city}
                  </Typography>
                </Box>
                <Box sx={{ marginTop: "15px", display: "flex", gap: "30px" }}>
                  <Box>
                    <p>Email:</p>{" "}
                    <Typography variant="h5">{getValues().email}</Typography>
                  </Box>
                  <Box>
                    <p>Phone number:</p>
                    <Typography variant="h5"> {getValues().phone}</Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Paper>

          {/* PAYMENT METHOD */}
          <Paper
            sx={{
              margin: "10px 10px 0 0",
              paddingBottom: "20px",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography variant="h5" sx={{ padding: "20px 0 0 20px" }}>
                2. Payment method:
              </Typography>
              <Button
                onClick={handleSummaryView}
                variant="outlined"
                sx={{ margin: "20px 0 0 20px" }}
              >
                Edit
              </Button>
            </Box>
            <Typography
              variant="h6"
              sx={{ padding: "20px 0 0 20px", marginLeft: "29px" }}
            >
              {getValues().payOnDelivery && "Payable on delivery."}{" "}
              {getValues().paymentCard && "Payable by card."}
            </Typography>
          </Paper>

          {/* PRODUCTS TO BUY */}
          <Paper
            sx={{
              margin: "10px 10px 0 0",
            }}
          >
            <Typography variant="h5" sx={{ padding: "20px 0 0 20px" }}>
              3. Products to buy:
            </Typography>
            {cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </Paper>
        </Box>
        <TotalPrice
          title={"Total amount to be paid:"}
          buttonText={"Pay"}
          buttonType={"submit"}
        />
      </Box>
    </>
  );
};
