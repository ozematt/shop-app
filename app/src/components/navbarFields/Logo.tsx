import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <>
      <Typography
        variant="h6"
        component="div"
        sx={{
          flexGrow: 1,
          fontWeight: 700,
          fontSize: "26px",
          color: "#DE7F1F",
        }}
      >
        <Link to="/" style={{ color: "inherit" }}>
          {" "}
          SKLEP
        </Link>
      </Typography>
    </>
  );
};
