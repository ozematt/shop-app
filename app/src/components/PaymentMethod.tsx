import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CreditCardIcon from "@mui/icons-material/CreditCard";
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
    watch,
    clearErrors,
    getValues,
    setError,
  } = useFormContext<Address>();

  //set pay on delivery method
  const handlePayOnDelivery = () => {
    setValue("payOnDelivery", true);
    setValue("paymentCard", false);
    setValue("cardCVV", null);
    setValue("cardDate", null);
    setValue("cardNumber", null);
    setCardFields(false);
    setAddClicked(false);
    clearErrors(["payOnDelivery"]);
  };

  //show card fields
  const handleShowCardField = () => {
    setValue("payOnDelivery", false);
    setCardFields(true);
    setAddClicked(false);
  };

  //set card
  const handleAddCardButton = () => {
    const values: Address = getValues() as Address;
    const requiredFields: (keyof Address)[] = [
      "cardNumber",
      "cardDate",
      "cardCVV",
    ];
    const allFieldsFilled = requiredFields.every((field) => {
      const value = values[field];
      // check if the value is not empty and if it is a string, remove whitespace
      return value && (typeof value === "string" ? value.trim() !== "" : true);
    });

    if (allFieldsFilled) {
      setValue("paymentCard", true);
      setCardFields(false);
      setAddClicked(true);
      clearErrors(["paymentCard"]);
    } else {
      setError("paymentCard", {
        type: "manual",
        message: "Please fill in the fields.",
      });
    }
  };

  return (
    <>
      <Paper
        sx={{
          margin: "14px 7px 0 0",
        }}
      >
        <Typography variant="h5" sx={{ marginLeft: "15px", padding: "5px" }}>
          2. Choose payment method:
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
            variant={watch().payOnDelivery ? "contained" : "outlined"}
            value="payOnDelivery"
            startIcon={<AttachMoneyIcon />}
            sx={{ width: "250px", padding: "15px", marginRight: "10px" }}
            onClick={handlePayOnDelivery}
          >
            pay on delivery
          </Button>

          <Button
            variant={watch().paymentCard ? "contained" : "outlined"}
            value="paymentCard"
            sx={{ width: "250px", padding: "15px" }}
            startIcon={<CreditCardIcon />}
            onClick={handleShowCardField}
          >
            payment card
          </Button>
          {errors.payOnDelivery && (
            <Typography color="error" sx={{ marginTop: "10px" }}>
              {errors.payOnDelivery.message}
            </Typography>
          )}

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
                {...register("cardNumber", {
                  minLength: {
                    value: 14,
                    message: "Credit card number required 14 characters",
                  },
                  required: "Credit card number is required",
                })}
                error={!!errors.cardNumber}
                helperText={errors.cardNumber?.message?.toString()}
              />
              <Box>
                <TextField
                  sx={{ marginRight: "10px" }}
                  label="Valid Thru"
                  variant="outlined"
                  margin="dense"
                  {...register("cardDate", {
                    pattern: {
                      value: /(0[1-9]|1[0-2])\/[0-9]{2}/,
                      message: "Invalid date. Use MM/YY format.",
                    },
                    required: "Valid Thru is required",
                  })}
                  error={!!errors.cardDate}
                  helperText={errors.cardDate?.message?.toString()}
                />
                <TextField
                  type="password"
                  label="CVV"
                  variant="outlined"
                  margin="dense"
                  {...register("cardCVV", {
                    minLength: {
                      value: 3,
                      message: "CVV must have 3 characters",
                    },
                    maxLength: {
                      value: 3,
                      message: "CVV must have 3 characters",
                    },
                    required: "CVV is required",
                    pattern: {
                      value: /^[0-9]+$/,
                      message: "CVV must be numeric",
                    },
                  })}
                  error={!!errors.cardCVV}
                  helperText={errors.cardCVV?.message?.toString()}
                />
              </Box>
              {errors.paymentCard && (
                <Typography color="error" sx={{ marginTop: "10px" }}>
                  {errors.paymentCard.message}
                </Typography>
              )}
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
