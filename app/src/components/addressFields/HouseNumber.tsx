import { TextField } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { Address } from "../../lib/types/addressTypes";

export const HouseNumber = () => {
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
        type="number"
        sx={{ width: "100%", maxWidth: "240px", marginRight: "20px" }}
        label="House number"
        variant="outlined"
        margin="dense"
        {...register("houseNumber", {
          required: "House number is required",
          pattern: {
            value: /^[0-9]+$/,
            message: "House number must contain only numbers",
          },
        })}
        error={!!errors.houseNumber}
        helperText={errors.houseNumber?.message?.toString()}
      />
    </>
  );
};
