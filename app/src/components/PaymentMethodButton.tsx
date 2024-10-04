import { Button } from "@mui/material";
import { usePaymentMethod } from "../lib/hooks/usePaymentMethod";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CreditCardIcon from "@mui/icons-material/CreditCard";

export const PaymentMethodButton = ({
  text,
  method,
  handleButtonClick,
}: {
  text: string;
  method: string;
  handleButtonClick: () => void;
}) => {
  const { watch } = usePaymentMethod();

  // check button logic
  const isPayOnDelivery = method === "payOnDelivery";
  const isSelected =
    (isPayOnDelivery && watch().payOnDelivery) ||
    (!isPayOnDelivery && watch().paymentCard);

  return (
    <>
      <Button
        variant={isSelected ? "contained" : "outlined"}
        value={method === "payOnDelivery" ? "payOnDelivery" : "paymentCard"}
        startIcon={
          method === "payOnDelivery" ? <AttachMoneyIcon /> : <CreditCardIcon />
        }
        sx={{ width: "250px", padding: "15px", marginRight: "10px" }}
        onClick={handleButtonClick}
      >
        {text}
      </Button>
    </>
  );
};
