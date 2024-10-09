import { TextField } from "@mui/material";
import { useFormField } from "../../../lib/hooks/finalizationPage/useFormField";

export const Surname = () => {
  //
  ////DATA
  const { register, errors } = useFormField();

  ////UI
  return (
    <>
      <TextField
        sx={{ width: "100%", maxWidth: "500px" }}
        label="Surname"
        variant="outlined"
        margin="dense"
        {...register("surname", {
          minLength: {
            value: 2,
            message: "Surname must by at last 2 characters long",
          },
          required: "Surname is required",
          pattern: {
            value: /^[A-Za-zĄĆĘŁŃÓŚŻŹąćęłńóśżź\s]+$/,
            message: "Surname cannot contain numbers or special characters",
          },
        })}
        error={!!errors.surname}
        helperText={errors.surname?.message?.toString()}
      />
    </>
  );
};
