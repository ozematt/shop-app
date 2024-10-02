import {
  Box,
  Button,
  Container,
  CssBaseline,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Paper,
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

  const { isLoading, error } = useSelector((state: RootState) => state.auth);

  ////LOGIC
  //submit login data
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const resultAction = await dispatch(loginUser({ username, password }));
    if (loginUser.fulfilled.match(resultAction)) {
      navigate("/");
    }
  };

  ////UI
  return (
    <>
      <CssBaseline />
      <Container maxWidth="xl">
        <Paper
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "500px",
            padding: "20px",
            marginTop: "90px",
          }}
        >
          <Box
            component="form"
            onSubmit={handleLogin}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "20px",
            }}
          >
            <Typography variant="h4">Login:</Typography>
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
            <FormControl sx={{ width: "400px" }} variant="outlined">
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
            <Box>
              <Button
                variant="contained"
                type="submit"
                sx={{ padding: "10px 40px 10px 40px" }}
              >
                Login
              </Button>
              <Button
                variant="outlined"
                onClick={() => navigate("/")}
                sx={{ padding: "10px 40px 10px 40px", marginLeft: "110px" }}
              >
                main page
              </Button>
            </Box>
          </Box>
        </Paper>
        {isLoading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
      </Container>
    </>
  );
};
