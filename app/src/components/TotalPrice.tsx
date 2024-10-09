import { Button, Paper, Typography } from "@mui/material";
import React from "react";
import { useTotalPrice } from "../lib/hooks/useTotalPrice";

export const TotalPrice = React.memo(
  ({
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
    const { total, navigate, isSmallScreen } = useTotalPrice();

    ////UI
    return (
      <>
        <Paper
          elevation={3}
          sx={{
            width: "100%",
            maxWidth: "1100px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "382px",
            margin: isSmallScreen ? 0 : "80px 0 0px 10px",
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
  }
);
