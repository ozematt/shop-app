import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import SearchIcon from "@mui/icons-material/Search";
import { CartField } from "./navbarFields/userPanelFields/CartField";
import { UserField } from "./navbarFields/userPanelFields/UserField";
import { LoginButton } from "./navbarFields/userPanelFields/LoginButton";
import { Tooltip } from "@mui/material";
import { useBottomNavbar } from "../lib/hooks/useBottomNavbar";

export const BottomNavbar = () => {
  //
  ////DATA
  const { theme, isSmallScreen, auth, handleClick } = useBottomNavbar();

  ////UI
  return (
    <>
      {isSmallScreen ? (
        <Box
          sx={{
            position: "fixed",
            bottom: "1px",
            width: "100%",
            zIndex: "1",
          }}
        >
          <BottomNavigation
            sx={{
              background:
                theme.palette.mode === "dark"
                  ? "black"
                  : theme.palette.primary.main,
            }}
          >
            <BottomNavigationAction
              onClick={handleClick}
              icon={
                <Tooltip title="Search">
                  <SearchIcon fontSize="large" />
                </Tooltip>
              }
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
};
