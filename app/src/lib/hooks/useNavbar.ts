import { useMediaQuery } from "@mui/material";

export const useNavbar = () => {
  const isSmallScreen = useMediaQuery("(max-width:990px)");

  return { isSmallScreen };
};
