import { Container, CssBaseline, Paper, Typography } from "@mui/material";
// import { Container } from "postcss";

export const OrdersHistory = () => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="xl">
        <Paper
          sx={{
            margin: "90px 7px 0 0",
          }}
        >
          <Typography variant="h5" sx={{ padding: "20px" }}>
            Yours orders history:
          </Typography>
        </Paper>
        <Paper
          sx={{
            margin: "14px 7px 0 0",
            paddingBottom: "20px",
          }}
        >
          <Typography variant="h3" sx={{ padding: "20px" }}>
            You don't have any previous orders
          </Typography>
        </Paper>
      </Container>
    </>
  );
};
