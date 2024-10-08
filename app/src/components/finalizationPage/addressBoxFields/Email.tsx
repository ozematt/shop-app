import { TextField } from "@mui/material";
import { useFormField } from "../../../lib/hooks/finalizationPage/useFormField";

export const Email = () => {
  //
  ////DATA
  const { register, errors } = useFormField();

  ////UI
  return (
    <>
      <TextField
        sx={{ width: "100%", maxWidth: "500px" }}
        type="email"
        label="Email"
        variant="outlined"
        margin="dense"
        {...register("email", {
          pattern: {
            value: /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim,
            message: "Invalid email address",
          },
          required: "Email is required",
        })}
        error={!!errors.email}
        helperText={errors.email?.message?.toString()}
      />
    </>
  );
};
