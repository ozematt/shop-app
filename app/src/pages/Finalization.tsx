import { Box, Button, Container, CssBaseline, Paper } from "@mui/material";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { AddressBox } from "../components/AddressBox";
import { PaymentMethod } from "../components/PaymentMethod";
import { Address } from "../types/addressTypes";

export const Finalization = () => {
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

    console.log("Form data: ", data);
  };
  ////UI
  return (
    <>
      <FormProvider {...methods}>
        <CssBaseline />
        <Container maxWidth="xl">
          <Box component="form" onSubmit={methods.handleSubmit(onSubmit)}>
            <AddressBox />
            <PaymentMethod />
            <Paper
              sx={{
                margin: "14px 7px 0 0",
                padding: "20px",
              }}
            >
              <Button
                variant="contained"
                type="submit"
                sx={{ width: "400px", height: "50px" }}
              >
                Confirm
              </Button>
            </Paper>
          </Box>
        </Container>
      </FormProvider>
    </>
  );
};
