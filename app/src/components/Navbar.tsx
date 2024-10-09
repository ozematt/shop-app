import { AppBar, Box, Divider, Toolbar } from "@mui/material";
import { Logo } from "./navbarFields/Logo";
import { SearchField } from "./navbarFields/SearchField";
import Container from "@mui/material/Container";
import { UserPanelFields } from "./navbarFields/UserPanelFields";
import { ThemeSwitchField } from "./navbarFields/ThemeSwitchField";
import { CategoryField } from "./navbarFields/CategoryField";
import { SortField } from "./navbarFields/SortField";
import { useNavbar } from "../lib/hooks/useNavbar";

export const Navbar = () => {
  //
  ////DATA
  const { isSmallScreen } = useNavbar();

  ////UI
  return (
    <>
      {!isSmallScreen ? (
        <Box sx={{ width: "100vw" }}>
          <AppBar position="fixed">
            <Container maxWidth="xl">
              <Toolbar>
                <Logo />
                <SearchField />
                <CategoryField />
                <SortField />
                <Divider orientation="vertical" flexItem />
                <UserPanelFields />
                <Divider orientation="vertical" flexItem />
                <ThemeSwitchField />
              </Toolbar>
            </Container>
          </AppBar>
        </Box>
      ) : (
        <Box sx={{ width: "100vw" }}>
          <AppBar position="fixed">
            <Container maxWidth="xl">
              <Toolbar>
                <Logo />
                <ThemeSwitchField />
              </Toolbar>
            </Container>
          </AppBar>
        </Box>
      )}
    </>
  );
};
