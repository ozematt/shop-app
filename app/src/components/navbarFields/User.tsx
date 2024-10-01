import { Button, Divider, Menu, MenuItem, Tooltip } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Badge, { BadgeProps } from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { AppDispatch, RootState, useAppDispatch } from "../../redux/store";
import { logout } from "../../redux/user/authSlice";
import { removeAllFromCart } from "../../redux/cart/cartSlice";

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

  ///___________

  ////DATA
  const dispatch: AppDispatch = useAppDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state: RootState) => state.auth.isLoggedIn);

  //cart quantity state
  const quantity = useSelector((state: RootState) => state.cart.quantity);

  ////LOGIC
  //handle logout
  const handleLogOut = () => {
    dispatch(logout());
    navigate("/");
    dispatch(removeAllFromCart());
  };
  ////UI
  return (
    <>
      <div>
        <Link to="/cart" style={{ color: "inherit" }}>
          <IconButton
            size="large"
            aria-label="cart of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
          >
            <Tooltip title="View Cart">
              <StyledBadge badgeContent={quantity} color="secondary">
                <ShoppingCartIcon fontSize="large" />
              </StyledBadge>
            </Tooltip>
          </IconButton>
        </Link>
        {auth ? (
          <>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <Tooltip title="Options">
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
              <MenuItem onClick={handleClose}>Orders</MenuItem>
              <Divider />
              <MenuItem onClick={handleLogOut}>LogOut</MenuItem>
            </Menu>{" "}
          </>
        ) : (
          <Button
            onClick={() => navigate("/login")}
            sx={{ marginRight: "10px" }}
          >
            Login
          </Button>
        )}
      </div>
    </>
  );
};
