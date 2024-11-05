import { useFormContext } from "react-hook-form";
import { Address } from "../../types";

export const useSummaryShipping = () => {
  //
  ////DATA
  const { getValues } = useFormContext<Address>();

  return { getValues };
};
