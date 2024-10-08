import { Box, useMediaQuery } from "@mui/material";
import { TotalPrice } from "../TotalPrice";
import { TitleBar } from "../TitleBar";
import { SummaryShipping } from "./SummaryShipping";
import { SummaryPaymentMethod } from "./SummaryPaymentMethod";
import { SummaryProductsToBuy } from "./SummaryProductsToBuy";
import React from "react";

export const Summary = React.memo(
  ({ handleSummaryView }: { handleSummaryView: () => void }) => {
    //
    ////DATA
    const isSmallScreen = useMediaQuery("(max-width:1100px)");

    ////UI
    return (
      <>
        <Box sx={{ display: "flex" }}>
          <Box sx={{ width: "100%", maxWidth: "950px" }}>
            <TitleBar title={"PAYMENT SUMMERY:"} />{" "}
            <SummaryShipping handleSummaryView={handleSummaryView} />
            <SummaryPaymentMethod handleSummaryView={handleSummaryView} />
            <SummaryProductsToBuy />
            {isSmallScreen ? (
              <TotalPrice
                title={"Total amount to be paid:"}
                buttonText={"Pay"}
                buttonType={"submit"}
              />
            ) : null}
          </Box>
          {isSmallScreen ? null : (
            <TotalPrice
              title={"Total amount to be paid:"}
              buttonText={"Pay"}
              buttonType={"submit"}
            />
          )}
        </Box>
      </>
    );
  }
);
