import { useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const useLoginButton = () => {
  //
  ////DATA
  const theme = useTheme();
  const navigate = useNavigate();

  return { theme, navigate };
};
