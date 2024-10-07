import { TextField } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { Address } from "../../lib/types/addressTypes";

export const CardNumber = () => {
  //
  ////DATA
  const {
    register,
    formState: { errors },
  } = useFormContext<Address>();

  ////UI
  return (
    <>
      <TextField
        sx={{ width: "100%", maxWidth: "400px" }}
        type="number"
        label="Credit card number"
        variant="outlined"
        margin="dense"
        {...register("cardNumber", {
          minLength: {
            value: 14,
            message: "Credit card number required 14 digits",
          },
          required: "Credit card number is required",
          pattern: {
            value: /^[0-9]+$/,
            message: "Credit card number must contain only numbers",
          },
        })}
        error={!!errors.cardNumber}
        helperText={errors.cardNumber?.message?.toString()}
      />
    </>
  );
};
