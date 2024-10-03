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
import CircularProgress from "@mui/material/CircularProgress";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import { AppDispatch, useAppDispatch } from "../redux/store";

import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import userCheck from "../api/queries/authorization";
import { logUser } from "../redux/user/userSlice";

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
  const [errorAuth, setErrorAuth] = useState<string | null>(null);

  const mutation = useMutation({
    mutationFn: userCheck,
    onSuccess: () => {
      dispatch(logUser());
      navigate("/");
      setErrorAuth(null);
    },
    onError: () => {
      setErrorAuth("User does not exist");
    },
  });

  ////LOGIC
  //submit login data
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate({ username, password });
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
            marginTop: "90px",
            width: "100%",
          }}
        >
          {mutation.isPending ? (
            <CircularProgress />
          ) : (
            <Box
              component="form"
              onSubmit={handleLogin}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "10px",
              }}
            >
              <Typography variant="h4">Login:</Typography>
              {/* Login field */}
              <TextField
                sx={{ width: "400px", marginTop: "20px" }}
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
              <Typography sx={{ color: "red" }}>{errorAuth}</Typography>
              <Box sx={{ marginTop: "20px" }}>
                <Button
                  variant="contained"
                  type="submit"
                  sx={{
                    padding: "10px",
                    marginRight: "20px",
                    width: "280px",
                    // width: "100%",
                  }}
                >
                  Login
                </Button>
                <Button
                  variant="text"
                  onClick={() => navigate("/")}
                  sx={{ padding: "10px" }}
                >
                  main page
                </Button>
              </Box>
            </Box>
          )}
        </Paper>
      </Container>
    </>
  );
};
