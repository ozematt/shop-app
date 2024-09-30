import { Box, Button, Paper, Typography } from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import { useState } from "react";

export const PaymentMethod = () => {
  const [paymentMethod, setPaymentMethod] = useState<string>("");

  const handlePayOnDelivery = (event: React.MouseEvent<HTMLButtonElement>) => {
    const value = event.currentTarget.value;
    setPaymentMethod(value);
  };

  return (
    <>
      <Paper
        sx={{
          margin: "14px 7px 0 0",
          //   height: "100vh",
        }}
      >
        <Typography variant="h5" sx={{ marginLeft: "15px", padding: "5px" }}>
          Choose payment method:
        </Typography>
      </Paper>
      <Paper
        sx={{
          margin: "14px 7px 0 0",
          //   height: "100vh",
        }}
      >
        <Box
          sx={{
            padding: "20px",
          }}
        >
          <Button
            variant="outlined"
            value="payOnDelivery"
            startIcon={<AttachMoneyIcon />}
            sx={{ width: "200px", marginRight: "10px" }}
            onClick={handlePayOnDelivery}
          >
            pay on delivery
          </Button>

          <Button
            variant="outlined"
            value="paymentCard"
            sx={{ width: "200px" }}
            startIcon={<CreditCardIcon />}
            onClick={handlePayOnDelivery}
          >
            payment card
          </Button>
        </Box>
      </Paper>
    </>
  );
};
