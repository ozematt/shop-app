import { useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../redux/store";

export const useBottomBar = () => {
  //
  ////DATA
  const [isClicked, setIsClicked] = useState(false);
  const theme = useTheme();
  const showBottomNav = useMediaQuery("(max-width:990px)");
  const navigate = useNavigate();

  const auth = useSelector((state: RootState) => state.user.username);

  ////LOGIC
  const handleClick = () => {
    setIsClicked(!isClicked);
    navigate("/mSearch");
  };
  return { theme, showBottomNav, auth, handleClick };
};
