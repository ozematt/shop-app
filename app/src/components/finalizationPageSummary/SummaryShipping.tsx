import { Box, Button, Paper, Typography } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { Address } from "../../lib/types/addressTypes";
import React from "react";

export const SummaryShipping = React.memo(
  ({ handleSummaryView }: { handleSummaryView: () => void }) => {
    //
    ////DATA
    const { getValues } = useFormContext<Address>();

    ////UI
    return (
      <>
        <Paper
          sx={{
            marginTop: "10px",
            padding: "20px 0 30px 20px",
            width: "100%",
            maxWidth: "950px",
          }}
        >
          {/* TITLE */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography variant="h5" sx={{ padding: "20px 0 0 20px" }}>
              1. Shipping details:
            </Typography>{" "}
            <Button
              onClick={handleSummaryView}
              variant="outlined"
              sx={{ margin: "20px 0 0 20px" }}
            >
              Edit
            </Button>
          </Box>

          <Box sx={{ padding: "10px 0 0 49px" }}>
            {/* ADDRESS SUMMARY */}
            <Box sx={{ marginTop: "15px" }}>
              <p> Name and surname:</p>
              <Typography variant="h5">
                {" "}
                {getValues().name} {getValues().surname}
              </Typography>
            </Box>
            <Box sx={{ marginTop: "15px" }}>
              <p>Delivery address:</p>{" "}
              <Typography variant="h5">
                {getValues().street} {getValues().houseNumber}
                {getValues().apartmentNumber &&
                  "/" + getValues().apartmentNumber}
              </Typography>
              <Typography variant="h5">
                {" "}
                {getValues().zipCode} {getValues().city}
              </Typography>
            </Box>
            <Box sx={{ marginTop: "15px", display: "flex", gap: "30px" }}>
              <Box>
                <p>Email:</p>{" "}
                <Typography variant="h5">{getValues().email}</Typography>
              </Box>
              <Box>
                <p>Phone number:</p>
                <Typography variant="h5"> {getValues().phone}</Typography>
              </Box>
            </Box>
          </Box>
        </Paper>
      </>
    );
  }
);
