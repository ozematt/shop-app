import { useMediaQuery } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useMobileSearchView = () => {
  //
  ////DATA
  const isLargeScreen = useMediaQuery("(min-width:990px)");
  const navigate = useNavigate();

  ////LOGIC
  useEffect(() => {
    if (isLargeScreen) {
      navigate("/");
    }
  }, [isLargeScreen, navigate]);
  return { isLargeScreen };
};
