import { TextField } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { Address } from "../../lib/types/addressTypes";

export const Name = () => {
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
        label="Name"
        variant="outlined"
        margin="dense"
        {...register("name", {
          minLength: {
            value: 2,
            message: "Name must by at last 2 characters long",
          },
          required: "Name is required",
          pattern: {
            value: /^[A-Za-z]+$/,
            message:
              "Name cannot contain numbers, spaces, or special characters",
          },
        })}
        error={!!errors.name}
        helperText={errors.name?.message?.toString()}
      />
    </>
  );
};
