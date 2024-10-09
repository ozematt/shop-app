import { useFormContext } from "react-hook-form";
import { Address } from "../../types/addressTypes";

export const usePaymentMethodButton = ({ method }: { method: string }) => {
  //
  ////DATA
  const { watch } = useFormContext<Address>();

  // check button logic
  const isPayOnDelivery = method === "payOnDelivery";

  const isSelected =
    (isPayOnDelivery && watch().payOnDelivery) ||
    (!isPayOnDelivery && watch().paymentCard);

  return { isSelected };
};
