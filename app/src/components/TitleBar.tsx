import { Paper, Typography } from "@mui/material";
import { ButtonDeleteCart } from "./cartPage/ButtonDeleteCart";
import React from "react";

type TitleBarProps = {
  title: string;
  buttonShow?: boolean;
};

export const TitleBar = React.memo(({ title, buttonShow }: TitleBarProps) => {
  //
  ////UI
  return (
    <>
      <Paper
        elevation={3}
        sx={{
          margin: "80px 0 10px 0",
          width: "100%",
          maxWidth: "1200px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h5" sx={{ padding: "20px" }}>
          {title}
        </Typography>

        {/* DELETE BUTTON */}
        {buttonShow && <ButtonDeleteCart />}
      </Paper>
    </>
  );
});
