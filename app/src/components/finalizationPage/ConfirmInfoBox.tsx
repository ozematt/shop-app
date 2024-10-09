import { Button, Paper } from "@mui/material";
import { FinalizationTitle } from "./FinalizationTitle";
import React from "react";

export const ConfirmInfoBox = React.memo(
  ({ handleConfirmButton }: { handleConfirmButton: () => void }) => {
    //
    ////UI
    return (
      <>
        <Paper
          sx={{
            margin: "10px 7px 70px 0",
            padding: "20px",
          }}
        >
          <FinalizationTitle text={" 3. Confirm your information"} />

          <Button
            variant="contained"
            onClick={handleConfirmButton}
            sx={{
              maxWidth: "500px",
              width: "90%",
              padding: "20px",
              margin: "20px",
            }}
          >
            Confirm
          </Button>
        </Paper>{" "}
      </>
    );
  }
);
