import { useForm, SubmitHandler } from "react-hook-form";
import { useCallback, useId, useState } from "react";
import { format } from "date-fns";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Address } from "../../types/addressTypes";
import { AppDispatch, RootState, useAppDispatch } from "../../../redux/store";
import {
  removeAllFromCart,
  selectAllCart,
} from "../../../redux/cart/cartSlice";
import { Orders } from "../../types/ordersTypes";
import supabase from "../../../services/supabase";

export const useFinalization = () => {
  //
  ////DATA
  const navigate = useNavigate();
  const dispatch: AppDispatch = useAppDispatch();
  // unique id
  const orderId = useId();
  const [summaryView, setSummaryView] = useState(false);

  // useForm with default values
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

  // date-fns
  const formatDate = () => {
    const today = new Date();
    return format(today, "dd.MM.yyyy");
  };

  // cart state
  const { total, quantity } = useSelector((state: RootState) => state.cart);
  const cart = useSelector(selectAllCart);

  //user state
  const username = useSelector((state: RootState) => state.user.username);

  ////LOGIC

  const addOrders = async (newOrders: Orders[]) => {
    // check if user exist
    const { data: existingData, error: fetchError } = await supabase
      .from("usersOrders")
      .select("orders")
      .eq("user", username)
      .single();

    if (fetchError) {
      // when user not exist
      console.error("Error fetching existing orders:", fetchError);
    }

    // add new order
    const currentOrders = existingData?.orders || []; // optional chaining
    const updatedOrders = [...currentOrders, ...newOrders];

    if (existingData) {
      // user exist - update orders
      const { data: updatedData, error: updateError } = await supabase
        .from("usersOrders")
        .update({ orders: updatedOrders })
        .eq("user", username);

      if (updateError) {
        console.error("Error updating orders:", updateError);
      } else {
        console.log("Orders updated successfully:", updatedData);
      }
    } else {
      // user not exist - send new data
      const { data: newUserData, error: insertError } = await supabase
        .from("usersOrders")
        .insert([{ user: username, orders: updatedOrders }])
        .select();

      if (insertError) {
        console.error("Error inserting new user:", insertError);
      } else {
        console.log("New user added successfully:", newUserData);
      }
    }
  };

  // handle data submit
  const onSubmit = useCallback<SubmitHandler<Address>>(
    (data) => {
      // data to send
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
      addOrders([modifiedData]); // send to supabase

      dispatch(removeAllFromCart());
      navigate("/success");
    },
    [dispatch, navigate, total, quantity, cart]
  );

  // checking if address have empty fields
  const [errorEmptyAddressFields, setErrorEmptyAddressFields] = useState<
    string | null
  >(null);

  // helper function to check address fields
  const validateAddressFields = (addressValues: Address) => {
    const requiredFields: (keyof Address)[] = [
      "name",
      "surname",
      "email",
      "phone",
      "street",
      "houseNumber",
      "zipCode",
      "city",
    ];

    return requiredFields.every((field) => {
      // required fields value
      const value = addressValues[field];
      // check value
      return value && (typeof value === "string" ? value.trim() !== "" : true);
    });
  };

  const handleConfirmButton = useCallback(() => {
    // inputs values
    const addressValues = methods.getValues();
    // check errors object
    const errorsExist = Object.keys(methods.formState.errors).length > 0;

    // set error when is no payment method selected
    if (!addressValues.payOnDelivery && !addressValues.paymentCard) {
      methods.setError("payOnDelivery", {
        type: "manual",
        message: "Please select a payment method.",
      });
      return;
    }
    // check error object and address required fields
    if (errorsExist || !validateAddressFields(addressValues)) {
      setErrorEmptyAddressFields("Address is required");
      return;
    }
    setErrorEmptyAddressFields(null);
    setSummaryView(true);
  }, [methods]);

  const handleSummaryView: () => void = () => {
    setSummaryView(!summaryView);
  };

  return {
    methods,
    summaryView,
    onSubmit,
    errorEmptyAddressFields,
    handleConfirmButton,
    handleSummaryView,
  };
};
