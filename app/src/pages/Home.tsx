//react
import React from "react";

//mui
import Box from "@mui/material/Box";
import { AppBar, Divider, Toolbar } from "@mui/material";

//components
import { Logo } from "../components/navbarFields/Logo";
import { SearchField } from "../components/navbarFields/SearchField";
import { Category } from "../components/navbarFields/Category";
import { User } from "../components/navbarFields/User";
import { ThemeSwitch } from "../components/navbarFields/ThemeSwitch";

export const Home = () => {
  return (
    <>
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          bgcolor: "background.default",
        }}
      >
        {/* Box with nav elements */}
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
      </Box>
    </>
  );
};
