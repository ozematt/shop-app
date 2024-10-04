import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import { usePaymentMethod } from "../lib/hooks/usePaymentMethod";
import { FinalizationTitle } from "./FinalizationTitle";
import { PaymentMethodButton } from "./PaymentMethodButton";

export const PaymentMethod = () => {
  ////DATA
  const {
    addClicked,
    cardFields,
    errors,
    register,
    watch,
    handlePayOnDelivery,
    handleShowCardField,
    handleAddCardButton,
  } = usePaymentMethod();

  ////UI
  return (
    <>
      <Paper
        sx={{
          margin: "10px 7px 0 0",
          padding: "20px",
        }}
      >
        <FinalizationTitle text={"2. Choose payment method:"} />
        <Box
          sx={{
            padding: "20px",
          }}
        >
          {/* PAY PO DELIVERY BUTTON */}
          <PaymentMethodButton
            text={"Pay on delivery"}
            method={"payOnDelivery"}
            handleButtonClick={handlePayOnDelivery}
          />

          {/* PAYMENT CARD BUTTON */}
          <PaymentMethodButton
            text={"Payment card"}
            method={"paymentCard"}
            handleButtonClick={handleShowCardField}
          />

          {/* ERROR MESSAGE */}
          {errors.payOnDelivery && (
            <Typography color="error" sx={{ marginTop: "10px" }}>
              {errors.payOnDelivery.message}
            </Typography>
          )}

          {/* PAYMENT CARD ADDED SUCCESSFULLY  */}
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

          {/* CARD FIELDS */}
          {cardFields ? (
            <Box sx={{}}>
              <Typography variant="h6" sx={{ margin: "30px 0 15px 0" }}>
                Enter your Card:
              </Typography>

              {/* CARD NUMBER */}
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
                {/* CARD DATE */}
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
                {/* CARD CVV */}
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
              {/* ERROR MESSAGE */}
              {errors.paymentCard && (
                <Typography color="error" sx={{ marginTop: "10px" }}>
                  {errors.paymentCard.message}
                </Typography>
              )}
              {/* ADD CARD BUTTON */}
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
