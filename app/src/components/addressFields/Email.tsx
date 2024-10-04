import { TextField } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { Address } from "../../lib/types/addressTypes";

export const Email = () => {
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
        sx={{ width: "500px" }}
        type="email"
        label="Email"
        variant="outlined"
        margin="dense"
        {...register("email", {
          pattern: {
            value: /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim,
            message: "Invalid email address",
          },
          required: "Email is required",
        })}
        error={!!errors.email}
        helperText={errors.email?.message?.toString()}
      />
    </>
  );
};
