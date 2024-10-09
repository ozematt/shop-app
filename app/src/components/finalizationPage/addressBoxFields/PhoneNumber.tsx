import { TextField } from "@mui/material";
import { useFormField } from "../../../lib/hooks/finalizationPage/useFormField";

export const PhoneNumber = () => {
  //
  ////DATA
  const { register, errors } = useFormField();

  ////UI
  return (
    <>
      <TextField
        type="tel"
        sx={{ width: "100%", maxWidth: "500px" }}
        label="Phone number"
        variant="outlined"
        margin="dense"
        {...register("phone", {
          minLength: {
            value: 9,
            message: "Phone number must have at least 9 digits",
          },
          required: "Phone is required",
          pattern: {
            value: /^\+?[0-9]+$/,
            message:
              "Phone number can only contain numbers and an optional + at the start",
          },
        })}
        error={!!errors.phone}
        helperText={errors.phone?.message?.toString()}
      />
    </>
  );
};
