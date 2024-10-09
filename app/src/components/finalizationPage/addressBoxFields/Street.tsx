import { TextField } from "@mui/material";
import { useFormField } from "../../../lib/hooks/finalizationPage/useFormField";

export const Street = () => {
  //
  ////DATA
  const { register, errors } = useFormField();

  ////UI
  return (
    <>
      <TextField
        sx={{ width: "100%", maxWidth: "500px", marginTop: "30px" }}
        label="Street"
        variant="outlined"
        margin="dense"
        {...register("street", {
          minLength: {
            value: 2,
            message: "Street must by at last 2 characters long",
          },
          required: "Street is required",
          pattern: {
            value: /^[A-Za-zĄĆĘŁŃÓŚŻŹąćęłńóśżź0-9\s]+$/,
            message: "Street cannot contain special characters",
          },
        })}
        error={!!errors.street}
        helperText={errors.street?.message?.toString()}
      />
    </>
  );
};
