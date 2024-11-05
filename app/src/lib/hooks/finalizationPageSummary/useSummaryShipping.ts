import { useFormContext } from "react-hook-form";
import { type Address } from "../../types";

export const useSummaryShipping = () => {
  //
  ////DATA
  const { getValues } = useFormContext<Address>();

  return { getValues };
};
