import { Box, Container, CssBaseline, Paper, Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { useAuthorization } from "../lib/hooks/useAuthorization";
import { LoginField } from "../components/authorizationPage/LoginField";
import { PasswordField } from "../components/authorizationPage/PasswordField";
import { ButtonsAuth } from "../components/authorizationPage/ButtonsAuth";

export const Authorization = () => {
  //
  ////DATA
  const { mutation, errorAuth, handleLogin } = useAuthorization();

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

              <LoginField />
              <PasswordField />
              <Typography sx={{ color: "red" }}>{errorAuth}</Typography>
              <ButtonsAuth />
            </Box>
          )}
        </Paper>
      </Container>
    </>
  );
};
