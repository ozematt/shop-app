import {
  Box,
  Button,
  Container,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import { AppDispatch, RootState, useAppDispatch } from "../redux/store";
import { useSelector } from "react-redux";
import { loginUser } from "../redux/user/authSlice";
import { useNavigate } from "react-router-dom";

export const Authorization = () => {
  //MUI password field logic
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  ////DATA
  const dispatch: AppDispatch = useAppDispatch();
  const navigate = useNavigate();

  // input user data
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const {
    isLoading,
    error,
    isLoggedIn: auth,
  } = useSelector((state: RootState) => state.auth);

  ////LOGIC
  //submit login data
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(loginUser({ username, password }));
    auth ? navigate("/") : null;
  };

  ////UI
  return (
    <>
      <Container maxWidth="xl">
        <Box
          component="form"
          onSubmit={handleLogin}
          sx={{
            position: "absolute",
            display: "flex",
            flexDirection: "column",
            // justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            left: "50%",
            top: "400px",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Typography variant="h5">Login:</Typography>
          {/* Login field */}
          <TextField
            sx={{ width: "400px" }}
            id="outlined-basic"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            label="Login"
            variant="outlined"
          />
          {/* Password field */}
          <FormControl sx={{ m: 1, width: "400px" }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    onMouseUp={handleMouseUpPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>

          <Button variant="contained" type="submit">
            Login
          </Button>
        </Box>
        {isLoading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
      </Container>
    </>
  );
};
