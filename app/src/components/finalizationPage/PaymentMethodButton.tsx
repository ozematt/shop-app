import { Button } from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import React from "react";
import { usePaymentMethodButton } from "../../lib/hooks/finalizationPage/usePaymentMethodButton";

type PaymentMethodButtonProps = {
  text: string;
  method: string;
  handleButtonClick: () => void;
};

export const PaymentMethodButton = React.memo(
  ({ text, method, handleButtonClick }: PaymentMethodButtonProps) => {
    //
    //DATA
    const { isSelected } = usePaymentMethodButton({ method });

    ////UI
    return (
      <>
        <Button
          variant={isSelected ? "contained" : "outlined"}
          value={method === "payOnDelivery" ? "payOnDelivery" : "paymentCard"}
          startIcon={
            method === "payOnDelivery" ? (
              <AttachMoneyIcon />
            ) : (
              <CreditCardIcon />
            )
          }
          sx={{
            width: "100%",
            maxWidth: "300px",
            padding: "15px",
            marginRight: "10px",
            marginBottom: "10px",
          }}
          onClick={handleButtonClick}
        >
          {text}
        </Button>
      </>
    );
  }
);
