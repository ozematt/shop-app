import { Typography } from "@mui/material";
import React from "react";

export const FinalizationTitle = React.memo(({ text }: { text: string }) => {
  return (
    <>
      <Typography variant="h5" sx={{ padding: "10px" }}>
        {text}
      </Typography>
    </>
  );
});
