import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const ButtonsAuth = () => {
  //
  ////DATA
  const navigate = useNavigate();

  ////UI
  return (
    <>
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
    </>
  );
};
