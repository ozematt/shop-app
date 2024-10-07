import { TextField } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { Address } from "../../lib/types/addressTypes";

export const PhoneNumber = () => {
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
