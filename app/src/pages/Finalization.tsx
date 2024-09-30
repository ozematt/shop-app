import {
  Box,
  Button,
  Container,
  CssBaseline,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";

export const Finalization = () => {
  const { register } = useForm();

  return (
    <>
      <CssBaseline />
      <Container maxWidth="xl">
        <Box sx={{ height: "100vh", marginTop: "100px" }}>
          <Paper
            sx={{
              marginTop: "20px",
              width: "100%",
            }}
          >
            <Typography
              variant="h5"
              sx={{ marginLeft: "15px", padding: "5px" }}
            >
              Enter your shipping address:
            </Typography>
          </Paper>
          {/* ADDRESS */}
          <Paper
            sx={{
              margin: "14px 7px 0 0",
              //   height: "100vh",
            }}
          >
            <Box
              sx={{
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
              }}
            >
              <TextField
                sx={{ width: "400px" }}
                //   id="outlined-basic"
                // onChange={}
                //   value={name}
                label="Name"
                variant="outlined"
                margin="dense"
              />
              <TextField
                sx={{ width: "400px" }}
                label="Surname"
                variant="outlined"
                margin="dense"
              />
              <TextField
                sx={{ width: "400px", marginTop: "30px" }}
                label="Street"
                variant="outlined"
                margin="dense"
              />
              <Box>
                {" "}
                <TextField
                  sx={{ width: "190px" }}
                  label="House number"
                  variant="outlined"
                  margin="dense"
                />
                <TextField
                  sx={{ width: "190px", marginLeft: "20px" }}
                  label="Apartment number"
                  variant="outlined"
                  margin="dense"
                />
              </Box>
              <Box>
                <TextField
                  sx={{ width: "190px" }}
                  label="Zip-Code"
                  variant="outlined"
                  margin="dense"
                />
                <TextField
                  sx={{ width: "190px", marginLeft: "20px" }}
                  label="City"
                  variant="outlined"
                  margin="dense"
                />
              </Box>

              <Button
                variant="contained"
                sx={{ marginTop: "30px", width: "400px" }}
              >
                Confirm
              </Button>
            </Box>
          </Paper>
        </Box>
      </Container>
    </>
  );
};
