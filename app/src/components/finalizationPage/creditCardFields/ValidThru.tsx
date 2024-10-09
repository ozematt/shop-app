import { TextField } from "@mui/material";
import { useFormField } from "../../../lib/hooks/finalizationPage/useFormField";

export const ValidThru = () => {
  //
  ////DATA
  const { register, errors } = useFormField();

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
