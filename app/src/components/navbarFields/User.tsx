import { Menu, MenuItem, Tooltip, Typography } from "@mui/material";
import React, { useState } from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";
import Badge, { BadgeProps } from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { useSelector } from "react-redux";
import { selectAllCart } from "../../features/cart/cartSlice";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export const User = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }));

  const cart = useSelector(selectAllCart);

  return (
    <>
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
            <StyledBadge badgeContent={cart.length} color="secondary">
              <ShoppingCartIcon fontSize="large" />
            </StyledBadge>
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
    </>
  );
};
