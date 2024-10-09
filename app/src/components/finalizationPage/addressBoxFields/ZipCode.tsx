import { TextField } from "@mui/material";
import { useFormField } from "../../../lib/hooks/finalizationPage/useFormField";

export const ZipCode = () => {
  //
  ////DATA
  const { register, errors } = useFormField();

  ////UI
  return (
    <>
      <TextField
        sx={{ width: "100%", maxWidth: "240px", marginRight: "20px" }}
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
