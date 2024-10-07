import { TextField } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { Address } from "../../../lib/types/addressTypes";

export const City = () => {
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
        sx={{ width: "100%", maxWidth: "240px" }}
        label="City"
        variant="outlined"
        margin="dense"
        {...register("city", {
          minLength: {
            value: 2,
            message: "Name must by at last 2 characters long",
          },
          required: "City is required",
          pattern: {
            value: /^[A-Za-zĄĆĘŁŃÓŚŻŹąćęłńóśżź\s]+$/,
            message: "City cannot contain numbers or special characters",
          },
        })}
        error={!!errors.city}
        helperText={errors.city?.message?.toString()}
      />
    </>
  );
};
