import { TextField } from "@mui/material";
import { useFormField } from "../../../lib/hooks/finalizationPage/useFormField";

export const HouseNumber = () => {
  //
  ////DATA
  const { register, errors } = useFormField();

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
