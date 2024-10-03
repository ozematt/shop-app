import { Button, Divider, Menu, MenuItem, Tooltip } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import IconButton from "@mui/material/IconButton";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { AppDispatch, RootState, useAppDispatch } from "../../redux/store";
import { removeAllFromCart } from "../../redux/cart/cartSlice";
import { logOutUser } from "../../redux/user/userSlice";
import { AlertDialog } from "../DialogMUI";
import { CartField } from "./CartField";
import { UserField } from "./UserField";
import { LoginButton } from "./LoginButton";

export const UserPanel = () => {
  // const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  // const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
  //   setAnchorEl(event.currentTarget);
  // };
  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  ///DIALOG
  // const [open, setOpen] = useState(false);

  // const handleCloseDialogAlert = () => {
  //   setOpen(false);
  // };
  ///___________

  ////DATA
  // const dispatch: AppDispatch = useAppDispatch();
  // const navigate = useNavigate();
  const auth = useSelector((state: RootState) => state.user.isLoggedIn);

  ////LOGIC
  //handle logout
  // const handleLogOut = () => {
  //   dispatch(logOutUser());
  //   navigate("/");
  //   dispatch(removeAllFromCart());
  //   setOpen(true);
  // };

  // const handleOrdersHistory = () => {
  //   navigate("/orders");
  //   setAnchorEl(null);
  // };
  ////UI
  return (
    <>
      <div>
        <CartField />
        {auth ? <UserField /> : <LoginButton />}
      </div>
    </>
  );
};
