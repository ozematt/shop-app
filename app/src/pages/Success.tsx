import {
  Button,
  Container,
  CssBaseline,
  Paper,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export const Success = () => {
  const navigate = useNavigate();

  return (
    <>
      <CssBaseline />
      <Container maxWidth="xl">
        <Paper
          sx={{
            margin: "80px 7px 0 0",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "100px",
          }}
        >
          {" "}
          <Typography variant="h2" sx={{ padding: "20px" }}>
            <b> Congratulations!</b>
          </Typography>
          <Typography variant="h4">You have made a purchase!</Typography>
          <Button
            onClick={() => navigate("/")}
            variant="outlined"
            sx={{ marginTop: "40px" }}
          >
            back to main page
          </Button>
        </Paper>
      </Container>
    </>
  );
};
