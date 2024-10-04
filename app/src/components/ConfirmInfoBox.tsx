import { Button, Paper } from "@mui/material";
import { FinalizationTitle } from "./FinalizationTitle";
import React from "react";

export const ConfirmInfoBox = React.memo(
  ({ handleConfirmButton }: { handleConfirmButton: () => void }) => {
    return (
      <>
        <Paper
          sx={{
            margin: "10px 7px 0 0",
            padding: "20px",
          }}
        >
          <FinalizationTitle text={" 3. Confirm your information"} />

          <Button
            variant="contained"
            onClick={handleConfirmButton}
            sx={{
              maxWidth: "500px",
              width: "100%",
              padding: "20px",
              margin: "20px 0 0 20px",
            }}
          >
            Confirm
          </Button>
        </Paper>{" "}
      </>
    );
  }
);
