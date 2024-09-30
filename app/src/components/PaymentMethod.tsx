import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CreditCardIcon from "@mui/icons-material/CreditCard";
// import { useState } from "react";
// import { type } from '../redux/store';
import { useFormContext } from "react-hook-form";
import { Address } from "../pages/Finalization";

export const PaymentMethod = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<Address>();
  //   const [paymentMethod, setPaymentMethod] = useState<string>("");

  //   const handlePayOnDelivery = (event: React.MouseEvent<HTMLButtonElement>) => {
  //     const value = event.currentTarget.value;
  //     setPaymentMethod(value);
  //   };

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
            // onClick={handlePayOnDelivery}
          >
            pay on delivery
          </Button>

          <Button
            variant="outlined"
            value="paymentCard"
            sx={{ width: "200px" }}
            startIcon={<CreditCardIcon />}
            // onClick={handlePayOnDelivery}
          >
            payment card
          </Button>
          {/* CREDIT CARD NUMBER */}
          <Box sx={{}}>
            <Typography variant="h6" sx={{ marginTop: "30px" }}>
              Enter your Card:
            </Typography>
            <TextField
              sx={{ width: "400px" }}
              type="number"
              label="Credit card number"
              variant="outlined"
              margin="dense"
              {...register("creditCard.number", {
                minLength: {
                  value: 14,
                  message: "Credit card number required 14 characters",
                },
                required: "Credit card number is required",
              })}
              error={!!errors.creditCard?.number}
              helperText={errors.creditCard?.number?.message?.toString()}
            />
            <Box>
              <TextField
                sx={{ marginRight: "10px" }}
                label="Valid Thru"
                variant="outlined"
                margin="dense"
                {...register("creditCard.date", {
                  pattern: {
                    value: /(0[1-9]|1[0-2])\/[0-9]{2}/,
                    message: "Invalid date. Use MM/YY format.",
                  },
                  required: "Valid Thru is required",
                })}
                error={!!errors.creditCard?.date}
                helperText={errors.creditCard?.date?.message?.toString()}
              />
              <TextField
                type="password"
                label="CVV"
                variant="outlined"
                margin="dense"
                {...register("creditCard.CVV", {
                  maxLength: {
                    value: 3,
                    message: "CVV must have 3 characters",
                  },
                  required: "CVV is required",
                })}
                error={!!errors.creditCard?.CVV}
                helperText={errors.creditCard?.CVV?.message?.toString()}
              />
            </Box>
            <Button
              variant="contained"
              sx={{ marginTop: "20px", width: "250px" }}
            >
              Add Card
            </Button>
          </Box>
        </Box>
      </Paper>
    </>
  );
};
