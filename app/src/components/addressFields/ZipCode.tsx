import { TextField } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { Address } from "../../lib/types/addressTypes";

export const ZipCode = () => {
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
        sx={{ width: "190px" }}
        label="Zip-Code"
        variant="outlined"
        margin="dense"
        {...register("zipCode", {
          pattern: {
            value: /^[0-9]{2}-[0-9]{3}$/i,
            message: "Invalid zip code format, should be NN-NNN",
          },
          required: "Zip code is required",
        })}
        error={!!errors.zipCode}
        helperText={errors.zipCode?.message?.toString()}
      />
    </>
  );
};
