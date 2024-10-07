import { TextField } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { Address } from "../../../lib/types/addressTypes";

export const ApartmentNumber = () => {
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
