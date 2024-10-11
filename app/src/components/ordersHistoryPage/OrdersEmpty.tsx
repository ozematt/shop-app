import { Paper, Typography } from "@mui/material";

export const OrdersEmpty = () => {
  //
  ////UI
  return (
    <>
      <Paper
        sx={{
          marginTop: "10px",
          padding: "20px",
        }}
      >
        <Typography variant="h3" sx={{ padding: "20px" }}>
          You do not have any previous orders...
        </Typography>
      </Paper>
    </>
  );
};
