import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CreditCardIcon from "@mui/icons-material/CreditCard";
// import { useState } from "react";
// import { type } from '../redux/store';
import { useFormContext } from "react-hook-form";
import { Address } from "../pages/Finalization";
import { useState } from "react";

export const PaymentMethod = () => {
  const [addClicked, setAddClicked] = useState(false);
  const [cardFields, setCardFields] = useState(false);

  const {
    register,
    formState: { errors },
    setValue,
  } = useFormContext<Address>();

  //set pay on delivery method
  const handlePayOnDelivery = () => {
    setValue("payOnDelivery", true);
    setValue("creditCard.CVV", null);
    setValue("creditCard.date", null);
    setValue("creditCard.number", null);
    setCardFields(false);
    setAddClicked(false);
  };

  //show card fields
  const handleShowCardField = () => {
    setValue("payOnDelivery", false);
    setCardFields(true);
    setAddClicked(false);
  };

  //set card
  const handleAddCardButton = () => {
    setCardFields(false);
    setAddClicked(true);
  };

  return (
    <>
      <Paper
        sx={{
          margin: "14px 7px 0 0",
        }}
      >
        <Typography variant="h5" sx={{ marginLeft: "15px", padding: "5px" }}>
          Choose payment method:
        </Typography>
      </Paper>
      <Paper
        sx={{
          margin: "14px 7px 0 0",
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
            sx={{ width: "250px", padding: "15px", marginRight: "10px" }}
            onClick={handlePayOnDelivery}
          >
            pay on delivery
          </Button>

          <Button
            variant="outlined"
            value="paymentCard"
            sx={{ width: "250px", padding: "15px" }}
            startIcon={<CreditCardIcon />}
            onClick={handleShowCardField}
          >
            payment card
          </Button>
          {addClicked ? (
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <Typography variant="h6" sx={{ margin: "30px 0 15px 0" }}>
                Card Added !
              </Typography>
              <Button
                sx={{ margin: "15px 0 0 10px" }}
                onClick={handleShowCardField}
              >
                Edit card
              </Button>
            </Box>
          ) : null}

          {/* CREDIT CARD NUMBER */}
          {cardFields ? (
            <Box sx={{}}>
              <Typography variant="h6" sx={{ margin: "30px 0 15px 0" }}>
                Enter your Card:
              </Typography>

              {/* CARD FIELDS */}
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
                onClick={handleAddCardButton}
              >
                Add Card
              </Button>
            </Box>
          ) : null}
        </Box>
      </Paper>
    </>
  );
};
