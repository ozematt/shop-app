import {
  Box,
  Button,
  Container,
  CssBaseline,
  Paper,
  Typography,
} from "@mui/material";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { AddressBox } from "../components/AddressBox";
import { PaymentMethod } from "../components/PaymentMethod";
import { Address } from "../types/addressTypes";
import { PaymentSummary } from "../components/PaymentSummary";
import { useState } from "react";

export const Finalization = () => {
  const [summaryView, setSummaryView] = useState(false);
  ////DATA
  //useForm with default values
  const methods = useForm<Address>({
    mode: "onBlur",
    defaultValues: {
      name: "",
      surname: "",
      email: "",
      phone: null,
      street: "",
      houseNumber: null,
      apartmentNumber: null,
      zipCode: null,
      city: "",
      payOnDelivery: false,
      paymentCard: false,
      cardNumber: null,
      cardDate: null,
      cardCVV: null,
    },
  });

  ////LOGIC
  //handle data submit
  const onSubmit: SubmitHandler<Address> = (data) => {
    //set error when is no payment method selected
    if (!data.payOnDelivery && !data.paymentCard) {
      methods.setError("payOnDelivery", {
        type: "manual",
        message: "Please select a payment method.",
      });
      return;
    }
    setSummaryView(true);
    console.log("Form data: ", data);
  };
  const handleSummaryView: () => void = () => {
    setSummaryView(!summaryView);
  };
  ////UI
  return (
    <>
      <FormProvider {...methods}>
        <CssBaseline />
        <Container maxWidth="xl">
          <Box component="form" onSubmit={methods.handleSubmit(onSubmit)}>
            {!summaryView ? (
              <>
                <AddressBox />
                <PaymentMethod />
                <Paper
                  sx={{
                    margin: "14px 7px 0 0",
                    paddingBottom: "20px",
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{ padding: "20px", marginBottom: "20px" }}
                  >
                    3. Confirm your information{" "}
                  </Typography>
                  <Button
                    variant="contained"
                    type="submit"
                    sx={{
                      maxWidth: "400px",
                      width: "100%",
                      height: "50px",
                      marginLeft: "20px",
                    }}
                  >
                    Confirm
                  </Button>
                </Paper>{" "}
              </>
            ) : (
              <PaymentSummary handleSummaryView={handleSummaryView} />
            )}
          </Box>
        </Container>
      </FormProvider>
    </>
  );
};
