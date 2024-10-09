import { TextField } from "@mui/material";
import { useFormField } from "../../../lib/hooks/finalizationPage/useFormField";

export const CVV = () => {
  //
  ////DATA
  const { register, errors } = useFormField();

  ////UI
  return (
    <>
      <TextField
        type="password"
        label="CVV"
        variant="outlined"
        margin="dense"
        {...register("cardCVV", {
          minLength: {
            value: 3,
            message: "CVV must have 3 characters",
          },
          maxLength: {
            value: 3,
            message: "CVV must have 3 characters",
          },
          required: "CVV is required",
          pattern: {
            value: /^[0-9]+$/,
            message: "CVV must be numeric",
          },
        })}
        error={!!errors.cardCVV}
        helperText={errors.cardCVV?.message?.toString()}
      />
    </>
  );
};
