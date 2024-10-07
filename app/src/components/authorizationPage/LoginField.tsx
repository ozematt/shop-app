import { TextField } from "@mui/material";
import { useAuthorization } from "../../lib/hooks/useAuthorization";

export const LoginField = () => {
  //
  ////DATA
  const { username, setUsername } = useAuthorization();

  ////UI
  return (
    <>
      <TextField
        sx={{ width: "400px", marginTop: "20px" }}
        id="outlined-basic"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
        label="Login"
        variant="outlined"
      />
    </>
  );
};
