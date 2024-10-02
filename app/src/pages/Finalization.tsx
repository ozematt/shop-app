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
import { Address } from "../lib/types/addressTypes";
import { PaymentSummary } from "../components/PaymentSummary";
import { useId, useState } from "react";
import { format } from "date-fns";
import { useSelector } from "react-redux";
import { AppDispatch, RootState, useAppDispatch } from "../redux/store";
import { removeAllFromCart, selectAllCart } from "../redux/cart/cartSlice";
import { addOrder } from "../redux/user/ordersSlice";
import { useNavigate } from "react-router-dom";

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

  //date-fns
  const formatDate = () => {
    const today = new Date();
    return format(today, "dd.MM.yyyy");
  };
  const navigate = useNavigate();
  //unique id
  const orderId = useId();

  //cart state
  const { total, quantity } = useSelector((state: RootState) => state.cart);
  const cart = useSelector(selectAllCart);
  const dispatch: AppDispatch = useAppDispatch();

  ////LOGIC
  //handle data submit
  const onSubmit: SubmitHandler<Address> = (data) => {
    const modifiedData = {
      id: orderId,
      date: formatDate(),
      totalPrice: total,
      quantity: quantity,
      address: {
        name: data.name,
        surname: data.surname,
        street: data.street,
        houseNumber: data.houseNumber,
        apartmentNumber: data.apartmentNumber,
        zipCode: data.zipCode,
        city: data.city,
        payOnDelivery: data.payOnDelivery,
        paymentCard: data.paymentCard,
      },

      items: cart.map((item) => ({
        id: item.id,
        title: item.title,
        image: item.image,
        price: item.price,
        pieces: item.pieces,
      })),
    };
    dispatch(addOrder(modifiedData));
    dispatch(removeAllFromCart());
    navigate("/success");
  };

  //checking if address have empty fields
  const [errorEmptyAddressFields, setErrorEmptyAddressFields] = useState<
    string | null
  >(null);

  const handleConfirmButton = () => {
    //check errors object
    const errorsExist = Object.keys(methods.formState.errors).length > 0;
    const addressValues = methods.getValues();

    const hasEmptyFields = Object.values(addressValues).some(
      (value) => value === "" || value === null
    );
    //set error when is no payment method selected
    if (!addressValues.payOnDelivery && !addressValues.paymentCard) {
      methods.setError("payOnDelivery", {
        type: "manual",
        message: "Please select a payment method.",
      });
      return;
    }
    if (errorsExist || hasEmptyFields) {
      setErrorEmptyAddressFields("Address is required");
      return;
    }
    setSummaryView(true);
  };

  console.log(errorEmptyAddressFields);

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
                <AddressBox errorEmptyAddressFields={errorEmptyAddressFields} />
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
                    // type="submit"
                    onClick={handleConfirmButton}
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
