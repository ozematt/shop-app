import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import SearchIcon from "@mui/icons-material/Search";
import { CartField } from "./navbarFields/userPanelFields/CartField";
import { UserField } from "./navbarFields/userPanelFields/UserField";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { LoginButton } from "./navbarFields/userPanelFields/LoginButton";
import { useState } from "react";
import { useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function SimpleBottomNavigation() {
  const [value, setValue] = useState(0);
  const [clickSearch, setClickSearch] = useState(false);
  const isSmallScreen = useMediaQuery("(max-width:990px)");
  const navigate = useNavigate();

  const auth = useSelector((state: RootState) => state.user.isLoggedIn);

  const handleSearchClick = () => {
    setClickSearch(!clickSearch);
    if (clickSearch) {
      navigate("/mSearch");
    } else {
      navigate("/");
    }
  };

  return (
    <>
      {isSmallScreen ? (
        <Box
          sx={{
            position: "fixed",
            bottom: "1px",
            width: "100%",
          }}
        >
          <BottomNavigation
            showLabels
            sx={{}}
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            <BottomNavigationAction
              onClick={handleSearchClick}
              icon={<SearchIcon fontSize="large" />}
            />
            <BottomNavigationAction icon={<CartField />} />
            <BottomNavigationAction
              icon={auth ? <UserField /> : <LoginButton />}
            />
          </BottomNavigation>
        </Box>
      ) : null}
    </>
  );
}
