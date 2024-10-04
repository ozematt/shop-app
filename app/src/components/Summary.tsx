import { Box } from "@mui/material";
import { TotalPrice } from "./TotalPrice";
import { TitleBar } from "./TitleBar";
import { SummaryShipping } from "./SummaryShipping";
import { SummaryPaymentMethod } from "./SummaryPaymentMethod";
import { SummaryProductsToBuy } from "./SummaryProductsToBuy";

export const Summary = ({
  handleSummaryView,
}: {
  handleSummaryView: () => void;
}) => {
  ////UI
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Box sx={{ width: "100%", maxWidth: "950px" }}>
          <TitleBar title={"PAYMENT SUMMERY:"} />{" "}
          <SummaryShipping handleSummaryView={handleSummaryView} />
          <SummaryPaymentMethod handleSummaryView={handleSummaryView} />
          <SummaryProductsToBuy />
        </Box>
        <TotalPrice
          title={"Total amount to be paid:"}
          buttonText={"Pay"}
          buttonType={"submit"}
        />
      </Box>
    </>
  );
};
