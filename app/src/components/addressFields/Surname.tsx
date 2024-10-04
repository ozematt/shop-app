import { TextField } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { Address } from "../../lib/types/addressTypes";

export const Surname = () => {
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
        sx={{ width: "400px" }}
        label="Surname"
        variant="outlined"
        margin="dense"
        {...register("surname", {
          minLength: {
            value: 2,
            message: "Surname must by at last 2 characters long",
          },
          required: "Surname is required",
          pattern: {
            value: /^[A-Za-z\s]+$/,
            message: "Surname cannot contain numbers or special characters",
          },
        })}
        error={!!errors.surname}
        helperText={errors.surname?.message?.toString()}
      />
    </>
  );
};
