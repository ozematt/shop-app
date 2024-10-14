import { useMediaQuery } from "@mui/material";

export const useOrderSummary = () => {
  //
  ////DATA
  const isSmallScreen = useMediaQuery("(max-width:790px)");
  return { isSmallScreen };
};
