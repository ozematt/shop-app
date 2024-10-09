import { TextField } from "@mui/material";
import { useFormField } from "../../../lib/hooks/finalizationPage/useFormField";

export const Name = () => {
  //
  ////DATA
  const { register, errors } = useFormField();

  ////UI
  return (
    <>
      <TextField
        sx={{ width: "100%", maxWidth: "500px" }}
        label="Name"
        variant="outlined"
        margin="dense"
        {...register("name", {
          minLength: {
            value: 2,
            message: "Name must by at last 2 characters long",
          },
          required: "Name is required",
          pattern: {
            value: /^[A-Za-zĄĆĘŁŃÓŚŻŹąćęłńóśżź\s]+$/,
            message:
              "Name cannot contain numbers, spaces, or special characters",
          },
        })}
        error={!!errors.name}
        helperText={errors.name?.message?.toString()}
      />
    </>
  );
};
