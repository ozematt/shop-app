import { Button, Paper, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../redux/store";

export const TotalPrice = ({
  handleButtonClick,
  title,
  buttonText,
  buttonType = "button",
}: {
  handleButtonClick?: () => void;
  title: string;
  buttonText: string;
  buttonType?: "button" | "submit";
}) => {
  //
  ////DATA
  // total price
  const total = useSelector((state: RootState) => state.cart.total);
  const navigate = useNavigate();

  ////UI
  return (
    <>
      <Paper
        elevation={3}
        sx={{
          flexGrow: "1",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "382px",
          margin: "90px 0 0px 10px",

          position: "relative",
        }}
      >
        <Typography variant="h6">{title}</Typography>
        <Typography
          variant="h3"
          sx={{ padding: "10px 0 0 20px", marginBottom: "20px" }}
        >
          <b>{total}$</b>
        </Typography>
        <Button
          variant="contained"
          onClick={buttonType === "button" ? handleButtonClick : undefined}
          type={buttonType}
          sx={{
            padding: "20px",
            width: "300px",
          }}
        >
          {buttonText}
        </Button>
        <Button
          variant="outlined"
          onClick={() => navigate("/")}
          sx={{ width: 300, marginTop: "10px" }}
        >
          back to shopping
        </Button>
      </Paper>
    </>
  );
};
