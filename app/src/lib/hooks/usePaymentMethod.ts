// import { Address } from "cluster";
import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { Address } from "../types/addressTypes";

export const usePaymentMethod = () => {
  //
  ////DATA
  // state of "Add Card" button clicked
  const [addClicked, setAddClicked] = useState(false);
  //show card fields
  const [cardFields, setCardFields] = useState(false);

  // form context
  const {
    register,
    formState: { errors },
    setValue,
    watch,
    clearErrors,
    getValues,
    setError,
  } = useFormContext<Address>();

  ////LOGIC
  // set pay on delivery method
  const handlePayOnDelivery = () => {
    setValue("payOnDelivery", true);
    clearErrors(["payOnDelivery"]);

    // clear fields
    setValue("paymentCard", false);
    setValue("cardCVV", null);
    setValue("cardDate", null);
    setValue("cardNumber", null);
    setCardFields(false);
    setAddClicked(false);
  };

  // show card fields
  const handleShowCardField = () => {
    setValue("payOnDelivery", false);
    setCardFields(true);
    setAddClicked(false);
  };

  //add credit card
  const handleAddCardButton = () => {
    // get address value
    const values: Address = getValues() as Address;

    // keyof provides that each field is a valid key defined in the Address type
    const requiredFields: (keyof Address)[] = [
      "cardNumber",
      "cardDate",
      "cardCVV",
    ];

    // checks each field to see if it is empty
    const allFieldsCheck = requiredFields.every((field) => {
      const value = values[field];
      const hasErrors = errors[field];
      // check if the value is not empty (if it is a string, remove whitespace) and checking if the value has no errors
      return (
        value &&
        (typeof value === "string" ? value.trim() !== "" : true) &&
        !hasErrors
      );
    });

    // const errorsFree = requiredFields.map((field) => errors[field] )
    if (allFieldsCheck) {
      setValue("paymentCard", true); // select payment method on "payment card"
      setAddClicked(true); // state of "Add Card" button
      setCardFields(false); // hide card fields
      clearErrors(["paymentCard", "payOnDelivery"]); // clear errors
    } else {
      // set error message
      setError("paymentCard", {
        type: "manual",
        message: "Please fill in the fields.",
      });
    }
  };

  return {
    addClicked,
    cardFields,
    errors,
    register,
    watch,
    handlePayOnDelivery,
    handleShowCardField,
    handleAddCardButton,
  };
};
