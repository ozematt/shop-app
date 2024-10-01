import { Box, Button, Paper, Typography } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { Address } from "../types/addressTypes";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

export const PaymentSummary = () => {
  const { getValues } = useFormContext<Address>();
  console.log(getValues());
  const cart = useSelector((state: RootState) => state.cart);

  return (
    <>
      <Paper
        sx={{
          margin: "14px 7px 0 0",
        }}
      >
        {" "}
        <Typography variant="h5" sx={{ padding: "20px" }}>
          PAYMENT SUMMERY:
        </Typography>
      </Paper>

      <Paper
        sx={{
          margin: "14px 7px 0 0",
          paddingBottom: "20px",
        }}
      >
        <Box>
          {" "}
          <Typography variant="h5" sx={{ padding: "20px 0 0 20px" }}>
            1. Shipping details:
          </Typography>
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

            {/* RETURN TO INPUT FIELDS */}
            {/* <Button
              onClick={handleAddressEdit}
              variant="outlined"
              sx={{ marginTop: "30px" }}
            >
              Edit
            </Button> */}
          </Box>
        </Box>
      </Paper>
      <Paper
        sx={{
          margin: "14px 7px 0 0",
          paddingBottom: "20px",
        }}
      >
        <Typography variant="h5" sx={{ padding: "20px 0 0 20px" }}>
          2. Payment method:{"    "}
          {getValues().payOnDelivery && "Payable on delivery."}{" "}
          {getValues().paymentCard && "Payable by card."}
        </Typography>
      </Paper>
      <Paper></Paper>
    </>
  );
};
