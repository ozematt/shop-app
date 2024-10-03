import {
  Button,
  Dialog,
  DialogTitle,
  Divider,
  Menu,
  MenuItem,
  Tooltip,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Badge, { BadgeProps } from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { AppDispatch, RootState, useAppDispatch } from "../../redux/store";

import { removeAllFromCart } from "../../redux/cart/cartSlice";
import { logOutUser } from "../../redux/user/userSlice";

import DialogActions from "@mui/material/DialogActions";
import { AlertDialog } from "../DialogMUI";

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

  ///DIALOG
  const [open, setOpen] = useState(false);

  const handleCloseDialogAlert = () => {
    setOpen(false);
  };
  ///___________

  ////DATA
  const dispatch: AppDispatch = useAppDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state: RootState) => state.user.isLoggedIn);

  //cart quantity state
  const quantity = useSelector((state: RootState) => state.cart.quantity);

  ////LOGIC
  //handle logout
  const handleLogOut = () => {
    dispatch(logOutUser());
    navigate("/");
    dispatch(removeAllFromCart());
    setOpen(true);
  };

  const handleOrdersHistory = () => {
    navigate("/orders");
    setAnchorEl(null);
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
              <MenuItem onClick={handleOrdersHistory}>Orders</MenuItem>
              <Divider />
              <MenuItem onClick={handleLogOut}>LogOut</MenuItem>
            </Menu>{" "}
          </>
        ) : (
          <Button
            onClick={() => navigate("/login")}
            sx={{ marginRight: "10px", color: "white" }}
          >
            Login
          </Button>
        )}
      </div>
      <AlertDialog
        open={open}
        handleCloseDialogAlert={handleCloseDialogAlert}
      />
    </>
  );
};
