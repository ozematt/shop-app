import { Box, Button, Paper, Typography } from "@mui/material";
import React from "react";
import { useSummaryShipping } from "../../lib/hooks/finalizationPageSummary/useSummaryShipping";

type SummaryPaymentMethodProps = { handleSummaryView: () => void };

export const SummaryPaymentMethod = React.memo(
  ({ handleSummaryView }: SummaryPaymentMethodProps) => {
    //
    ////DATA
    const { getValues } = useSummaryShipping();

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
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography variant="h5" sx={{ padding: "20px 0 0 20px" }}>
              2. Payment method:
            </Typography>
            <Button
              onClick={handleSummaryView}
              variant="outlined"
              sx={{ margin: "20px 0 0 20px" }}
            >
              Edit
            </Button>
          </Box>
          <Typography
            variant="h6"
            sx={{ padding: "20px 0 0 20px", marginLeft: "29px" }}
          >
            {getValues().payOnDelivery && "Payable on delivery."}{" "}
            {getValues().paymentCard && "Payable by card."}
          </Typography>
        </Paper>
      </>
    );
  }
);
