import { useMediaQuery } from "@mui/material";

export const useNavbar = () => {
  //
  ////DATA
  const isSmallScreen = useMediaQuery("(max-width:990px)");

  return { isSmallScreen };
};
