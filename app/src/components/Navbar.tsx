import { AppBar, Box, Divider, Toolbar } from "@mui/material";
import { Logo } from "./navbarFields/Logo";
import { SearchField } from "./navbarFields/SearchField";
import { UserPanel } from "./navbarFields/UserPanel";
import { ThemeSwitch } from "./navbarFields/ThemeSwitch";
import Container from "@mui/material/Container";

import { FilterNavbarFields } from "./navbarFields/FilterNavbarFields";

export const Navbar = () => {
  return (
    <>
      <Box sx={{ width: "100vw" }}>
        <AppBar position="fixed">
          <Container maxWidth="xl">
            <Toolbar>
              <Logo />
              <SearchField />
              <FilterNavbarFields />

              <Divider orientation="vertical" flexItem />
              <UserPanel />
              <Divider orientation="vertical" flexItem />
              <ThemeSwitch />
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
    </>
  );
};
