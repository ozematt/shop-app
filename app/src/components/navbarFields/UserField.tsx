import { Box, Divider, Menu, MenuItem, Tooltip } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppDispatch, useAppDispatch } from "../../redux/store";
import { logOutUser } from "../../redux/user/userSlice";
import { removeAllFromCart } from "../../redux/cart/cartSlice";
import { AlertDialog } from "../DialogMUI";

export const UserField = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();
  const dispatch: AppDispatch = useAppDispatch();

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  ///DIALOG
  const [open, setOpen] = useState(false);

  const handleOrdersHistory = () => {
    navigate("/orders");
    setAnchorEl(null);
  };
  const handleLogOut = () => {
    dispatch(logOutUser());
    navigate("/");
    dispatch(removeAllFromCart());
    setOpen(true);
  };
  const handleCloseDialogAlert = () => {
    setOpen(false);
  };

  return (
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
      </Menu>

      <AlertDialog
        open={open}
        handleCloseDialogAlert={handleCloseDialogAlert}
      />
    </>
  );
};
