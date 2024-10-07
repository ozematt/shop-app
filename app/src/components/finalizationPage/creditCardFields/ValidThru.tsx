import { TextField } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { Address } from "../../../lib/types/addressTypes";

export const ValidThru = () => {
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
        sx={{ marginRight: "10px" }}
        label="Valid Thru"
        variant="outlined"
        margin="dense"
        {...register("cardDate", {
          pattern: {
            value: /(0[1-9]|1[0-2])\/[0-9]{2}/,
            message: "Invalid date. Use MM/YY format.",
          },
          required: "Valid Thru is required",
        })}
        error={!!errors.cardDate}
        helperText={errors.cardDate?.message?.toString()}
      />
    </>
  );
};
