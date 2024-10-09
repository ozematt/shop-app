import { TextField } from "@mui/material";
import { useFormField } from "../../../lib/hooks/finalizationPage/useFormField";

export const ApartmentNumber = () => {
  //
  ////DATA
  const { register, errors } = useFormField();

  ////UI
  return (
    <>
      <TextField
        type="number"
        sx={{ width: "100%", maxWidth: "240px" }}
        label="Apartment number"
        variant="outlined"
        margin="dense"
        {...(register("apartmentNumber"),
        {
          pattern: {
            value: /^[0-9]+$/,
            message: "Apartment number must contain only numbers",
          },
        })}
        error={!!errors.apartmentNumber}
        helperText={errors.apartmentNumber?.message?.toString()}
      />
    </>
  );
};
