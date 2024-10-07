// import { useTheme } from "@emotion/react";
import { Typography, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const LoginButton = () => {
  //
  ////DATA
  const navigate = useNavigate();
  const theme = useTheme();

  ////UI
  return (
    <>
      <Typography
        onClick={() => navigate("/login")}
        sx={{
          padding: "10px",
          marginRight: "10px",
          color: "white",
          // color: theme.palette.mode === "dark" ? "white" : "black",
          cursor: "pointer",
          "&:hover": {
            borderRadius: "5px",
            backgroundColor: `${theme.palette.primary.main}10`,
          },
        }}
      >
        LOGIN
      </Typography>
    </>
  );
};
