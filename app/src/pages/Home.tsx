//react
import React from "react";
import { useState } from "react";

//mui
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Box from "@mui/material/Box";
import { useColorScheme } from "@mui/material/styles";
import {
  AppBar,
  Button,
  Divider,
  FormControl,
  IconButton,
  InputLabel,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

//components
import { CustomizedSwitches } from "../components/SwitchButton";
import SearchIcon from "@mui/icons-material/Search";

///////
export const Home = () => {
  //theme switch
  const { mode, setMode } = useColorScheme();
  //user menu handler
  const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  //category handler
  const [age, setAge] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };
  //mode checker
  if (!mode) {
    return <h1> error</h1>;
  }

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));
  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    width: "100%",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

  ////UI
  return (
    <>
      {/* In This Box them is changing */}
      <Box
        sx={{
          display: "flex",
          width: "100vw",
          height: "100vh",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "background.default",
          color: "text.primary",
          borderRadius: 1,
          p: 3,
          minHeight: "56px",
        }}
      >
        {/* Box with nav elements */}
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              {/* Shop Name */}
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Sklep
              </Typography>
              {/* SEARCH */}
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
              {/* CATEGORY */}
              <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel id="demo-select-small-label">Kategorie</InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                >
                  {/* category from Fake shop, use map */}
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                </Select>
              </FormControl>
              {/* BUTTON SEARCH */}
              {/* <Button variant="contained" sx={{ marginRight: "10px" }}>
                Szukaj
              </Button> */}
              <Divider
                orientation="vertical"
                flexItem
                sx={{ marginRight: "10px", marginLeft: "10px" }}
              />
              {/* USER */}
              {auth && (
                <div>
                  <IconButton
                    size="large"
                    aria-label="cart of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    // onClick={handleMenu}
                    color="inherit"
                  >
                    <Tooltip title="View Cart">
                      <ShoppingCartOutlinedIcon fontSize="large" />
                    </Tooltip>
                  </IconButton>

                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit"
                  >
                    <Tooltip title="User history">
                      <AccountCircleIcon fontSize="large" />
                    </Tooltip>
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                  </Menu>
                </div>
              )}
              <Divider
                orientation="vertical"
                flexItem
                sx={{ marginRight: "15px" }}
              />
              {/* THEME SWITCHER */}
              <CustomizedSwitches
                checked={mode === "dark"}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setMode(
                    (event.target as HTMLInputElement).checked
                      ? "dark"
                      : "light"
                  )
                }
              />
            </Toolbar>
          </AppBar>
        </Box>
      </Box>
    </>
  );
};
