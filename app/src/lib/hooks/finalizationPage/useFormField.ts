// import { Address } from "cluster";
import { useFormContext } from "react-hook-form";
import { type Address } from "../../types";

export const useFormField = () => {
  //
  ////DATA
  const {
    register,
    formState: { errors },
  } = useFormContext<Address>();

  return { register, errors };
};
