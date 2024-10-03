import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const LoginButton = () => {
  //
  ////DATA
  const navigate = useNavigate();

  ////UI
  return (
    <>
      <Button
        onClick={() => navigate("/login")}
        sx={{ marginRight: "10px", color: "white" }}
      >
        Login
      </Button>
    </>
  );
};
