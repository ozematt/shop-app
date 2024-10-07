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
import { useAuthorization } from "../lib/hooks/useAuthorization";

export const Authorization = () => {
  //
  ////DATA
  const {
    mutation,
    showPassword,
    handleClickShowPassword,
    handleMouseDownPassword,
    handleMouseUpPassword,
    username,
    setUsername,
    password,
    setPassword,
    errorAuth,
    handleLogin,
    navigate,
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
