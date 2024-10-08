import { TextField } from "@mui/material";
import { useFormField } from "../../../lib/hooks/finalizationPage/useFormField";

export const City = () => {
  //
  ////DATA
  const { register, errors } = useFormField();

  ////UI
  return (
    <>
      <TextField
        sx={{ width: "100%", maxWidth: "240px" }}
        label="City"
        variant="outlined"
        margin="dense"
        {...register("city", {
          minLength: {
            value: 2,
            message: "Name must by at last 2 characters long",
          },
          required: "City is required",
          pattern: {
            value: /^[A-Za-zĄĆĘŁŃÓŚŻŹąćęłńóśżź\s]+$/,
            message: "City cannot contain numbers or special characters",
          },
        })}
        error={!!errors.city}
        helperText={errors.city?.message?.toString()}
      />
    </>
  );
};
