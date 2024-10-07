import {
  Box,
  Button,
  Container,
  CssBaseline,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { useAuthorization } from "../lib/hooks/useAuthorization";

import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export const Authorization = () => {
  //
  ////DATA
  const {
    username,
    setUsername,
    mutation,
    errorAuth,
    handleLogin,
    navigate,
    showPassword,
    handleClickShowPassword,
    handleMouseDownPassword,
    handleMouseUpPassword,
    password,
    setPassword,
  } = useAuthorization();

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
            height: "100vh",
            marginTop: "80px",
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

              <TextField
                sx={{ width: "400px", marginTop: "20px" }}
                id="outlined-basic"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                label="Login"
                variant="outlined"
              />

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
