import { Box, Button, Container, CssBaseline } from "@mui/material";

import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { AddressBox } from "../components/AddressBox";
import { PaymentMethod } from "../components/PaymentMethod";

export interface Address {
  name: string;
  surname: string;
  email: string;
  phone: number | null;
  street: string;
  houseNumber: number | null;
  apartmentNumber: number | null;
  zipCode: number | null;
  city: string;
  payOnDelivery: boolean | null;
  creditCard: {
    number: number | null;
    date: number | null;
    CVV: number | null;
  };
}

export const Finalization = () => {
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
      creditCard: {
        number: null,
        date: null,
        CVV: null,
      },
    },
  });

  const onSubmit: SubmitHandler<Address> = (data) => {
    console.log(data);
  };

  return (
    <>
      <FormProvider {...methods}>
        <CssBaseline />
        <Container maxWidth="xl">
          <Box component="form" onSubmit={methods.handleSubmit(onSubmit)}>
            <AddressBox />
            <PaymentMethod />
            <Button
              variant="contained"
              type="submit"
              sx={{ marginTop: "30px", width: "400px" }}
            >
              Confirm
            </Button>
          </Box>
        </Container>
      </FormProvider>
    </>
  );
};
