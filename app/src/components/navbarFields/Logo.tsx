import { Typography } from "@mui/material";

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
          marginLeft: "15px",
        }}
      >
        SKLEP
      </Typography>
    </>
  );
};
