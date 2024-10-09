import { Typography } from "@mui/material";
import { useLoginButton } from "../../../lib/hooks/navbarFields/userPanelFields/useLoginButton";

export const LoginButton = () => {
  //
  ////DATA
  const { navigate, theme } = useLoginButton();

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
