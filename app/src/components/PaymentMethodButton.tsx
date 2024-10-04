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
  return (
    <>
      <Button
        variant={watch().payOnDelivery ? "contained" : "outlined"}
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
