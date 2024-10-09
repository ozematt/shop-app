import { useFormContext } from "react-hook-form";
import { Address } from "../../types/addressTypes";

export const useSummaryShipping = () => {
  //
  ////DATA
  const { getValues } = useFormContext<Address>();

  return { getValues };
};
