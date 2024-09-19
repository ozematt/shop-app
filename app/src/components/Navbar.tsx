import { AppBar, Box, Divider, Toolbar } from "@mui/material";
import { Logo } from "./navbarFields/Logo";
import { SearchField } from "./navbarFields/SearchField";
import { Category } from "./navbarFields/Category";
import { User } from "./navbarFields/User";
import { ThemeSwitch } from "./navbarFields/ThemeSwitch";

export const Navbar = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Logo />
            <SearchField />
            <Category />
            <Divider
              orientation="vertical"
              flexItem
              sx={{ marginRight: "10px", marginLeft: "10px" }}
            />
            <User />
            <Divider
              orientation="vertical"
              flexItem
              sx={{ marginRight: "15px" }}
            />
            <ThemeSwitch />
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};
