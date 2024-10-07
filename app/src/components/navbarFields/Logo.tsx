import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <>
      <Typography
        variant="h4"
        color="text.secondary"
        sx={{
          flexGrow: 1,
        }}
      >
        <Link to="/" style={{ color: "inherit" }}>
          {" "}
          <b>SKLEP.COM</b>
        </Link>
      </Typography>
    </>
  );
};
