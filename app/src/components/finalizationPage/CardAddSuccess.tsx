import { Box, Button, Typography } from "@mui/material";
import React from "react";

export const CardAddSuccess = React.memo(
  ({ handleShowCardField }: { handleShowCardField: () => void }) => {
    //
    ////UI
    return (
      <>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" sx={{ margin: "30px 0 15px 0" }}>
            Card Added !
          </Typography>
          <Button
            sx={{ margin: "15px 0 0 10px" }}
            onClick={handleShowCardField}
          >
            Edit card
          </Button>
        </Box>
      </>
    );
  }
);
