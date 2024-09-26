import { IconButton, Menu, MenuItem, Tooltip, Typography } from "@mui/material";
import React, { useState } from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";

export const User = () => {
  const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
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
            <Typography variant="h6" sx={{ margin: "0 10px 0 10px" }}>
              <Link to="/cart" style={{ color: "inherit" }}>
                Cart
              </Link>
            </Typography>

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
            <Typography variant="h6" sx={{ margin: "0 10px 0 0" }}>
              User
            </Typography>
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
    </>
  );
};
