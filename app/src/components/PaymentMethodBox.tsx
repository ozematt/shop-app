import { Box, Button, Paper, Typography } from "@mui/material";
import { usePaymentMethod } from "../lib/hooks/usePaymentMethod";
import { FinalizationTitle } from "./FinalizationTitle";
import { PaymentMethodButton } from "./PaymentMethodButton";
import { CardAddSuccess } from "./CardAddSuccess";
import { CardNumber } from "./creditCardFields/CardNumber";
import { ValidThru } from "./creditCardFields/ValidThru";
import { CVV } from "./creditCardFields/CVV";

export const PaymentMethod = () => {
  //
  ////DATA
  const {
    addClicked,
    cardFields,
    errors,
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
          <PaymentMethodButton
            text={"Pay on delivery"}
            method={"payOnDelivery"}
            handleButtonClick={handlePayOnDelivery}
          />
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

          {/* CREDIT CARD ADDED SUCCESSFULLY  */}
          {addClicked ? (
            <CardAddSuccess handleShowCardField={handleShowCardField} />
          ) : null}

          {/* CARD FIELDS SHOW */}
          {cardFields ? (
            <Box>
              <Typography variant="h6" sx={{ margin: "30px 0 15px 0" }}>
                Enter your Card:
              </Typography>
              <CardNumber />
              <Box>
                <ValidThru />
                <CVV />
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
